import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroeComponents } from './heroe';

describe('Heroe', () => {
  let component: HeroeComponents;
  let fixture: ComponentFixture<HeroeComponents>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeroeComponents]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeroeComponents);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
