import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InicioMatchComponent } from './inicio-match.component';

describe('InicioMatchComponent', () => {
  let component: InicioMatchComponent;
  let fixture: ComponentFixture<InicioMatchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InicioMatchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InicioMatchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
