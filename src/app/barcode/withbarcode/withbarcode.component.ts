import { Component, OnInit } from '@angular/core';
import { WebService } from 'src/app/shared/web.service';

@Component({
  selector: 'app-withbarcode',
  templateUrl: './withbarcode.component.html',
  styleUrls: ['./withbarcode.component.scss'],
})
export class WithbarcodeComponent implements OnInit {
  public currentdata:any=[];
  constructor(private WebService: WebService) {}

  ngOnInit(): void {
    let d =this.WebService.getdata().subscribe((res) => {
      // console.log(res);
      this.currentdata = res.data;
      console.log(this.currentdata);
    });
    // this.postdata();
  }

  // postdata() {
  //   this.WebService.getpostdata('string').subscribe((res) => {
  //     console.log(res);
  //   });
  // }
}
