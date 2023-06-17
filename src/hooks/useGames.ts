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

const useGames=(selectedGenre?:Genres | null,selectedPlatform?:MenuListProp|null)=>{
   return  useData<Game>('/games',
   {params:{genres:selectedGenre?.id,parent_platforms:selectedPlatform?.id}},
   [selectedGenre?.id,selectedPlatform?.id]);

}

export default useGames;