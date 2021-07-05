import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { EventClickComponent } from './event-click.component';
import { DebugElement } from '@angular/core';
import { By } from "@angular/platform-browser";

describe('EventClickComponent', () => {
  let component: EventClickComponent;
  let fixture: ComponentFixture<EventClickComponent>;
  let de: DebugElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EventClickComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EventClickComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    de = fixture.debugElement
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it("should 'add click' button is clicked", () => {
    const h2 = de.query(By.css('h2'))
    const btn = de.query(By.css('#btnAddClick'))
    btn.triggerEventHandler('click', {});
    fixture.detectChanges()
    expect(component.count).toEqual(Number(h2.nativeElement.innerText))
  })

  it('fake async', fakeAsync(() => {
    let isloggedIn = false;
    setTimeout(() => {
      isloggedIn = true
    }, 1000);
    tick(1000)
    expect(isloggedIn).toBe(true)
  }))
});
