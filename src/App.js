import logo from './logo.svg';
import './App.css';
import Main from './containers/Main/Main';
import PlayerDetailsContainer from './components/PlayerDetailsContainer/PlayerDetailsContainer';
import { useSelector } from 'react-redux';

function App() {

  const removed = useSelector(state => state.board.removed_pieces)

  return (
    <div className='App'>
      <div>
        <PlayerDetailsContainer player ="A" removed = {removed['A']}/>
        <PlayerDetailsContainer player ="B" removed = {removed['B']}/>
      </div>
      <Main/>
    </div>
  );
}

export default App;
