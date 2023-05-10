import { TestBed, ComponentFixture } from '@angular/core/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AppComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  it('should increment the counter by 1', () => {
    component.increment();
    expect(component.counter).toBe(1);
  });

  it('should decrement the counter by 1', () => {
    component.decrement();
    expect(component.counter).toBe(-1);
  });

  it('should reset the counter to 0', () => {
    component.counter = 5;
    component.reset();
    expect(component.counter).toBe(0);
  });

  it('should save the current counter value', () => {
    component.counter = 3;
    component.save();
    expect(component.savedResults[0]).toBe(3);
  });
});