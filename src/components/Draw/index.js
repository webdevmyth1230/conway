import React, { Component } from 'react';
import './style.css';
class Draw extends Component {
  componentDidUpdate() {
    this.updateCanvas();
  }

  updateCanvas = () => {
    const { cells } = this.props;
    const ctx = this.refs.canvas.getContext('2d');

    ctx.strokeStyle = '#e1e1e1';
    ctx.fillStyle = '#97bd61';
    ctx.clearRect(0, 0, 400, 400);

    cells.forEach((row, x) => {
      row.forEach((cell, y) => {
        ctx.beginPath();
        ctx.rect(x * 8, y * 8, 8, 8);
        if (cell) {
          ctx.fill();
        } else {
          ctx.stroke();
        }
      });
    });
  }

  render() {
    return (
      <canvas className='draw' ref="canvas" width={400} height={400}/>
    );
  }
}

export default Draw;
