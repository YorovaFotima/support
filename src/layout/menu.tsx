import { Link } from "react-router-dom";

function Menu() {
  return (
    <div>
      <h1>Menu</h1>
      <ul
        style={{
          display: "flex",
          flexDirection: "row",
          gap: "10px",
          marginTop: "20px",
          listStyle: "none",
        }}
      >
        <li>
          <Link to="/">Dashboard</Link>
        </li>
        <li>
          <Link to="/questions">Questions</Link>
        </li>
        <li>
          <Link to="/add-question">Add Question</Link>
        </li>
      </ul>
    </div>
  );
}

export { Menu };
