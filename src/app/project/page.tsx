'use client'

import classNames from 'classnames'
import { useEffect, useState } from 'react'
import BodyP from './BodyP'
import Brainstorming from './Brainstorming'
import CheckIcon from './CheckIcon'
import Conclusion from './Conclusion'
import Introduction from './Introduction'
import Title from './Title'
import TopicSentences from './TopicS'
import styles from './page.module.css'

export default function Page() {
  const [currTab, setCurrTab] = useState(0)
  const [projectPhoto, setProjectPhoto] = useState('')

  const updateProjectPhoto = (imgURL: string | null) => {
    if (imgURL) setProjectPhoto(imgURL)
  }

  useEffect(() => {
    updateProjectPhoto(localStorage.getItem('imgURL'))
  }, [])

  const tabs: [string, JSX.Element][] = [
    [
      'Brainstorming',
      <Brainstorming
        key="Brainstorming"
        updateProjectPhoto={updateProjectPhoto}
      />
    ],
    ['Body Paragraphs', <BodyP key="BodyP" />],
    ['Topic Sentences', <TopicSentences key="TopicSentences" />],
    ['Introduction', <Introduction key="Introduction" />],
    ['Conclusion', <Conclusion key="Conclusion" />],
    ['Title', <Title key="Title" />]
  ]

  return (
    <div className={styles.container}>
      <div className={styles.sidebar}>
        <div
          className={styles.projectPhoto}
          style={
            projectPhoto
              ? {
                  backgroundImage: `url('${projectPhoto}')`
                }
              : {}
          }
        />
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
