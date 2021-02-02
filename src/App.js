import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Home, Coin } from './containers';

const App = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/coin/:coin" component={Coin} />
        </Switch>
    </BrowserRouter>
);

export default App;
