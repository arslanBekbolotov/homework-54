import React from 'react';
import "./Box.css"
interface IProps{
    hasItem: boolean;
    clicked: boolean;
    onClickBlock:React.MouseEventHandler<HTMLDivElement>;
}

const Block:React.FC<IProps> = ({hasItem,clicked,onClickBlock}) => {
    if(hasItem && clicked){
        return(
            <div onClick={onClickBlock} className='block transparent'>
                <img className="boxImg" src="https://cdn0.iconfinder.com/data/icons/Jewelry/256/Treasure.png" alt="treasure"/>
            </div>
        )
    } else if(!hasItem && clicked){
        return <div onClick={onClickBlock} className='block transparent'></div>
    }else{
        return <div onClick={onClickBlock} className='block'></div>
    }

};

export default Block;