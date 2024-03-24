import { Component } from '@angular/core';
import {CdkDrag, CdkDragDrop, CdkDropList} from '@angular/cdk/drag-drop';
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-sliding-game',
  templateUrl: './sliding-game.component.html',
  standalone: true,
  imports: [
    NgForOf,
    CdkDrag,
    CdkDropList
  ],
  styleUrls: ['./sliding-game.component.css']
})
export class SlidingGameComponent {
  grid: (number | null)[][] = [];
  emptyCell = {x: 3, y: 3};

  constructor() {
    this.initGrid();
    this.shuffleGrid();
  }

  initGrid() {
    console.log('initGrid');
    let count = 1;
    for (let i = 0; i < 4; i++) {
      this.grid[i] = [];
      for (let j = 0; j < 4; j++) {
        if (count <= 15) {
          this.grid[i][j] = count++;
        }
      }
    }
    this.grid[3][3] = null;
  }
isAdjacent(i: number, j: number): boolean {
  return (Math.abs(this.emptyCell.x - i) === 1 && this.emptyCell.y === j) ||
         (Math.abs(this.emptyCell.y - j) === 1 && this.emptyCell.x === i);
}
  shuffleGrid() {
    console.log('shuffleGrid');
  for (let i = 0; i < 1000; i++) {
    const moves = [
      {x: -1, y: 0},
      {x: 1, y: 0},
      {x: 0, y: -1},
      {x: 0, y: 1}
    ];
    const move = moves[Math.floor(Math.random() * moves.length)];
    const newX = this.emptyCell.x + move.x;
    const newY = this.emptyCell.y + move.y;
    if (newX >= 0 && newY >= 0 && newX < 4 && newY < 4) {
      // Swap
      const temp = this.grid[this.emptyCell.x][this.emptyCell.y];
      this.grid[this.emptyCell.x][this.emptyCell.y] = this.grid[newX][newY];
      this.grid[newX][newY] = temp;
      this.emptyCell = {x: newX, y: newY};
    }
  }
}
checkWinCondition(): boolean {
  let count = 1;
  for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 4; j++) {
      if (count <= 15) {
        if (this.grid[i][j] !== count) {
          return false;
        }
        count++;
      }
    }
  }
  return this.grid[3][3] === null; // The last cell should be empty
}
  drop(event: CdkDragDrop<number[]>) {
  const previousIndex = event.previousIndex;
  const currentIndex = event.currentIndex;
  const previousRow = Math.floor(previousIndex / 4);
  const previousCol = previousIndex % 4;
  const currentRow = Math.floor(currentIndex / 4);
  const currentCol = currentIndex % 4;

  console.log('Before swap:');
  console.log('Grid:', JSON.parse(JSON.stringify(this.grid)));
  console.log('Empty cell:', {...this.emptyCell});
    // Swap
    const temp = this.grid[previousRow][previousCol];
    (this.grid)[previousRow][previousCol] = null;
    this.grid[this.emptyCell.x][this.emptyCell.y] = temp;
    this.emptyCell = {x: previousRow, y: previousCol};

  console.log('After swap:');
  console.log('Grid:', JSON.parse(JSON.stringify(this.grid)));
  console.log('Empty cell:', {...this.emptyCell});
  if(this.checkWinCondition()) {
    alert('You won!');
  }
}
}
