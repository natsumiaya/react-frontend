import React, {Component} from 'react';
import styled, {keyframes} from 'styled-components';

import { ReactComponent as Globe } from '../../assets/images/globe.svg'

const rotate = keyframes`
  from {
    transform: rotate(0deg);
    transform-origin: center;
  }
  to {
    transform: rotate(360deg);
    transform-origin: center;
  }
`;

  const SGlobe = styled(Globe)`
    position: absolute;
    top: 10vh;
    left:34vw;
    .points{
        animation:${rotate} infinite 15s linear;
        &:hover{
          animation-play-state: paused;
        }
    }
  `;

  class StyledGlobe extends Component{
      render(){
          return(
              <SGlobe />
          )
      }
  }

  export default StyledGlobe;