import React from "react";
import { FaHeart, FaShoppingCart, FaEye } from "react-icons/fa";

const ProductCard = ({ product }) => {
  return (
    <div className="border p-4 rounded-lg shadow-sm hover:shadow-md transition">
      <img src={product.image} alt={product.name} className="h-32 mx-auto" />
      <h4 className="text-center mt-2 text-sm font-semibold">{product.name}</h4>
      <p className="text-center text-green-600 font-bold">${product.price}</p>
      <p className="text-center line-through text-gray-400 text-sm">{product.oldPrice}</p>
      <div className="flex justify-center gap-2 mt-2 text-gray-600">
        <FaHeart className="hover:text-red-500 cursor-pointer" />
        <FaShoppingCart className="hover:text-green-600 cursor-pointer" />
        <FaEye className="hover:text-blue-500 cursor-pointer" />
      </div>
    </div>
  );
};

export default ProductCard;
