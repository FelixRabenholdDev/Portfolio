import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ElementRef } from '@angular/core';

import { AboveTheFold } from './above-the-fold';
import { PortraitPositionService } from '@shared/services/portrait-position.service';

describe('AboveTheFold', () => {
  let component: AboveTheFold;
  let fixture: ComponentFixture<AboveTheFold>;
  let portraitPositionSpy: jasmine.SpyObj<PortraitPositionService>;

  beforeEach(async () => {
    portraitPositionSpy = jasmine.createSpyObj('PortraitPositionService', [
      'registerPortrait',
      'sync'
    ]);

    await TestBed.configureTestingModule({
      imports: [AboveTheFold],
      providers: [
        { provide: PortraitPositionService, useValue: portraitPositionSpy }
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboveTheFold);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should register the portrait element on init', () => {
    expect(portraitPositionSpy.registerPortrait).toHaveBeenCalledTimes(1);
    expect(portraitPositionSpy.registerPortrait).toHaveBeenCalledWith(
      component.portraitRef.nativeElement
    );
  });

  it('should have portraitRef pointing to a native element', () => {
    expect(component.portraitRef).toBeInstanceOf(ElementRef);
    expect(component.portraitRef.nativeElement).toBeTruthy();
  });

  it('should sync on window resize (throttled via requestAnimationFrame)', (done) => {
    component.onViewportChange();

    requestAnimationFrame(() => {
      expect(portraitPositionSpy.sync).toHaveBeenCalledTimes(1);
      done();
    });
  });

  it('should not queue multiple rAF calls if triggered rapidly', (done) => {
    component.onViewportChange();
    component.onViewportChange();
    component.onViewportChange();

    requestAnimationFrame(() => {
      expect(portraitPositionSpy.sync).toHaveBeenCalledTimes(1);
      done();
    });
  });
});