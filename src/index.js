import React from 'react';
import ReactDOM from 'react-dom/client';
import { Profile } from 'components/Profile/Profile';
import { Statistics } from 'components/Statistic/Statistics';
import './index.css';
import user from 'path/to/user.json';
import data from 'path/to/data.json'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Profile username={user.username}
  tag={user.tag}
  location={user.location}
  avatar={user.avatar}
      stats={user.stats}
    />
    <Statistics title="Upload stats" stats={data} />
    <Statistics stats={data} />
  </React.StrictMode>
);
