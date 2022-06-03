/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { TradingviewComponent } from './tradingview.component';

describe('TradingviewComponent', () => {
  let component: TradingviewComponent;
  let fixture: ComponentFixture<TradingviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TradingviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TradingviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
