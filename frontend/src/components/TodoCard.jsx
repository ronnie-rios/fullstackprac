/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */


const TodoCard = ({ key, index, todo}) => {
  return (
    <tr key={key}>
      <td>{index}</td>
      <td>{todo}</td>
    </tr>
  )
}

export default TodoCard