let navbar = () => {
    return `
    <div id="navbar">
    <img src="https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,h_256,w_256,f_auto,q_auto:eco,dpr_1/tbvbvipimh2camf5nb2q" alt="">
    <input id="search" type="text" placeholder="Search Free High-Resolution Photos">
    <p>
        <a href="#">Advertise</a>
    </p>
    <p>
        <a href="#">Blog</a>
    </p>
    <button>Submit a Photo</button>
    <div id="itags">
        <i class="fa-solid fa-bell"></i>
        <i class="fa-solid fa-user"></i>
        <i class="fa-solid fa-bars"></i>
    </div>
    
</div>

<div id="categories">
    <p id="current">Current Events</p>
    <p id="wall"> Wallpapers </p>
    <p id="3d"> 3D Renders</p>
    <p id="textures">Textures </p>
    <p id="exp"> Experimental</p>
    <p id="arc"> Architecture</p>
    <p id="marvel"> Marvel</p>
    <p id="anime"> Anime</p>
    <p id="fashion"> Fashion</p>
    <p id="food"> Food</p>
    <p id="cosmic"> Cosmos</p>
</div>
    `
}

export {navbar}