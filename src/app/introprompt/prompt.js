function getPromptString(intro, prompt) {

    return `Act like a teacher reviewing this introduction paragraph. 
            Does my introduction give good background information related to the prompt.
            Respond in a friendly manner and a rating out of 10 in double brackets.
            intro: ${intro}
            prompt: ${prompt}`
    
    }
    module.exports = { getPromptString }