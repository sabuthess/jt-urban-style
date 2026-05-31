import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

interface Props {
  product_id: string;
  image_url: string;
  title: string;
  price: number;
}

export const CartModalItem = ({
  product_id,
  image_url,
  title,
  price,
}: Props) => {
  const [itemCounter, setItemCounter] = useState<number>(0);

  return (
    <article className="flex justify-between gap-4 p-3 border-b border-neutral-200 ">
      <div className="flex gap-4">
        <Link href={`/products/${product_id}`}>
          <div className="relative size-16 shrink-0">
            <Image
              src={image_url}
              alt={title}
              fill
              className="object-cover rounded-md"
            />
          </div>
        </Link>

        <div className="flex flex-col gap-2">
          <div>
            <Link href={`/products/${product_id}`}>
              <p className="font-semibold hover:underline">{title}</p>
            </Link>
            <p className="text-sm text-neutral-500">S</p>
          </div>

          <div className="flex items-center border rounded-2xl overflow-hidden w-fit">
            <button
              disabled={itemCounter === 0}
              className={`px-3 py-1 transition
    ${
      itemCounter === 0
        ? "opacity-50 cursor-not-allowed"
        : "hover:bg-neutral-100 cursor-pointer"
    }`}
              onClick={() => setItemCounter(itemCounter - 1)}
            >
              -
            </button>

            <span className="px-4 py-1 font-medium">{itemCounter}</span>
            {/* TODO: calcular la cantidad con el stock */}
            <button
              className="px-3 py-1 hover:bg-neutral-100"
              onClick={() => setItemCounter(itemCounter + 1)}
            >
              +
            </button>
          </div>
        </div>
      </div>

      <div className="flex flex-col justify-between items-end">
        <button className="text-neutral-500 hover:text-red-500">
          {/* TODO: Hacer un compoente */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
            />
          </svg>
        </button>

        <div className="text-right">
          <p className="font-bold">${(price * 7).toFixed(2)}</p>

          <p className="text-sm text-neutral-400 line-through">$140.00</p>
        </div>
      </div>
    </article>
  );
};
