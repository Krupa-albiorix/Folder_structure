import { Component, Injectable, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { BehaviorSubject, Observable } from 'rxjs';

// export class FileNode {
//   children!: FileNode[];
//   filename!: string;
//   type: any;
// }

export class FileFlatNode {
  constructor(
    public expandable: boolean, public filename: string, public level: number, public type: any) {}
}

export interface FileNode {
  name: string;
  children: FileNode[];
}

@Component({
  selector: 'app-folder',
  templateUrl: './folder.component.html',
  styleUrls: ['./folder.component.scss'],
})

export class FolderComponent implements OnInit {

  TREE_DATA = [
    {
      name: "Fruit",
      children: [{ name: "Apple" }, { name: "Banana" }, { name: "Fruit loops" }]
    },
    {
      name: "Vegetables",
      children: [
        {
          name: "Green",
          children: [{ name: "Broccoli" }, { name: "Brussel sprouts" }]
        },
        {
          name: "Orange",
          children: [{ name: "Pumpkins" }, { name: "Carrots" }]
        }
      ]
    }
  ];

  // public inputfolder = [TREE_DATA];
  // folderDetails!: any;
  // showform = false;

  // constructor(private formBuilder: FormBuilder) { 
  //   this.folderDetails = this.formBuilder.group({
  //     firstfolder: ['', [Validators.required]],
  //     choice: ['', [Validators.required]]
  //   });
  // }

  ngOnInit(): void {
    console.log(this.TREE_DATA);
  }

  // add_more_field() {
  //   this.showform = true;
  //   this.folderDetails.controls['choice'].setValue('folder');
  // }

  // removeAddress(i: number) {
  //   this.inputfolder.splice(i, 1);
  // }

  // adddata() {
  //   const treeData = this.folderDetails.value;
  //   this.inputfolder.push(treeData);
  //   console.log(treeData);
  // }

}
