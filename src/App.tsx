import React, {useState} from 'react';
import './App.css';
import Block from "./components/Box/Block";

interface IBLock{
    hasItem: boolean;
    clicked: boolean;
}

function App() {
    let tries:number = 0;
    const createItems=()=>{
        let box:IBLock[] =  [];
        const randomIndex = Math.floor(Math.random() * (35 + 1));

        for(let i=1;i <= 36;i++){
            box.push({hasItem: false, clicked: false});
        }

        box[randomIndex].hasItem = true;
        return box;
    }

    const [items, setItems] = useState(createItems());
    const [count,setCount]=useState(0);

    const ShowBlockContent = (index:number,hasItem:boolean) =>{
        const itemsCopy = [...items];
        const itemCopy = {...itemsCopy[index]};
        itemCopy.clicked = true;
        itemsCopy[index]=itemCopy;
        setItems(itemsCopy);
        if(!hasItem){
            setCount(count + 1);
        }else{
            alert('Вы нашли клад');
        }
    }


  return (
    <div className="App">
        <div className="box">
            {items.map((item,index)=>{
                return(
                    <Block
                        hasItem={item.hasItem}
                        clicked={item.clicked}
                        key={index}
                        onClickBlock={()=>ShowBlockContent(index,item.hasItem)}
                    />
                )
            })}
            <p>Количество попыток:{count}</p>
        </div>

    </div>
  );
}

export default App;
