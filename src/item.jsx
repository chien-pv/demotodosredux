import { deleteTodo } from "./redux/todoSlice";
import { useDispatch } from "react-redux";
function Item({ index, title, status }) {
  let dispatch = useDispatch();
  return (
    <tr>
      <th scope="row">{index + 1}</th>
      <td>{title}</td>
      <td>{status}</td>
      <td>
        <button
          onClick={() => {
            dispatch(deleteTodo(index));
          }}
          type="button"
          className="btn btn-outline-danger"
        >
          Delete
        </button>
        <button type="button" className="btn btn-outline-warning">
          Edit
        </button>
      </td>
    </tr>
  );
}

export default Item;
