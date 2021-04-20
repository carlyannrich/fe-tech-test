import React from 'react';
import PropTypes from 'prop-types';

import StyledTitle from './title.style';

const Title = ({ title = 'Title' }) => (
    <StyledTitle>
        <section className="content-section">
            <div className="title">
                {title && <h1>{title}</h1>}
            </div>
        </section>
    </StyledTitle>
);

Title.propTypes = {
    title: PropTypes.string.isRequired,
};

export default Title;