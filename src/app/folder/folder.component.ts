import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-folder',
  templateUrl: './folder.component.html',
  styleUrls: ['./folder.component.scss']
})
export class FolderComponent implements OnInit {

  public inputfolder: any[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  add_more_field() {
    this.inputfolder.push({
      // id: this.inputfolder.length + 1,
      // input: ''
    });
  }

  removeAddress(i: number) {
    this.inputfolder.splice(i, 1);
  }

  save(itemValue: string) {
    this.inputfolder.push(itemValue);
  }

}
