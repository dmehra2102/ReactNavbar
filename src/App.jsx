import './App.css';
import { Button } from './components/Button';
import { Link } from './components/Links';
import { Logo } from './components/Logo';

function App() {
  return (
    <div>
      <div className='App'>
        <Logo />
        <Link />
        <Button />
      </div>
    </div>
  );
}

export default App;
