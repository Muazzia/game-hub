import { useEffect } from 'react';
import { useState } from 'react';
import apiClient from '../services/api-Client';

interface Genres{
    id:number;
    name:string;
}

const useGenres=()=>{
    const [genres,setGenres]=useState<Genres[]>([]);
    const [Error,setErrors]=useState('');

    useEffect(()=>{
        const controller=new AbortController();
        apiClient.get('/genres',{signal:controller.signal})
        .then((res)=>setGenres(res.data.results))
        .catch(err=>setErrors(err.message));

        ()=>controller.abort();
    })

    return {genres,Error};

}

export default useGenres;