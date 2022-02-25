import "./App.css";
import { useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import axios from "axios";
import { Card } from "@mui/material";
import GetInfo from "./component/GetInfo";

function App() {
  const [num, setNum] = useState();
  const [fetchData, setFetchData] = useState([]);
  const [name, setName] = useState();
  const [move, setMove] = useState();

  let navigate = useNavigate();

  useEffect(() => {
    async function getData() {
      await axios.get("https://api.github.com/users").then((res) => {
        console.log(res);
        // console.log(res.data.moves[25].move.url);
        setFetchData(res.data);

        // setName(res.data.name);
        // setMove(res.data.moves[25].move.url);
      });
    }
    getData();
  }, []);
  console.log("fetchdata", fetchData);

  const infoClick = (id) => {
    console.log("clickedd");
    console.log("dataaa", id);
    //  <GetInfo /> : <Navigate to="/getinfo" state={data}/>
    navigate("/getinfo", { state: id });
  };
  return (
    <>
      <div className="App">
        {/* <h3>the Number is :{num}</h3>

        <select value={num} onChange={(e) => setNum(e.target.value)}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="25">25</option>
        </select>

        <h4>Name is : {name}</h4>
        <h4>Number of Moves are : {move}</h4>
         
<img src={fetchData}/> */}
        {fetchData.map((item) => {
          return (
            <div className="item" key={item.id}>
              <figure onClick={() => infoClick(item)}>
                <img style={{ width: "300px" }} src={item.avatar_url} />
                <figcaption>Name :{item.login}</figcaption>
                <figcaption>ID :{item.node_id}</figcaption>
              </figure>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default App;
