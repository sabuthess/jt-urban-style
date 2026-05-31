import React from "react";
import { CartModalItem } from "./CartModalItem";
import { ShoppingCart as ShoppingCartIcon } from "@deemlol/next-icons";
import Link from "next/link";

export default function CartModal() {
  const products = [
    {
      id: "eradfasfas",
      image: "/img-example-3.webp",
      title: "Pantalon error",
      price: 200,
    },
    {
      id: "eradfasfas",
      image: "/img-example-2.jpg",
      title: "Camisa vaige",
      price: 500,
    },
    {
      id: "eradfasfas",
      image: "/img-example-2.jpg",
      title: "Camisa vaige",
      price: 500,
    },
    {
      id: "eradfasfas",
      image: "/img-example-2.jpg",
      title: "Camisa vaige",
      price: 500,
    },
    {
      id: "eradfasfas",
      image: "/img-example-1.jpg",
      title: "nose pero esto es un titulo",
      price: 200,
    },
  ];

  return (
    <div>
      <div className="relative group inline-block">
        {/* TODO: cambiar de color al hacer hover */}
        <ShoppingCartIcon />
        <div className="z-50 absolute -right-50 mt-4 p-4 bg-white text-black rounded shadow-[0_35px_35px_rgba(0,0,0,0.25)] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 w-[500px] h-[500px] border border-neutral-400 delay-300 ">
          <div className="flex flex-col h-full">
           
            <div className="mb-2 ">
              <h1 className="text-lg font-bold text-center">Shopping Cart</h1>
      
            </div>

        
            <div className="flex-grow overflow-y-auto pr-2">
              {products?.map((product) => (
                <CartModalItem
                  key={product.id}
                  product_id={product.id}
                  title={product.title}
                  price={product.price}
                  image_url={product.image}
                />
              ))}
            </div>

            
            <Link href="/cart" className="mt-4">
              <button className="bg-black p-2 w-full text-white cursor-pointer">
                Verificar
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
