import { Component, OnInit } from '@angular/core';
import { Api } from '../../service/api-rave';
@Component({
  selector: 'app-userlist',
  imports: [],
  templateUrl: './userlist.html',
  styleUrl: './userlist.css',
})
export class Userlist implements OnInit {
  data: any[] = [];



  constructor(private apiService: Api) {

  }

  ngOnInit(): void {
    this.llenarData();
  }
  llenarData() {
    this.apiService.getData().subscribe(data => {
      this.data = data;
      console.log(this.data)
    })
  }




}
