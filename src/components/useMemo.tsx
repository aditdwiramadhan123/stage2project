import { useCallback, useMemo, useState } from "react";

function AddComponent () {
    const [count,setCount] = useState<number> (0) 
    const addValue = useMemo(()=>{
        return count+4
    },[count]) 

    const add = useCallback(()=>{
        setCount(count+1)
    },[count])

    return <>
    <p>{addValue}</p>
    <button onClick={add}></button>
    </>
}

export default AddComponent