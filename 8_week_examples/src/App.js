import React from 'react';
import SimpleRouting from './Examples/SimpleRouting'
import NestedRouting from './Examples/NestedRouting'
import Bootstrap from './Examples/Bootstrap'
import MaterialUI from './Examples/MaterialUI'

import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  return (
    <div>
       <MaterialUI />
       <Bootstrap />
    </div>
  );
};

export default App;