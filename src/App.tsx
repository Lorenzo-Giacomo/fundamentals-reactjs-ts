import { Header } from "./components/Header"
import {Post} from "./components/Post"
import { Sidebar } from "./components/Sidebar"

import './global.css'
import styles from './App.module.css'

// author: {author.url: "", name:"", role:""}
// publishedAt: Date
// content: string

const posts = [
  {
    id: 1,
    author: {
      avatarUrl:"https://github.com/lorenzo-giacomo.png",
      name: "Lorenzo Giacomo",
      role: "Web Developer"
    },
    content: [
      {type: "paragraph", content: "Fala pessoal 👋"},
      {type: "paragraph", content:"Finalmente finalizei meu novo site/portfólio. Foi um baita desafio criar todo o design e codar na unha, mas consegui 💪🏻"},
      {type: 'link', content: "#uxdesign"}
    ],
    publishedAt: new Date('2022-07-12 20:00:00')
  },
  {
    id: 2,
    author: {
      avatarUrl:"https://github.com/lorenzo-giacomo.png",
      name: "Bernardo Giacomo",
      role: "Ux Designer"
    },
    content: [
      {type: "paragraph", content: "Fala pessoal 👋"},
      {type: "paragraph", content:"Finalmente finalizei meu novo site/portfólio. Foi um baita desafio criar todo o design e codar na unha, mas consegui 💪🏻"}
    ],
    publishedAt: new Date('2022-07-14 18:00:00')
  }
]

export function App() {
  return (    
    <div>
      <Header/>

      <div className={styles.wrapper}>
        <Sidebar/>
        <main>
         {posts.map(post => {
          return (
            <Post 
              key={post.id}
              author={post.author}
              content={post.content}
              publishedAt={post.publishedAt}
            />
          )
         })}
        </main>
      </div>
      
    </div>
  )
} 

