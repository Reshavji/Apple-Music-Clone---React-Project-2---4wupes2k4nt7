import React, { useState } from 'react';
import SearchIcon from '@material-ui/icons/Search';
import WidgetsOutlinedIcon from '@material-ui/icons/WidgetsOutlined';
import RadioIcon from '@material-ui/icons/Radio';
import { Link } from 'react-router-dom';
import PlayCircleOutlineOutlinedIcon from '@material-ui/icons/PlayCircleOutlineOutlined';
import './Sidebar.css';

function Sidebar() {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
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
        <Link to={`/radio?search=${encodeURIComponent(searchQuery)}`} onClick={(e) => e.stopPropagation()}>
  {/* ... */}
          <input
            type='text'
            className="search-field"
            placeholder='Search...'
            value={searchQuery}
            onChange={handleSearchChange}
          />
        </Link>
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
    </div>
  );
}

export default Sidebar;
