import { Routes, Route, Link } from 'react-router-dom';

import FormWithRHF from './components/FormWithRHF';
import FormWithRHFController from './components/FormWithRHFController';
import FormWithFormik from './components/FormWithFormik';

import './App.css';
import { Hookform } from './components/react-hook-form';
import { CounterWithHOC, HighOrderComponentExample } from './components/hoc';
import { Counter } from './components/hoc/counter';

const App = () => {
  return (
    <div className="App">
      <div>
        <Link to={'/form-rhf'}> FormWithRHF</Link>
      </div>
      <div>
        <Link to={'/form-rhf-controller'}> FormWithRHFController</Link>
      </div>
      <div>
        <Link to={'/form-formik'}> FormWithFormik</Link>
      </div>

      <div style={{ marginTop: '10%' }}>
        <Routes>
          <Route path="/form-rhf" element={<FormWithRHF />} />
          <Route path="/form-rhf-controller" element={<FormWithRHFController />} />
          <Route path="/form-formik" element={<FormWithFormik />} />
        </Routes>
      </div>

      {/* <Hookform /> */}
      <CounterWithHOC />
      <Counter />
    </div>
  );
};

export default App;
