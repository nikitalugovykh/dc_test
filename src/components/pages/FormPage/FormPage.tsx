import React, { FC, useState } from "react"
import { useAppDispatch } from "../../../hooks/store"
import { FormService } from "../../../services/form"
import { Button } from "../../simples/Button"
import { PhotoArea } from "../../simples/PhotoArea"
import { ResponseArea } from "../../simples/ResponseArea"
import { TextInput } from "../../simples/TextInput"
import styles from "./FormPage.module.scss"

type Props = {
   
}


const FormPage: FC<Props> = () => {
    const dispatch = useAppDispatch()

    /**
     * @name состояние поля ввода имени 
     */

    const [name, setName] = useState<string>('')

     /**
     * @surname состояние поля ввода фамилии 
     */

    const [surname, setSurname] = useState<string>('')

     /**
     * @patronymic состояние поля ввода отчества
     */

    const [patronymic, setPatronymic] = useState<string>('')

     /**
     * @photo добавленная фотография
     */

    const [photo, setPhoto] = useState<string>('')
    
    /**
     * Соятоние каждого поля для выводы текста ошибки 
     */

    const [errorTextName, setErrorTextName] = useState<string>('')
    const [errorTextSurname, setErrorTextSurname] = useState<string>('')
    const [errorTextPatronymic, setErrorTextPatronymic] = useState<string>('')
    const [errorTextPhoto, setErrorTextPhoto] = useState<string>('')
    
    /**
     * @error общение сотсояние ошибки для всех полей input и photoArea
     */
    const [error, setError] = useState<boolean>(false)
    

    const TEXT_ERROR = 'Это поле обязательно для заполнения'
    const TEXT_ERROR_PHOTO = 'Необходимо выбрать фотографию'

    /**
     * @RESET_DELAY константа времени через сколько сбросятся все ошибки показанные пользователю
     */

    const RESET_DELAY = 3000
    
    /**
     * @response ответ с бэкенда на отправку формы
     */

    const [response, setResponse] = useState<string>('')


    const onSubmit = async() => {
        if(
            name.trim() === '' ||
            surname.trim() === '' ||
            patronymic.trim() === ''||
            photo === ''
        ) {
            
            setError(true)
            if (name.trim() === '') {
                setErrorTextName(TEXT_ERROR)
            } 
            if (surname.trim() === '') {
                setErrorTextSurname(TEXT_ERROR)
            }
            if (patronymic.trim() === '') {
                setErrorTextPatronymic(TEXT_ERROR)
            }
            if (photo === '') {
                setErrorTextPhoto(TEXT_ERROR_PHOTO)
            }
            
            resetError()
            return

        }

        const data = {
            action: 'send_data',
            id: 1,
            image: photo,
            contact: [name, surname, patronymic]
        }

        const response = await FormService.sendData(data)

        if(response.success) {
            response.data && setResponse(response.data.status)
        }
    }

    /**
     * @resetError сброс ошибок после установленной задержки 
     */

    const resetError = () => {
        setTimeout(() => {
            setError(false)
            setErrorTextName('')
            setErrorTextSurname('')
            setErrorTextPatronymic('')
            setErrorTextPhoto('')
        }, RESET_DELAY)
    }

    return (
        <div className={styles.wrapper}>
            <form action="send_data">
                <TextInput
                    label={"Имя"}
                    value={name}
                    onChange={setName}
                    required = {false}
                    error = {error}
                    errorText = {errorTextName} 

                />
                <TextInput
                    label={"Фамилия"}
                    value={surname}
                    onChange={setSurname}
                    required = {false} 
                    error = {error}
                    errorText = {errorTextSurname} 
                />
                <TextInput
                    label={"Отчество"}
                    value={patronymic}
                    onChange={setPatronymic}
                    required = {false} 
                    error = {error}
                    errorText = {errorTextPatronymic} 
                />
                <PhotoArea 
                    photo={photo} 
                    label={'Фото'} 
                    onChange={setPhoto} 
                    error
                    errorText = {errorTextPhoto}                    
                />
                <Button 
                    onClick={onSubmit}
                    title={"Сохранить"} 
                    classes = {{root: {marginTop: '48px'}}}
                />
            </form>

            <ResponseArea 
                title={"Response"} 
                data={response}
                classes = {{root: {marginTop: '25px'}}}
            />

        </div>
    )
}

export default FormPage
