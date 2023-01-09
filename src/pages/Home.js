import React,{useState} from 'react';
import MainPageLayout from '../components/MainPageLayout';


const Home = () => {


  
  const[Input,setInput]=useState("");

  const onSearch=()=>{
    fetch(`https://api.tvmaze.com/search/shows?q=${Input}`)
    .then(r=>r.json())
    .then(result=> console.log(result));
  }

  const onKeyDown=(ev)=>{
    if(ev.keyCode===13)
      onSearch();
  }

  const onEventChange = (ev) => {
    setInput(ev.target.value);
  
  }
  return (

    <MainPageLayout>
      <input type="text" onChange = {onEventChange} onKeyDown={onKeyDown} value={Input}/>
      <button type="button" onClick={onSearch}>Search</button>
    </MainPageLayout>
  );
}

export default Home;
