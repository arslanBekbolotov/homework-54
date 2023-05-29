import React from 'react';
import Block from "./Block";
import {IBlock} from "../../types";


interface IProps {
    items:IBlock[];
    ShowBlockContent:(index:number,hasItem:boolean,clicked:boolean)=>void;
}
const Box:React.FC<IProps> = ({items,ShowBlockContent}) => {
    return (
        <div className="box">
            {items.map((item,index)=>{
                return(
                    <Block
                        hasItem={item.hasItem}
                        clicked={item.clicked}
                        key={index}
                        onClickBlock={() => ShowBlockContent(index,item.hasItem,item.clicked)}
                    />
                )
            })}
        </div>
    );
};

export default Box;