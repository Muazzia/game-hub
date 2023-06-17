import { useEffect } from 'react';
import { useState } from 'react';
import apiClient from '../services/api-Client';


interface FetchingData<T>{
    count:number;
    results:T[];
}

const useData=<T>(endpoint:string)=>{
    const [data,setData]=useState<T[]>([]);
    const [Error,setErrors]=useState('');
    const [isloading,setLoading]=useState(false);

    useEffect(()=>{
        const controller=new AbortController();
        setLoading(true);
        apiClient.get<FetchingData<T>>(endpoint,{signal:controller.signal})
        .then((res)=>{setData(res.data.results)
        setLoading(false);
        })
        .catch(err=>{setErrors(err.message)
            setLoading(false);
        });

        ()=>controller.abort();
    },[])

    return { data,Error,isloading};

}

export default useData;