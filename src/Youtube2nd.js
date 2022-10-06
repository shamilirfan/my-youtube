import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

const youtubeImages = ["/image-1.jpg", 
                       "/image-2.jpg", 
                       "/image-3.jpg", 
                       "/image-4.jpg", 
                       "/image-5.jpg", 
                       "/image-6.jpg", 
                       "/image-7.jpg", 
                       "/image-8.jpg", 
                       "/image-9.jpg"
];


const rightSideBars = youtubeImages.map (z => <RightSideBar clip = {z}/>)

function Youtube2nd() {
    const params = useParams();

    return(
        <div className="flex w-full h-full">
            <div className=" w-9/12 h-full m-4">
                <img src={"youtube-images/" + params.image} className="w-full h-full" />
            </div>
            <div className="w-5/12 h-full">
                {rightSideBars}
            </div>
        </div >
    );
}



function RightSideBar ({ clip }) {
    return(
        <Link to = {clip}>
        <div className="flex flex-row mt-4 w-[60%] h-1/6 ">
            <img src={"/youtube-images" + clip} className="w-[60%] h-full" />
            <div className="m-1">
                <p className="text-lg text-bold">My React Project</p>
                <p className="text-sm">Lectures about React</p>
                <p className="text-sm ml-2"> 779k views . 4 days ago</p>
            </div>
        </div></Link>
    );
}

export default Youtube2nd;