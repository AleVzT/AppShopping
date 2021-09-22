import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from 'src/app/services/app.service';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-buy',
  templateUrl: './buy.component.html',
  styleUrls: ['./buy.component.css']
})
export class BuyComponent implements OnInit {

  constructor(
    private appService: AppService,
    private router: Router
  ) { }

  listOfData: any = []

  ngOnInit(): void {
    this.getBuy();
  }

  getBuy(){
    this.appService.getCartsCompleted()
    .subscribe( resp => {
      const data: any = resp;
      if(data.ok == false){
        Swal.fire('¡Lo sentimos!', data.mensaje, 'error')
        this.router.navigateByUrl('/home');
      } else {
        this.listOfData = data;
      }
    });
  }

}
