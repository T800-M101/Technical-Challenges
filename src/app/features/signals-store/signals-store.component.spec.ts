import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignalsStoreComponent } from './signals-store.component';

describe('SignalsStoreComponent', () => {
  let component: SignalsStoreComponent;
  let fixture: ComponentFixture<SignalsStoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SignalsStoreComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SignalsStoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
