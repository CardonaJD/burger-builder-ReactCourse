import React from 'react';
import Layout from './hoc/Layout/LayOut';
import BurguerBuilder from './containers/BulgerBuilder/BurguerBuilder';
import Checkout from './containers/Checkout/Checkout';
import {Route} from 'react-router-dom';
import Orders from './containers/Orders/Orders'

function App() {
  return (
    <div>
        <Layout>
          <Route path="/" component = {BurguerBuilder} exact></Route>
          <Route path='/checkout' component = {Checkout}></Route>
          <Route path='/orders' component = {Orders}></Route>
        </Layout>
    </div>
  );
}

export default App;
