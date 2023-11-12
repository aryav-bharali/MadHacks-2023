export function getPromptString(conclusion: string, thesis: string, prompt: string) {

    return `Act like a teacher reviewing this conclusion paragraph. 
            Does my conclusion give a good summary of the thesis and main points relative to the prompt.
            Also evaluate if it seems like it would leave a lasting iimpression on the reader.
            Respond in a friendly manner and a rating out of 10.
            Put the rating in brackets first.
            intro: ${conclusion}
            thesis: ${thesis}
            prompt: ${prompt}`
    
}