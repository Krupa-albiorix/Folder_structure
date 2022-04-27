import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicFolderComponent } from './dynamic-folder.component';

describe('DynamicFolderComponent', () => {
  let component: DynamicFolderComponent;
  let fixture: ComponentFixture<DynamicFolderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DynamicFolderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DynamicFolderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
