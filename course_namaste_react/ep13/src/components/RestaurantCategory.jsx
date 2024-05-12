import { useState } from "react";
import ItemsList from "./ItemsList";

const RestaurantCategory = ({ data, showItems, setShowIndex }) => {
  //   console.log("props", data);
  const { title } = data;
  // an accordian item with header and body

  // const [showItems, setShowItems] = useState(false);

  const handleClick = () => {
    console.log("clicked again");
    setShowIndex();
  };

  return (
    <div>
      <div className="w-6/12 mx-auto my-4 bg-gray-50 shadow-lg p-4">
        {/* /header */}
        <div
          className="flex justify-between cursor-pointer"
          onClick={handleClick}
        >
          <span className="font-bold text-lg">
            {title} ({data.itemCards.length})
          </span>
          <span>🔽</span>
        </div>
        {/* accordian body */}
        {showItems ? <ItemsList items={data.itemCards} /> : ""}
      </div>
    </div>
  );
};

export default RestaurantCategory;
