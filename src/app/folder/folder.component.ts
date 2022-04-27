import { Component, OnInit } from '@angular/core';

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

  public TREE_DATA = [
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
      ]
    }
  ];

  ngOnInit(): void {
    console.log(this.TREE_DATA);
  }

}
