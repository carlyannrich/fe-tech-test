import styled from 'styled-components';

import device from '../../assets/device';


const StyledContent = styled.div`
.content-section {
  margin: 0 auto;
  width: 70%;
}

.title {
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

.content {
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