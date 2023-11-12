import Markdown from 'react-markdown'

interface PropTypes {
  feedback: string
}

function ParsedResponse({ feedback }: PropTypes) {
  if (feedback.indexOf('"') == 0) feedback = feedback.substring(1)
  if (feedback.charAt(feedback.length - 1) === '"')
    feedback = feedback.substring(0, feedback.length - 1)
  feedback = feedback.replaceAll('\\n\\n', '\n\n').replaceAll('\\n*', '')
  feedback = feedback.substring(0, feedback.lastIndexOf('. ') + 1)

  return <Markdown>{feedback}</Markdown>
}

export default ParsedResponse
