import TitleIcon from './TitleIcon'
import { useState } from 'react'
import ParsedResponse from './ParsedResponse'
import styles from './Thesis.module.css'
import classNames from 'classnames'
import BotIcon from './BotIcon'

function Thesis() {
  const [isLoading, setIsLoading] = useState(false)
  const [title, setTitle] = useState('')
  const [showButton, setShowButton] = useState(true)
  const [feedbackRes, setFeedbackRes] = useState('')

  const handleReview = () => {
    setIsLoading(true)
    setFeedbackRes('')
    fetch('http://localhost:3000/api/titleessay', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ thesis: title, thesis_prompt: '' })
    })
      .then((res) => res.json())
      .then(({ feedback }) => {
        setFeedbackRes(feedback)
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
        <TitleIcon height="3rem" />
        <h1>Title</h1>
        <p>
          A thesis statement should be a clear, concise, and arguable claim that
          directly responds to the essay prompt or question. It&apos;s not a
          simple statement of fact, but rather an interpretation or argument
          that you will defend throughout your essay. The thesis statement
          should reflect your understanding of the text and the literary theory
          you&apos;re applying. It should be specific enough to give your essay
          focus and provide a roadmap for your argument.
        </p>
        <p>
          When formulating your thesis statement, consider the key themes,
          motifs, or conflicts in the text that align with the chosen literary
          theory. For instance, if you&apos;re using feminist theory, you might
          focus on gender dynamics or power structures in the text. Your thesis
          statement should encapsulate your interpretation of these elements and
          make a claim about their significance in the text.
        </p>
        <p>
          Remember that a strong thesis statement is debatable. It should
          present a point of view that others might challenge or disagree with.
          It&apos;s not a summary of the text, but a claim that requires
          evidence and analysis to support. Your thesis statement should invite
          discussion and guide your reader through your argument.
        </p>
      </div>
      <div className={styles.fields}>
        <textarea
          className={styles.topicTextArea}
          rows={2}
          placeholder="Title:"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value)
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
          <div className={styles.feedback}>
            <div className={styles.botIcon}>
              <BotIcon height="2rem" />
            </div>
            <ParsedResponse feedback={feedbackRes} />
          </div>
        ) : null}
      </div>
    </>
  )
}

export default Thesis
