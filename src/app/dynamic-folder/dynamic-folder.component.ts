import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-dynamic-folder',
  templateUrl: './dynamic-folder.component.html',
  styleUrls: ['./dynamic-folder.component.scss']
})
export class DynamicFolderComponent implements OnInit {

  showForm = false;
  @Input() public inputFolder: string[] = [];
  folderDetailsForm!: FormGroup;
  subFolderDetailsForm!: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.folderdata();
  }

  ngOnInit(): void { }

  folderdata() {
    this.folderDetailsForm = this.formBuilder.group({
      type: ['', [Validators.required]],
      name: ['', [Validators.required]],
      children: this.formBuilder.array([])
    }),

      this.subFolderDetailsForm = this.formBuilder.group({
        type: ['', [Validators.required]],
        name: ['', [Validators.required]],
        children: this.formBuilder.array([])
      })
  }

  addRootFolder() {
    this.showForm = true;
    this.folderDetailsForm.controls['type'].setValue('folder');
  }

  addData() {
    if (this.folderDetailsForm.valid) {
      this.inputFolder.push(this.folderDetailsForm.value);
      console.log(this.inputFolder);
      this.showForm = false;
      this.folderDetailsForm.reset();
    }
  }

  addSubFolder(item: any) {
    item.showSubData = true;
    this.showForm = false;
  }

  removeFolder(i: number, item: any) {
    console.log(item);
    item.splice(i, 1);
  }

  addSubData(item: any) {
    if (this.subFolderDetailsForm.valid && item) {
      console.log(item);
      console.log(this.subFolderDetailsForm.value);
      item.children.push(this.subFolderDetailsForm.value);
      console.log(item);
      item.showSubData = false;
      delete item.showSubData;
    }
    this.subFolderDetailsForm.reset();
  }

}
