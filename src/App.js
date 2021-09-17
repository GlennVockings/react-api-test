import './App.css';
import { Header } from './components/Header';
import { Status } from './components/Status';
import { Button } from './components/Button';
import { Dealer } from './components/Dealer';
import { useState, useEffect } from 'react';

function App() {
  const [deck, setDeck] = useState({})
  const [card, setCard] = useState({})

  useEffect(() => {
    const getDeck = async () => {
      const getDeckfromAPI = await fetchCards()
      setDeck(getDeckfromAPI)
    }

    getDeck()
  }, [])

  // Shuffle new deck
  const fetchCards = async () => {
    const res = await fetch('https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1')
    const data = await res.json()
    console.log(data)
    return data
  }

  // Draw a card
  const drawCard = async () => {
    const res = await fetch(`https://deckofcardsapi.com/api/deck/${deck.id}/draw/?count=1`)
    const data = await res.json()
    console.log(data)
    setCard(data)
  }

  return (
    <div className="App">
      <Header />
      <Status deck={deck} />
      <Button onAdd={drawCard} />
      <Dealer card={card} />
    </div>
  );
}

export default App;
