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
  const [showDetailsSite, showDetailsSiteSet] = useState(false);
  const [showDetailsSiteParam, showDetailsSiteParamSet] = useState(null);

  const hideDetails = (d) => {
    showDetailsSiteSet(false);
  };

  const showDetails = (param) => (d) => {
    showDetailsSiteSet(true);
    showDetailsSiteParamSet(param);
    //var getDetailsMovieId = param;
    //console.log(getDetailsMovieId);
  };

  return (
    <div>
      <h3>Star Wars Api Internal 2</h3>
      {showDetailsSite ? (
        <DetailsComponent
          showDetailsSiteParam={showDetailsSiteParam}
          hideDetails={hideDetails}
        />
      ) : (
        <FetchFilms showDetails={showDetails} />
      )}
    </div>
  );
}

export default App;
//JSON.stringify(showDetailsSiteParam, null, 2)
