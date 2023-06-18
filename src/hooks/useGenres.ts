import useData from './useData';
import data from '../data/genres';

export interface Genres{
    id:number;
    name:string;
    image_background:string;
}

const useGenres=()=>{
    return {data,isloading:false,Error:null}
    // return useData<Genres>('/genres');
}

export default useGenres;