import { type BaseSyntheticEvent, useCallback, useState } from 'react';
import { useSyncedRef } from './useSyncedRef';
import type { InitialState, NextState } from './resolveHookState';
import { resolveHookState } from './resolveHookState';

export function useToggle(
  initialState: InitialState<boolean>,
  ignoreReactEvents: false,
): [boolean, (nextState?: NextState<boolean>) => void];
export function useToggle(
  initialState?: InitialState<boolean>,
  ignoreReactEvents?: true,
): [boolean, (nextState?: NextState<boolean> | BaseSyntheticEvent) => void];

export function useToggle(
  initialState: InitialState<boolean> = false,
  ignoreReactEvents = true,
): [boolean, (nextState?: NextState<boolean> | BaseSyntheticEvent) => void] {
  const [state, setState] = useState(initialState);
  const ignoreReactEventsRef = useSyncedRef(ignoreReactEvents);

  return [
    state,
    useCallback((nextState) => {
      setState((previousState) => {
        if (
          nextState === undefined ||
          (ignoreReactEventsRef.current &&
            typeof nextState === 'object' &&
            // @ts-expect-error React internals
            (nextState.constructor.name === 'SyntheticBaseEvent' || typeof nextState._reactName === 'string'))
        ) {
          return !previousState;
        }

        return Boolean(resolveHookState(nextState, previousState));
      });
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []),
  ];
}
