import ItemList from "./ItemList";

// showItems comes from the parent restraurantMenu //
const RestraurantCategory = ({ data, showItems, setShowIndex }) => {
  handleClick = () => {
    setShowIndex();
  };
  return (
    <div className="w-6/12 mx-auto my-4 bg-gray-50 shadow-lg p-4 ">
      <div
        className="flex justify-between cursor-pointer"
        onClick={handleClick}
      >
        <div>
          {data.title} ({data.itemCards.length})
        </div>
        <div>🔽</div>
      </div>

      {showItems && <ItemList items={data.itemCards} />}
    </div>
  );
};

export default RestraurantCategory;
