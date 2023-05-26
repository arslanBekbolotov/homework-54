import React from 'react';

interface IProps{
    count:number;
}
const Count:React.FC<IProps> = ({count}) => {
    return (
        <p>Количество попыток:{count}</p>
    );
};

export default Count;