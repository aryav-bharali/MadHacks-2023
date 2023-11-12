
import { TextServiceClient } from "@google-ai/generativelanguage";
import { GoogleAuth } from "google-auth-library";
import { getPromptString } from './prompt';

const MODEL_NAME = "models/text-bison-001";

const client = new TextServiceClient({
    authClient: new GoogleAuth().fromAPIKey(process.env.GCP_API_KEY!),
});

const stopSequences: string[] = [];

export async function POST(request: Request) {

    const {message} = await request.json(); 
    const promptString = getPromptString(message)
    
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

    let output = JSON.stringify(result[0].candidates![0].output, null, 2);
    output = output.replace("\\n\\", "");

    console.log(output);
    
    return Response.json({ output: output});
}