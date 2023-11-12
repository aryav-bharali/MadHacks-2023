import WhiteboardIcon from './WhiteboardIcon'
import { useState } from 'react'
import ParsedResponse from './ParsedResponse'
import styles from './Brainstorming.module.css'
import classNames from 'classnames'
import BotIcon from './BotIcon'

function Brainstorming() {
  const [isLoading, setIsLoading] = useState(false)
  const [topic, setTopic] = useState('')
  const [prompt, setPrompt] = useState('')
  const [showButton, setShowButton] = useState(true)
  const [feedbackRes, setFeedbackRes] = useState('')

  const handleReview = () => {
    setIsLoading(true)
    setFeedbackRes('')
    fetch('http://localhost:3000/api/topicprompt', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ topic, prompt }),
    })
      .then((res) => res.json())
      .then(({ feedback }) => {
        setFeedbackRes(feedback)
        setIsLoading(false)
        setShowButton(false)
      })
      .catch((err) => console.error(err))
  }

  return (
    <>
      <div className={styles.content}>
        <WhiteboardIcon height="3rem" />
        <h1>Brainstorming</h1>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magni
          cupiditate totam quo magnam corporis ullam facere sapiente, sint
          molestias non repudiandae vero voluptates maxime nam, est, nobis
          inventore ducimus! Veritatis!
        </p>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magni
          cupiditate totam quo magnam corporis ullam facere sapiente, sint
          molestias non repudiandae vero voluptates maxime nam, est, nobis
          inventore ducimus! Veritatis!
        </p>
      </div>
      <div className={styles.fields}>
        <textarea
          className={styles.topicTextArea}
          rows={2}
          placeholder="Topic or Piece of Literature:"
          value={topic}
          onChange={(e) => {
            setTopic(e.target.value)
            setShowButton(true)
          }}
        />
        <textarea
          className={styles.promptTextArea}
          placeholder="Prompt:"
          value={prompt}
          onChange={(e) => {
            setPrompt(e.target.value)
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

export default Brainstorming
