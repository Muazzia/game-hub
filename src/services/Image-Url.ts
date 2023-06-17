import logo from '../assets/No-Image-Placeholder.svg';
const CropUrl=(url:string)=>{
    const target='media/';
    

    if(url===null) return logo;
    return url.replace(target,target+'crop/600/400/');
    

}

export default CropUrl;