import React from "react";

import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import StarRatingComponent from 'react-star-rating-component';

const MoviesCard = ({movie}) => {
  return (
    <div className="cards">
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={movie.imgs} style={{width:"'18rem'" , height:"150px"}}/>
        <Card.Body>
          <Card.Title>{movie.title}</Card.Title>
          <Card.Text>
          {movie.description}
          </Card.Text>
          <StarRatingComponent
            name="star" /* name of the radio input, it is required */
            value={movie.rate} /* number of selected icon (`0` - none, `1` - first) */
            editing={false} /* is component available for editing, default `true` */
/>
         
        </Card.Body>
      </Card>
    </div>
  );
};

export default MoviesCard;
