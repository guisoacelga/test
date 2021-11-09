import { Component, OnInit } from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {StopTrainingComponent} from "./stop-training.component";

@Component({
  selector: 'app-current-trainings',
  templateUrl: './current-trainings.component.html',
  styleUrls: ['./current-trainings.component.scss']
})
export class CurrentTrainingsComponent implements OnInit {
  progress = 0;
  timer: number | undefined;

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
      this.timer = window.setInterval(() => {
        this.progress = this.progress + 5;
        if (this.progress >= 100) {
          clearInterval(this.timer);
        }
      }, 1000);
  }
  onStop() {
    clearInterval(this.timer);
    this.dialog.open(StopTrainingComponent);
  }



}
