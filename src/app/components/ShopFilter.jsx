"use client";
import  { useState } from "react";

const potteryCategories = [
  { id: 1, value: "mugs", label: "Mugs" },
  { id: 2, value: "plates", label: "Plates" },
  { id: 3, value: "bowls", label: "Bowls" },
  { id: 4, value: "vases", label: "Vases" },
  { id: 5, value: "teapots", label: "Teapots" },
  { id: 6, value: "cups-and-saucers", label: "Cups and Saucers" },
  { id: 7, value: "planters", label: "Planters" },
  { id: 8, value: "sculptures", label: "Sculptures" },
  { id: 9, value: "jars-and-canisters", label: "Jars and Canisters" },
  { id: 10, value: "pitchers", label: "Pitchers" },
  { id: 11, value: "tiles", label: "Tiles" },
  { id: 12, value: "dinnerware-sets", label: "Dinnerware Sets" },
  { id: 13, value: "incense-holders", label: "Incense Holders" },
  { id: 14, value: "soap-dishes", label: "Soap Dishes" },
  { id: 15, value: "candle-holders", label: "Candle Holders" },
];

const ShopFilter = () => {
  const [checkedCategory, setCheckedCategory] = useState({});
  const handleCheckbox = (value) => {
    setCheckedCategory((prev) => ({
      ...prev,
      [value]: !prev[value],
    }));
  };
  return (
    <div className="border w-60 h-auto rounded-lg shadow-gray-400 p-5">
      <div className="">
        <h1>Category</h1>
        <ul>
          {potteryCategories.map((cat) => (
            <li key={cat.id}>
              <input
                type="checkbox"
                id={`category - ${cat.value}`}
                checked={checkedCategory[cat.value] || false}
                onChange={() => handleCheckbox(cat.value)}
                className="mr-2"
              >
                {cat?.value}
              </input>
              <label htmlFor={`category-${cat.value}`} className="text-sm">
                {cat.label}
              </label>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ShopFilter;
