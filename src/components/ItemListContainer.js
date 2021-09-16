import * as React from "react";
import Card from "./Card";

const ItemListContainer = () => {
    return (        
        <div className="flex items-center inline-block gap-8 ml-7">
            <Card 
                title="Producto 1"
                description="Esta es la descripción del producto 1"
                image="https://images.unsplash.com/photo-1484723091739-30a097e8f929?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=387&q=80"
            />
            <Card 
                title="Producto 2"
                description="Esta es la descripción del producto 2"
                image="https://images.unsplash.com/photo-1467003909585-2f8a72700288?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80"
            />
            <Card 
                title="Producto 3"
                description="Esta es la descripción del producto 3"
                image="https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
            />
            <Card 
                title="Producto 4"
                description="Esta es la descripción del producto 4"
                image="https://images.unsplash.com/photo-1587913956756-4fcf4833241d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=334&q=80"
            />
        </div>        
    );
}

export default ItemListContainer;