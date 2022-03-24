

export type Dispatcher = {|
  getCacheSignal?: () => AbortSignal,
    getCacheForType ?: <T>(resourceType: () => T) => T,
      readContext<T>(context: ReactContext<T>): T,
        useState<S>(initialState: (() => S) | S): [S, Dispatch<BasicStateAction<S>>],
          useReducer<S, I, A>(
    reducer: (S, A) => S,
          initialArg: I,
    init?: (I) => S,
          ): [S, Dispatch<A>],
            useContext<T>(context: ReactContext<T>): T,
              useRef<T>(initialValue: T): {| current: T|},
                useEffect(
    create: () => (() => void) | void,
                deps: Array<mixed> | void | null,
                  ): void,
                  useInsertionEffect(
    create: () => (() => void) | void,
                  deps: Array<mixed> | void | null,
                    ): void,
                    useLayoutEffect(
    create: () => (() => void) | void,
                    deps: Array<mixed> | void | null,
                      ): void,
                      useCallback<T>(callback: T, deps: Array<mixed> | void | null): T,
                        useMemo<T>(nextCreate: () => T, deps: Array<mixed> | void | null): T,
                          useImperativeHandle<T>(
                            ref: {| current: T | null|} | ((inst: T | null) => mixed) | null | void,
    create: () => T,
                            deps: Array<mixed> | void | null,
                              ): void,
                              useDebugValue<T>(value: T, formatterFn: ?(value: T) => mixed): void,
                                useDeferredValue<T>(value: T): T,
  useTransition(): [boolean, (() => void) => void],
                                  useMutableSource<Source, Snapshot>(
                                  source: MutableSource<Source>,
                                    getSnapshot: MutableSourceGetSnapshotFn<Source, Snapshot>,
                                    subscribe: MutableSourceSubscribeFn<Source, Snapshot>,
                                    ): Snapshot,
                                    useSyncExternalStore<T>(
    subscribe: (() => void) => () => void,
    getSnapshot: () => T,
    getServerSnapshot?: () => T,
                                      ): T,
                                      useId(): string,
  useCacheRefresh?: () => <T>(?() => T, ?T) => void,

                                        unstable_isNewReconciler?: boolean,
|};