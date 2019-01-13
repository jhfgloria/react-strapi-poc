import React from 'react';
import { Link } from 'react-router-dom';

const _displayCustomTabs = (categories) => {
  return categories.map(category => (
    <li style={{ float: 'left', marginRight: '10px' }} key={category.title}><Link to={category.title.toLowerCase()}>{category.title}</Link></li>
  ));
}

const Header = ({ categories }) => {  
  return (
    <header>
      <nav>
        <ul style={{ listStyle: 'none', display: 'inline-block', padding: 0 }}>
          <li style={{ float: 'left', marginRight: '10px' }}><Link to='/'>Home</Link></li>
          { _displayCustomTabs(categories) }
          <li style={{ float: 'left', marginRight: '10px'}}><Link to='/faq'>FAQ</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
