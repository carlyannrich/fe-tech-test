import React from 'react';
import PropTypes from 'prop-types';

import Title from './components/Title/index';
import Content from './components/Content/index';
import SearchInput from './components/SearchInput/index';



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
  return (
    <div className="App">
      <div className="content">
        <Title title={title}/>
        {pageContent?.content?.map((content) => (
          <Content key={content?.id} {...content} />
          ))}
        <SearchInput/>
      </div>
    </div>
  );
};

App.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};

export default App;
