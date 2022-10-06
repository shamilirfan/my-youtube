const youtubeImages = ["image-1.jpg", 
                       "image-2.jpg", 
                       "image-3.jpg", 
                       "image-4.jpg", 
                       "image-5.jpg", 
                       "image-6.jpg", 
                       "image-7.jpg", 
                       "image-8.jpg", 
                       "image-9.jpg"
];


const rightSideBars = youtubeImages.map (z => <RightSideBar clip = {z}/>)

function Youtube4th() {
    
    return (
        <div className="flex w-full h-full">
            <div className=" w-9/12 h-full m-2">
                <img src="image-5.jpg" className="w-full h-full" />
            </div>
            <div className="w-5/12 h-full">
                {rightSideBars}
            </div>
        </div >
    );
}
function RightSideBar({ clip }) {
    return (
        <div className="w-[70%] h-2/6 flex flex-row m-2">
            <img src={clip} className="w-[50%] h-full" />
            <div className="m-1">
                <p className="text-lg text-bold">Bangladeshi Food</p>
                <p className="text-sm">Lectures about Food</p>
                <p className="text-sm">10k Views . 1 month</p>
            </div>
        </div>
    );
}
export default Youtube4th;