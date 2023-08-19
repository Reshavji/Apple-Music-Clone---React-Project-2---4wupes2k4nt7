import React, { useState } from 'react';
import SearchIcon from '@material-ui/icons/Search';
import WidgetsOutlinedIcon from '@material-ui/icons/WidgetsOutlined';
import RadioIcon from '@material-ui/icons/Radio';
import { Link } from 'react-router-dom';
import PlayCircleOutlineOutlinedIcon from '@material-ui/icons/PlayCircleOutlineOutlined';
import './Sidebar.css';

function Sidebar() {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      performSearch();
    }
  };

  const performSearch = async () => {
    try {
      const response = await fetch(`https://academics.newtonschool.co/api/v1/music/song?filter={"title":"${searchQuery}"}`, {
        headers: {
          'projectId': 'bmc60xnvc646' 
        }
      });
  
      if (response.ok) {
        const data = await response.json();
        setSearchResults(data);
        console.log(data);
      } else {
        const errorData = await response.json(); // Try to parse error response
        console.error('Error performing search:', response.status, errorData);
      }
    } catch (error) {
      console.error('Error performing search:', error);
    }
  };
  

  return (
    <div className='sidebar'>
      <div className='logo'>
        {/* Your logo SVG here */}
      </div>
      <div className='Search-bar'>
        <div className='search-icon'>
          <SearchIcon fontSize="small" />
        </div>
        <input
          type='text'
          className="search-field"
          placeholder='Search...'
          value={searchQuery}
          onChange={handleSearchChange}
          onKeyDown={handleKeyPress}
        />
      </div>
      <div className='side-nav'>
        <nav>
          <ul>
            <Link to="/listen">
              <li>
                <div className='sidebar-icons'>
                  <PlayCircleOutlineOutlinedIcon fontSize='small' />
                </div>
                Listen Now
              </li>
            </Link>
            <Link to="/browse">
              <li>
                <div className='sidebar-icons'><WidgetsOutlinedIcon fontSize='small' /></div>
                Browser
              </li>
            </Link>
            <Link to="/radio">
              <li>
                <div className='sidebar-icons'><RadioIcon fontSize='small' /></div>
                Radio
              </li>
            </Link>
          </ul>
        </nav>
      </div>

      {/* Display search results */}
      <div className='search-results'>
        {searchResults.map((result) => (
          <div key={result.id}>{result.title}</div>
          // You can customize how you display the search results here
        ))}
      </div>
    </div>
  );
}

export default Sidebar;
