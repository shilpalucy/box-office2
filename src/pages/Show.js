//eslint-disable-next-line 
import React,{useEffect, useReducer} from 'react';
import {useParams} from 'react-router-dom';
import { apiGet } from '../misc/config';

const reducer=(prev,action)=>{
    switch(action.type){
    case "FETCH_SUCCESS": {
        return {
        isLoading:false,
        error:null,
        show:action.show
    }

    }
    case "FETCH_FAILED":{
        return {
            isLoading:false,
            error:action.error,
        }   

    }
    default :
        return prev;
}
}
const initialState={
    show : null,
    isLoading: true,
    error: null

}
const Show = () => {
    const { id } = useParams();
    
    const [state, dispatch] = useReducer(reducer, initialState);

    //const [show, setShow] = useState(null);
    //const [isLoading,setIsLoading]=useState(true);
    //const [error,setError]=useState(null);

    console.log(state);
    useEffect(() => {
        
        let isMounted=true;
        apiGet(`/shows/${id}?embed[]=seasons&embed[]=cast`).then(result => {setTimeout(()=> {
            if(isMounted){
          dispatch({type:'FETCH_SUCCESS',show:result});
            }
        },2000)})
        .catch(
            (err => {
                if (isMounted){
                    dispatch({type:'FETCH_FAILED',error:err.message});
                }
        }
    ));
    return ()=>{isMounted=false};
    }, [id]);
if(state.isLoading){
 return <div>Data is Loading</div>
}
if(state.error){
    return <div>error occured</div>
}   
 return null;   
};

export default Show;
