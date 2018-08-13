import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfopaginaComponent } from './infopagina.component';

describe('InfopaginaComponent', () => {
  let component: InfopaginaComponent;
  let fixture: ComponentFixture<InfopaginaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfopaginaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfopaginaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
