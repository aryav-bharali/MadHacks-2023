export function getPromptString(thesis: string, prompt: string) {
  return `Act like a teacher reviewing this thesis statement. 
            Is my thesis a strong answer to the prompt and explain why. 
            Respond in a friendly manner and a rating out of 10.
            Put the rating in brackets first.
            thesis: ${thesis}
            prompt: ${prompt}`
}
