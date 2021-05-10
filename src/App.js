import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import './App.css';
import Content from './components/Content/index';
import SearchInput from './components/SearchInput/index';
import CardListing from './components/CardListing';

const App = () => {
  const title = 'Compare your Air';
  const pageContent = {
    content: [
      {
        id: 1,
        content: "Compare the air quality between cities in the UK.",
      },
      {
        id: 2,
        content: 'Select cities to compare using the search tool below.',

      },
    ],
  };
  const data = {
    results: [

      {
        id: 1,
        timeContent: "Updated an hour ago".toUpperCase(),
        placeContent: 'Manchester Piccadilly',
        regionContent: 'in Manchester, United Kingdom',
        valuesContent: 'Values: PM25: 9, SO2: 32, O3: 8, NO2: 43',
      },
      {
        id: 2,
        timeContent: "Updated 6 weeks ago".toUpperCase(),
        placeContent: 'Milton Keynes',
        regionContent: 'in Milton Keynes, United Kingdom',
        valuesContent: 'Values: PM25: 9, SO2: 32, O3: 8, NO2: 43',
      },
    ],
  };

  const [input, setInput] = useState('');
  const [countryListDefault, setCountryListDefault] = useState();
  const [countryList, setCountryList] = useState();

  // fetching UK cities data from OpenAQ API
  const fetchData = async () => {
    return await fetch('https://restcountries.eu/rest/v2/all')
      .then(response => response.json())
      .then(data => {
        setCountryList(data)
        setCountryListDefault(data)
      });
  }

  const updateInput = async (input) => {
    const filtered = countryListDefault.filter(country => {
      return country.name.toLowerCase().includes(input.toLowerCase())
    })
    setInput(input);
    setCountryList(filtered);
  }

  useEffect(() => { fetchData() }, []);

  return (
    <div className="App">
      <div className="content grid-container">

        <Content 
        title={title}
        />

        {pageContent?.content?.map((content) => (
          <Content 
          key={content?.id} {...content} />
          ))}

        <SearchInput
        input={input}
        onChange={updateInput}
        countryList={countryList}
        />

        <CardListing 
        data={data?.results} />

      </div>
    </div>
  );
};

App.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};

export default App;
