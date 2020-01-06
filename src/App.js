import React from 'react';
import Layout from './hoc/Layout/LayOut';
import BurguerBuilder from './containers/BulgerBuilder/BurguerBuilder';
import Checkout from './containers/Checkout/Checkout';
import {Route} from 'react-router-dom';

function App() {
  return (
    <div>
        <Layout>
          <Route path="/" component = {BurguerBuilder} exact></Route>
          <Route path='/checkout' component = {Checkout}></Route>
        </Layout>
    </div>
  );
}

export default App;
