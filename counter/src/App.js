import './App.css';
import {Provider} from 'react-redux'
import store from './components/redux/store';
import HooksCounter from './components/HooksCounter';
import DynamicHookCounter from './components/DynamicHookCounter';

function App() {
  return (
    <Provider store={store}>
    <div className="App">
      <HooksCounter/>
      <DynamicHookCounter/>
    </div>
    </Provider>
  );
}

export default App;
