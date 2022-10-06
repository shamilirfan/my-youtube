import MenuBar from "./MenuBar";
import Row from "./Row";
import items from "./data";


function Content(){
    const separetedItems = [];
    items.forEach((s, i) => {
       if (i % 4 === 0){
        separetedItems.push([]);
       }
       separetedItems[separetedItems.length-1].push(s);
      });
      const Rows= separetedItems.map(y => <Row items = {y}/>);
    return(
        <div class="w-11/12 h-full ml-10"> 
        <MenuBar/>
        {Rows}    
    </div>

    );
}
export default Content;

