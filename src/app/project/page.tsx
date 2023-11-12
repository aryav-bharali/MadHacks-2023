'use client'

import classNames from 'classnames'
import { useEffect, useState } from 'react'
import BodyP from './BodyP'
import Brainstorming from './Brainstorming'
import CheckIcon from './CheckIcon'
import Conclusion from './Conclusion'
import Introduction from './Introduction'
import Title from './Title'
import AccountIcon from './AccountIcon'
import Logo from './Logo'
import styles from './page.module.css'
import Thesis from './Thesis'

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
    ['Thesis', <Thesis key="Thesis" />],
    ['Body Paragraphs', <BodyP key="BodyP" />],
    ['Introduction', <Introduction key="Introduction" />],
    ['Conclusion', <Conclusion key="Conclusion" />],
    ['Title', <Title key="Title" />]
  ]

  return (
    <>
      <div className={styles.container}>
        <div className={styles.navbar}>
          <div className={styles.navbarBrand}>
            <Logo height="2rem" fill="#0c2a4a" />
            <h1>WriteBright</h1>
          </div>
          <div
            className={styles.navbarRight}
            onClick={() => alert('Account Integration Not Implemented Yet')}
          >
            <AccountIcon height="2rem" fill="#0c2a4a" />
          </div>
        </div>
      </div>
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
    </>
  )
}
