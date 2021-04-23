import styled from 'styled-components';

import device from '../../assets/device';


const StyledCard = styled.div`
.cardcontent-section {
  margin: 0 auto;
  width: 87%;

      @media ${device.tablet} {
      width: 87%;
    }
    @media ${device.laptop} {
      width: 30%;
    }
}

.card {
  border: 1px solid #BEBEBE;
  background: #fff;
  border-radius: 10px;
  margin: 10% 0 10% 0;
  width: 100%;
  height: 240px;

    @media ${device.tablet} {
        width: 100%;
        height: 250px;

    }
    @media ${device.laptop} {
        width: 100%;
        height: 180px;

    }
}
h3 {
  margin: unset;
  font-weight: unset;

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
  letter-spacing: 0.03em;
  color: #000;
  padding: 4% 5% 0 5%;


    @media ${device.tablet} {
      font-size: 10px;
      font-weight: 200;
      line-height: 1.3;
      padding: 2% 3% 0 3%;
    }
    @media ${device.laptop} {
      font-size: 12px;
      font-weight: 500;
      line-height: 1;
      padding: 5% 5% 0 5%;
    }
}

.placeContent {
width: 100%
  font-family: 'Roboto';
  font-weight: bold;
  font-size: 18px;
  line-height: 1.3;
  text-align: left;
  letter-spacing: 0.03em;
  color: #8400B7;
  padding: 3% 5% 0 5%;

    @media ${device.tablet} {
      font-size: 20px;
        line-height: 1.3;
    }
    @media ${device.laptop} {
      font-size: 20px;
        line-height: 1;
    }
}

.regionContent {
width: 100%
  font-family: 'Roboto';
  font-weight: 350;
  font-size: 18px;
  line-height: 1.3;
  text-align: left;
  letter-spacing: 0.03em;
  color: #000;
  padding: 3% 5% 0 5%;

    @media ${device.tablet} {
      font-size: 12px;
      line-height: 1.3;
    }
    @media ${device.laptop} {
      font-size: 15px;
      line-height: 1;
      padding: 4% 5% 0 5%;
    }
}

.valuesContent {
width: 100%
  font-family: 'Roboto';
  font-weight: 450;
  font-size: 17px;
  line-height: 1.3;
  text-align: left;
  letter-spacing: 0.02em;
  color: #000;
  padding: 3% 5% 0 5%;

    @media ${device.tablet} {
      font-size: 20px;
      line-height: 1.3;
    }
    @media ${device.laptop} {
      font-size: 15px;
      font-weight: 500;
      line-height: 1;
      padding: 4% 5% 0 5%;
    }
}
`;

export default StyledCard;