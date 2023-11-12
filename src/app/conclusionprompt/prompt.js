function getPromptString(conclusion, thesis, prompt) {

    return `Act like a teacher reviewing this conclusion paragraph. 
            Does my conclusion give a good summary of the thesis and main points relative to the prompt.
            Also evaluate if it seems like it would leave a lasting iimpression on the reader.
            Respond in a friendly manner and a rating out of 10 in double brackets.
            intro: ${conclusion}
            thesis: ${thesis}
            prompt: ${prompt}`
    
    }
    module.exports = { getPromptString }