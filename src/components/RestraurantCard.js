import { useContext } from "react";
import { CDN_URL } from "../utils/constants";
import UserContext from "../utils/UserContext";

const RestraurantCard = (props) => {
  const { resData } = props;
  // console.log(resData);
  const { name, avgRating, cuisines, costForTwo, cloudinaryImageId, sla } =
    resData?.info;
  const { loggedInUser } = useContext(UserContext);
  // const { deliveryTime } = resData?.info.sla;
  return (
    <div
      data-testid="resCard"
      className="m-4 p-4 w-[300px] h-[500px] bg-slate-400 hover:bg-slate-500 text-white rounded-md "
    >
      <img
        className="h-[300px] rounded-2xl px-2"
        src={CDN_URL + cloudinaryImageId}
        alt=""
      />
      <div className="p-4">
        <h2>{name}</h2>
        <div>
          {avgRating}
          <span style={{ color: "red" }}>☆☆☆</span>
        </div>
        <p>{cuisines.join("")}</p>
        <p>{sla.slaString}</p>
        <p>{costForTwo}</p>
        <p>user : {loggedInUser}</p>
      </div>
    </div>
  );
};

export const withOpenLabel = (RestraurantCard) => {
  return (props) => {
    return (
      <div>
        <label className="absolute rounded-lg p-2 text-center font-bold bg-blue-800 text-white">
          Open
        </label>
        <RestraurantCard {...props} />
      </div>
    );
  };
};
export default RestraurantCard;
