import "./App.css";
import * as React from "react";
import { useState, useEffect } from "react";
import { Button } from "@mui/material";

function DetailsC({ showDetailsSiteParam, hideDetails }) {
  return (
    <>
      <Button onClick={hideDetails}>zurück</Button>
      <li className="detailJSon">
        {JSON.stringify(showDetailsSiteParam.title)}
      </li>
    </>
  );
}

export default DetailsC;
