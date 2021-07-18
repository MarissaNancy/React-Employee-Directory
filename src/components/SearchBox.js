//this is whats going to search
import React from "react";

function SearchBox() {
    return(
        <div className="search">
            <form>
            <input 
                className="form"//
                type="search"
                placeholder="Search"
                aria-label="Search"
                onChange={e => handleSearchChange(e)}
                />
            </form>
        </div>
    )
}

export default SearchBox;