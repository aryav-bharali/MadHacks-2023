export function getPromptString(
  bp1: string,
  bp2: string,
  bp3: string,
  thesis: string,
  prompt: string
) {
  return `Act like a teacher reviewing the following body paragraph 1,
            body paragraph 2, body paragraph 3. Do my body paragraphs
            strongly related to the thesis and prompt?  Also evaluate
            if it has good quotes, evidence, and analysis. Respond in
            a friendly manner and a rating out of 10.
            Put the rating in brackets first.
            body paragraph 1: ${bp1}
            body paragraph 2: ${bp2}
            body paragraph 3: ${bp3}
            thesis: ${thesis}
            prompt: ${prompt}`
}
