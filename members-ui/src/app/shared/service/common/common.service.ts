import { ComponentType } from '@angular/cdk/portal';
import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(private snackBar: MatSnackBar
    , private dialog: MatDialog) { }

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

  showDialog(component: ComponentType<unknown>, information?:{}, action?: {opened?: () => void
      , closed?:() => void}){
    const dialogRef = this.dialog.open(component, { data: information })

    if(action?.opened !== undefined)
      dialogRef.afterOpened().subscribe(action.opened);
     
    if(action?.closed !== undefined)
      dialogRef.afterClosed().subscribe(res => action.closed);
  }
}
