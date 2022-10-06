function Pill ({name, isBlack}){
    let color;
    if (isBlack) color = "p-1 m-2 border rounded-full bg-black text-white";
    else color = "p-1 m-2 border rounded-full bg-gray-200 hover:bg-gray-300"
    return(
        <span className= {color}>{name}</span>
    );
}

const names = [
    'Music',
    'React',
    'Gaming',
    'C++',
    'Recently Uploaded',
    'HTML',
    'Mixes',
    'History',
    'CSS',
    'Lessons',
    'jQury',
    'Java Script',
    'Street Food',
    'PHP',
    'Computers',
    'Python',
    'News',
    'Article',
    'BootStrap'
];

const pills = names.map(x => <Pill name = {x}/>);

function MenuBar() {
    return(
        <div className="flex flex-row w-full mt-2 ml-5">
            
            <Pill name = 'All' isBlack={true}/>
            {pills}
        </div>
    );
}

export default MenuBar;