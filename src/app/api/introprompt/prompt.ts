export function getPromptString(intro: string, prompt: string) {
  return `Act like a teacher reviewing this introduction paragraph. 
            Does my introduction give good background information related to the prompt.
            Respond in a friendly manner and a rating out of 10.
            Put the rating in brackets first.
            intro: ${intro}
            prompt: ${prompt}`
}