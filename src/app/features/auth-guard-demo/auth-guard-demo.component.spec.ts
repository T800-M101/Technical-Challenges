import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthGuardDemoComponent } from './auth-guard-demo.component';

describe('AuthGuardDemoComponent', () => {
  let component: AuthGuardDemoComponent;
  let fixture: ComponentFixture<AuthGuardDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AuthGuardDemoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AuthGuardDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
