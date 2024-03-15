import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IfrenderfComponent } from './ifrenderf.component';

describe('IfrenderfComponent', () => {
  let component: IfrenderfComponent;
  let fixture: ComponentFixture<IfrenderfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IfrenderfComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(IfrenderfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
