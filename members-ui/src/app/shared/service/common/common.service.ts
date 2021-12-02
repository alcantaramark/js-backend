import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(private snackBar: MatSnackBar) { }

  displayMessage(message: string, actionLabel: string, action?:() =>  void){
    let snackBarRef = this.snackBar.open(message, actionLabel, {
      duration: 5000,
      horizontalPosition: 'center',
      verticalPosition: 'top'
    });
    if(action !== undefined){
      snackBarRef.onAction().subscribe(action);
      snackBarRef.afterDismissed().subscribe(action);
    }
  }
}
