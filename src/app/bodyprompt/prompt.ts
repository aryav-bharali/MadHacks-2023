export function getPromptString(body: string, thesis: string, prompt: string) {
  return `Act like a teacher reviewing this body paragraph. 
            Is my body paragraph strongly related to the thesis and prompt? 
            Also evaluate if it has good quotes, evidence, and analysis.
            Respond in a friendly manner and a rating out of 10.
            Put the rating in brackets first.
            body: ${body}
            thesis: ${thesis}
            prompt: ${prompt}`
}

