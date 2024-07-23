import React from 'react';
import './App.css';
import ReducerOne from './components/ReducerOne';
import ReducerTwo from './components/ReducerTwo';
// import ClickCounter from './components/ClickCounter';
// import HoverCounter from './components/HoverCounter';
// import DocTitleOne from './components/DocTitleOne';
// import DocTitleTwo from './DocTitleTwo';
// import CounterOne from './components/CounterOne';
// import CounterTwo from './components/CounterTwo';

// import ComponentA from './components/ComponentA';

// export const NameContext = React.createContext();
// export const AgeContext = React.createContext();
// export const CityContext = React.createContext();

// export const MyContext = React.createContext();

// const contextValues = {
//   name: 'Amit',
//   age: 30,
//   city: 'Delhi'
// }

function App() {
  return (
    <div className="App">
      {/* <ClickCounter name='Amit' />
      <HoverCounter name='Puran' /> */}
      {/* <DocTitleOne />
      <DocTitleTwo /> */}
      {/* <CounterOne />
      <CounterTwo /> */}

      {/* <NameContext.Provider value={'Amit'}>
        <AgeContext.Provider value={30}>
          <CityContext.Provider value={'Delhi'}>
            <ComponentA />
          </CityContext.Provider>
        </AgeContext.Provider>
      </NameContext.Provider> */}

      {/* <MyContext.Provider value={contextValues}>
        <ComponentA />
      </MyContext.Provider> */}


      {/* <ReducerOne /> */}
      <ReducerTwo />
    </div>
  );
}

export default App;
