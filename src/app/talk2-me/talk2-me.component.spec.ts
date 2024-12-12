import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Talk2MeComponent } from './talk2-me.component';

describe('Talk2MeComponent', () => {
  let component: Talk2MeComponent;
  let fixture: ComponentFixture<Talk2MeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Talk2MeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Talk2MeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
