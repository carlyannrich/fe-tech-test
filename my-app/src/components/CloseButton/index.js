import React from 'react';

import StyledCloseButton from './closebutton.style';

const CloseButton = () => (
    <StyledCloseButton>
        <section className="closebutton-section">
            <button type="button" aria-label="Close" className="closebutton">
                <span aria-hidden="true">✕</span>
            </button>
        </section>
    </StyledCloseButton>
);

export default CloseButton;