import React from 'react';
import Layout from './components/Layout/LayOut';
import BurguerBuilder from './containers/BulgerBuilder/BurguerBuilder';

function App() {
  return (
    <div>
      <Layout>
        <BurguerBuilder>

        </BurguerBuilder>
      </Layout>
    </div>
  );
}

export default App;
