import { format, formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'
import { ChangeEvent, FormEvent, InvalidEvent, useState } from 'react'

import { Avatar } from './Avatar'
import { Comment } from './Comment'
import styles from './Post.module.css'

// author: {author.url: "", name:"", role:""}
// publishedAt: Date
// content: string

interface Author {
  name: string;
  role: string;
  avatarUrl: string
}

interface Content {
  type: 'paragraph' | 'link',
  content: string
}

interface PostPros {
  author: Author;
  publishedAt: Date;
  content: [Content]
}

export function Post({author, publishedAt, content}: PostPros) {
  const [comments, setComments] = useState(['Post muito bom, hein??'])
  const [newCommentText, setNewCommentText] = useState('')
  
  const publishedDateFormatted = format(publishedAt, "d 'de' LLLL 'às' HH:mm'h'", {
    locale: ptBR
  })
  const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
    locale: ptBR,
    addSuffix: true
  })

  function handleNewCommentChange(event: ChangeEvent<HTMLTextAreaElement>) {
    event.target.setCustomValidity('')

    setNewCommentText(event.target.value)
  }

  function handleCreateNewComment(event: FormEvent) {
    event.preventDefault()

    // const newCommentText= event.target.comment.value

    setComments([...comments, newCommentText])
    setNewCommentText('')
    // Programação imperativa:
    // event.target.comment.value= ''
  }

  function handleNewCommentInvalid(event: InvalidEvent<HTMLTextAreaElement>) {
    event.target.setCustomValidity('Esse campo é obrigatório')
  }

  function deleteComment(commentToDelete: string) {
    const commentsWithoutDeletedOne = comments.filter(comment => {
      return comment !== commentToDelete
    })
    setComments(commentsWithoutDeletedOne)
  }

  const isNewCommentEmpty = newCommentText.length === 0

  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar src={author.avatarUrl}/>
          <div className={styles.authorInfo}>
            <strong>{author.name}</strong>
            <span>{author.role}</span>
          </div>
        </div>
        <time title={publishedDateFormatted} dateTime={publishedAt.toISOString()}> {publishedDateRelativeToNow}</time>

      </header>
      <div className={styles.content}>
        {content.map(line =>{
          if(line.type === 'paragraph') {
            return <p key={line.content}>{line.content}</p>
          } else if (line.type === 'link') {
            return <p key={line.content}><a href='#'>{line.content}</a></p>
          }
        })}
      </div>

      <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>
        <textarea
          name='comment'
          // toda vez que o valor do campo mudar, o textarea vai refletir a alteração
          value={newCommentText}
          placeholder="Deixe seu comentário"
          onChange={handleNewCommentChange}
          onInvalid={handleNewCommentInvalid}
          required
        />
        <footer>
          <button disabled={isNewCommentEmpty} type="submit">Publicar</button>
        </footer>
        {/* aparecer somente quando o usuário focar */}
      </form>
      <div className={styles.commentList}>
        {comments.map(comment => {
          return <Comment 
          key={comment} 
          content={comment}
          onDeleteComment={deleteComment}
          />
        })}
      </div>

    </article>
  )
}