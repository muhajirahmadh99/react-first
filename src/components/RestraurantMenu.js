import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestraurantMenu from "../utils/useRestraurantMenu";
import RestraurantCategory from "./RestraurantCategory";

const RestraurantMenu = () => {
  // Fetch restaurant menu data using the resId parameter from the URL

  const { resId } = useParams();

  const resInfo = useRestraurantMenu(resId);

  const [showIndex, setShowIndex] = useState();

  if (resInfo === null) return <Shimmer />;

  // const { name, cuisines, costForTwoMessage } =
  //   resInfo?.cards[2]?.card?.card?.info;

  // const { itemCards } =
  //   resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;

  // const categories =
  //   resInfo?.cards[4].groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
  //     (c) =>
  //       c.card?.["card"]?.["@type"] ===
  //       "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
  //   );

  // console.log(categories);

   // Add additional checks to ensure properties exist before destructuring
   const restaurantInfo = resInfo?.cards?.[2]?.card?.card?.info || {};
   const { name, cuisines, costForTwoMessage } = restaurantInfo;
 
   const categories =
     resInfo?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter(
       (c) =>
         c.card?.["card"]?.["@type"] ===
         "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
     ) || [];
  return (
    <div className="text-center">
      <h1 className="font-bold my-3 text-2xl">{name}</h1>
      <h2 className="font-bold text-lg">
        {cuisines} - {costForTwoMessage}
      </h2>
      {categories.map((category, index) => (
        // controlled component
        <RestraurantCategory
          key={category?.card?.card?.title}
          data={category?.card?.card}
          showItems={index === showIndex ? true : false }
          setShowIndex={() => setShowIndex(index)}
        />
      ))}
    </div>
  );
};

export default RestraurantMenu;
