import { useEffect, useRef, useState } from "react";

export const useEffectOnce = (effect: () => void | (() => void)) => {
  const destroyFunction = useRef<void | (() => void)>();
  const effectCalled = useRef(false);
  const renderAfterCalled = useRef(false);
  const [, setValue] = useState<number>(0);

  if (effectCalled.current) {
    renderAfterCalled.current = true;
  }

  useEffect(() => {
    if (!effectCalled.current) {
      destroyFunction.current = effect();
      effectCalled.current = true;
    }

    setValue((value) => value + 1);

    return () => {
      if (!renderAfterCalled.current) {
        return;
      }
      if (destroyFunction.current) {
        destroyFunction.current();
      }
    };
  }, []);
};
