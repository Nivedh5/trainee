import React from 'react';
import { FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa';
const Rating = (props) => {
  let rating=props.props
  const changestars = () => {
    const star = [];
    const roundedRating = rating
    for (let i = 1; i <= 5; i++) {

      if (roundedRating >= i) {

        star.push(<FaStar/>);

      } else if (roundedRating >= i - 0.5) {

        star.push(<FaStarHalfAlt/>);
      } else {
        
        star.push(<FaRegStar/>);
      }
    }
    return star;
  };
  return <div>{changestars()}</div>;
};
export default Rating;











