import styled from 'styled-components';

import device from '../../assets/device';

const StyledCardListing = styled.div`
.grid - container {
    @media ${ device.laptop } {
        display: grid;
        grid - template - columns: 1fr 1fr 1fr 1fr;
        grid - template - rows: 1fr 1fr 1fr;
        gap: 0px 0px;
        grid - template - areas:
        "Card-1 Card-1 Card-2 Card-2"
        ". . . ."
        ". . . .";
    }
}

.Card - 1 {
    @media ${ device.laptop } {
        grid - area: Card - 1;
    }
}

.Card - 2 {
    @media ${ device.laptop } {
        grid - area: Card - 2;
    }
}
`;

export default StyledCardListing;
