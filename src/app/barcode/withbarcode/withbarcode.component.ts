import { Component, OnInit } from '@angular/core';
import { WebService } from 'src/app/shared/web.service';

@Component({
  selector: 'app-withbarcode',
  templateUrl: './withbarcode.component.html',
  styleUrls: ['./withbarcode.component.scss'],
})
export class WithbarcodeComponent implements OnInit {
  constructor(public WebService: WebService) {}

  ngOnInit(): void {
    this.WebService.getdata().subscribe((res) => {
      console.log(res);
    });
    this.postdata();
  }

  postdata() {
    this.WebService.getpostdata('string').subscribe((res) => {
      console.log(res);
    });
  }
}
