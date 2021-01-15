import React, { Component } from 'react';
import List from "./List";
import './App.css';

class App extends Component {
  static defaultProps = {
    store: {
      lists: [],
      allCards: {},
    }
  };
  state={
    lists:this.props.store.lists,
    allCards: this.props.store.allCards
  }

  deleteCard = (id) => {
    for (let i = 0; i < this.state.lists.length; i++) {
      const list = this.state.lists[i]
      list.cardIds = list.cardIds.filter(card=> card !== id)
    }
    this.setState({
      lists: this.state.lists
    })
  }

render() {
  const { store } = this.props
  return (
    <main className='App'>
      <header className='App-header'>
        <h1>Trelloyes!</h1>
      </header>
        <div className='App-list'>
        {store.lists.map(list => (
            <List
              key={list.id}
              header={list.header}
              cards={list.cardIds.map(id => store.allCards[id])}
              deleteCard={this.deleteCard}
            />
          ))}
        </div>
    </main>
    );
  }
}

export default App;