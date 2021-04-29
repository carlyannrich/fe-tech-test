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
      width: 100%;
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

button {
    float: right;
    padding: 5%;
      @media ${device.tablet} {
        padding: 5%;
      }
      @media ${device.laptop} {
        padding: 4%;
      }
}

.button-section {
  align-items: flex;
  text-align: right;
}

.button {
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

h3 {
  margin: unset;
  font-weight: unset;
  font-family: 'Roboto';

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