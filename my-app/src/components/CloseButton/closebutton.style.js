import styled from 'styled-components';

import device from '../../assets/device';


const StyledCloseButton = styled.div`
button {
    border: none;
    background: none;
    z-index: 2;
    float: right;
    padding: 5%;
      @media ${device.tablet} {
        padding: 5%;
      }
      @media ${device.laptop} {
        padding: 4%;
      }
}

.closebutton-section {
  align-items: flex;
  text-align: right;
}

.closebutton {
  cursor: pointer;
  font-size: 30px;
  font-family: 'Arial';
  font-weight: 500;
  line-height: 1.2;

    @media ${device.tablet} {

    }
    @media ${device.laptop} {


    }
}
`;

export default StyledCloseButton;