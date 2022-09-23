import axios from 'axios'

const client = axios.create({ baseURL: 'http://localhost:5000' })

export const RequestApi = ({...options}) => {
    client.defaults.headers.common.Authorization = `Bearer token`
    const onSuccess = response => response
    const onError = error => {
        // optional catch errors
        // or redirect to the login page
        return error
    }
    return client(options).then(onSuccess).catch(onError)
}
 






