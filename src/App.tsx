import { Suspense, lazy } from 'react';
import reactLogo from '@assets/react.svg';
import './App.css';
import Home from './components/Home';
import { devDependencies } from '../package.json';
import Loading from './components/Loading';
const Event = lazy(() => import('./components/Event/index'));
function App() {
  return (
    <div className="App">
      <div>
        <a href="https://reactjs.org" target="_blank" rel="noreferrer">
          <img src={reactLogo} className="logo react w-40" alt="React logo" />
        </a>
      </div>
      <h2> vite version: {devDependencies.vite}</h2>
      <p className="bg-red-400">CPP Hello Vite + React!</p>
      <Suspense fallback={<Loading />}>
        <div className="cpp">
          <Event />
        </div>
      </Suspense>
      <Home />
    </div>
  );
}

export default App;
