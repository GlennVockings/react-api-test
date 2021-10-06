import './App.css';
import { Header } from './components/Header';
import { Status } from './components/Status';
import { Button } from './components/Button';
import { Dealer } from './components/Dealer';
import React, { useState, useEffect } from 'react';
import { Players } from './components/Players';

function App() {
  const [deck, setDeck] = useState({})
  const [dealer, setDealer] = useState()
  const [remain, setRemain] = useState([])
  const [player, setPlayer] = useState()
  const [total, stTotal] = useState(0)

  // creates a new deck on reload
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

  // Draw a card to the dealer
  const giveDealerCard = async (id) => {
    const getCardfromAPI = await drawCard(id, 'dealer');
    const dealerList = await listPile(deck.deck_id, 'dealer');
    setDealer(dealerList);
    setRemain(getCardfromAPI.remaining);
  }

  // Draw a card to the player
  const givePlayerCard = async (id) => {
    const getCardfromAPI = await drawCard(id, 'player1');
    const playerList = await listPile(deck.deck_id, 'player1');
    setPlayer(playerList.piles.player1.cards);
    setRemain(getCardfromAPI.remaining);
  }

  // draws a card from the API and gives to the pile
  const drawCard = async (id, pile) => {
    const res = await fetch(`https://deckofcardsapi.com/api/deck/${id}/draw/?count=1`)
    const data = await res.json();
    var card = data.cards[0].code
    const res1 = await fetch(`https://deckofcardsapi.com/api/deck/${id}/pile/${pile}/add/?cards=${card}`)
    const data1 = await res1.json()
    return data1
  }

  // function used on button click to call the api to shuffle the cards
  const shuffle = async (id) => {
    const shufflefromAPI = await getShuffle(id);
    setRemain(shufflefromAPI.remaining)
    setDealer();
    setPlayer();
  }

  // the api call that shuffles the cards back into the deck
  const getShuffle = async (id) => {
    const res = await fetch(`https://deckofcardsapi.com/api/deck/${id}/shuffle/`)
    const data = await res.json()
    return data
  }

  // lists the cards in the pile
  const listPile = async (id, pile) => {
    const res = await fetch(`https://deckofcardsapi.com/api/deck/${id}/pile/${pile}/list`)
    const data = await res.json()
    return data
  }

  return (
    <div className="App">
      <Header />
      <Status deck={deck} remain={remain} card={dealer} />
      <Button deal={() => giveDealerCard(deck.deck_id)} shuffle={() => shuffle(deck.deck_id)} player={() => givePlayerCard(deck.deck_id)} />
      <div className="people">
        <Dealer dealer={dealer} />
        <React.StrictMode>
          <Players player={player} />
        </React.StrictMode>
      </div>
    </div>
  );
}

export default App;