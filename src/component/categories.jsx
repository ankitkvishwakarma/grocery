import React from 'react';

import veg from '../../public/assets/collection vegitable.jpg';
import fruits from '../../public/assets/fruit.png';
import milk from '../../public/assets/EggMilk.png';
import bakery from '../../public/assets/bekry.png';
import house from '../../public/assets/household.png';
import dryfruits from '../../public/assets/Dryfruits.png';

const categories = [
  { title: 'Vegetables', products: 52, image: veg },
  { title: 'Fresh Fruits', products: 48, image: fruits },
  { title: 'Milk & Eggs', products: 12, image: milk },
  { title: 'Bakery', products: 62, image: bakery },
  { title: 'House Hold', products: 25, image: house },
  { title: 'Dry Fruits', products: 8, image: dryfruits },
];

const Categories = () => {
  return (
    <section className="px-6 py-10 bg-gray-50">
      <h2 className="text-2xl font-semibold text-green-900 mb-6 text-center">Featured Categories</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
        {categories.map((item, index) => (
          <div
            key={index}
            data-aos="fade-up"
            data-aos-delay={index * 100}
            className="bg-white rounded-lg shadow p-4 text-center hover:shadow-lg transition duration-300"
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-16 h-16 object-cover rounded-full mx-auto mb-3"
            />
            <h3 className="font-semibold text-green-800">{item.title}</h3>
            <p className="text-sm text-gray-500">{item.products} Products</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Categories;
