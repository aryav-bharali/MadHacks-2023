import classNames from 'classnames'
import { useState } from 'react'
import BotIcon from './BotIcon'
import styles from './BodyP.module.css'
import ParsedResponse from './ParsedResponse'
import QuoteIcon from './QuoteIcon'

function BodyP() {
  const [isLoading, setIsLoading] = useState(false)
  const [showButton, setShowButton] = useState(true)
  const [feedbackRes, setFeedbackRes] = useState('')
  const [rating, setRating] = useState(-1)

  const handleReview = () => {
    setIsLoading(true)
    setFeedbackRes('')
    fetch('http://localhost:3000/api/bodyprompt', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        bp1: `${topicSentence1} ${quote1} ${analysis1}`,
        bp2: `${topicSentence2} ${quote2} ${analysis2}`,
        bp3: `${topicSentence3} ${quote3} ${analysis3}`,
        thesis: '',
        thesis_prompt: ''
      })
    })
      .then((res) => res.json())
      .then(({ rating, feedback }) => {
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

  const [topicSentence1, setTopicSentence1] = useState('')
  const [quote1, setQuote1] = useState('')
  const [analysis1, setAnalysis1] = useState('')
  const [topicSentence2, setTopicSentence2] = useState('')
  const [quote2, setQuote2] = useState('')
  const [analysis2, setAnalysis2] = useState('')
  const [topicSentence3, setTopicSentence3] = useState('')
  const [quote3, setQuote3] = useState('')
  const [analysis3, setAnalysis3] = useState('')

  return (
    <>
      <div className={styles.content}>
        <QuoteIcon height="3rem" />
        <h1>Body Paragraphs</h1>
        <p>
          Each body paragraph should start with a topic sentence that clearly
          relates to your thesis statement. This sentence should introduce the
          main point of the paragraph and set the tone for the rest of the
          discussion. Following the topic sentence, provide context for the
          reader. This could be a brief summary of the part of the text
          you&apos;ll be analyzing or background information on the concept
          you&apos;ll be discussing.
        </p>
        <p>
          When analyzing a quote, it&apos;s crucial to explain its significance
          rather than merely stating what it says. Start by accurately quoting
          the text, ensuring you&apos;ve cited it correctly. Then, interpret the
          quote in your own words, explaining what it means in the context of
          the work. Delve into how it supports your argument or provides insight
          into the text. Discuss the literary devices used, the language, and
          how it aligns with the literary theory you&apos;re applying.
        </p>
        <p>
          Ensure that your analysis directly supports your thesis. Each
          paragraph should contribute to proving your thesis statement. After
          analyzing the quote, explicitly state how your analysis supports your
          argument. This connection should be clear and concise, leaving no
          doubt in the reader&apos;s mind about the relevance of your analysis.
        </p>
      </div>
      <div className={styles.fields}>
        <div>
          <textarea
            placeholder="Enter Topic Sentece I:"
            value={topicSentence1}
            onChange={(e) => {
              setTopicSentence1(e.target.value)
              setShowButton(true)
            }}
            className={styles.topicSentenceInput}
          />
          <textarea
            placeholder="Enter Quote I:"
            value={quote1}
            onChange={(e) => {
              setQuote1(e.target.value)
              setShowButton(true)
            }}
            className={styles.quoteInput}
          />
          <textarea
            placeholder="Enter Your Analysis I:"
            value={analysis1}
            onChange={(e) => {
              setAnalysis1(e.target.value)
              setShowButton(true)
            }}
            className={styles.analysisInput}
          />
        </div>
        <div>
          <textarea
            placeholder="Enter Topic Sentece II:"
            value={topicSentence2}
            onChange={(e) => {
              setTopicSentence2(e.target.value)
              setShowButton(true)
            }}
            className={styles.topicSentenceInput}
          />
          <textarea
            placeholder="Enter Quote II:"
            value={quote2}
            onChange={(e) => {
              setQuote2(e.target.value)
              setShowButton(true)
            }}
            className={styles.quoteInput}
          />
          <textarea
            placeholder="Enter Your Analysis II:"
            value={analysis2}
            onChange={(e) => {
              setAnalysis2(e.target.value)
              setShowButton(true)
            }}
            className={styles.analysisInput}
          />
        </div>{' '}
        <div>
          <textarea
            placeholder="Enter Topic Sentece III:"
            value={topicSentence3}
            onChange={(e) => {
              setTopicSentence3(e.target.value)
              setShowButton(true)
            }}
            className={styles.topicSentenceInput}
          />
          <textarea
            placeholder="Enter Quote III:"
            value={quote3}
            onChange={(e) => {
              setQuote3(e.target.value)
              setShowButton(true)
            }}
            className={styles.quoteInput}
          />
          <textarea
            placeholder="Enter Your Analysis III:"
            value={analysis3}
            onChange={(e) => {
              setAnalysis3(e.target.value)
              setShowButton(true)
            }}
            className={styles.analysisInput}
          />
        </div>
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
              rating >= 8
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

export default BodyP
