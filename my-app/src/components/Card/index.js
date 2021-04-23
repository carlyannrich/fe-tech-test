import React from 'react';
import PropTypes from 'prop-types';

import StyledCard from './card.style';
import CardContent from '../CardContent/index';
import CloseButton from '../CloseButton/index';

const Card = ({ timeContent = 'Updated an hour ago', placeContent = 'test content', regionContent = 'test content', valuesContent = 'test content', }) => (
    <StyledCard>
        <section className="cardcontent-section">
            <div className="card">
                <div>
                    <CloseButton />
                </div>
                <ul>
                    <li className="timeContent">
                    <CardContent content={timeContent} />
                    </li>
                    <li className="placeContent">
                    <CardContent  content={placeContent} />
                    </li>
                    <li className="regionContent">
                    <CardContent  content={regionContent} />
                    </li>
                    <li className="valuesContent">
                    <CardContent  content={valuesContent} />
                    </li>
                </ul>
            </div>
        </section>
    </StyledCard>
);

Card.propTypes = {
    timeContent: PropTypes.string.isRequired,
    placeContent: PropTypes.string.isRequired,
    regionContent: PropTypes.string.isRequired,
    valuesContent: PropTypes.string.isRequired,
};

export default Card;