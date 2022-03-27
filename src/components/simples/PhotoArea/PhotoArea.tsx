import { FC } from 'react'
import { ReactComponent as AddIcon } from './../../../assets/images/add_photo.svg'
import styles from './PhotoArea.module.scss'


type Props = {
    label: string,
    onChange: (photo: any) => void,
    photo: any,
    error: boolean,
    errorText: string
}

const PhotoArea: FC<Props> = (
    {
        label,
        onChange,
        photo,
        error,
        errorText
    }
) => {

    const onChangeHandler = (ev: React.ChangeEvent<HTMLInputElement>) => {
        // ev.target.files && console.log(URL.createObjectURL(ev.target.files[0]))
        ev.target.files && onChange(ev.target.files[0])

    }

    return (
        <div className={styles.wrapper}>
            <label
                className={styles.labelInput}
                htmlFor="input"
            >
                {label}
            </label>
            <div className={styles.inputWrapper}>
                <input
                    className={styles.input}
                    accept='.png, .jpg, .jpeg image/*'
                    name="input"
                    type='file'
                    onChange={onChangeHandler}
                />
                <div className={styles.imgWrapper}>
                    {
                        photo
                            ?
                            <img className={styles.img} src={photo ? URL.createObjectURL(photo) : ''} alt="" />
                            :
                            <AddIcon />
                    }
                </div>
            </div>
            <div
                className={styles.textErrorWrapper}
                style={error && errorText !== ''
                    ? { transform: 'translateY(5px)', opacity: 1, visibility: 'visible' }
                    : { transform: 'translateY(-50px)', opacity: 0, visibility: 'hidden' }
                }
            >
                <span className={styles.textError}>
                    {errorText}
                </span>
            </div>

        </div>




    )
}

export default PhotoArea
