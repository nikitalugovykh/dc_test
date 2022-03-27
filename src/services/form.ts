import axios, { AxiosError } from "axios"
import { endpoints } from "../constants/constants"
import api from "../utils/api"



type DataForRequest = {
    action: string,
    id: number,
    image: string,
    contact: string[]
}

type SendDataResult = {
    success: boolean,
    data?: SendDataResponseType
}

type SendDataResponseType = {
    status: string
}

/**
 * Сервис для работы с формой
 */
export class FormService {


    /**
     * 
     * Метод для отправки данных в форме
     */

    static async sendData({action, id, image, contact}: DataForRequest): Promise<SendDataResult> {

        const result: SendDataResult = {
            success: false,
        }
        
        try {
        const fd = new FormData

        fd.append("action", action)
        fd.append("id", id.toString())
        fd.append("image", image)

        if (contact.length) {
            contact.forEach(item => {
                fd.append("contact", item)
            })
        }

        
        const response = await api.post<SendDataResponseType>(
            endpoints.sendFormData,
            fd
        )
            console.log(response, 'response');
            
            result.success = true
            result.data = response.data

        } catch (error) {
            if (axios.isAxiosError(error)) {
                // Access to config, request, and response

            } else {
                // Just a stock error
            }
        }

        return result

    }



}