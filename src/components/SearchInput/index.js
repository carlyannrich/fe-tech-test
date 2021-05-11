import React, { useState}  from 'react';
import PropTypes from 'prop-types';

import StyledSearchInput from './searchinput.style';
import imagesrc from '../../assets/searchicon.svg';

const SearchInput = ({ placeholder = 'Enter city name...', onChange: setLocation, cityList = [] }) => {
    const [location, setInput] = useState('');
    const updateInput = event => {
        setInput(event.target.value);
    };
    return (
    <StyledSearchInput>
        <section className="content-section">
            <div className="content"> 
            <div id="searchArea">
                    <img src={imagesrc} alt=""/>
                    <input 
                    list="locationChoices"
                    type="text" 
                    aria-label="Search a city" 
                    placeholder={placeholder}
                    value={location}
                    onChange={updateInput}
                    />
                    <datalist id="locationChoices">
                        {cityList?.map((data, index) => (
                            <option value={data?.name} />
                        ))}     
                    </datalist>
            </div>
            </div>
        </section>
    </StyledSearchInput>
    );
}

SearchInput.propTypes = {
    placeholder: PropTypes.string.isRequired,
};

export default SearchInput;