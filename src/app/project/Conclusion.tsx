import ExitIcon from './ExitIcon'
import { useState } from 'react'
import ParsedResponse from './ParsedResponse'
import styles from './Introduction.module.css'
import classNames from 'classnames'
import BotIcon from './BotIcon'

function Conclusion() {
  const [isLoading, setIsLoading] = useState(false)
  const [conclusion, setConclusion] = useState('')
  const [showButton, setShowButton] = useState(true)
  const [rating, setRating] = useState(-1)
  const [feedbackRes, setFeedbackRes] = useState('')

  const handleReview = () => {
    setIsLoading(true)
    setFeedbackRes('')
    fetch('http://localhost:3000/api/topicprompt', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ conclusion, thesis: '', thesis_prompt: '' })
    })
      .then((res) => res.json())
      .then(({ feedback, rating }) => {
        setFeedbackRes(feedback)
        setRating(rating)
        setIsLoading(false)
        setShowButton(false)
      })
      .catch((err) => {
        alert('An Error Occurred')
        console.error(err)
      })
  }

  return (
    <>
      <div className={styles.content}>
        <ExitIcon height="3rem" />
        <h1>Conclusion</h1>
        <p>
          The conclusion paragraph should summarize your essay. It&apos;s your
          final chance to remind the reader of your argument and the evidence
          you&apos;ve presented. Restate your thesis statement in a new way, and
          briefly recap the main points you&apos;ve made in your body
          paragraphs. This helps to reinforce your argument and leaves a lasting
          impression on the reader.
        </p>
        <p>
          It&apos;s important to remember that the conclusion is not the place
          to introduce new points of information. All your arguments should have
          been fully explored in the body of your essay. The conclusion should
          only summarize and synthesize the information you&apos;ve already
          provided. Introducing new information can confuse the reader and
          weaken your argument.
        </p>
        <p>
          Try to connect your argument to a broader context in your conclusion.
          This could be a real-world application, a connection to another text
          or theory, or a suggestion for further research. This helps to show
          the relevance and importance of your argument, and leaves the reader
          with something to think about.
        </p>
      </div>
      <div className={styles.fields}>
        <textarea
          className={styles.introductionInput}
          rows={2}
          placeholder="Conclusion Paragraph:"
          value={conclusion}
          onChange={(e) => {
            setConclusion(e.target.value)
            setShowButton(true)
          }}
        />
        {showButton ? (
          <button
            className={
              isLoading
                ? classNames(styles.reviewButton, styles.activeReviewButton)
                : styles.reviewButton
            }
            onClick={handleReview}
          >
            {isLoading ? '. . .' : 'REVIEW'}
          </button>
        ) : null}
        {feedbackRes ? (
          <div
            className={
              rating >= 7
                ? classNames(styles.feedback, styles.feedbackPos)
                : classNames(styles.feedback, styles.feedbackNeg)
            }
          >
            <div className={styles.botIcon}>
              <BotIcon height="2rem" fill="#0c2a4a" />
            </div>
            <ParsedResponse feedback={feedbackRes} />
          </div>
        ) : null}
      </div>
    </>
  )
}

export default Conclusion
