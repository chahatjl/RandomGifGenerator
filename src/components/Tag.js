
import React, {useState }  from "react";
import useGif from "../hooks/useGif";
import { Spinner } from "./Spinner";

const API_KEY=process.env.REACT_APP_GIPHY_API_KEY;
export default function Tag()
{
    // const[gif,setGif]=useState('');
    // const[loading,setLoading]=useState('false');
    const[tag,setTag]=useState('');
    

    // async function fetchData()
    // {
    //     setLoading(true);
    //     const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${tag}`;
    //    const {data} = await axios.get(url);
    //    const imageSource=data.data.images.downsized_large.url;
    //    setGif(imageSource);
    //    setLoading(false);
    // }

    // useEffect(()=>
    // {
    //     fetchData();
    // },[])
    // function clickHandler()
    // {
    //     fetchData();
    // }

    const{gif,loading,fetchData}=useGif(tag);

    function changeHandler(e)
    {
        setTag(e.target.value);
    }
    return (
        <div className="w-1/2 bg-blue-600 rounded-lg
        border border-black flex flex-col items-center gap-y-5 mt-[15px]">
            <h1 className=" mt-[15px] text-2xl underline uppercase font-bold">Random {tag} Gif</h1>
            {
                loading?(<Spinner/>):(<img src={gif} width="450"/>)
            }

            <input
              className="w-10/12 text-lg py-2 rounded-lg mb-[3px] text-center"
              onChange={changeHandler}
            />
            
            <button onClick={()=>fetchData(tag)}
            className='w-10/12 bg-yellow-400 text-lg py-2 rounded-lg mb-[20px]'>
                Generate
                </button>
        </div>
    )
}