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
           Shivani is the best
        </Button>  
    </header>
    </div>
  );
}

export default App;
