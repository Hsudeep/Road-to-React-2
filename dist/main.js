(()=>{"use strict";let e=async e=>{try{let t=await fetch(`https://api.unsplash.com/search/photos/?query=${e}&per_page=50&client_id=YcKGXZtQ-pIZ6Nd_hmbeai-XS_lJ59ksb2VnX98PT9I`);return await t.json()}catch(e){console.log(e)}},t=(e,t)=>{e.forEach((({alt_description:e,urls:{small:n}})=>{let i=document.createElement("div");i.setAttribute("class","imagesDiv");let a=document.createElement("img");a.src=n;let l=document.createElement("p");l.innerText=e,i.append(a,l),t.append(i)}))};document.getElementById("nav_cat").innerHTML='\n    <div id="navbar">\n    <img src="https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,h_256,w_256,f_auto,q_auto:eco,dpr_1/tbvbvipimh2camf5nb2q" alt="">\n    <input id="search" type="text" placeholder="Search Free High-Resolution Photos">\n    <p>\n        <a href="#">Advertise</a>\n    </p>\n    <p>\n        <a href="#">Blog</a>\n    </p>\n    <button>Submit a Photo</button>\n    <div id="itags">\n        <i class="fa-solid fa-bell"></i>\n        <i class="fa-solid fa-user"></i>\n        <i class="fa-solid fa-bars"></i>\n    </div>\n    \n</div>\n\n<div id="categories">\n    <p id="current">Current Events</p>\n    <p id="wall"> Wallpapers </p>\n    <p id="3d"> 3D Renders</p>\n    <p id="textures">Textures </p>\n    <p id="exp"> Experimental</p>\n    <p id="arc"> Architecture</p>\n    <p id="marvel"> Marvel</p>\n    <p id="anime"> Anime</p>\n    <p id="fashion"> Fashion</p>\n    <p id="food"> Food</p>\n    <p id="cosmic"> Cosmos</p>\n</div>\n    ',document.getElementById("search").addEventListener("keydown",(n=>{if("Enter"==n.key){let n=document.getElementById("search").value;e(n).then((e=>{console.log(e);let n=document.getElementById("container");n.innerHTML=null,t(e.results,n)}))}}));let n=document.getElementById("categories").children;function i(){console.log(this.id),e(this.id).then((e=>{console.log(e);let n=document.getElementById("container");n.innerHTML=null,t(e.results,n)}))}for(let e of n)e.addEventListener("click",i);document.getElementById("sort").addEventListener("onclick",a);let a=()=>{(async e=>{try{let t=await fetch(`https://api.unsplash.com/search/photos/?order_by=${e}&per_page=50&client_id=YcKGXZtQ-pIZ6Nd_hmbeai-XS_lJ59ksb2VnX98PT9I`);return await t.json()}catch(e){console.log(e)}})(document.getElementById("sort").value).then((e=>{console.log(e);let n=document.getElementById("container");n.innerHTML=null,t(e.results,n)}))}})();