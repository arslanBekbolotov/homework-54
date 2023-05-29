import React, {useState} from 'react';
import './App.css';
import {IBlock} from "./types";
import Box from "./components/Box/Box";
import Button from "./components/Button/Button";
import Count from "./components/Count/Count";

function App() {
    const createItems=()=>{
        let box:IBlock[] =  [];
        const randomIndex = Math.floor(Math.random() * (35 + 1));

        for(let i=1;i <= 36;i++){
            box.push({hasItem: false, clicked: false});
        }

        box[randomIndex].hasItem = true;
        return box;
    }

    const [items, setItems] = useState(createItems());
    const [count,setCount]=useState(0);

    const ShowBlockContent = (index:number,hasItem:boolean,clicked:boolean) =>{
        const itemsCopy = [...items];
        const itemCopy = {...itemsCopy[index]};
        itemCopy.clicked = true;
        itemsCopy[index]=itemCopy;

        if(hasItem){
            setTimeout(() =>{
                const  question = window.confirm('Играть по новой');
                    if(question){
                        resetItems();
                    } else{
                        console.log('no');
                    }
            }
            ,100);

        }else if(!hasItem && !clicked){
            setCount(count + 1);
        }

        setItems(itemsCopy);
    }

    const resetItems = ()=>{
        setItems(createItems());
        setCount(0);
    }

  return (
    <div className="App">
        <Box items={items} ShowBlockContent={ShowBlockContent}/>
        <Count count={count}/>
        <Button resetItems={resetItems}/>
    </div>
  );
}

export default App;
