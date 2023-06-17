import { useEffect } from 'react';
import { useState } from 'react';
import apiClient from '../services/api-Client';
import {  AxiosRequestConfig } from 'axios';


interface FetchingData<T>{
    count:number;
    results:T[];
}

const useData=<T>(endpoint:string,selectedGenre?:AxiosRequestConfig,deps?:any[])=>{
    const [data,setData]=useState<T[]>([]);
    const [Error,setErrors]=useState('');
    const [isloading,setLoading]=useState(false);

    useEffect(()=>{
        const controller=new AbortController();
        setLoading(true);
        apiClient.get<FetchingData<T>>(endpoint,{signal:controller.signal,...selectedGenre})
        .then((res)=>{setData(res.data.results)
        setLoading(false);
        })
        .catch(err=>{setErrors(err.message)
            setLoading(false);
        });

        ()=>controller.abort();
    },deps ? [...deps ]: [])

    return { data,Error,isloading,setErrors,setLoading};

}

export default useData;