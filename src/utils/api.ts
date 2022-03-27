import axios, { AxiosRequestConfig } from 'axios'

const config: AxiosRequestConfig = {
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
    },
    transformRequest: (data, headers) => {
        // !!! override data to return formData
        // since axios converts that to string
        return data
    },
}

config.baseURL = 'http://test-job.pixli.app/'

const instance = axios.create(config)

export default instance
