// src/components/SearchBar.js
import React from 'react';
import { Input } from 'antd';

const { Search } = Input;

const SearchBar = ({ placeholder, onSearch }) => {
  return (
    <div style={{ padding: '20px 0', textAlign: 'center' }}>
      <Search
        placeholder={placeholder}
        onChange={(e) => onSearch(e.target.value)} // Update search term on each keystroke
        style={{ width: '100%', maxWidth: '600px', borderRadius: '5px' }}
        enterButton="Search"
        size="large"
      />
    </div>
  );
};

export default SearchBar;
