import logo from './logo.svg';
import './App.css';
import Main from './containers/Main/Main';
import PlayerDetailsContainer from './components/PlayerDetailsContainer/PlayerDetailsContainer';
import { useDispatch, useSelector } from 'react-redux';
import WithModal from './components/Modal/Modal';
import Checkmate from './components/Checkmate/Checkmate';
import React, { useEffect, useState } from 'react';
import PawnTransformMenu from './components/PawnTransformMenu/PawnTransformMenu'
import GameStateControl from './components/GameStateControl/GameStateControl';
import GameMenu from './components/GameMenu/GameMenu';
import { resume } from './features/Board/BoardSlice';
import { load } from './features/Players/PlayerSlice';
import computer from './computer/computer';

function App() {

  const {board , turn } = useSelector(state => state.board)
  const removed = useSelector(state => state.board.removed_pieces)
  const check = useSelector(state => state.check)
  const pawnMenu = useSelector(state => state.board.pawnMenu)
  const savedData = JSON.parse(localStorage.getItem('board'))
  const savedNames = JSON.parse(localStorage.getItem('players'))
  const dispatch = useDispatch()
  const players = useSelector(state => state.players)

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

  useEffect(() => {
    if (turn === 'A' && players['A'].isComputer) {
      setTimeout(() => computer(turn) , 1000)
    }
  } , [turn])

  useEffect(()=> {
    check.checkmate && toggleMessages('checkmate' , true)
  } , [check])

  useEffect(() => {
    savedData && dispatch(resume(savedData))
    savedNames && dispatch(load(savedNames))
  } , [])

  return (
    <React.Fragment>
    <div className='App sm'>
      <div>
        <PlayerDetailsContainer player ="A" removed = {removed['A']} isLargeScreen/>
      </div>
      <div>
        <Main/>
        <GameMenu/>
      </div>
      <div>
        <PlayerDetailsContainer player ="B" removed = {removed['B']} isLargeScreen/>
      </div>
    </div>

    <div className='App lg'>
      <div>
      <PlayerDetailsContainer player ="A" removed = {removed['A']} isLargeScreen/>
        <PlayerDetailsContainer player ="B" removed = {removed['B']} isLargeScreen/>
        <GameMenu large_screen/>
      </div>
        <div>
          <Main/>
          <GameMenu/>
        </div>
    </div>
    </React.Fragment>
  );
}

export default App;
