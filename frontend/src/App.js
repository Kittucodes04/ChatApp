import { Route } from 'react-router-dom';
import  Home  from './Pages/Home';
import Chats from './Pages/Chats';
import './App.css';

function App() {
  return (
    <div className="App">
      <Route exact path='/' component={Home}/>
      <Route exact path='/chats' component={Chats}/>
    </div>
  );
}

export default App;
