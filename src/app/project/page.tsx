import styles from './page.module.css'
import classnames from 'classnames'
import CheckIcon from '../../components/CheckIcon'
import WhiteboardIcon from '@/components/WhiteboardIcon'

export default function Page() {
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
        />
        <textarea className={styles.promptTextArea} placeholder="Prompt:" />
        <button className={styles.reviewButton}>REVIEW</button>
      </div>
    </div>
  )
}
