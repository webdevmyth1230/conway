import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Draw from './components/Draw';
import Game from './services/game.js';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('canvas renders without crashing for game', () => {
  const canvas = document.createElement('canvas');
  ReactDOM.render(<Draw />, canvas);
  ReactDOM.unmountComponentAtNode(canvas);
});

test('count cells for game', () => {
  const cells = Game._init();
  expect(cells.length).toBe(400);
});

test('count neighbour cells on game', () => {
  const cells = Game._init();
  expect(Game.update(cells).length).toBe(400);
});
