import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import './App.css';
import Content from './components/Content';
import SearchInput from './components/SearchInput';
import CardListing from './components/CardListing';

const App = () => {

  // const cardData = {
  //   results: [

  //     {
  //       id: 1,
  //       timeContent: "Updated an hour ago".toUpperCase(),
  //       placeContent: 'Manchester Piccadilly',
  //       regionContent: 'in Manchester, United Kingdom',
  //       valuesContent: 'Values: PM25: 9, SO2: 32, O3: 8, NO2: 43',
  //     },
  //     {
  //       id: 2,
  //       timeContent: "Updated 6 weeks ago".toUpperCase(),
  //       placeContent: 'Milton Keynes',
  //       regionContent: 'in Milton Keynes, United Kingdom',
  //       valuesContent: 'Values: PM25: 9, SO2: 32, O3: 8, NO2: 43',
  //     },
  //   ],
  // };  


/*
  const cardData = 
        id: 2,
    timeContent: {dataList[0].measurements[0].lastUpdated}.toUpperCase(), -"2021-05-17T07:00:00+00:00"
        placeContent: {dataList[0].location}, -Aston Hill
        regionContent: 'in' {dataList[0].city}, {dataList[0].country} -Aston Hill -GB
        valuesContent: 'Values:' {dataList[0].measurements[1].parameter}':' {dataList[0].measurements[0].value}','
*/


  // setting state
  const [location, setInput] = useState('');
  const [cityListDefault, setCityListDefault] = useState([]);
  const [cityList, setCityList] = useState([]);
  const [dataList, setDataList] = useState([]);

  // fetching UK cities data from OpenAQ API
  const fetchData = async () => {
    return await fetch('https://u50g7n0cbj.execute-api.us-east-1.amazonaws.com/v2/cities?limit=112&page=1&offset=0&sort=asc&country_id=gb&order_by=city')
      .then(response => response.json())
      .then(data => {
        setCityList(data?.results)
        setCityListDefault(data?.results)
      });
  }

  useEffect(() => { fetchData() }, []);
  console.log({ cityList });

  // fetching UK card data (last updated, location, city name and country, values) from OpenAQ API
  const fetchFullData = async (location) => {
    if (!location) return;
    return await fetch(`https://u50g7n0cbj.execute-api.us-east-1.amazonaws.com/v2/latest?limit=100&page=1&offset=0&sort=desc&radius=1000&country_id=gb&city=${location}&order_by=lastUpdated&dumpRaw=false`)
      .then(response => response.json())
      .then(data => {

        setDataList(data?.results)
      });
  }

  
  // filtering and updating cities in input field
  const updateInput = event => {
    setInput(event.target.value);
    const filtered = cityListDefault.filter(city => 
    city?.toLowerCase().includes(location)
    );
    setInput(location);
    setCityList(filtered);
  }

  // handling click to display a card with appropriate data
  const handleClick = (location) => {
    if (location) {
      fetchFullData(location);
    }
  };

  // title
  const title = 'Compare your Air';
  // content
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

  console.log({ dataList });

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
        onChange={updateInput}
        cityList={cityList}
        value={location}
        onClick={handleClick}
        />

        <CardListing data={dataList} />

      </div>
    </div>
  );
};

App.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};

export default App;
