import { Component, OnInit } from '@angular/core';
import { TableService } from './table.service';
import { Table } from './Table';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
 characters : Table[];
  constructor( private tservice :TableService) { }

  ngOnInit() {
     this
      .tservice
      .getCharacters()
      .subscribe((data: Table[]) => {
        this.characters = data;
         console.log(this.characters);
    }); 
   console.log(this.characters);
  }

  savedata(){
    console.log("sbbjsbcbksnclsnc");
  }

//  console.log(characters);
  settings = {
    columns: {
      id: {
        title: 'ID'
      },
      name: {
        title: 'Name'
      },
      age: {
        title: 'Age'
      }
    }
  };

  

}
