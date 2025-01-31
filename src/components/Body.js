import { useEffect, useState, useContext } from "react";
import RestraurantCard, { withOpenLabel } from "./RestraurantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Body = () => {
  const [listofRestraurants, setListofRestraurants] = useState([]);
  const [filteredRestraurant, setFilteredRestraurant] = useState([]);

  const [searchText, setSearchText] = useState("");

  const RestraurantCardOpen = withOpenLabel(RestraurantCard);
  useEffect(() => {
    fetchData();
    // Make API call here and set the state with the response
  }, []);
  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=13.0843007&lng=80.2704622&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();

    // console.log(
    //   json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    // );

    setListofRestraurants(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );

    setFilteredRestraurant(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };
  // if (listofRestraurants.length === 0) {
  //   return <Shimmer />
  // }

  const onlineStatus = useOnlineStatus();

  const { setUserName, loggedInUser } = useContext(UserContext);

  if (onlineStatus === false)
    return (
      <h1>Looks like Your Offline..Please Check Your Internet Connect !!</h1>
    );

  return listofRestraurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="">
        <div className="flex p-4 gap-4 ">
          <input
            data-testid="searchInput"
            className=" ring-1 ring-green-300 rounded-md p-2"
            type="text"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />

          <button
            className=" bg-slate-200 p-2 rounded-md"
            onClick={() => {
              // console.log("Searching...");
              const filteredRestraurant = listofRestraurants.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );

              setFilteredRestraurant(filteredRestraurant);
            }}
          >
            Search
          </button>

          <button
            className="bg-slate-200 p-2 rounded-md"
            onClick={() => {
              const filterList = listofRestraurants.filter(
                (res) => res.info.avgRating > 4.5
              );
              setFilteredRestraurant(filterList);
              // console.log("Filtered");
            }}
          >
            Top Rated Restraurant
          </button>
          <div className="">
            <label>UserName</label>
            <input
              type="text"
              className="border border-black p-2 rounded-md mx-2"
              value={loggedInUser}
              onChange={(e) => setUserName(e.target.value)}
            />
          </div>
        </div>
      </div>

      <div className="flex flex-wrap justify-center">
        {filteredRestraurant.map((restaurant) => (
          <Link
            className="linkTags"
            key={restaurant.info.id}
            to={"/restraurants/" + restaurant.info.id}
          >
            {restaurant.info.isOpen ? (
              <RestraurantCardOpen resData={restaurant} />
            ) : (
              <RestraurantCard resData={restaurant} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
