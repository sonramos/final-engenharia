import { Injectable } from '@angular/core';
import {MatSnackBar, MatSnackBarConfig} from "@angular/material/snack-bar";

@Injectable({
  providedIn: 'root'
})
export class MensagemService {

  constructor(private snackBar: MatSnackBar) {}

  success(message: string): void{
    this.openSnackBar(message,['success']);
  }

  info(message: string): void{
    this.openSnackBar(message,['info']);
  }

  warning(message: string): void{
    this.openSnackBar(message,['warning']);
  }

  error(message: string): void{
    this.openSnackBar(message,['error']);
  }
  private openSnackBar(message: string, extras: string[]): void{
    const snackConfig = new MatSnackBarConfig();
    snackConfig.politeness = 'assertive';
    snackConfig.duration = 3000;
    snackConfig.panelClass = extras;

    this.snackBar.open(message, 'X', snackConfig);
  }
}
