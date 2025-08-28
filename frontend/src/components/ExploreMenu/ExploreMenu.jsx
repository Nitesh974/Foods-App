import React, { useContext, useEffect, useState } from 'react';
import './ExploreMenu.css';
import { StoreContext } from '../../Context/StoreContext';

const ExploreMenu = ({ category, setCategory }) => {
  const { menu_list } = useContext(StoreContext);
  const [defaultCategory, setDefaultCategory] = useState("");

  useEffect(() => {
    // Set a default category when component mounts
    if (menu_list.length > 0) {
      setDefaultCategory(menu_list[0].menu_name); // Set the first category as default
      setCategory(menu_list[0].menu_name); // Initialize category with the default
    }
  }, [menu_list, setCategory]);

  return (
    <div className='explore-menu' id='explore-menu'>
      <h1>Top Popular Categories</h1>
      <p className='explore-menu-text'>Choose from the most mouth watering categories trending right now !!</p>
      <div className="explore-menu-list">
        {menu_list.map((item, index) => (
          <div
            onClick={() => setCategory(prev => prev === item.menu_name ? "All" : item.menu_name)}
            key={index}
            className='explore-menu-list-item'>
            <img src={item.menu_image} className={category === item.menu_name ? "active" : ""} alt="" />
            <p>{item.menu_name}</p>
          </div>
        ))}
      </div>
      <hr />
    </div>
  );
};

export default ExploreMenu;
