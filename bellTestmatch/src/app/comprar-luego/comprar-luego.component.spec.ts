import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComprarLuegoComponent } from './comprar-luego.component';

describe('ComprarLuegoComponent', () => {
  let component: ComprarLuegoComponent;
  let fixture: ComponentFixture<ComprarLuegoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComprarLuegoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComprarLuegoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
