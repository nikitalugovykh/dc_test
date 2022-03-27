import React, { FC, useState } from "react"
import { useAppDispatch } from "../../../hooks/store"
import { Button } from "../../simples/Button"
import { PhotoArea } from "../../simples/PhotoArea"
import { ResponseArea } from "../../simples/ResponseArea"
import { TextInput } from "../../simples/TextInput"
import styles from "./FormPage.module.scss"

type Props = {
    loading?: boolean
    children?: any
}


const FormPage: FC<Props> = ({ loading = false, children }) => {
    const dispatch = useAppDispatch()

    const [name, setName] = useState<string>('')
    const [surname, setSurname] = useState<string>('')
    const [patronymic, setPatronymic] = useState<string>('')
    const [photo, setPhoto] = useState<string>('')

    return (
        <div className={styles.wrapper}>
            <form action="send_data">
                <TextInput
                    label={"Имя"}
                    value={name}
                    onChange={setName}
                    required = {false}   
                    onSubmit={() => { }}
                />
                <TextInput
                    label={"Фамилия"}
                    value={surname}
                    onChange={setSurname}
                    required = {false} 
                    onSubmit={() => { }}
                />
                <TextInput
                    label={"Отчество"}
                    value={patronymic}
                    onChange={setPatronymic}
                    required = {false} 
                    onSubmit={() => { }}
                />
                <PhotoArea photo={photo} label={'Фото'} onChange={setPhoto} />
                <Button 
                    onClick={() => {}} 
                    title={"Сохранить"} 
                    classes = {{root: {marginTop: '48px'}}}
                />
            </form>

            <ResponseArea 
                title={"Response"} 
                data={"ответ с бidlfhasfgakjdgfakjsdgfkahsdgfэка"}
                classes = {{root: {marginTop: '25px'}}}
            />

        </div>
    )
}

export default FormPage
