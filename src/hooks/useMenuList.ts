import { useState } from 'react';
import useData from './useData';

interface MenuList{
    id:number;
    name:string;
    slug:string;
}

const useMenuList=()=>{
    return useData<MenuList>('/platforms/lists/parents')
}

export default useMenuList;