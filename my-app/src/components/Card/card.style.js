import styled from 'styled-components';

import device from '../../assets/device';


const StyledCard = styled.div`
.content-section {
  margin: 0 auto;
  width: 87%;

      @media ${device.tablet} {
      width: 87%;
    }
    @media ${device.laptop} {
      width: 40%;
    }
}

.card {
  border: 1px solid #BEBEBE;
  background: #fff;
  border-radius: 10px;
  margin: 10% 0 0 0;
  width: 100%;
  height: 250px;

    @media ${device.tablet} {
        width: 100%;
        height: 250px;

    }
    @media ${device.laptop} {
        width: 100%;
        height: 200px;

    }
}
h3 {
  margin: 2% 2% 1% 2%;
  font-weight: unset;
  letter-spacing: 0.03em;
}

ul {
    list-style-type: none;
    text-align: left;
    padding: 0;
}

.timeContent {
  width: 100%;
  font-size: 14px;
  font-weight: 500;
  line-height: 1.3;
  text-align: left;
  color: #000;
  padding: 2% 2% 0 2%;


    @media ${device.tablet} {
      font-size: 10px;
      font-weight: 200;
      line-height: 1.3;
    }
    @media ${device.laptop} {
      font-size: 10px;
      font-weight: 100px;
      line-height: 1;
    }
}

.placeContent {
width: 100%
  font-family: 'Roboto';
  font-weight: bold;
  font-size: 18px;
  line-height: 1.3;
  text-align: left;
  color: #8400B7;
  padding: 1% 2% 0 2%;

    @media ${device.tablet} {
      font-size: 20px;
        line-height: 1.3;
    }
    @media ${device.laptop} {
      font-size: 25px;
        line-height: 1;
    }
}

.regionContent {
width: 100%
  font-family: 'Roboto';
  font-weight: 350;
  font-size: 17px;
  line-height: 1.3;
  text-align: left;
  color: #000;
  padding: 1% 2% 0 2%;

    @media ${device.tablet} {
      font-size: 12px;
      line-height: 1.3;
    }
    @media ${device.laptop} {
      font-size: 15px;
      line-height: 1;
    }
}

.valuesContent {
width: 100%
  font-family: 'Roboto';
  font-weight: 500;
  font-size: 18px;
  line-height: 1.3;
  text-align: left;
  color: #000;
  padding: 2% 2% 2% 2%;

    @media ${device.tablet} {
      font-size: 20px;
        line-height: 1.3;
    }
    @media ${device.laptop} {
      font-size: 25px;
        line-height: 1;
    }
}
`;

export default StyledCard;