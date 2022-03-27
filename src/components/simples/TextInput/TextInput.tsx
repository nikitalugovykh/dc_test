import { CSSProperties, FC, useState } from 'react'
import styles from './TextInput.module.scss'


type Props = {
    label: string,
    value: string
    onChange: (val: string) => void
    required: boolean,
    error?: boolean,
    errorText?: string,
    onSubmit: () => void,
    classes?: {
        root?: CSSProperties
    }
}


const TextInput: FC<Props> = (
    {
        label,
        value,
        onChange,
        required = false,
        error,
        errorText,
        onSubmit,
        classes
    }
) => {

    const onChangeHandler = (ev: any) => {
        onChange(ev.target.value)
    }

    return (
        <div className={styles.wrapper}>
            <label className={styles.labelInput} htmlFor="input">{label}</label>
            <div className={styles.inputWrapper}>

                <input
                    className={styles.input}
                    style = {classes?.root}
                    value={value}
                    onChange={onChangeHandler}
                    type={'text'}
                    name="input"
                    required={required}
                    onSubmit={onSubmit}
                />
            </div>
            <div
                className={styles.textErrorWrapper}
                style={error && errorText !== ''
                    ?
                    { transform: 'translateY(5px)', opacity: 1, visibility: 'visible' }
                    : { transform: 'translateY(-200px)', opacity: 0, visibility: 'hidden' }
                }
            >
                <span 
                className={styles.textError}>{errorText}</span>
            </div>
        </div>
    )
}

export default TextInput
