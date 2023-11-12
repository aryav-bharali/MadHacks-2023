export function getPromptString(title: string, essay: string) {
  return `Act like a teacher reviewing this title for an essay. 
            Is my title a good representation of the essay. 
            Respond in a friendly manner and a rating out of 10.
            Put the rating in brackets first.
            title: ${title}
            essay: ${essay}`
}
