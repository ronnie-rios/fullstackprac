/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */


const TodoCard = ({  index, todo}) => {
  return (
    <tr key={index}>
      <td>{index}</td>
      <td>{todo}</td>
    </tr>
  )
}

export default TodoCard