export function getPromptString(question: string, essay: string) {
    return `I have the following question based on the following literary essay. 
            Do your best to answer it accurately. Write an explanation as well.
            question: ${question}
            essay: ${essay}`
  }
  