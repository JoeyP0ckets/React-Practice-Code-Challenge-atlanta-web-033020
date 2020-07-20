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
            sushi={sushi}
            eatSushi={props.eatSushi}
            sushiEaten={props.sushiEaten}
          />)
        }
        <MoreButton handleMoreClick={props.handleMoreClick}/>
      </div>
    </Fragment>
  )
}
