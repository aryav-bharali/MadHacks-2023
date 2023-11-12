'use client'

import styles from './page.module.css'
import classNames from 'classnames'
import CheckIcon from './CheckIcon'
import Brainstorming from './Brainstorming'
import QuotesAnalysis from './QuotesAnalysis'
import TopicSentences from './TopicS'
import Introduction from './Introduction'
import Conclusion from './Conclusion'
import Title from './Title'
import { use, useState } from 'react'

const tabs: [string, JSX.Element][] = [
  ['Brainstorming', <Brainstorming key="Brainstorming" />],
  ['Quotes & Analysis', <QuotesAnalysis key="QuotesAnalysis" />],
  ['Topic Sentences', <TopicSentences key="TopicSentences" />],
  ['Introduction', <Introduction key="Introduction" />],
  ['Conclusion', <Conclusion key="Conclusion" />],
  ['Title', <Title key="Title" />],
]

export default function Page() {
  const [currTab, setCurrTab] = useState(0)

  return (
    <div className={styles.container}>
      <div className={styles.sidebar}>
        <div className={styles.projectPhoto} />
        <div className={styles.projectName}>Unnamed Project</div>
        <div className={styles.tree}>
          <div className={styles.treeOffset} />
          <div className={styles.verticalBar}></div>
          <div className={styles.treeRows}>
            {tabs.map((tab, tabI) => (
              <div
                className={
                  currTab === tabI
                    ? classNames(styles.treeRow, styles.activeTreeRow)
                    : styles.treeRow
                }
                key={tab[0]}
              >
                <div className={styles.horizontalBar}></div>
                <div className={styles.tab} onClick={(e) => setCurrTab(tabI)}>
                  <div className={styles.tabName}>{tab[0]}</div>
                  {false && (
                    <div className={styles.tabCheck}>
                      <CheckIcon size=".75rem" />
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {tabs[currTab][1]}
    </div>
  )
}
