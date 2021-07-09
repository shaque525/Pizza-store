import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  public notification$: Subject<string> = new Subject();

  constructor(private snackBar: MatSnackBar) { }

  showNotification(message:string) {
    this.snackBar.open(message,"", {
      duration: 2000,
      verticalPosition: "bottom",
      horizontalPosition: "right"
    });
  }
}
