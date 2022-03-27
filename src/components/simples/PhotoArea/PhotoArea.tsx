import { CSSProperties, FC, SyntheticEvent, useState } from 'react'
import { ReactComponent as AddIcon } from './../../../assets/images/add_photo.svg'
import styles from './PhotoArea.module.scss'


type Props = {
    label: string,
    onChange: (photo: any) => void,
    photo: any
}


const PhotoArea: FC<Props> = (
    {
        label,
        onChange,
        photo
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
                    name="input"
                    type='file'
                    onChange={onChangeHandler}
                    accept='.png, .jpg, .jpeg image/*'

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
        </div>
    )
}

export default PhotoArea
