import { useState } from "react";
import data from "./data";
import List from "./List";


const App = () => {
  const [people, setPeople] = useState(data);

  return (
    <div className="container">
      <h1>{data.length} birthdays today</h1>
      <List people={people} {...people} />,
      <button className="btn" onClick={() => setPeople([])}>
        clear all
      </button>
    </div>
  );
};
export default App;
