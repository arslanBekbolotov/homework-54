import React from 'react';

interface IProps{
    resetItems:React.MouseEventHandler;
}
const Button:React.FC<IProps> = ({resetItems}) => {
    return (
        <div>
            <button onClick={resetItems}>Reset</button>
        </div>
    );
};

export default Button;