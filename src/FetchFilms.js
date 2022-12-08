import "./App.css";
import * as React from "react";
import { useState, useEffect } from "react";
import TextField from "@mui/material/TextField";

function FetchFilms({ detailsHandler }) {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);
  const [inputText, setInputText] = useState("");
  const inputRef = React.useRef(null);

  useEffect(() => {
    fetch("https://swapi.py4e.com/api/films/")
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setItems(result);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, []);

  const inputHandler = (e) => {
    var lowerCase = e.target.value.toLowerCase();
    setInputText(lowerCase);
  };

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    const filteredData = items.results.filter((el) => {
      if (inputText === "") {
        return el;
      } else {
        return el.title.toLowerCase().includes(inputText);
      }
    });
    return (
      <div className="main">
        <h1>Star Wars Api Internal 2</h1>
        <div className="search">
          <TextField
            id="outlined-basic"
            onChange={inputHandler}
            variant="outlined"
            fullWidth
            label="Search"
          />
        </div>
        <ul>
          {filteredData.map((item) => (
            <li ref={inputRef} key={item.title}>
              {item.title}
              <button onClick={detailsHandler(item)}> details </button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default FetchFilms;
