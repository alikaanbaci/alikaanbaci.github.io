import './App.css';
import CodeComponent from './component/CodeComponent';
import HeaderComponent from './component/HeaderComponent';
import {Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import MainPageComponent from './component/MainPageComponent';


function App() {
  return (
    <div className="App">
      <Router>
        <HeaderComponent/>
        <Switch>
          <Route path="/main">
            <MainPageComponent className="center"/>  
          </Route>
          <Route path="/code">
            <CodeComponent code={"dfs"}/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
