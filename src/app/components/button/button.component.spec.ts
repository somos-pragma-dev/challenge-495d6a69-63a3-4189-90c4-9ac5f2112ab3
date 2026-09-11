import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ButtonComponent } from './button.component';
import { ButtonModel } from '../../models/button.model';
import { AccessibilityService } from '../../services/accessibility.service';

describe('ButtonComponent', () => {
  let component: ButtonComponent;
  let fixture: ComponentFixture<ButtonComponent>;
  let accessibilityService: jasmine.SpyObj<AccessibilityService>;

  beforeEach(async () => {
    const spy = jasmine.createSpyObj('AccessibilityService', ['handleClick']);
    await TestBed.configureTestingModule({
      declarations: [ButtonComponent],
      providers: [{ provide: AccessibilityService, useValue: spy }]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonComponent);
    component = fixture.componentInstance;
    accessibilityService = TestBed.inject(AccessibilityService) as jasmine.SpyObj<AccessibilityService>;
    component.button = { label: 'Click me', ariaLabel: 'Click me button' } as ButtonModel;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call handleClick on button click', () => {
    const button = fixture.nativeElement.querySelector('button');
    button.click();
    expect(accessibilityService.handleClick).toHaveBeenCalledWith(component.button);
  });
});