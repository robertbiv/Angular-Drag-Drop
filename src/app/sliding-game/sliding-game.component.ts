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
    this.makeGrid();
    this.shuffleGrid();
  }

  makeGrid() {
    console.log('Making Grid');
    let count = 1;
    for (let i = 0; i < 4; i++) {
      this.grid[i] = [];
      for (let j = 0; j < 4; j++) {
        if (count <= 15) {
          console.log('count:', count);
          this.grid[i][j] = count++;
        }
      }
    }
    this.grid[3][3] = null;
    console.log('Grid:', this.grid);
  }
isAdjacent(i: number, j: number): boolean {  //see if next to eachother
  return (Math.abs(this.emptyCell.x - i) === 1 && this.emptyCell.y === j) ||
         (Math.abs(this.emptyCell.y - j) === 1 && this.emptyCell.x === i);
}
shuffleGrid() { //should make every game possible to win (There may be edge cases)
    console.log('shuffleGrid');
    for (let i = 0; i < 600; i++) { //run 600 times
      const moves = [
        {x: -1, y: 0},
        {x: 1, y: 0},
        {x: 0, y: -1},
        {x: 0, y: 1}
      ]; //possible moves
      const move = moves[Math.floor(Math.random() * moves.length)]; //random move
      const newX = this.emptyCell.x + move.x;
      const newY = this.emptyCell.y + move.y;
      if (newX >= 0 && newY >= 0 && newX < 4 && newY < 4) { //if valid, move
        // Swap
        const temp = this.grid[this.emptyCell.x][this.emptyCell.y];
        this.grid[this.emptyCell.x][this.emptyCell.y] = this.grid[newX][newY];
        this.grid[newX][newY] = temp;
        this.emptyCell = {x: newX, y: newY};
      }
    }
}
checkWinCondition(): boolean { //check win by recursively checking if the grid is in order
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
  return this.grid[3][3] === null;
}
  drop(event: CdkDragDrop<number[]>) {
    //find all coords (Current is the one being moved, previous is where moved from)
    const previousIndex = event.previousIndex;
    const currentIndex = event.currentIndex;
    const previousRow = Math.floor(previousIndex / 4);
    const previousCol = previousIndex % 4;
    const currentRow = Math.floor(currentIndex / 4);
    const currentCol = currentIndex % 4;
    console.log('previousIndex:', previousIndex, 'currentIndex:', currentIndex, 'previousRow:', previousRow, 'previousCol:', previousCol, 'currentRow:', currentRow, 'currentCol:', currentCol);

    // Log before
    console.log('Before swap:');
    console.log('Grid:', JSON.parse(JSON.stringify(this.grid)));
    console.log('Empty cell:', {...this.emptyCell});

      // Swap squares with empty square
      const temp = this.grid[previousRow][previousCol];
      (this.grid)[previousRow][previousCol] = null;
      this.grid[this.emptyCell.x][this.emptyCell.y] = temp;
      this.emptyCell = {x: previousRow, y: previousCol};

      // Log after
    console.log('After swap:');
    console.log('Grid:', JSON.parse(JSON.stringify(this.grid)));
    console.log('Empty cell:', {...this.emptyCell});
    if(this.checkWinCondition()) {
      alert('You win!');
    }
  }
}
