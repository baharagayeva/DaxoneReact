import { useEffect, useState } from "react";
const BASE_URL = 'https://localhost:7046/api'
const CATEGORY_URL = 'https://localhost:7046/api/Category'
const token = localStorage.getItem('token');

const getAllData = (entityName, setEntities) => {
    fetch(`${BASE_URL}/${entityName}`, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
        .then(response => response.json())
        .then(data => {
            setEntities(data);
        })
        .catch(error => console.error('Error fetching data:', error));
}

const DataFetch = (url) => {

    const [category, setCategory] = useState([])
// try {
//     // const res = await fetch(url);
//     // return await res.json();
//     fetch(url)
//     .then(res => res.json())
//     .then(body => console.log(body))
// } catch (error) {
//     console.error("Could not fetch")
// }
useEffect(() =>{
    fetch(url)
    .then(res => res.json)
    .then(data =>setCategory({res:data}))
    .catch(err => console.log("Could not fetch"))

},[])




};



export {getAllData, token}