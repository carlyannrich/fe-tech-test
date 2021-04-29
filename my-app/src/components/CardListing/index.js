import React from 'react'
import PropTypes from 'prop-types';

import Card from '../Card';
import StyledCardListing from './cardlisting.style';

const CardListing = ({ data }) => {

    return (
        <StyledCardListing>
        <div className="card-listing">
            {
                data?.map((card, index) => <Card key={card?.id} {...card} />)
            }
        </div>
        </StyledCardListing>
    )
}

CardListing.propTypes = {
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
};

export default CardListing;