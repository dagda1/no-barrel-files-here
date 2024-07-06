import { BehaviorSubject } from '../observables/BehaviorSubject';
import type { Observable } from '../observables/types';
import type { NoBarrelsTheme, NoBarrelsThemeApi } from './types';

const STORAGE_KEY = 'theme';

export class ThemeSelector implements NoBarrelsThemeApi {
  static createWithStorage(themes: NoBarrelsTheme[]): ThemeSelector {
    const selector = new ThemeSelector(themes);

    if (!window.localStorage) {
      return selector;
    }

    const initialThemeId = window.localStorage.getItem(STORAGE_KEY) ?? 'light';

    selector.setActiveThemeId(initialThemeId);

    selector.activeThemeId$().subscribe((themeId) => {
      if (themeId) {
        window.localStorage.setItem(STORAGE_KEY, themeId);
      } else {
        window.localStorage.removeItem(STORAGE_KEY);
      }
    });

    window.addEventListener('storage', (event) => {
      if (event.key === STORAGE_KEY) {
        const themeId = localStorage.getItem(STORAGE_KEY) ?? undefined;
        selector.setActiveThemeId(themeId);
      }
    });

    return selector;
  }

  private activeThemeId: string | undefined;
  private readonly subject = new BehaviorSubject<string | undefined>(undefined);

  constructor(private readonly themes: NoBarrelsTheme[]) {}

  getInstalledThemes(): NoBarrelsTheme[] {
    return this.themes.slice();
  }

  activeThemeId$(): Observable<string | undefined> {
    return this.subject;
  }

  getActiveThemeId(): string | undefined {
    return this.activeThemeId;
  }

  setActiveThemeId(themeId?: string): void {
    this.activeThemeId = themeId;
    this.subject.next(themeId);
  }
}
