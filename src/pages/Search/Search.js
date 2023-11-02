import React from 'react'

const Search = () => {
  return (
    <div>
        <span className="title">Search</span>

        <form id="form"> 
            <input type="search" placeholder="Search..."/>
            <button>Search</button>
        </form>
    </div>
  )
}

export default Search;