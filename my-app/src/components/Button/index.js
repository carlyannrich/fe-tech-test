import React from 'react';

import StyledButton from './button.style';

const Button = () => {
    return (
    <StyledButton>
        <div className="button-section">
                <button type="button" aria-label="Close" className="button" aria-hidden="true" 
                
                onClick={e => {
                    this.onClick(e);
                }}
          >✕</button>
        </div>
    </StyledButton>
)};

export default Button;