import styled from 'styled-components';

import device from '../../assets/device';

const StyledTitle = styled.div`
.content-section {
  margin: 0 auto;
  width: 70%;
}
.grid-container {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  gap: 0px 0px;
  grid-template-areas: "content content content content" ". button button ." ". . . .";
}
.title {
  grid-area: content;
  display: flex;
  justify-content: center;
  margin: 0%;
}
h1 {
  font-family: 'Roboto';
  font-size: 30px;
  line-height: 1;
  text-align: center;
  color: #fff;
  font-weight: 500;
  margin: 25% 0 5% 0;

    @media ${device.tablet} {
      font-size: 40px;
        margin: 25% 0 5% 0;
    }
    @media ${device.laptop} {
      font-size: 50px;
        margin: 8% 0 2% 0;
    }
}
`;

export default StyledTitle;