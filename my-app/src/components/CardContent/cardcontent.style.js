import styled from 'styled-components';

import device from '../../assets/device';


const StyledCardContent = styled.div`
.content-section {
  margin: auto;
  width: 100%;
  display: block;

      @media ${device.tablet} {
      width: 100%;
    }
    @media ${device.laptop} {
      width: 100%;
    }
}

.content {
  width: 100%;

    @media ${device.tablet} {
        width: 100%;
    }
    @media ${device.laptop} {
        width: 100%;
    }
}
h3 {
  font-family: 'Roboto';
}
`;

export default StyledCardContent;