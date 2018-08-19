import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomepaginaComponent } from './homepagina.component';

describe('HomepaginaComponent', () => {
  let component: HomepaginaComponent;
  let fixture: ComponentFixture<HomepaginaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomepaginaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomepaginaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
