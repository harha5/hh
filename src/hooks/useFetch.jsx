import { useEffect, useFetch } from "react";


const useFetch = url =>{
    
const [data, setData] = useState(null);
const [isLoader,setIsLoader] = useState(null);
const [error, setError] = useState(null)
useEffect(()=>{
    const fetchData = async ()=>{
        setIsLoader(true);
        try{
            const response = await fetch(url);
            if(!response.ok){
                throw new Error('Failed to fetch data');
            }
            const result = await response.json();
            setData(result);
        }
        catch(error){
            setError(error)
        } finally{
            setIsLoader(false)
        }

    };
    fetchData();

    
},[url]);
return {data, isLoader, error}
};

export default useFetch;