import "./App.css";
import FetchFilms from "./FetchFilms";
import * as React from "react";
import { useState, useEffect } from "react";
import TextField from "@mui/material/TextField";

/*
@sources
https://dev.to/salehmubashar/search-bar-in-react-js-545l

https://beta.reactjs.org/learn

https://stackoverflow.com/questions/30765163/pretty-printing-json-with-react
*/
function App() {
  const [showDetailsSite, showDetailsSiteSet] = useState(false);
  const [showDetailsSiteParam, showDetailsSiteParamSet] = useState(null);

  const detailsHandler = (param) => (d) => {
    showDetailsSiteSet(true);
    showDetailsSiteParamSet(param);
    var getDetailsMovieId = param;
    console.log(getDetailsMovieId);
  };

  return (
    <div>
      {showDetailsSite ? (
        <pre>{JSON.stringify(showDetailsSiteParam, null, 2)}</pre>
      ) : (
        <FetchFilms detailsHandler={detailsHandler} />
      )}
    </div>
  );
}

export default App;
