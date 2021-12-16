import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SenaListPersonaComponent } from './sena-list-persona.component';

describe('SenaListPersonaComponent', () => {
  let component: SenaListPersonaComponent;
  let fixture: ComponentFixture<SenaListPersonaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SenaListPersonaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SenaListPersonaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
