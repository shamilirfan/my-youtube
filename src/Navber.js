function Navigation({name}) {
    const tulip = "text-1xl font-bold hover:text-blue-600 mt-3 ml-[2%]";
    return (
        <span className={tulip}>{name}</span>
    );
}

const names = [
    'Bangladesh',
    'International',
    'Sports',
    'Opinion',
    'Business',
    'Youth',
    'Entertainment',
    'Lifestyle'  
];

const Nav = names.map(y => <Navigation name={y}/>);


function Navbar() {
    return (
        <div className='flex flex-row w-full h-[5%] justify-center'>
            {Nav}
        </div>

    );
}

export default Navbar;
