import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'

export const SushiContainer = (props) => {
  
    console.log(props)
  return (
    <Fragment>
      <div className="belt">
        {
          props.sushiArray.map(sushi => <Sushi 
            key={sushi.id}
            sushi={sushi}
            eatSushi={props.eatSushi}
            taken={props.sushiEaten.includes(sushi.id)}
          />)
        }
        <MoreButton handleMoreClick={props.handleMoreClick}/>
      </div>
    </Fragment>
  )
}
