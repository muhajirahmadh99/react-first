import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";
import { CDN_URL } from "../utils/constants";

const ItemList = ({ items }) => {
  const dispatch = useDispatch();

  const handleAddItem = (item) => {
    dispatch(addItem(item));
  };
  // console.log(items);
  return (
    <div>
      {items.map((item) => (
        <div
          data-testid="foodItems"
          key={item.card.info.id}
          className="p-3 m-2 border-gray-300 border-b-2 text-left flex justify-between items-center gap-3"
        >
          <div className="w-9/12">
            <h3 className="text-lg font-bold">{item.card.info.name}</h3>
            <h3>
              ₹{" "}
              {item.card.info.price
                ? item.card.info.price / 100
                : item.card.info.defaultPrice / 100}
            </h3>
            <p className="text-xs ">{item.card.info.description}</p>
          </div>
          <div className="w-3/12">
            <div className="absolute">
              <button
                className="p-2 bg-white shadow-lg rounded-lg"
                onClick={() => handleAddItem(item)}
              >
                Add +
              </button>
            </div>
            <img
              src={CDN_URL + item.card.info.imageId}
              className="w-40 h-32 rounded-xl"
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
