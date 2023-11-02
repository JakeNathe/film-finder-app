import React from 'react';
import "./Pages.css";

const Search = () => {
  return (
    <div>
        <span className="pageTitle">Search</span>

        <form id="form"> 
            <input type="search" placeholder="Search..."/>
            <button>Search</button>
        </form>
    </div>
  )
}

export default Search;