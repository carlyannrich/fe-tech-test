import React from 'react';
import PropTypes from 'prop-types';

import StyledCardContent from './cardcontent.style';

const CardContent = ({ content = 'test content' }) => (
    <StyledCardContent>
        <section className="content-section">
            <div className="content">
                {content && <h3>{content}</h3>}
            </div>
        </section>
    </StyledCardContent>
);

CardContent.propTypes = {
    content: PropTypes.string.isRequired,
};

export default CardContent;