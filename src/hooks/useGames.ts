import { GameQuerry } from '../App';
import useData from './useData';
import { Genres } from './useGenres';
import { MenuListProp } from './useMenuList';

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

const useGames=(gameQuery:GameQuerry)=>{
   return  useData<Game>('/games',
   {params:{genres:gameQuery.genre?.id,
    parent_platforms:gameQuery.platform?.id
  }},
   [gameQuery.genre?.id,gameQuery.platform?.id]);

}

export default useGames;