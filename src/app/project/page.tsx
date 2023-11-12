'use client'

import styles from './page.module.css'
import classnames from 'classnames'
import CheckIcon from './CheckIcon'
import WhiteboardIcon from './WhiteboardIcon'
import { useState } from 'react'
import ParsedResponse from './ParsedResponse'

export default function Page() {
  const [isLoading, setIsLoading] = useState(false)
  const [topic, setTopic] = useState('')
  const [prompt, setPrompt] = useState('')
  const [response, setResponse] = useState('')

  const handleReview = () => {
    setIsLoading(true)
    fetch('http://localhost:3000/api/topicprompt', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ topic, prompt }),
    })
      .then((res) => res.json())
      .then(({ feedback }) => {
        setResponse(feedback)
        setIsLoading(false)
      })
      .catch((err) => console.error(err))
  }

  return (
    <div className={styles.container}>
      <div className={styles.sidebar}>
        <div className={styles.projectPhoto} />
        <div className={styles.projectName}>Unnamed Project</div>
        <div className={styles.tree}>
          <div className={styles.treeOffset} />
          <div className={styles.verticalBar}></div>
          <div className={styles.treeRows}>
            <div className={classnames(styles.treeRow, styles.activeTreeRow)}>
              <div className={styles.horizontalBar}></div>
              <div className={styles.tab}>
                <div className={styles.tabName}>Brainstorm</div>
                {false && (
                  <div className={styles.tabCheck}>
                    <CheckIcon size=".75rem" />
                  </div>
                )}
              </div>
            </div>
            <div className={styles.treeRow}>
              <div className={styles.horizontalBar}></div>
              <div className={styles.tab}>
                <div className={styles.tabName}>Quotes & Analysis</div>
                {false && (
                  <div className={styles.tabCheck}>
                    <CheckIcon size="0.75rem" />
                  </div>
                )}
              </div>
            </div>
            <div className={styles.treeRow}>
              <div className={styles.horizontalBar}></div>
              <div className={styles.tab}>
                <div className={styles.tabName}>Topic Sentences</div>
                {false && (
                  <div className={styles.tabCheck}>
                    <CheckIcon size="0.75rem" />
                  </div>
                )}
              </div>
            </div>
            <div className={styles.treeRow}>
              <div className={styles.horizontalBar}></div>
              <div className={styles.tab}>
                <div className={styles.tabName}>Introduction</div>
                {false && (
                  <div className={styles.tabCheck}>
                    <CheckIcon size="0.75rem" />
                  </div>
                )}
              </div>
            </div>
            <div className={styles.treeRow}>
              <div className={styles.horizontalBar}></div>
              <div className={styles.tab}>
                <div className={styles.tabName}>Conclusion</div>
                {false && (
                  <div className={styles.tabCheck}>
                    <CheckIcon size="0.75rem" />
                  </div>
                )}
              </div>
            </div>
            <div className={styles.treeRow}>
              <div className={styles.horizontalBar}></div>
              <div className={styles.tab}>
                <div className={styles.tabName}>Title</div>
                {false && (
                  <div className={styles.tabCheck}>
                    <CheckIcon size="0.75rem" />
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
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
          onChange={(e) => setTopic(e.target.value)}
        />
        <textarea
          className={styles.promptTextArea}
          placeholder="Prompt:"
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
        />
        <button
          className={
            isLoading
              ? classnames(styles.reviewButton, styles.activeReviewButton)
              : styles.reviewButton
          }
          onClick={handleReview}
        >
          {isLoading ? '. . .' : 'REVIEW'}
        </button>
        <div>
          <ParsedResponse feedback={response} />
        </div>
      </div>
    </div>
  )
}
