import React from 'react';
import PropTypes from 'prop-types';

import StyledContent from './content.style';

const Content = ({ content, title }) => (
    <StyledContent>
        <section className="content-section">
            <div className="title">
                {title && <h1>{title}</h1>}
            </div>
            <div className="content">
                {content && <h2>{content}</h2>}
            </div>
        </section>
    </StyledContent>
);

Content.propTypes = {
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
};

export default Content;