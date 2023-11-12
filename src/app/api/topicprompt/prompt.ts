export function getPromptString(topic: string, prompt: string) {
  return `Act like an English tutor speaking to a student. What would you suggest to me
  how to analyze the following topic based on the following prompt. For example, are there
  any particular literary lens I should consider? Limit your response to around 175 words.
  topic: ${topic}
  prompt: ${prompt}`
}
