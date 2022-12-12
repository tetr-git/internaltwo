import "./App.css";
import * as React from "react";
import { useState, useEffect } from "react";
import { Button } from "@mui/material";
import { ClassNames } from "@emotion/react";

function DetailsC({ detailsParam, hideDetails }) {
  return (
    <div className="detailsSite">
      <Button onClick={hideDetails}>zurück</Button>
      {detailsParam.title && <ul>{detailsParam.title}</ul>}
      {detailsParam.episode_id && <ul>Episode {detailsParam.episode_id}</ul>}
      {detailsParam.opening_crawl && <ul>{detailsParam.opening_crawl}</ul>}
      {detailsParam.director && <ul>Director {detailsParam.director}</ul>}
      {detailsParam.producer && <ul>Producer {detailsParam.producer}</ul>}
      {detailsParam.release_date && (
        <ul>Release Date {detailsParam.release_date}</ul>
      )}
    </div>
  );
}

export default DetailsC;
