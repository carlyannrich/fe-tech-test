import React from 'react';
import PropTypes from 'prop-types';

import StyledContent from './content.style';

const Content = ({ content = 'test content' }) => (
    <StyledContent>
        <section className="content-section">
            <div className="content">
                {content && <h2>{content}</h2>}
            </div>
        </section>
    </StyledContent>
);

Content.propTypes = {
    content: PropTypes.string.isRequired,
};

export default Content;