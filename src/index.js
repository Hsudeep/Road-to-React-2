
import { navbar } from "../components/navbar.js";

let nav = document.getElementById("nav_cat");
nav.innerHTML = navbar();

import { imageSearch , append, sortSearch } from "./fetch.js";
let searchfn = (e) => {
    if(e.key == 'Enter'){
        let query = document.getElementById("search").value;
        imageSearch(query).then((data)=>{
            console.log(data)
            let con=document.getElementById("container")
            con.innerHTML=null;
            append(data.results, con)
        })
    }
}
document.getElementById("search").addEventListener("keydown", searchfn)

let categories = document.getElementById("categories").children

function catSearch(){
    console.log(this.id);
    imageSearch(this.id).then((data) => {
        console.log(data)
        let container = document.getElementById("container")
        container.innerHTML=null;
        append(data.results,container)
    })

}

for(let el of categories){
    el.addEventListener("click", catSearch)
}

document.getElementById("sort").addEventListener("onclick", sortsear)
let sortsear = () =>{
    
        let query = document.getElementById("sort").value;
        sortSearch(query).then((data)=>{
            console.log(data)
            let con=document.getElementById("container")
            con.innerHTML=null;
            append(data.results, con)
        })
        
    }








