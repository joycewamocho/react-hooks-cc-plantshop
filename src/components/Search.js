import React from "react";

function Search({search,setSearch}) {
  
  function handleSearch(event){
    const input=event.target.value.toLowerCase()
    setSearch(input)
    
  }
  return (
    <div className="searchbar">
      <label htmlFor="search">Search Plants:</label>
      <input
        type="text"
        id="search"
        value={search}
        placeholder="Type a name to search..."
        onChange={handleSearch}
      />
    </div>
  );
}

export default Search;
