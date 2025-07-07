import React from "react";
import { FaHeart, FaPlus, FaMinus, FaShoppingBag } from "react-icons/fa";

const products = [
    {
        id: 1,
        image: "/assets/picture1.png",
        category: "Vegetables",
        name: "Farm fresh organic fruits 250g",
        price: 7.99,
        discount: "25%",
    },
    {
        id: 2,
        image: "/assets/orange.jpeg",
        category: "Fruits",
        name: "Farm fresh organic orange 1kg",
        price: 11.0,
    },
    {
        id: 3,
        image: "/assets/culiflower.jpeg",
        category: "vegetables",
        name: "Farm fresh organic culiflower 500g",
        price: 11.0,
        discount: "25%",
    },
    {
        id: 4,
        image: "/assets/fruitscollection.jpeg",
        category: "Fruits",
        name: "Full Fresh organic orange 500g",
        price: 11.0,
        discount: "25%",
    },
    {
        id: 5,
        image: "/assets/fruits.jpg",
        category: "Fruits",
        name: "Farm fresh organic fruits 250g",
        price: 7.99,
        discount: "25%",
    },
    {
        id: 6,
        image: "/assets/drink1.jpeg",
        category: "Drinks",
        name: "Farm fresh organic tea 100g",
        price: 11.0,
    },
    {
        id: 7,
        image: "/assets/nuts.jpeg",
        category: "Nuts",
        name: "Farm fresh organic bone 500g",
        price: 11.0,
    },
    {
        id: 8,
        image: "/assets/drink2.jpeg",
        category: "Drinks",
        name: "Full Fresh organic juice 500ml",
        price: 11.0,
    },
];

const PopularProducts = () => {
    return (
        <section className="py-10 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4">
                <h2 className="text-3xl font-semibold text-center mb-6">
                    Most Popular <span className="text-green-600">Products</span>
                </h2>

                {/* Tabs */}
                <div className="flex justify-center gap-4 mb-8">
                    {["All", "Vegetables", "Meat", "Drinks"].map((tab) => (
                        <button
                            key={tab}
                            className="bg-gray-200 px-4 py-1.5 rounded-full text-sm hover:bg-green-500 hover:text-white transition"
                        >
                            {tab}
                        </button>
                    ))}
                </div>

                {/* Product Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                    {products.map((product) => (
                        <div
                            key={product.id}
                            className="bg-white rounded-xl shadow-sm p-4 relative"
                        >
                            {product.discount && (
                                <span className="absolute top-2 left-2 bg-orange-500 text-white text-xs px-2 py-0.5 rounded">
                                    {product.discount}
                                </span>
                            )}
                            <FaHeart className="absolute top-2 right-2 text-gray-400 hover:text-red-500 cursor-pointer" />

                            <img
                                src={product.image}
                                alt={product.name}
                                className="w-full h-36 object-contain mb-3"
                            />
                            <p className="text-xs text-gray-500 mb-1 uppercase">
                                {product.category}
                            </p>
                            <h3 className="text-sm font-medium mb-2">{product.name}</h3>
                            <p className="text-sm font-semibold text-green-600 mb-3">
                                ${product.price.toFixed(2)}
                            </p>

                            {/* Quantity + Add */}
                            <div className="flex justify-between items-center">
                                <div className="flex items-center gap-2 text-xs text-gray-700">
                                    <button className="border rounded p-1">
                                        <FaMinus size={10} />
                                    </button>
                                    <span>1</span>
                                    <button className="border rounded p-1">
                                        <FaPlus size={10} />
                                    </button>
                                </div>

                                <button className="bg-green-500 text-white p-2 rounded-full">
                                    <FaShoppingBag />
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default PopularProducts;
