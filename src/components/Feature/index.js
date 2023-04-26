import React from 'react'
import { FeatureContainer, FeatureButton } from './FeatureElement';

const FeatureElement = () => {
  return (
    <FeatureContainer>
 <h1>Pizza of the day!</h1>
 <p>Truffle tomato sauce topped with cheese and bacon</p>
     <FeatureButton>Order Now</FeatureButton>
    </FeatureContainer>
  )
}

export default FeatureElement