import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarruselIconsComponent } from './carrusel-icons.component';

describe('CarruselIconsComponent', () => {
  let component: CarruselIconsComponent;
  let fixture: ComponentFixture<CarruselIconsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CarruselIconsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CarruselIconsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
