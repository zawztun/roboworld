import React from 'react';

const SearchBox = ({ searchfield, searchChange }) => {
  return (
    <div className='pa3'>
      <input
        className='pa3 br3 bg-lightest-blue'
        type='search'
        placeholder='search robots'
        onChange={searchChange}
      />
    </div>
  );
}

export default SearchBox;