import { describe, expect, it, vi } from 'vitest';

import { ThemeSelector } from './ThemeSelector';
import type { NoBarrelsTheme } from './types';

describe('ThemeSelector', () => {
  it('should should select new themes', async () => {
    const selector = new ThemeSelector([]);

    expect(selector.getInstalledThemes()).toEqual([]);

    const subFn = vi.fn();
    selector.activeThemeId$().subscribe(subFn);
    expect(selector.getActiveThemeId()).toBe(undefined);
    await 'wait a tick';
    expect(subFn).toHaveBeenLastCalledWith(undefined);

    selector.setActiveThemeId('x');
    expect(subFn).toHaveBeenLastCalledWith('x');
    expect(selector.getActiveThemeId()).toBe('x');

    selector.setActiveThemeId(undefined);
    expect(subFn).toHaveBeenLastCalledWith(undefined);
    expect(selector.getActiveThemeId()).toBe(undefined);
  });

  it('should return a new array of themes', () => {
    const themes = new Array<NoBarrelsTheme>();
    const selector = new ThemeSelector(themes);

    expect(selector.getInstalledThemes()).toEqual(themes);
    expect(selector.getInstalledThemes()).not.toBe(themes);
  });

  it('should store theme in local storage', async () => {
    expect(ThemeSelector.createWithStorage([]).getActiveThemeId()).toBe('light');
    localStorage.setItem('theme', 'x');
    expect(ThemeSelector.createWithStorage([]).getActiveThemeId()).toBe('x');
    localStorage.removeItem('theme');
    expect(ThemeSelector.createWithStorage([]).getActiveThemeId()).toBe('light');

    const addListenerSpy = vi.spyOn(window, 'addEventListener');
    const selector = ThemeSelector.createWithStorage([]);

    expect(addListenerSpy).toHaveBeenCalledTimes(1);
    expect(addListenerSpy).toHaveBeenCalledWith('storage', expect.any(Function));

    selector.setActiveThemeId('y');
    await 'wait a tick';
    expect(localStorage.getItem('theme')).toBe('y');

    selector.setActiveThemeId(undefined);
    await 'wait a tick';
    expect(localStorage.getItem('theme')).toBe(null);

    localStorage.setItem('theme', 'z');
    expect(selector.getActiveThemeId()).toBe(undefined);

    const listener = addListenerSpy.mock.calls[0][1] as EventListener;
    listener({ key: 'theme' } as StorageEvent);

    expect(selector.getActiveThemeId()).toBe('z');
  });
});
