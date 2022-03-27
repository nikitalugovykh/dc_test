import { CSSProperties, FC, useState } from 'react'
import styles from './TextInput.module.scss'


type Props = {
    label: string,
    value: string
    onChange: (val: string) => void
    required: boolean,
    error?: boolean,
    errorText?: string,
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
        classes
    }
) => {

    const onChangeHandler = (ev: React.ChangeEvent<HTMLInputElement>) => {
        onChange(ev.target.value)
    }

    return (
        <div className={styles.wrapper}>
            <label className={styles.labelInput} htmlFor="input">{label}</label>
            <div className={styles.inputWrapper}>

                <input
                    className={styles.input}
                    style={classes?.root}
                    value={value}
                    onChange={onChangeHandler}
                    type={'text'}
                    name="input"
                    required={required}
                />
            </div>
            <div
                className={styles.textErrorWrapper}
                style={error && errorText !== ''
                    ?
                    { transform: 'translateY(0px)', opacity: 1, visibility: 'visible' }
                    : { transform: 'translateY(-50px)', opacity: 0, visibility: 'hidden' }
                }
            >
                <span
                    className={styles.textError}
                >
                    {errorText}
                </span>
            </div>
        </div>
    )
}

export default TextInput
