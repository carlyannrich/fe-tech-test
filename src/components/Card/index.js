import React from 'react';
import PropTypes from 'prop-types';

import StyledCard from './card.style';
import Button from '../Button';

const Card = ({ timeContent = 'Updated an hour ago', placeContent = 'test content', regionContent = 'test content', valuesContent = 'test content', onClickHandle = () => {} }) => {
   
    return (
    <StyledCard>
        <section className="cardcontent-section">
            <div className="card">
                <div>
                    <Button onClickHandle={onClickHandle} />
                </div>
                <ul>
                    <li className="timeContent">
                            <div className="content">
                            {<h3>{timeContent}</h3>}
                            </div>
                    </li>
                    <li className="placeContent">
                        <div className="content">
                            {<h3>{placeContent}</h3>}
                        </div>
                    </li>
                    <li className="regionContent">
                        <div className="content">
                            {<h3>{regionContent}</h3>}
                        </div>
                    </li>
                    <li className="valuesContent">
                        <div className="content">
                            {<h3>{valuesContent}</h3>}
                        </div>
                    </li>
                </ul>
            </div>
        </section>
    </StyledCard>
)};

Card.propTypes = {
    timeContent: PropTypes.string.isRequired,
    placeContent: PropTypes.string.isRequired,
    regionContent: PropTypes.string.isRequired,
    valuesContent: PropTypes.string.isRequired,
};

export default Card;