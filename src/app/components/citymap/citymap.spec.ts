import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Citymap } from './citymap';

describe('Citymap', () => {
  let component: Citymap;
  let fixture: ComponentFixture<Citymap>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Citymap]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Citymap);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
