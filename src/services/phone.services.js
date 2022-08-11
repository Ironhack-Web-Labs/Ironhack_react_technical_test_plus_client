import axios from 'axios'

class PhonesServices {

    constructor() {
        this.api = axios.create({
            baseURL: `${process.env.REACT_APP_API_URL}/phones`
        })
    }

    getPhones() {
        return this.api.get('/')
    }

    getPhone(id) {
        return this.api.get(`/${id}`)
    }


}

export default new PhonesServices()