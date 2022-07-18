import styles from './Sidebar.module.css'
import { PencilLine } from 'phosphor-react'
import { Avatar } from './Avatar'


export function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <img className={styles.cover} src="https://images.unsplash.com/photo-1605379399642-870262d3d051?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8ZGV2ZWxvcGVyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=50" />

      <div className={styles.profile}>
        {/* foto de perfil */}
        <Avatar src={"https://github.com/lorenzo-giacomo.png"}/>

        <strong>Lorenzo Giacomo</strong>
        <span>Web Developer</span>
      </div>

      <footer>
        <a href="a">
          <PencilLine size={20}/>
          Editar seu perfil
        </a>   
      </footer>

    </aside>
  )
 
}