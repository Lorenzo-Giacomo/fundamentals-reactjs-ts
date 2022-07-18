import { Trash, ThumbsUp } from 'phosphor-react'
import { useState } from 'react'
import { Avatar } from './Avatar'
import styles from './Comment.module.css'

interface CommentProps {
  content: string;
  onDeleteComment: (comment: string) => void
}

export function Comment({content, onDeleteComment}: CommentProps) {
  const [likeCount, setLikeCount] = useState(0)
  
  function handleDeleteComment() {
    onDeleteComment(content)
  }

  function handleLikeComment() {
    // // formas de atualização de estado:
    // const newLikeCount = likeCount +1
    setLikeCount((state)=>{
      return state +1
    })
    // setLikeCount(likeCount + 1)
    // é possível colocar esse código dentro do onClick chamando pela arrow function
  }

  return (
    <div className={styles.comment}>
      <Avatar hasBorder={false} src='https://github.com/lorenzo-giacomo.png' alt='' />
      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Lorenzo Giacomo</strong>
              <time title="20 de junho às 10:27h" dateTime='2022-06-20 00:10:25'> Cerca de 1h atrás</time>
            </div>

            <button onClick={handleDeleteComment} title='Deletar comentário'>

            <Trash size={24}/>
            </button>
          </header>
          <p>{content}</p>
        </div>
        <footer>
          <button onClick={handleLikeComment}>
            <ThumbsUp/>
            Aplaudir <span>{likeCount}</span>
          </button>
          
        </footer>
      </div>
    </div>
  )
}