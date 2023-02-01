import { useState } from 'react';

export interface ProductButtonsProps {
    counter: number,
    increaseBy: (value: number) => void
}

export const useProduct = (): ProductButtonsProps => {
    const [counter, setCounter] = useState(0);
    const increaseBy = (value: number) => {
        setCounter(prev => Math.max(prev+value, 0));
    };
  return {counter, increaseBy};
};