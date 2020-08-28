import React, { useState } from "react";
import "./Banner.style.css";
import { Button } from "@material-ui/core";
import SearchComponent from "../Search/Search.component";

const BannerComponent = () => {
  const [showSearch, setShowSearch] = useState(false);
  return (
    <div className="banner">
      <div className="banner__search">
        {showSearch && <SearchComponent />}

        <Button
          variant="outlined"
          onClick={() => setShowSearch(!showSearch)}
          className="banner__searchButton"
        >
          {showSearch ? "Hide" : "Search Dates"}
        </Button>
      </div>
      <div className="banner__info">
        <h1>Get out the stretch your imagination</h1>
        <h5>
          Plan a different kind of gateway to uncover the hidden gems near you.
        </h5>
        <Button variant="outlined">Explore NearBy</Button>
      </div>
    </div>
  );
};

export default BannerComponent;
