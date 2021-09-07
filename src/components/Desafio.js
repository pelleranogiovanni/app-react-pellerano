import * as React from "react";

const Desafio = () => {
    const [counter, setCounter] = React.useState(0);

    const handleClick = () => {
        setCounter((prevState) => prevState + 1);
    };

    return (
        <div className="bg-white shadow-md mt-32 mx-auto w-64 p-8 rounded-lg">
            <p className="text-xl font-semibold">Clicks: {counter}</p>
            <button className="w-24 bg-orange-500 rounded-md text-white mt-12 p-2 hover:bg-gray-500" onClick={handleClick}>Suamar</button>
        </div>
    );
}

export default Desafio;