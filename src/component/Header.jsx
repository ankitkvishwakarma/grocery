import React, { useState } from "react";
import { FaSearch, FaHeart, FaShoppingCart, FaUser } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdClose } from "react-icons/md";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-green-700 text-white shadow-md">
      {/* Top Navbar */}
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <motion.div
          className="flex items-center gap-2"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
        >
          <img src="/assets/banner-img-2-1.png" alt="logo" className="w-8 h-8" />
          <span className="text-xl font-bold">Grocery.</span>
        </motion.div>

        {/* Search Bar - Desktop Only */}
        <motion.div
          className="hidden md:flex flex-1 mx-4 max-w-xl relative"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <select className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-transparent text-sm outline-none">
            <option>All Categories</option>
          </select>
          <input
            type="text"
            placeholder="Search for products..."
            className="w-full pl-32 pr-10 py-2 rounded text-sm text-lime-900"
          />
          <FaSearch className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-200" />
        </motion.div>

        {/* Icons - Desktop */}
        <motion.div
          className="hidden md:flex items-center gap-4 text-lg"
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
        >
          <motion.div whileHover={{ scale: 1.2 }} className="cursor-pointer">
            <FaHeart />
          </motion.div>

          <Link to="/cart">
            <motion.div whileHover={{ scale: 1.2 }} className="cursor-pointer">
              <FaShoppingCart />
            </motion.div>
          </Link>

          <Link to="/userlogin">
            <motion.div whileHover={{ scale: 1.2 }}>
              <FaUser className="cursor-pointer" />
            </motion.div>
          </Link>
        </motion.div>

        {/* Hamburger - Mobile */}
        <motion.button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-2xl"
          whileTap={{ scale: 0.8 }}
        >
          {mobileMenuOpen ? <MdClose /> : <GiHamburgerMenu />}
        </motion.button>
      </div>

      {/* Menu Links - Desktop */}
      <motion.nav
        className="hidden md:flex max-w-7xl mx-auto px-4 gap-6 text-sm font-medium"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        <button className="bg-yellow-400 text-black px-4 py-1.5 rounded flex items-center gap-2 font-semibold text-sm">
          <GiHamburgerMenu />
          Browse All Categories
        </button>
        {["Home", "Shop", "Fruits", "Vegetable", "Beverages", "About Us", "Blogs"].map((label, i) => (
          <Link
            key={i}
            to={label === "Home" ? "/" : "#"}
            className="hover:text-yellow-400 transition"
          >
            {label}
          </Link>
        ))}
        <select className="ml-auto text-yellow-400 bg-transparent">
          <option>Recently Viewed</option>
        </select>
      </motion.nav>

      {/* Mobile Menu with Framer Motion Animation */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            className="md:hidden px-4 pb-4 space-y-3 bg-green-800 text-sm font-medium"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex flex-col gap-2 py-2">
              <button className="bg-yellow-400 text-black px-4 py-1.5 rounded flex items-center gap-2 font-semibold text-sm w-fit">
                <GiHamburgerMenu />
                Browse All Categories
              </button>
              {["Home", "Shop", "Fruits", "Vegetable", "Beverages", "About Us", "Blogs"].map((item, i) => (
                <Link key={i} to="/" className="hover:text-yellow-400 transition">
                  {item}
                </Link>
              ))}
              <Link to="/userlogin" className="hover:text-yellow-400">Login</Link>
              <select className="text-yellow-400 bg-transparent">
                <option>Recently Viewed</option>
              </select>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
