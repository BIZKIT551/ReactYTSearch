import React from "react";
import ReactDOM from "react-dom";
import SearchBar from "./components/search_bar";

const API_KEY = "AIzaSyBqz-FKanc-W1ztjpggpRk3Z6uI5LdTM3c";

const App = () => {
  return (
    <div>
      <SearchBar />
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector(".container"));
