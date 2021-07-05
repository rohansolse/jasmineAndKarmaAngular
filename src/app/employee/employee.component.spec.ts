import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AuthonticationService } from '../authontication.service';
import { EmployeeComponent } from './employee.component';

describe('EmployeeComponent', () => {
  let component: EmployeeComponent;
  let fixture: ComponentFixture<EmployeeComponent>;
  let authservice: AuthonticationService;
  let h1: HTMLElement;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EmployeeComponent],
      providers: [AuthonticationService]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeComponent);
    authservice = TestBed.inject(AuthonticationService)
    component = fixture.componentInstance;
    h1 = fixture.nativeElement.querySelector('h1')
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should get "salary slip"', () => {
    spyOn(authservice, 'isAuthonticated').and.returnValue(true);
    let slip = component.getSalarySlip()
    expect(slip).toEqual("salary slip")
    expect(authservice.isAuthonticated).toHaveBeenCalled()
  })
  it('should show salary slip', () => {
    component.getSalarySlip();
    fixture.detectChanges();
    expect(h1.textContent).toBe(component.salarySlip)
  })
});
