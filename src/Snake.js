import React from 'react-native';
const {
  Component,
  StyleSheet,
  Text,
  View,
} = React;
const SNAKE = 'SNAKE';
const FOOD = 'FOOD';

const BOTTOM = 'BOTTOM';
const LEFT = 'LEFT';
const TOP = 'TOP';
const UP = 'UP';

class Snake {
  constructor(x, y) {
    this.usedFields = [{x, y}];
    this.movement = LEFT;
  }

  move() {
    const lastHead = this.usedFields[this.usedFields.length - 1];
    let newHead;
    switch (this.movement) {
      case BOTTOM:
        newHead = {
          ...lastHead,
          y: lastHead.y + 1,
        };

      break;
      case TOP:
        newHead = {
          ...lastHead,
          y: lastHead.y - 1,
        };

      break;
      case LEFT:
        newHead = {
          ...lastHead,
          x: lastHead.x - 1,
        };

      break;
      case RIGHT:
        newHead = {
          ...lastHead,
          x: lastHead.x + 1,
        };
      break;
    }

    this.usedFields.push(newHead);
    this.usedFields.shift();
  }
}

class StateFactory {
  constructor(size) {
    const middle = Math.round(size/2);

    this.field = new Array(size).fill(new Array(size))
  }

  getState({ snake }) {

  }
}


export default class Snake extends Component {
  constructor(props) {
    super(props);
    const snake = new Snake(10, 10);

    this.state = {
      snake,
      gameState: new StateFactory(20).getState({snake}),
    };
  }

  render() {
    const gameState = this.state.gameState;

    return (
      <View style={styles.container}>
        {gameState.field.map(row => row.map(cell =>
          <View style={[styles.cell, cell === SNAKE && styles.snakeCell, cell === FOOD && styles.foodCell]} />
        ))}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
