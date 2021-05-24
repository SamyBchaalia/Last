import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { from } from 'rxjs';
import { catchError, finalize } from 'rxjs/operators';

import { NotificationService } from '../shared/notification.service';
import { ProductService } from '../shared/product.service';
import {AngularFireStorage, AngularFireStorageModule} from "@angular/fire/storage"

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.css']
})
export class PopupComponent implements OnInit {

  constructor(    private storage: AngularFireStorage,
    private http: HttpClient,
    private router: Router,
    public service:ProductService,
    ) { }







ngOnInit(): void {




}


}



