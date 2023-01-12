//eslint-disable-next-line 
import React,{useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import { apiGet } from '../misc/config';

const Show = () => {
    const { id } = useParams();
    const [show, setShow] = useState(null);
    const [isLoading,setIsLoading]=useState(true);
    const [error,setError]=useState(null);


    useEffect(() => {
        
        let isMounted=true;
        apiGet(`/shows/${id}?embed[]=seasons&embed[]=cast`).then(result => {setTimeout(()=> {
            if(isMounted){
          setShow(result);
          setIsLoading(false);
            }
        },2000)})
        .catch(
            (err => {
                if (isMounted){
                setError(err.message);
                setIsLoading(false);
                }
        }
    ));
    return ()=>{isMounted=false};
    }, [id]);
if(isLoading){
 return <div>Data is Loading</div>
}
if(error){
    return <div>error occured</div>
}   
 return null;   
};

export default Show;
