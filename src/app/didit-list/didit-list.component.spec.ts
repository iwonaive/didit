import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiditListComponent } from './didit-list.component';

describe('DiditListComponent', () => {
  let component: DiditListComponent;
  let fixture: ComponentFixture<DiditListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DiditListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DiditListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
