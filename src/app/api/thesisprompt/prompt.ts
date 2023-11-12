export function getPromptString(thesis: string, prompt: string) {
  return `Act like a teacher reviewing this thesis statement. 
            Is my thesis a strong answer to the prompt and explain why. 
            Thesis can be not strong for example if they are a non-thesis
            thesis, an overly broad thesis, or an uncontestable thesis.
            Respond in a friendly manner and a rating out of 10.
            Put the rating in brackets first. An average unstrong thesis
            should get a 5/10. A very strong thesis should get a 9/10.
            thesis: ${thesis}
            prompt: ${prompt}`
}
