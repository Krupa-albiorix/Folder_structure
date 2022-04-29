import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-dynamic-folder',
  templateUrl: './dynamic-folder.component.html',
  styleUrls: ['./dynamic-folder.component.scss']
})
export class DynamicFolderComponent implements OnInit {

  show_form = false;
  @Input() public inputfolder: any[] = [];
  folderdetails!: any;
  show_select = false;
  subfolderdetails!: any;

  constructor( private formBuilder : FormBuilder ) { 
    this.folderdata();
  }

  ngOnInit(): void {
    // console.log(this.inputfolder);
  }

  folderdata() {
    this.folderdetails = this.formBuilder.group({
      choice: ['', [Validators.required]],
      name: ['', [Validators.required]],
      chidren: [[]]
    }),

    this.subfolderdetails = this.formBuilder.group({
      subchoice: ['', [Validators.required]],
      subname: ['', [Validators.required]]
    })
  }

  add_more_field() {
    this.show_form = true;
    this.show_select = false;
    this.folderdetails.controls['choice'].setValue('folder');
  }

  add_data() {
    if (this.folderdetails.valid) {
      this.inputfolder.push(this.folderdetails.value);
      console.log(this.inputfolder);
      this.show_form = false;
      this.folderdetails.reset();
    }    
  }

  addsubfolder(item: any) {
    item.show_select = true;
    this.show_form = false;
  }

  removeAddress(i: number) {
    this.inputfolder.splice(i, 1);
  }

  add_subdata(i:number ,item: any) {
    if (this.subfolderdetails.valid) {
      if (item){
        this.inputfolder[i].chidren.push(this.subfolderdetails.value);
        console.log(this.inputfolder);
        item.show_select=false;
      }
    }
  }

}
