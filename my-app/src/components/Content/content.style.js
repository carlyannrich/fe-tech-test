import styled from 'styled-components';

import device from '../../assets/device';


const StyledContent = styled.div`
.content-section {
  margin: 0 auto;
  width: 98%;

      @media ${device.tablet} {
      width: 90%;
    }
    @media ${device.laptop} {
      width: 70%;
    }
}
.grid-container {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  gap: 0px 0px;
  grid-template-areas: "content content content content" ". button button ." ". . . .";
}

.content {
  grid-area: content;
  display: flex;
  justify-content: center;
  margin: 0% 5% 0% 5%;

    @media ${device.tablet} {
      margin: 0% 10% 0% 10%;
    }
    @media ${device.laptop} {
      margin: 0% 16% 0% 16%;
    }
}
h2 {
  font-family: 'Roboto';
  font-weight: 400;
  font-size: 20px;
  line-height: 1.3;
  text-align: center;
  color: #fff;
  margin: 3% 0% 3% 0%;

    @media ${device.tablet} {
      font-size: 20px;
        line-height: 1.3;
          margin: 3% 0% 3% 0%;
    }
    @media ${device.laptop} {
      font-size: 25px;
        line-height: 1;
          margin: 1% 0% 1% 0%;
    }
}
`;

export default StyledContent;