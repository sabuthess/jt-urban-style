import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { TrashIcon } from "./ui/icons";

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
          <TrashIcon />
        </button>

        <div className="text-right">
          <p className="font-bold">${(price * 7).toFixed(2)}</p>

          <p className="text-sm text-neutral-400 line-through">$140.00</p>
        </div>
      </div>
    </article>
  );
};
