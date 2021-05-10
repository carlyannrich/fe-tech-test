import React from 'react';
import PropTypes from 'prop-types';

import StyledSearchInput from './searchinput.style';
import imagesrc from '../../assets/searchicon.svg';

const SearchInput = ({ placeholder = 'Enter city name...', input: location, onChange: setLocation, countryList = [] }) => {
    console.log({countryList});
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
                    onChange={(e) => setLocation(e.target.value)}
                    />
                    <datalist id="locationChoices">
                        {countryList.map((data, index) => (
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