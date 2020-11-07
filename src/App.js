import logo from './images/logo.png';
import './App.css';
import Button from '@material-ui/core/Button';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Coming Soon with your nearest Kirana Stores.
        </p>
        <Button variant="outlined" color="primary">
          Thank you CDO/E
        </Button>  
    </header>
    </div>
  );
}

export default App;
