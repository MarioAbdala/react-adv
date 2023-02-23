import { createContext, ReactElement, CSSProperties } from 'react';
import { ProductContextProps, Product, OnChangeArgs } from '../interfaces';
import { useProduct } from '../hooks/useProduct';
import styles from '../styles/styles.module.css';

export const ProductContext = createContext({} as ProductContextProps);
const { Provider } = ProductContext;

export interface Props {
    children?: ReactElement | ReactElement[];
    product: Product;
    className?: string;
    style?: CSSProperties;
    onChange?: (args: OnChangeArgs) => void;
    value?: number;
};

export const ProductCard = ({children, product, className, style, onChange, value}: Props) => {
    const {counter, increaseBy} = useProduct({onChange, product, value});
    return (
    <Provider value={{counter, increaseBy, product}}>
        <div className={`${styles.productCard} ${className}`} style={style}>
            {children}
        </div>
    </Provider>
    )
};