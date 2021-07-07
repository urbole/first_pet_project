// import logo from './logo.svg';
// import { Header } from './components/header';
import { Route, Switch } from 'react-router-dom';
import { Header } from './components/header';
import { appRoutes } from './routes/index';
import React from 'react';
import './App.scss';

function App() {
  return (
    <div className="App">
      <Header/>
      <main className="App__main">
        <Switch>
          {appRoutes.map(route => (<Route key={route.path} {...route} />))}
          <Route path='*'>
            <p>404: No Page Found</p>
          </Route>
        </Switch>
      </main>
      <footer className='App__footer'>
        <ul>
          <li>© Untitled.<span>|</span></li>
          <li>
            Design: <a href="http://html5up.net">HTML5 UP<span>|</span></a>
          </li>
          <li>
            Demo Images: <a href="http://unsplash.com">Unsplash</a>
          </li>
        </ul>
      </footer>
    </div>
  );
}

export default App;
