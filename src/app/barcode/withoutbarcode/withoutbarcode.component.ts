import { Component, OnInit } from '@angular/core';
import { WebService } from 'src/app/shared/web.service';

@Component({
  selector: 'app-withoutbarcode',
  templateUrl: './withoutbarcode.component.html',
  styleUrls: ['./withoutbarcode.component.scss']
})
export class WithoutbarcodeComponent implements OnInit {
  public currentdata:any=[];
  constructor(public WebService: WebService) { }

  ngOnInit(): void {
    let d =this.WebService.getdata().subscribe((res) => {
      // console.log(res);
      this.currentdata = res.data;
      console.log(this.currentdata);
    });
  }

}
