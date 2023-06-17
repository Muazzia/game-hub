import { CanceledError } from 'axios';
import { useEffect, useState } from "react";
import apiClient from "../services/api-Client";


export interface Platform{
 id:number,
 slug:string;
}

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: {platform: Platform}[];
  metacritic:number;
}


  
  interface FetchingGame {
    count: number;
    results: Game[];
  }
  

const useGames=()=>{
    const controller=new AbortController();
        const [games, setGames] = useState<Game[]>([]);
        const [err, setErrors] = useState("");
        const [isloading,setLoading]=useState(false);
      
        
        useEffect(() => {

          setLoading(true);
          apiClient
            .get<FetchingGame>("/games")
            .then((res) => {
              setGames(res.data.results);
              setLoading(false);
            })
            .catch((err) => {
                if(err instanceof CanceledError) return ;
                setErrors(err.message)
                setLoading(false);
            });

            return ()=>controller.abort();
        }, []);
      
        return {games,err,isloading};
    }

export default useGames;