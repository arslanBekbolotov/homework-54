import React from 'react';
interface IProps{
    hasItem: boolean;
    clicked: boolean;
}
const Block:React.FC<IProps> = ({hasItem,clicked}) => {
    if(hasItem && clicked){
        return(
            <div className='block transparent'>
                <img src="https://cdn0.iconfinder.com/data/icons/Jewelry/256/Treasure.png" alt="treasure"/>
            </div>
        )
    }

    if(!hasItem && clicked){
        return(
            <div className='block transparent'></div>
            )
    }

    
    return (
        <div className='block'></div>
    );
};

export default Block;