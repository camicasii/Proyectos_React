import React from 'react';
import './App.css';

//router
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

// redux

import {Provider} from 'react-redux'; 
import store from './store'
import Header from './components/Header';
import Productos from './components/Productos';
import NuevoProducto from './components/NuevoProducto';
import EditarProducto from './components/EditarProducto';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <React.Fragment>
          <Header/>

          <div className="container">
            <Switch>
                  <Route exact path="/" component={Productos}/>
                  <Route exact path="/productos/nuevo" component={NuevoProducto}/>
                  <Route exact path="/productos/editar/:id" component={EditarProducto}/>
            </Switch>
          </div>

        </React.Fragment>
      </Router>
    </Provider>
  );
}

export default App;
