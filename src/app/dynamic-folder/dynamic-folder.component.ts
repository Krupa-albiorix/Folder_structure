import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dynamic-folder',
  templateUrl: './dynamic-folder.component.html',
  styleUrls: ['./dynamic-folder.component.scss']
})
export class DynamicFolderComponent implements OnInit {

  public inputfolder: any[] = [];

  constructor() { }

  ngOnInit(): void {
    console.log(this.inputfolder);
  }

  add_more_field() {
    this.inputfolder.push({
    });
  }

  removeAddress(i: number) {
    this.inputfolder.splice(i, 1);
  }

}
