import React from 'react';
import { Amplify } from 'aws-amplify';
import awsExports from './aws-exports';
import HomePage from './components/dashboard/HomePage';

Amplify.configure(awsExports);

function App() {
  return (
    <div>
      <HomePage />
    </div>
  );
}

export default App;