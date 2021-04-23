import React from 'react';
import PropTypes from 'prop-types';

import './App.css';
import Title from './components/Title/index';
import Content from './components/Content/index';
import SearchInput from './components/SearchInput/index';
import Card from './components/Card/index';



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
  const cardContent1 = {
    content: [
      {
        id: 1,
        timeContent: "Updated an hour ago".toUpperCase(),
        placeContent: 'Manchester Piccadilly',
        regionContent: 'in Manchester, United Kingdom',
        valuesContent: 'Values: PM25: 9, SO2: 32, O3: 8, NO2: 43',
      },
    ],
  };
  const cardContent2 = {
    content: [
      {
        id: 1,
        timeContent: "Updated 6 weeks ago".toUpperCase(),
        placeContent: 'Milton Keynes',
        regionContent: 'in Milton Keynes, United Kingdom',
        valuesContent: 'Values: PM25: 9, SO2: 32, O3: 8, NO2: 43',
      },
    ],
  };
  return (
    <div className="App">
      <div className="content grid-container">
        <Title title={title}/>
        {pageContent?.content?.map((content) => (
          <Content key={content?.id} {...content} />
          ))}
        <SearchInput/>
        {cardContent1?.content?.map((content) => (
          <Card className="Card-1" key={content?.id} {...content} />
        ))}
        {cardContent2?.content?.map((content) => (
          <Card className="Card-2" key={content?.id} {...content} />
        ))}
      </div>
    </div>
  );
};

App.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};

export default App;
