import Replicate from 'replicate';
import { getPromptString } from './prompt.js';

export async function POST(request: Request) {

    const {prompt} = await request.json(); 
    const promptString = getPromptString(prompt)
    
    const replicate = new Replicate({
        auth: process.env.REPLICATE_API_TOKEN,
      });

      const output = await replicate.run(
        "stability-ai/stable-diffusion:db21e45d3f7023abc2a46ee38a23973f6dce16bb082a930b0c49861f96d1e5bf",
        {
          input: {
            prompt: promptString,
            image_dimensions: "512x512",
            num_inference_steps: 12,
            num_outputs: 1,
            guideance_scale: 3.5,
            scheduler: "K_EULER",
          },
        },
      );

      let img_url = output as string[];

      console.log(img_url[0]);
    //let img_url = output["output"][0];
    
    return Response.json({ img_url: img_url});
}