import { useState,useEffect, useCallback } from "react";

const useCurrencyFullName=( )=>{

    const [name, setName] = useState({})
    useEffect(()=>{
        fetch("/currencyFullName.json")
        .then((res)=>res.json())
        .then((res)=> setName(res))
    })

    return name
}

export default  useCurrencyFullName