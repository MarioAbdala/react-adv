import { useEffect, useState } from 'react';
import { OnChangeArgs, Product } from '../interfaces';

export interface ProductButtonsProps {
    counter: number,
    increaseBy: (value: number) => void
};

interface useProductArgs {
    product: Product;
    onChange?: (args:OnChangeArgs) => void;
    value?: number;
};

export const useProduct = ({onChange, product, value = 0}: useProductArgs): ProductButtonsProps => {
    const [counter, setCounter] = useState(value);
    useEffect(() => {
      setCounter(value);
    }, [value]);
    const increaseBy = (value: number) => {
        const newValue = Math.max(counter+value, 0);
        setCounter(newValue);
        onChange && onChange({count: newValue, product});
    };
  return {counter, increaseBy};
};