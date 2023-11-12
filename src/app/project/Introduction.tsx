import CompassIcon from './CompassIcon'
import { useState } from 'react'
import ParsedResponse from './ParsedResponse'
import styles from './Introduction.module.css'
import classNames from 'classnames'
import BotIcon from './BotIcon'

function Introduction() {
  const [isLoading, setIsLoading] = useState(false)
  const [introduction, setIntroduction] = useState('')
  const [showButton, setShowButton] = useState(true)
  const [feedbackRes, setFeedbackRes] = useState('')

  const handleReview = () => {
    setIsLoading(true)
    setFeedbackRes('')
    fetch('http://localhost:3000/api/topicprompt', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ thesis: introduction, thesis_prompt: '' })
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
        <CompassIcon height="3rem" />
        <h1>Introduction</h1>
        <p>
          Firstly, the introduction paragraph should provide context for your
          essay. It&apos;s the first impression you make on your reader, so
          it&apos;s crucial to set the right tone and direction. Start with a
          hook - an interesting fact, a quote, or a question to grab the
          reader&apos;s attention. Then, provide some background information
          about the text you&apos;re analyzing. This could include the
          author&apos;s name, the title of the work, and a brief summary of the
          text.
        </p>
        <p>
          Secondly, while it&apos;s important to provide context, avoid
          including too many insignificant details in your introduction. The
          introduction should be concise and focused. It&apos;s not the place to
          discuss every character or event in the text. Instead, focus on the
          aspects that are directly relevant to your thesis statement. Remember,
          every sentence in your introduction should serve a purpose and
          contribute to setting up your argument.
        </p>
        <p>
          Finally, the introduction paragraph should end with your thesis
          statement. This is your main argument or claim that you&apos;ll be
          supporting throughout your essay. The thesis statement acts as a
          roadmap for your essay, letting the reader know what to expect in the
          following paragraphs.
        </p>
      </div>
      <div className={styles.fields}>
        <textarea
          className={styles.introductionInput}
          rows={2}
          placeholder="Introduction Paragraph:"
          value={introduction}
          onChange={(e) => {
            setIntroduction(e.target.value)
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

export default Introduction
