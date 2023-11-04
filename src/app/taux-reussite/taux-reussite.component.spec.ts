import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TauxReussiteComponent } from './taux-reussite.component';

describe('TauxReussiteComponent', () => {
  let component: TauxReussiteComponent;
  let fixture: ComponentFixture<TauxReussiteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TauxReussiteComponent]
    });
    fixture = TestBed.createComponent(TauxReussiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
