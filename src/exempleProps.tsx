
// props: objeto contendo o author e content especificados na propriedades
function Post(props) {
  console.log(props)
  return (
    <div>
      <strong>{props.author}</strong>
      <p>{props.content}</p>
    </div>
   )
}
export default Post

// Export Default: pode dar o nome na importação, não identificando se houver alteração.
// Named Export: escreve o export antes do nome da função. O nome precisa ser igual ao importado no componente.