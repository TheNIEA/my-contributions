import React from 'react';
import { Amplify } from 'aws-amplify';
import { withAuthenticator } from '@aws-amplify/ui-react';
import awsExports from './aws-exports';
import HomePage from './components/dashboard/HomePage';

import '@aws-amplify/ui-react/styles.css';

// Configure Amplify
Amplify.configure(awsExports);

function App() {
  return (
    <div className="bg-neutral-900">
      <HomePage />
    </div>
  );
}

export default withAuthenticator(App);