export const GameConfig = {
  randCellNum: 400
};

export default class Game {

  /**
   * set random game with initial alive cell count
   */
  static _init() {
    let cells = [];
    for (let i = 0; i < GameConfig.randCellNum; i ++) {
      cells[i] = [];
      for (let j = 0; j < GameConfig.randCellNum; j ++) {
        cells[i][j] = Math.floor(Math.random()*2);
      }
    }
    return cells;
  }

  static _isFilled(cells, x, y) {
    return cells[x] && cells[x][y];
  }

  /**
 * Return amount of alive neighbours for a cell
 */
  static _countNeighbours(cells, x, y) {
    let amount = 0;

    if (this._isFilled(cells, x - 1, y - 1)) amount ++;
    if (this._isFilled(cells, x,   y - 1)) amount ++;
    if (this._isFilled(cells, x + 1, y - 1)) amount ++;
    if (this._isFilled(cells, x - 1, y  )) amount ++;
    if (this._isFilled(cells, x + 1, y  )) amount ++;
    if (this._isFilled(cells, x - 1, y + 1)) amount ++;
    if (this._isFilled(cells, x, y + 1)) amount ++;
    if (this._isFilled(cells, x + 1, y + 1)) amount ++;

    return amount;
  }


  /**
   * Check which cells are still alive.
   */
  static update(cells) {
    let updateCells = [];
    let that = this;

    cells.forEach((row, x) => {
      updateCells[x] = [];
      row.forEach((cell,y) => {
        let alive = 0,
          count = that._countNeighbours(cells, x, y);

        if (cell > 0) {
          alive = count === 2 || count === 3 ? 1 : 0;
        } else {
          alive = count === 3 ? 1 : 0;
        }

        updateCells[x][y] = alive;
      });
    });

    return updateCells;
  }
}
