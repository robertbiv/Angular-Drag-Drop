import { Component, ViewChildren, QueryList, AfterViewInit } from '@angular/core';
import {CdkDropList, CdkDragDrop, CdkDrag, transferArrayItem, moveItemInArray} from '@angular/cdk/drag-drop';
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-tower-of-hanoi',
  templateUrl: './tower-of-hanoi.component.html',
  standalone: true,
  imports: [
    CdkDrag,
    CdkDropList,
    NgForOf
  ],
  styleUrls: ['./tower-of-hanoi.component.css']
})
export class TowerOfHanoiComponent implements AfterViewInit {
  @ViewChildren(CdkDropList) dropLists: QueryList<CdkDropList> = new QueryList<CdkDropList>();

  tower1:number[]  = [3, 2, 1];
  tower22:number[]  = [];
  tower33:number[] = [];


  ngAfterViewInit() {
    this.dropLists.changes.subscribe(() => {
      this.dropLists.toArray().forEach(dropList => {
        dropList.connectedTo = this.dropLists.toArray();
      });
    });
  }

  drop(event: CdkDragDrop<number[]>) {
    console.log('Previous container ID:', event.previousContainer.id);
    console.log('Current container ID:', event.container.id);
    console.log(event.container.data);
    console.log(event);
    if (event.previousContainer === event.container) {
      console.log("Disk not Moved");
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      console.log("Disk Ready to be Moved "+event.item.data);
/*      transferArrayItem(event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex);*/
      if (!event.container.data.length ||
        event.item.data <= event.container.data[event.container.data.length - 1]) {
        transferArrayItem(event.previousContainer.data,
          event.container.data,
          event.previousIndex,
          event.currentIndex);
        console.log("Moved disk " + event.item.data + " from tower " + (event.previousIndex + 1) + " to tower " + (event.currentIndex + 1) + ".")
      }
      if (this.tower33.length === 3 && this.isInOrder(this.tower33)) {
        console.log("You've won the game!");
      }
    }
  }

  isInOrder(tower: number[]): boolean {
    for (let i = 0; i < tower.length - 1; i++) {
      if (tower[i] < tower[i + 1]) {
        return false;
      }
    }
    return true;
  }
}

/*
import { Component, ViewChildren, QueryList, AfterViewInit } from '@angular/core';
import {CdkDropList, CdkDragDrop, CdkDrag, transferArrayItem} from '@angular/cdk/drag-drop';
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-tower-of-hanoi',
  templateUrl: './tower-of-hanoi.component.html',
  standalone: true,
  imports: [
    CdkDropList,
    CdkDrag,
    NgForOf
  ],
  styleUrls: ['./tower-of-hanoi.component.css']
})
export class TowerOfHanoiComponent implements AfterViewInit {
@ViewChildren(CdkDropList) dropLists: QueryList<CdkDropList> = new QueryList<CdkDropList>();

  towers = [
    [3, 2, 1], // Tower 1
    [2], // Tower 2
    []  // Tower 3
  ];

  ngAfterViewInit() {
    this.dropLists.changes.subscribe(() => {
      this.dropLists.toArray().forEach(dropList => {
        dropList.connectedTo = this.dropLists.toArray();
      });
    });
  }

  drop(event: CdkDragDrop<number[]>) {
    console.log('Previous container ID:', event.previousContainer.id);
    console.log('Current container ID:', event.container.id);
    console.log(event.container.data);
    console.log(event);
    if (event.previousContainer === event.container) {
      console.log("Disk not Moved");
      //moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      // Check if the move is valid
      console.log("Disk Ready to be Moved"+event.item.data);
      if (!event.container.data.length ||
        event.item.data <= event.container.data[event.container.data.length - 1]) {
        transferArrayItem(event.previousContainer.data,
          event.container.data,
          event.previousIndex,
          event.currentIndex);
        console.log("Moved disk " + event.item.data + " from tower " + (event.previousIndex + 1) + " to tower " + (event.currentIndex + 1) + ".")
      }
      // Check if the game is won
      if (this.towers[2].length === 3 && this.isInOrder(this.towers[2])) {
        console.log("You've won the game!");
      }
    }
  }

  // Helper function to check if the disks in a tower are in order
  isInOrder(tower: number[]): boolean {
    for (let i = 0; i < tower.length - 1; i++) {
      if (tower[i] < tower[i + 1]) {
        return false;
      }
    }
    return true;
  }
}


/!*
// tower-of-hanoi.component.ts
import { Component } from '@angular/core';
import {CdkDrag, CdkDragDrop, CdkDropList, moveItemInArray, transferArrayItem} from "@angular/cdk/drag-drop";
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-tower-of-hanoi',
  templateUrl: './tower-of-hanoi.component.html',
  standalone: true,
  imports: [
    CdkDrag,
    CdkDropList,
    NgForOf
  ],
  styleUrls: ['./tower-of-hanoi.component.css']
})
export class TowerOfHanoiComponent {
  towers = [
    [3, 2, 1], // Tower 1
    [2], // Tower 2
    []  // Tower 3
  ];

  drop(event: CdkDragDrop<number[]>) {
    console.log('Previous container ID:', event.previousContainer.id);
    console.log('Current container ID:', event.container.id);
    console.log(event.container.data);
    console.log(event);
    if (event.previousContainer === event.container) {
      console.log("Disk not Moved");
      //moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      // Check if the move is valid
      console.log("Disk Ready to be Moved"+event.item.data);
      if (!event.container.data.length ||
        event.item.data <= event.container.data[event.container.data.length - 1]) {
        transferArrayItem(event.previousContainer.data,
          event.container.data,
          event.previousIndex,
          event.currentIndex);
        console.log("Moved disk " + event.item.data + " from tower " + (event.previousIndex + 1) + " to tower " + (event.currentIndex + 1) + ".")
      }
      // Check if the game is won
      if (this.towers[2].length === 3 && this.isInOrder(this.towers[2])) {
        console.log("You've won the game!");
      }
    }
  }

  // Helper function to check if the disks in a tower are in order
  isInOrder(tower: number[]): boolean {
    for (let i = 0; i < tower.length - 1; i++) {
      if (tower[i] < tower[i + 1]) {
        return false;
      }
    }
    return true;
  }
}

/!*
// tower-of-hanoi.component.ts
import { Component } from '@angular/core';
import {CdkDrag, CdkDragDrop, CdkDropList, moveItemInArray, transferArrayItem} from "@angular/cdk/drag-drop";
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-tower-of-hanoi',
  templateUrl: './tower-of-hanoi.component.html',
  standalone: true,
  imports: [
    CdkDrag,
    CdkDropList,
    NgForOf
  ],
  styleUrls: ['./tower-of-hanoi.component.css']
})
export class TowerOfHanoiComponent {
  towers = [
    [3, 2, 1], // Tower 1
    [], // Tower 2
    []  // Tower 3
  ];

  drop(event: CdkDragDrop<number[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      if (!event.container.data.length ||
        event.item.data <= event.container.data[event.container.data.length - 1]) {
        transferArrayItem(event.previousContainer.data,
          event.container.data,
          event.previousIndex,
          event.currentIndex);
      }
    }
  }
}
*!/
*!/
*/
