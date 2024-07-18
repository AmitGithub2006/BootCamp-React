import React from 'react';
import './App.css';
// import ClickCounter from './components/ClickCounter';
// import HoverCounter from './components/HoverCounter';
// import DocTitleOne from './components/DocTitleOne';
// import DocTitleTwo from './DocTitleTwo';
// import CounterOne from './components/CounterOne';
// import CounterTwo from './components/CounterTwo';

import ComponentA from './components/ComponentA';

export const NameContext = React.createContext();
export const AgeContext = React.createContext();

function App() {
  return (
    <div className="App">
      {/* <ClickCounter name='Amit' />
      <HoverCounter name='Puran' /> */}
      {/* <DocTitleOne />
      <DocTitleTwo /> */}
      {/* <CounterOne />
      <CounterTwo /> */}

      <NameContext.Provider value={'Amit'}>
        <AgeContext.Provider value={30}>
          <ComponentA />
        </AgeContext.Provider>
      </NameContext.Provider>
    </div>
  );
}

export default App;
