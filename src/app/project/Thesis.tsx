import ScalesIcon from './ScalesIcon'
import { useState } from 'react'
import ParsedResponse from './ParsedResponse'
import styles from './Thesis.module.css'
import classNames from 'classnames'
import BotIcon from './BotIcon'

function Thesis() {
  const [isLoading, setIsLoading] = useState(false)
  const [thesis, setThesis] = useState('')
  const [rating, setRating] = useState(-1)
  const [showButton, setShowButton] = useState(true)
  const [feedbackRes, setFeedbackRes] = useState('')

  const handleReview = () => {
    setIsLoading(true)
    setFeedbackRes('')
    fetch('http://localhost:3000/api/thesisprompt', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ thesis, thesis_prompt: '' })
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
        <ScalesIcon height="3rem" />
        <h1>Thesis</h1>
        <p>
          A thesis statement should directly answer the question or prompt
          given. It&apos;s not a general statement about the topic, but a
          specific response that sets the direction for your essay. It&apos;s
          your interpretation of the subject, and it should be clear and
          concise. The reader should be able to understand the focus of your
          essay just by reading the thesis statement.
        </p>
        <p>
          A good thesis statement is argumentative. It should present a claim or
          an assertion that can be debated. It&apos;s not a simple statement of
          fact, but a position that requires defending. This argumentative
          nature of the thesis statement makes your essay more engaging and
          thought-provoking. It invites the reader to consider your perspective
          and challenges them to think critically about the subject.
        </p>
        <p>
          Your thesis statement should make a strong point. It should be bold
          and assertive, confidently presenting your interpretation. Avoid vague
          or weak phrases that could undermine your argument. Instead, use
          strong, decisive language that conveys your conviction. Remember, your
          thesis statement is the backbone of your essay, so make it strong!
        </p>
      </div>
      <div className={styles.fields}>
        <textarea
          className={styles.topicTextArea}
          rows={2}
          placeholder="Thesis:"
          value={thesis}
          onChange={(e) => {
            setThesis(e.target.value)
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

export default Thesis
