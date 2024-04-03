import axios from "axios";
import React, { useEffect, useState } from "react";

const FetchAxios = ()=>{

    const [data,setData] = useState([])
    const [isLoading,setLoading] = useState(true)

    useEffect(()=>{

        const fetching = async()=>{
            await axios.get('https://dev.iqrakitab.net/api/books').then(response =>{
                if(response){
                    console.log("Books data fetched is ==> \n",response.data.data)
                    setData(response.data.data)
                    setLoading(false)
                }

            }).catch(err => console.log(err))
        }

        fetching();
    },[])


    return {isLoading,data}
}

export default FetchAxios;