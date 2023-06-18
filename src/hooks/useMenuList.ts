import { useState } from 'react';
import useData from './useData';
import menuList from '../data/meuList';

export interface MenuListProp{
    id:number;
    name:string;
    slug:string;
}

const useMenuList=()=>{
    return {data:menuList,isloading:false,Error:null};

    // return useData<MenuListProp>('/platforms/lists/parents');
}

export default useMenuList;