import Markdown from 'react-markdown'

interface PropTypes {
  feedback: string
}

const truncateString = (str: string) =>
  str.substring(0, str.lastIndexOf('. ') + 1)
const countWords = (str: string) =>
  str.split(' ').filter((item) => item !== '').length

function ParsedResponse({ feedback }: PropTypes) {
  if (feedback.indexOf('"') == 0) feedback = feedback.substring(1)
  if (feedback.charAt(feedback.length - 1) === '"')
    feedback = feedback.substring(0, feedback.length - 1)
  feedback = feedback.replaceAll('\\n\\n', '\n\n').replaceAll('\\n*', '')
  if (
    feedback.substring(0, feedback.lastIndexOf('. ') + 1).indexOf('. ') !== -1
  ) {
    feedback = truncateString(feedback)
    while (countWords(feedback) > 175) feedback = truncateString(feedback)
  }

  return <Markdown>{feedback}</Markdown>
}

export default ParsedResponse
