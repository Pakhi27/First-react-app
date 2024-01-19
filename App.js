import logo from './logo.svg';
import './App.css';
import Goodmorning from './Components/Goodmorning'
import Gm from './Components/Gm'
import Greetings from './Components/Greetings'
import Message from './Components/message'
function App() {
  return (
    <div className="App">
      <Goodmorning name="people"/>
      <h2>"How are you"</h2>
      <Gm/>
      <Greetings />
      <Message></Message>
    </div>
  );
}

export default App;
