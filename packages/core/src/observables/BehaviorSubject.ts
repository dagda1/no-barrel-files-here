import ObservableImpl from 'zen-observable';

import type { Observable } from './types';

export class BehaviorSubject<T> implements Observable<T>, ZenObservable.SubscriptionObserver<T> {
  private isClosed: boolean;
  private currentValue: T;
  private terminatingError: Error | undefined;
  private readonly observable: Observable<T>;

  constructor(value: T) {
    this.isClosed = false;
    this.currentValue = value;
    this.terminatingError = undefined;
    this.observable = new ObservableImpl<T>((subscriber) => {
      if (this.isClosed) {
        if (this.terminatingError) {
          subscriber.error(this.terminatingError);
        } else {
          subscriber.complete();
        }
        return () => {};
      }

      subscriber.next(this.currentValue);

      this.subscribers.add(subscriber);
      return () => {
        this.subscribers.delete(subscriber);
      };
    });
  }

  private readonly subscribers = new Set<ZenObservable.SubscriptionObserver<T>>();

  [Symbol.observable](): BehaviorSubject<T> {
    return this;
  }

  get closed(): boolean {
    return this.isClosed;
  }

  next(value: T): void {
    if (this.isClosed) {
      throw new Error('BehaviorSubject is closed');
    }
    this.currentValue = value;
    this.subscribers.forEach((subscriber) => subscriber.next(value));
  }

  error(error: Error): void {
    if (this.isClosed) {
      throw new Error('BehaviorSubject is closed');
    }
    this.isClosed = true;
    this.terminatingError = error;
    this.subscribers.forEach((subscriber) => subscriber.error(error));
  }

  complete(): void {
    if (this.isClosed) {
      throw new Error('BehaviorSubject is closed');
    }
    this.isClosed = true;
    this.subscribers.forEach((subscriber) => subscriber.complete());
  }

  subscribe(observer: ZenObservable.Observer<T>): ZenObservable.Subscription;
  subscribe(
    onNext: (value: T) => void,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    onError?: (error: any) => void,
    onComplete?: () => void,
  ): ZenObservable.Subscription;
  subscribe(
    onNext: ZenObservable.Observer<T> | ((value: T) => void),
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    onError?: (error: any) => void,
    onComplete?: () => void,
  ): ZenObservable.Subscription {
    const observer =
      typeof onNext === 'function'
        ? {
            next: onNext,
            error: onError,
            complete: onComplete,
          }
        : onNext;

    return this.observable.subscribe(observer);
  }
}
