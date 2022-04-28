import { Component, OnInit } from '@angular/core';
import { resetFakeAsyncZone } from '@angular/core/testing';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-dynamic-folder',
  templateUrl: './dynamic-folder.component.html',
  styleUrls: ['./dynamic-folder.component.scss']
})
export class DynamicFolderComponent implements OnInit {

  show_form = false;
  public inputfolder: any[] = [];
  folderdetails!: any;

  constructor( private formBuilder : FormBuilder ) { 
    this.folderdetails = this.formBuilder.group({
      choice: ['', [Validators.required]],
      name: ['', [Validators.required]]
    })
  }

  ngOnInit(): void {
    // console.log(this.inputfolder);
  }

  add_more_field() {
    this.show_form = true;
    this.folderdetails.controls['choice'].setValue('folder');
  }

  add_data() {
    this.inputfolder.push(this.folderdetails.value);
    console.log(this.folderdetails);
    this.show_form = false;
    this.folderdetails.reset();
  }

  removeAddress(i: number) {
    this.inputfolder.splice(i, 1);
  }

}
