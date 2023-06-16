import { CanceledError } from 'axios';
import { useEffect, useState } from "react";
import apiClient from "../services/api-Client";

export interface Game {
    id: number;
    name: string;
    background_image: string;
  }
  
  interface FetchingGame {
    count: number;
    results: Game[];
  }
  

const useGames=()=>{
    const controller=new AbortController();
        const [games, setGames] = useState<Game[]>([]);
        const [err, setErrors] = useState("");
      
        useEffect(() => {
          apiClient
            .get<FetchingGame>("/games")
            .then((res) => {
              setGames(res.data.results);
            })
            .catch((err) => {
                if(err instanceof CanceledError) return ;
                setErrors(err.message)
            
            });

            return ()=>controller.abort();
        }, []);
      
        return {games,err};
    }

export default useGames;