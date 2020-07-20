import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'

export const SushiContainer = (props) => {
  
    
  return (
    <Fragment>
      <div className="belt">
        {
          props.sushiArray.map(sushi => <Sushi 
            id={sushi.id}
            name={sushi.name}
            img_url={sushi.img_url}
            price={sushi.price}
          />)
        }
        <MoreButton handleMoreClick={props.handleMoreClick}/>
      </div>
    </Fragment>
  )
}
