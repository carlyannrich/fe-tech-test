import styled from 'styled-components';

import device from '../../assets/device';

const StyledCardListing = styled.div`
.card-listing {
    @media ${ device.laptop } {
        height: 100%; 
        margin: 0 20% 0 20%;
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 40px 40px;
    }
}
`;

export default StyledCardListing;
