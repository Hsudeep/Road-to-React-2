let imageSearch = async (query) =>{
    try{
        let res = await fetch(`https://api.unsplash.com/search/photos/?query=${query}&per_page=50&client_id=YcKGXZtQ-pIZ6Nd_hmbeai-XS_lJ59ksb2VnX98PT9I`)
        let data=await res.json()
        // console.log(data)
        return data
    
    }catch(err){
        console.log(err)
    }
}

let append = (data,container) => {
    data.forEach(({alt_description, urls:{small}})=>{
        let div= document.createElement("div")
        div.setAttribute("class", "imagesDiv")

        let img=document.createElement("img")
        img.src = small

        let p = document.createElement("p")
        p.innerText = alt_description

        div.append(img,p)
        container.append(div)
    })
}

let sortSearch = async (query) =>{
    try{
        let res = await fetch(`https://api.unsplash.com/search/photos/?order_by=${query}&per_page=50&client_id=YcKGXZtQ-pIZ6Nd_hmbeai-XS_lJ59ksb2VnX98PT9I`)
        let data=await res.json()
        // console.log(data)
        return data
    
    }catch(err){
        console.log(err)
    }
}

export {imageSearch, append, sortSearch}