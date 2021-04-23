import styled from 'styled-components';

import device from '../../assets/device';


const StyledCloseButton = styled.div`
button {
    border: none;
    background: none;
    position: absolute;
    z-index: 2;
}

.closebutton-section {
  align-items: flex;
  text-align: right;


      @media ${device.tablet} {


    }
    @media ${device.laptop} {

    }
}

.closebutton {
  cursor: pointer;
  font-size: 30px;
  font-family: 'Arial';
  font-weight: 500;
  line-height: 1.2;
    position: relative;
    top: -225px;
    right: 5%;


    @media ${device.tablet} {
    top: -225px;
    right: 5%;

    }
    @media ${device.laptop} {
        top: -200px;
        right: 5%;

    }
}
`;

export default StyledCloseButton;