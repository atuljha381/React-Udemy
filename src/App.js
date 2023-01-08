import { Route, Switch } from 'react-router-dom'
import AllMeetups from './Pages/AllMeetups';
import NewMeetups from './Pages/NewMeetups';
import Favourites from './Pages/Favourites';
import Layout from './Components/Layout/Layout';
function App() {
  return (
    <Layout>

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

    </Layout>
  );
}

export default App;
