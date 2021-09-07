import * as React from "react";

const NavBar = () => {
    return (
        <div>
            <header className="min-h-screen bg-gray-100">
                <nav className="flex items-center justify-between p-6 h-20 bg-white shadow-md w-full">
                    <div className="">
                        <img className="w-12 h-12" src="./logo.png"></img>
                    </div>
                    <ul className="">
                    <li className="space-x-5 text-xl justify-between w-full">
                        <a href="#" className=" sm:inline-block text-gray-700 mx-4 hover:text-orange-700">Home</a>
                        <a href="#" className=" sm:inline-block text-gray-700 mx-4 hover:text-orange-700">About</a>
                        <a href="#" className=" sm:inline-block text-gray-700 mx-4 hover:text-orange-700">Servics</a>
                        <a href="#" className=" sm:inline-block text-gray-700 mx-4 hover:text-orange-700">Products</a>
                    </li>
                    <div className="sm:hidden space-y-1 hover:cursor-pointer">
                        <span className="w-10 h-1 bg-gray-600 rounded-full block"></span>
                        <span className="w-10 h-1 bg-gray-600 rounded-full block"></span>
                        <span className="w-10 h-1 bg-gray-600 rounded-full block"></span>
                    </div>
                    </ul>
                </nav>
            </header>
        </div>
    );
}

export default NavBar;