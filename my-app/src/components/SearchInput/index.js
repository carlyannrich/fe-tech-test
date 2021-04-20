import React from 'react';
import PropTypes from 'prop-types';

import StyledSearchInput from './searchinput.style';
import imagesrc from '../../searchicon.svg';

const SearchInput = ({ placeholder = 'Enter city name...' }) => (
    <StyledSearchInput>
        <section className="content-section">
            <div className="content"> 
            <div id="searchArea">
                    <img src={imagesrc} alt=""/>
                <input type="text" placeholder={placeholder}/>
            </div>
            </div>
        </section>
    </StyledSearchInput>
);

SearchInput.propTypes = {
    placeholder: PropTypes.string.isRequired,
};

export default SearchInput;