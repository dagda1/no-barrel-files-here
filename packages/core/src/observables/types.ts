export type Subscription = {
  unsubscribe(): void;
  readonly closed: boolean;
};

export type Observer<T> = {
  next?(value: T): void;
  error?(error: Error): void;
  complete?(): void;
};

export type Observable<T> = {
  [Symbol.observable](): Observable<T>;

  /**
   * Subscribes to this observable to start receiving new values.
   */
  subscribe(observer: Observer<T>): Subscription;
  subscribe(onNext?: (value: T) => void, onError?: (error: Error) => void, onComplete?: () => void): Subscription;
};
