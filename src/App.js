import { BrowserRouter, Switch, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import { Home, Coin } from './containers';

const App = () => (
  <BrowserRouter>
    <NavBar />
    <div className="container">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/coin/:coin" component={Coin} />
      </Switch>
    </div>
    <Footer />
  </BrowserRouter>
);

export default App;
