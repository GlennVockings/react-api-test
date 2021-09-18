import './App.css';
import { Header } from './components/Header';
import { Status } from './components/Status';
import { Button } from './components/Button';
import { Dealer } from './components/Dealer';
import { useState, useEffect } from 'react';

function App() {
  const [deck, setDeck] = useState({})
  const [card, setCard] = useState()
  const [remain, setRemain] = useState()

  useEffect(() => {
    const getDeck = async () => {
      const getDeckfromAPI = await fetchCards()
      setDeck(getDeckfromAPI)
      setRemain(deck.remaining)
    }

    getDeck()
  }, [deck.remaining])

  // Shuffle new deck
  const fetchCards = async () => {
    const res = await fetch('https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1')
    const data = await res.json()
    return data
  }

  // Draw card
  const getCard = async (id) => {
    const getCardfromAPI = await drawCard(id);
    setCard(getCardfromAPI)
    setRemain(getCardfromAPI.remaining)
  }


  const drawCard = async (id) => {
    const res = await fetch(`https://deckofcardsapi.com/api/deck/${id}/draw/?count=1`)
    const data = await res.json()
    return data
  }

  const shuffle = async (id) => {
    const shufflefromAPI = await getShuffle(id);
    setRemain(shufflefromAPI.remaining)
    setCard()
  }

  const getShuffle = async (id) => {
    const res = await fetch(`https://deckofcardsapi.com/api/deck/${id}/shuffle/`)
    const data = await res.json()
    return data
  }

  return (
    <div className="App">
      <Header />
      <Status deck={deck} remain={remain} card={card} />
      <Button draw={() => getCard(deck.deck_id)} shuffle={() => shuffle(deck.deck_id)}/>
      <Dealer card={card} />
    </div>
  );
}

export default App;
