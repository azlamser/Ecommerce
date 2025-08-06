import { useEffect, useState } from "react";
import BoyDetail from "./Boys";
function Store(){
const[cloth,setcloth]=useState(null)

useEffect(()=>{
        async function data(){
const url = 'https://apidojo-hm-hennes-mauritz-v1.p.rapidapi.com/products/list?country=us&lang=en&currentpage=0&pagesize=30&categories=men_all&concepts=H%26M%20MAN';
const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': '987147dc18mshb6a787ad633573dp1c5334jsn65e3570d3ea5',
		'x-rapidapi-host': 'apidojo-hm-hennes-mauritz-v1.p.rapidapi.com'
	}
};

try {
	const response = await fetch(url, options);
	const result = await response.json();
	console.log(result);
    setcloth(result)
} catch (error) {
	console.error(error);
}}

data()
},[])

return(
    <>
    <h1 className="text-center text-5xl uppercase underline text-orange-200 decoration-amber-600">gents cloth</h1>
    <div className="flex flex-wrap justify-center ">
    {cloth && cloth.results ? (
        cloth.results.map((e)=>{
            return <BoyDetail  title={e.name} image={e.images[0].baseUrl} price={e.price.value}/>
        })

    ):
    <>
    
    <BoyDetail/>
    <BoyDetail/>
    <BoyDetail/>
    <BoyDetail/>
    <BoyDetail/>
    <BoyDetail/>
    <BoyDetail/>
    <BoyDetail/>
    <BoyDetail />
    </>
    }
    </div>
    </>
)


}


export default Store