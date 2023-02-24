import { useEffect, useRef, useState } from 'react';
import { InitialValues, OnChangeArgs, Product } from '../interfaces';

export interface ProductButtonsProps {
    counter: number;
    increaseBy: (value: number) => void;
    maxCount?: number;
    isMaxCountReached: boolean;
    reset: () => void;
};

interface useProductArgs {
    product: Product;
    onChange?: (args:OnChangeArgs) => void;
    value?: number;
    initialValues?: InitialValues;
};

export const useProduct = ({onChange, product, value = 0, initialValues}: useProductArgs): ProductButtonsProps => {
    const [counter, setCounter] = useState<number>(initialValues?.count || value);
    const isMounted = useRef(false);
    const reset = () => {
      setCounter(initialValues?.count || value);
    };
    useEffect(() => {
      if (!isMounted.current) return;
      setCounter(value);
    }, [value]);
    useEffect(() => {
      isMounted.current = true;
      return () => {
        isMounted.current = false;
      };
    }, []);
    const increaseBy = (value: number) => {
        const newValue = Math.max(counter+value, 0);
        if (newValue > (initialValues?.maxCount || newValue)) return;
        setCounter(newValue);
        onChange && onChange({count: newValue, product});
    };
  return {counter, increaseBy, maxCount: initialValues?.maxCount, isMaxCountReached: !!initialValues?.count && initialValues.maxCount === counter, reset};
};