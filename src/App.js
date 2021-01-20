import { Switch, Route } from 'react-router-dom'
import HomeScreen from './screens/HomeScreen'
import CommentsScreen from './screens/CommentsScreen'
import Nav from './components/Nav'
import { appRoutes } from './utils/routes'

const App = () => {
  return (
    <>
      <Nav />
      <Switch>
        <Route path={appRoutes.home} exact component={HomeScreen} />
        <Route path={appRoutes.postComments} component={CommentsScreen} />
      </Switch>
    </>
  )
}

export default App
