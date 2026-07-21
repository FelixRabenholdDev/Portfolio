import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BurgerMenu } from './burger-menu';
import { PortraitPositionService } from '@shared/services/portrait-position.service';

describe('BurgerMenu', () => {
  let component: BurgerMenu;
  let fixture: ComponentFixture<BurgerMenu>;
  let portraitPositionSpy: jasmine.SpyObj<PortraitPositionService>;

  beforeEach(async () => {
    portraitPositionSpy = jasmine.createSpyObj('PortraitPositionService', [
      'registerPortrait',
      'sync'
    ]);

    await TestBed.configureTestingModule({
      imports: [BurgerMenu],
      providers: [
        { provide: PortraitPositionService, useValue: portraitPositionSpy }
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BurgerMenu);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should start closed', () => {
    expect(component.menuOpen).toBeFalse();
  });

  it('should open and sync portrait position when toggled on', () => {
    component.toggleMenu();

    expect(component.menuOpen).toBeTrue();
    expect(portraitPositionSpy.sync).toHaveBeenCalledTimes(1);
  });

  it('should close without triggering an extra sync', () => {
    component.toggleMenu(); // open
    portraitPositionSpy.sync.calls.reset();

    component.toggleMenu(); // close

    expect(component.menuOpen).toBeFalse();
    expect(portraitPositionSpy.sync).not.toHaveBeenCalled();
  });

  it('closeMenu() should always set menuOpen to false', () => {
    component.toggleMenu(); // open
    component.closeMenu();

    expect(component.menuOpen).toBeFalse();
  });
});