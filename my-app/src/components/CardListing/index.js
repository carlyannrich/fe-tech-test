import React, { useState } from 'react'
import PropTypes from 'prop-types';

import Card from '../Card';
import StyledCardListing from './cardlisting.style';

const CardListing = ({ data = [] }) => {
    const [results, setResults] = useState(data);

    const removeResult = ({id}) => {
        const filterResults = results.filter((result) => result.id !== id);

        setResults(filterResults);
    }

    return (
        <StyledCardListing>
        <div className="card-listing">
            {
                results?.map((card, index) => <Card key={card?.id} {...card} onClickHandle={() => removeResult({id: card?.id})} />)
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