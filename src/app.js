import { css } from '@emotion/css'
import {Navbar} from './components/navbar';
import {Search} from 'components/search';
import {Browse, SearchBox} from './components/lib'
import {Recommended} from './screens/recommended/recommended'
import {Chart} from './screens/chart/chart'
import {RecentlyPlayed} from 'components/recently-played'
import {BrowserRouter as Router} from 'react-router-dom';
import {Routes, Route} from 'react-router-dom';



function App() {
  return (
    <Router>
      <div className={css`
      background: linear-gradient(101.32deg, #292929 1.55%, #1E1322 90.79%);
      display: flex;
    `}>
        <Navbar className={css`
        height: 100vh
      `} />
        <Browse>
          <Search />
          <Recommended />
          <Chart />
          <RecentlyPlayed />
        </Browse>
      </div>
    </Router>
  );
}

export default App;
