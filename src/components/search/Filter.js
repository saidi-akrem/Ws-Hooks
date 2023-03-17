import React from 'react'
import StarRatingComponent from 'react-star-rating-component';
const Filter = ({seachMov,rateMovies}) => {
  return (
    <div className='Filter'>
        <input type="text" placeholder='Search...' onChange={(e)=>seachMov(e.target.value)}  />
       <br />
       <StarRatingComponent
    name="start" /* name of the radio input, it is required */
    starColor="#F2BE22" /* color of selected icons, default `#ffb400` */
    emptyStarColor="#333" /* color of non-selected icons, default `#333` */
    onStarClick={(value)=>rateMovies(value)} /* on icon click handler */
/>
    </div>
  )
}

export default Filter