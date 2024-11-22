import Item from "./item";
import { useSelector } from "react-redux";

function List() {
  let todos = useSelector((state) => state.todos);
  console.log(todos);

  let datas = todos.map((item, index) => {
    return <Item index={index} key={index} {...item} />;
  });
  return (
    <table className="table">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Title</th>
          <th scope="col">Status</th>
          <th scope="col">Action</th>
        </tr>
      </thead>
      <tbody>{datas}</tbody>
    </table>
  );
}
export default List;
