import React from 'react'
import {useGlobalContext} from "../context";
import "./Search.css"

const Search = () => {
  const {query,setQuery,setisLoading,setStockData,setSearch,
    setFullname,setNews} = useGlobalContext();
  const queryChange = ((e)=>{
    setQuery(e.target.value);
    setisLoading(true);
    setSearch();
    setFullname();
    setNews();
    setStockData([]);
    console.log(query);
  })
  return (
    <section className='search-section'>
      <h2>Search for any stock</h2>
      <form action='#' onSubmit={(e)=>{e.preventDefault()}}>
        <div>
          <input type="text" placeholder='Search here' value={query} onChange={queryChange}/>
        </div>
      </form>
      <div className='card-error'>
        {/* <p>{isError.show && isError.msg}</p> */}
      </div>
    </section>
  )
}

export default Search

