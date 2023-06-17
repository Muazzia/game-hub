import { useState } from 'react';
import useData from './useData';

export interface MenuListProp{
    id:number;
    name:string;
    slug:string;
}

const useMenuList=()=>{
    return useData<MenuListProp>('/platforms/lists/parents')
}

export default useMenuList;