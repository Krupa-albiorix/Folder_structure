import { FolderComponent } from './folder/folder.component';
import { DynamicFolderComponent } from './dynamic-folder/dynamic-folder.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: DynamicFolderComponent
  },
  {
    path: 'folder',
    component: FolderComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
