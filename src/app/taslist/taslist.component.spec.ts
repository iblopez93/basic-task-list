import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaslistComponent } from './taslist.component';

describe('TaslistComponent', () => {
  let component: TaslistComponent;
  let fixture: ComponentFixture<TaslistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TaslistComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TaslistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
