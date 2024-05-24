import { useEffect, useState } from "react";
const iniAray: number[] = [1, 2, 3];
const url: string = "https://api.npoint.io/a314bf0c883bc3f6dd13";

function counter() {
  //   const [count, setCount] = useState<number>(0);

  //   let data:any = [];
  const [data, setData] = useState();
  const getData = async () => {
    const respon = await fetch(url);
    setData(await respon.json());
  };
  useEffect(() => {
    //     setInterval(() => {
    //       setCount((prev)=>{
    //         prev+1
    //         return iniAray[prev]
    //       });
    //     }, 1000);

    getData();
  },[]);
  return <p>{JSON.stringify(data)}</p>;
}

export default counter;
