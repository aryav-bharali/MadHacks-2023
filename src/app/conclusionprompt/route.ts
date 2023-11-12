
import { TextServiceClient } from "@google-ai/generativelanguage";
import { GoogleAuth } from "google-auth-library";
import { getPromptString } from './prompt.js';

const MODEL_NAME = "models/text-bison-001";
const API_KEY = process.env.GCP_API_KEY;

const client = new TextServiceClient({
    authClient: new GoogleAuth().fromAPIKey(API_KEY),
});

// const thesis = `In Richard Blanco's poem "Shaving," published in 1998, the speaker reflects on the act of shaving and its deeper symbolic meanings. Through the use of metaphor, imagery, and tone, Blanco develops the speaker's complex associations with the ritual of shaving as a rite of passage, a form of self-expression, and a way to connect with his Cuban heritage.`
// const thesis_prompt = `In Richard Blanco’s poem “Shaving,” published in 1998, the speaker writes about the act of shaving. Read the poem carefully. Then, in a well-written essay, analyze how Blanco uses literary elements and techniques to develop the speaker’s complex associations with the ritual of shaving.`
// const conclusion = `In conclusion, through the use of literary techniques such as metaphor, imagery, and tone, Richard Blanco develops the speaker's complex associations with the ritual of shaving in his poem "Shaving." The poem suggests that the act of shaving is not just a physical task, but also a mental and emotional one that involves self-reflection, self-care, sensuality, and personal history. Through these associations, the poem suggests that even the most mundane of tasks can hold deep meaning and significance, and that we should take time to reflect on the small moments in our lives.`


// const promptString = getPromptString(conclusion, thesis, thesis_prompt)

const stopSequences: string[] = [];

export async function POST(request: Request) {

    const {conclusion, thesis, thesis_prompt} = await request.json(); 
    const promptString = getPromptString(conclusion, thesis, thesis_prompt)

    const result = await client.generateText({
        model: MODEL_NAME, // required, which model to use to generate the result
        temperature: 0.35, // optional, 0.0 always uses the highest-probability result
        candidateCount: 1, // optional, how many candidate results to generate
        topK: 40, // optional, number of most probable tokens to consider for generation
        topP: 0.95, // optional, for nucleus sampling decoding strategy
        maxOutputTokens: 1024, // optional, maximum number of output tokens to generate
        stopSequences: stopSequences, // optional, sequences at which to stop model generation
        // optional, safety settings
        safetySettings: [{ "category": "HARM_CATEGORY_DEROGATORY", "threshold": 1 }, { "category": "HARM_CATEGORY_TOXICITY", "threshold": 1 }, { "category": "HARM_CATEGORY_VIOLENCE", "threshold": 2 }, { "category": "HARM_CATEGORY_SEXUAL", "threshold": 2 }, { "category": "HARM_CATEGORY_MEDICAL", "threshold": 2 }, { "category": "HARM_CATEGORY_DANGEROUS", "threshold": 2 }],
        prompt: {
            text: promptString,
        },
    })

    const output = JSON.stringify(result[0].candidates![0].output, null, 2);

    //console.log(output);

    var rating = output.substring(1,7);
    var feedback = "";
    var rating_int = 0;
    if(rating[0] !== "[" || rating[5] !== "]"){
        rating_int = -1;
        feedback = output.replace("\\n\\", "");
        console.log(feedback);
    }else{
        rating_int = parseInt(rating[1]);
        var feedback = (output.substring(11)).replace("\\n\\", "");
        feedback = feedback.replace("\\n\\", "");
        console.log(feedback);
    };
    
    //console.log(output);

    return Response.json({ rating: rating_int,  feedback: feedback});
}

// client.generateText({
//     model: MODEL_NAME, // required, which model to use to generate the result
//     temperature: 0.35, // optional, 0.0 always uses the highest-probability result
//     candidateCount: 1, // optional, how many candidate results to generate
//     top_k: 40, // optional, number of most probable tokens to consider for generation
//     top_p: 0.95, // optional, for nucleus sampling decoding strategy
//     max_output_tokens: 1024, // optional, maximum number of output tokens to generate
//     stop_sequences: stopSequences, // optional, sequences at which to stop model generation
//     // optional, safety settings
//     safety_settings: [{"category":"HARM_CATEGORY_DEROGATORY","threshold":1},{"category":"HARM_CATEGORY_TOXICITY","threshold":1},{"category":"HARM_CATEGORY_VIOLENCE","threshold":2},{"category":"HARM_CATEGORY_SEXUAL","threshold":2},{"category":"HARM_CATEGORY_MEDICAL","threshold":2},{"category":"HARM_CATEGORY_DANGEROUS","threshold":2}],
//     prompt: {
//         text: promptString,
//     },
//     }).then(result => {
//     // console.log(JSON.stringify(result, null, 2));
//     // console.log('result:',JSON.stringify(result, null, 2))
//     const output = JSON.stringify(result[0].candidates[0].output, null, 2)
//     console.log(output);
// });

