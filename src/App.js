import "./App.css";
import FetchFilms from "./FetchFilms";
import DetailsComponent from "./DetailsC";
import * as React from "react";
import { useState, useEffect } from "react";
import TextField from "@mui/material/TextField";
import JSONPretty from "react-json-pretty";

/*
@sources
https://dev.to/salehmubashar/search-bar-in-react-js-545l

https://beta.reactjs.org/learn

https://stackoverflow.com/questions/30765163/pretty-printing-json-with-react
*/
function App() {
  const [details, detailsSet] = useState(false);
  const [detailsParam, detailsParamSet] = useState(null);

  const hideDetails = (d) => {
    detailsSet(false);
  };

  const showDetails = (param) => (d) => {
    detailsSet(true);
    detailsParamSet(param);
    //var getDetailsMovieId = param;
    //console.log(getDetailsMovieId);
  };

  return (
    <>
      <h3>Star Wars Api Internal 2</h3>
      {details ? (
        <DetailsComponent
          detailsParam={detailsParam}
          hideDetails={hideDetails}
        />
      ) : (
        <FetchFilms showDetails={showDetails} />
      )}
    </>
  );
}

export default App;
//JSON.stringify(detailsParam, null, 2)
