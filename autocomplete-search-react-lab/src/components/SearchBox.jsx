import React, { useState } from 'react'
import countries from "../../resources/countryData.json"

const SearchBox = () => {

  const [search,setSearch] = useState("")
  console.log(countries);

  return (
    <div>
      <div className="input">
        <input type="text" name="" id="" onChange={(e)=>{
          setSearch(e.target.value)
        }} value={search} onKeyDown={(e)=>{
          {e.key == "Escape"?document.getElementById("list").style.display = "none":document.getElementById("list").style.display= "block"}
        }} />
        {console.log(document.getElementById("list"))}
        
        <button>search</button>
      </div>
      <div id="list">
        {countries.filter((e)=>{
          let s1 = search.toUpperCase()
          let country = e.name.toUpperCase()

          return(
            s1 && country.startsWith(s1) && country != s1
          )
        }).slice(0,10).map((e)=>{
          return(

          <div onClick={()=> setSearch(s1)}>
            {e.name}
            
          </div>
          )
        })
        }
      </div>
    </div>
  )
}

export default SearchBox


