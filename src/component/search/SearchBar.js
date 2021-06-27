import React , {useState} from "react";
import Rater from "./Rater";
import ListMovies from "../content/ListMovies";

import './search.css'

const SearchBar = () => {
const [text, setText] = useState("");
const  handleChange = (e) => {
  console.log(text);
  setText(e.target.value);
 
}
  return (
    <div>
      <div className="search_bar">
        <input type="text" name="search" placeholder="search ....." onChange = {handleChange} />
        <Rater />
    </div>
    <ListMovies  search={text}/>
    </div>
    
  );
};

export default SearchBar;
