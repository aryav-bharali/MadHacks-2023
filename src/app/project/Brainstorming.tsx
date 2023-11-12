import WhiteboardIcon from './WhiteboardIcon'
import { useState } from 'react'
import ParsedResponse from './ParsedResponse'
import styles from './Brainstorming.module.css'
import classNames from 'classnames'
import BotIcon from './BotIcon'

interface PropTypes {
  updateProjectPhoto: (imgURL: string | null) => void
}

function Brainstorming({ updateProjectPhoto }: PropTypes) {
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
      body: JSON.stringify({ topic, prompt })
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

    fetch('http://localhost:3000/api/image', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ prompt: `${topic} ${prompt}` })
    })
      .then((res) => res.json())
      .then(({ img_url: imgURL }) => {
        localStorage.setItem('imgURL', imgURL)
        updateProjectPhoto(imgURL)
      })
  }

  return (
    <>
      <div className={styles.content}>
        <WhiteboardIcon height="3rem" />
        <h1>Brainstorming</h1>
        <p>
          It&apos;s essential to understand the text you&apos;re analyzing. Read
          it thoroughly, and don&apos;t hesitate to jot down your initial
          thoughts and reactions. Look for patterns, symbols, or recurring
          themes. These could be significant in forming your thesis statement.
          Also, consider the historical and cultural context of the work.
          Understanding the author&apos;s perspective can provide valuable
          insights into the text&apos;s meaning.
        </p>
        <p>
          Familiarize yourself with different literary theories. These could
          include feminist theory, Marxist theory, psychoanalytic theory, and
          more. Each theory offers a unique lens through which to view and
          interpret the text. Think about which theory resonates most with your
          understanding of the text. Remember, there&apos;s no right or wrong
          choice here - it&apos;s all about your interpretation!
        </p>
        <p>
          Start forming your argument. Your thesis statement should be clear,
          concise, and debatable. It should present your interpretation of the
          text using the chosen literary theory. Once you have your thesis,
          outline your main points and evidence. This will serve as the roadmap
          for your essay. Remember, each point should support your thesis and
          provide a new insight into the text.
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
