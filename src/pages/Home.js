import React,{useState} from 'react';
import MainPageLayout from '../components/MainPageLayout';
import { apiGet } from '../misc/config';

const Home = () => {
  
  const[Input,setInput]=useState("");
  const[result,setResult]=useState(null);

  const onSearch = () => {
    
    apiGet(`/search/shows?q=${Input}`).then(results=>{
      setResult(results)});
      
    }
     
  

  const onKeyDown=(ev)=>{
    if(ev.keyCode===13)
      onSearch();
  }

  const onEventChange = (ev) => {
    setInput(ev.target.value);
  
  }
  const renderResults=() => {
    if(result  && result.length===0){
    return <div>noresults</div>
    }
    if(result && result.length>0) {
    return(
    <div>
    {result.map((item)=>(
    <div key={item.show.id}>{item.show.name}</div>))}</div>)
  }
    return (null);
}

return(
      <MainPageLayout>
      <input type="text" onChange = {onEventChange} onKeyDown={onKeyDown} value={Input}/>
      <button type="button" onClick= {onSearch}>Search</button>
      {renderResults()};
      </MainPageLayout>
)
};

export default Home;
