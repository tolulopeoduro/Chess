import logo from './logo.svg';
import './App.css';
import Main from './containers/Main/Main';
import PlayerDetailsContainer from './components/PlayerDetailsContainer/PlayerDetailsContainer';
import { useSelector } from 'react-redux';
import WithModal from './components/Modal/Modal';
import Checkmate from './components/Checkmate/Checkmate';
import { useEffect, useState } from 'react';
import PawnTransformMenu from './components/PawnTransformMenu/PawnTransformMenu'
import GameStateControl from './components/GameStateControl/GameStateControl';
import GameMenu from './components/GameMenu/GameMenu';

function App() {

  const removed = useSelector(state => state.board.removed_pieces)
  const check = useSelector(state => state.check)
  const pawnMenu = useSelector(state => state.board.pawnMenu)

  const [messages , setMessages] = useState({
    check : false,
    checkmate : false,
    pawnChange : true
  })

  const toggleMessages = (m , bool) => {
    const a = {...messages}
    a[m] = bool
    setMessages(a)
  }

  useEffect(()=> {
    check.checkmate && toggleMessages('checkmate' , true)
  } , [check])

  return (
    <div className='App'>
      <div>
        <PlayerDetailsContainer player ="A" removed = {removed['A']} isLargeScreen/>
        <PlayerDetailsContainer player ="B" removed = {removed['B']} isLargeScreen/>
        <GameMenu large_screen/>
      </div>
        <Main/>
        <GameMenu/>
    </div>
  );
}

export default App;
