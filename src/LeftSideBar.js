function LeftSide ({image, name}){
    const tulip = "h-[7%] w-full bg-white hover:bg-gray-200 flex flex-row mt-7";
    const rose = "h-full w-[50%] mt-1";
    const marigold = "h-full w-[50%]";
    const chinarose = "h-[60%] w-[35%] ml-5 mt-1";

    return(
            <div className={tulip}>
                <div className ={marigold}><img src={image} className={chinarose}/></div>
                <div className={rose}>{name}</div>
            </div>
    );
}

const leftSideImages = [ "youtube-images/01home.jpeg",
                         "youtube-images/01explor.jpeg",
                         "youtube-images/01shorts.jpeg",
                         "youtube-images/01yourv.jpeg",
                         "youtube-images/01library.jpeg",
                         "youtube-images/01history.jpeg",
                         "youtube-images/01yourv.jpeg",
                         "youtube-images/01wch.jpeg",
                         "youtube-images/01like.jpeg",
                         "youtube-images/downarrow.png"
];



const leftSideBarMenu = [ "Home",
                          "Explor",
                          "Shorts",
                          "Subscrip",
                          "Library",
                          "History",
                          "Videos",
                          "Watch",
                          "Liked",
                          "More"
];
                        


const leftSideMenu = leftSideImages.map((h, i) => <LeftSide image={h} name ={leftSideBarMenu[i]}/>);


function LeftSideBar() {
    return(
        <div class="w-1/12 h-full">
        <div class="w-full h-[7%]">
            <img src="youtube-images/02left.jpeg" class="h-[0%] w-[0%] mt-3 ml-2"/>
        </div>
        
        <div class="w-full h-4/6 mt-5">  
            {leftSideMenu}
        </div>
        
        <div class="w-full h-1/6"></div>
        
    </div>

    );
}
export default LeftSideBar;




