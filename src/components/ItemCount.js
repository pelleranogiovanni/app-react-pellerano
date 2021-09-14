import * as React from "react";

const ItemCount = () => {
    const [counter, setCounter] = React.useState(0);

    const Add = () => {
        setCounter((prevState) => prevState + 1);
    };

    const Subtract = () => {
        setCounter(
            (prevState) => prevState - 1);
    };

    return (
        <div className="bg-white shadow-md mt-32 mx-auto w-64 p-8 rounded-lg flex items-center inline-block">
            <button className="w-24 bg-orange-500 rounded-md text-white mt-12 p-2 hover:bg-gray-500" onClick={Subtract}>-</button>
            <p className="text-xl font-semibold w-24 mt-12 p-2">{counter}</p>
            <button className="w-24 bg-orange-500 rounded-md text-white mt-12 p-2 hover:bg-gray-500" onClick={Add}>+</button>            
        </div>
    );
}

export default ItemCount;