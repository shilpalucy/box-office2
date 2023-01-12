import React,{useState} from 'react';
import ActorGrid from '../components/Actor/ActorGrid';
import MainPageLayout from '../components/MainPageLayout';
import ShowGrid from '../components/show/ShowGrid';
import { apiGet } from '../misc/config';

const Home = () => {
  
  const[Input,setInput]=useState("");
  const[result,setResult]=useState(null);
  const[searchOption,setSearchOption]=useState("shows");
  const isSearchOption = searchOption==="shows";

  const onSearch = () => {
    
    apiGet(`/search/${searchOption}?q=${Input}`).then(results=>{
      setResult(results)});
      
    }

    
     
  

  const onKeyDown=(ev)=>{
    if(ev.keyCode===13)
      onSearch();
  }

  const onEventChange = (ev) => {
    setInput(ev.target.value);
  
  }
  const onRadioChange = (ev) => {
    setSearchOption(ev.target.value);
    console.log(searchOption);
  }

  const renderResults=() => {
    if(result  && result.length===0){
    return <div>noresults</div>
    }
    if(result && result.length>0) {
      
      return(result[0].show
        ? <ShowGrid data={result}/>
        : <ActorGrid data={result}/>
    );
  }
    return (null);
}

return(
      <MainPageLayout>
      <input type="text" onChange = {onEventChange} onKeyDown={onKeyDown} value={Input}/>
      <button type="button" onClick= {onSearch}>Search</button>
      <label htmlFor="show-id">
        <input id="show-id" type="radio" value="shows" checked={isSearchOption} onChange={onRadioChange}/>Shows
      </label>
      <label htmlFor="actors-id">
        <input id="actors-id" type="radio" value="people" checked={!isSearchOption} onChange={onRadioChange}/>Actors
      </label>
        
       
      {renderResults()};
      </MainPageLayout>
)
};

export default Home;
