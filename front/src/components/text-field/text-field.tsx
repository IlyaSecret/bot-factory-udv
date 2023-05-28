import { ReactNode } from 'react';
import './text-field.scss';

type TextFieldProps = {
    children: ReactNode | string | number,
    title: string
}

export default function TextField({children, title}: TextFieldProps) {
    return (
        <div className='text-field'>
                <span className='text-field__title'>
                    {title}
                </span>
                <div className='text-field__content'>
                    {children}
                </div>
        </div>
    )
}