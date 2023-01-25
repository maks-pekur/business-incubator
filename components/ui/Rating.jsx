const StarRating = ({ value }) => {
  return (
    <div className="py-2">
      {[...Array(5)].map((star, index) => {
        index += 1;
        return (
          <span
            className={index <= value ? "text-yellow-400" : "text-gray-400"}
          >
            &#9733;
          </span>
        );
      })}
    </div>
  );
};

export default StarRating;
