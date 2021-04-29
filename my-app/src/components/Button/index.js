import React from 'react';

import StyledButton from './button.style';


const Button = ({ onClickHandle = () => {}}) => {
    return (
    <StyledButton>
        <div className="button-section">
            <button type="button" aria-label="Close" className="button" aria-hidden="true" onClick={() => onClickHandle()}>✕</button>
        </div>
    </StyledButton>
)};

export default Button;