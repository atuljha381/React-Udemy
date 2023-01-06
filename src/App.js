import { Route, Switch } from 'react-router-dom'
import AllMeetups from './Pages/AllMeetups';
import NewMeetups from './Pages/NewMeetups';
import Favourites from './Pages/Favourites';
import MainNavigation from './Components/Layout/MainNavigation';
function App() {
  return (
    <>
      <MainNavigation />
      <Switch>
        <Route path='/' exact>
          <AllMeetups />
        </Route>
        <Route path='/new'>
          <NewMeetups />
        </Route>
        <Route path='/fav'>
          <Favourites />
        </Route>
      </Switch>

    </>
  );
}

export default App;
