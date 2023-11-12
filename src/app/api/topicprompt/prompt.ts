export function getPromptString(topic: string, prompt: string) {
  return `What would you suggest to me how to analyze the following topic
  based on the following prompt. For example, are there any particular
  literary lens I should consider? Write in a friendly manner and limit your
  response to AT MOST 150 words.
  topic: ${topic}
  prompt: ${prompt}
  
  I would suggest you `
}
