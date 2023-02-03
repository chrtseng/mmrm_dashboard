import React from 'react';
import { ConfigProvider } from 'antd';
import { MemberAnalysis } from './packages';

const App = () => (
  <ConfigProvider
    theme={{
      token: {
        colorPrimary: '#154986',
      },
    }}
  >
    <div>
      <MemberAnalysis />
    </div>
  </ConfigProvider>
);

export default App;
