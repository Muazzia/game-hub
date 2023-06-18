import { GameQuerry } from '../App';
import useData from './useData';

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
  rating_top:number;
} 

const useGames=(gameQuery:GameQuerry)=>{
   return useData<Game>('/games',
   {
    params:{
    genres:gameQuery.genre?.id,
    parent_platforms:gameQuery.platform?.id,
    ordering:gameQuery.sort,
    search:gameQuery.search
      }
    },
   [gameQuery]
   );

}

export default useGames;