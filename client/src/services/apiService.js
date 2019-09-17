import axios from 'axios'
const BASE_URL = process.env.API_URL || 'http://localhost:8001'
//https://z-shopping-time.herokuapp.com

const JWT_TOKEN = localStorage.getItem('token')

const apiClient = axios.create({
    baseURL: BASE_URL,
    headers: {
        'Authorization': `Bearer ${JWT_TOKEN}`
    
    }
})
console.log(BASE_URL)

export const login = async (data) => {
    try {
        const response = await apiClient.post('/auth/login', data)
        const { token, user } = response.data;
        console.log(user);

        localStorage.setItem('token', token);
        localStorage.setItem('userId', user.id);

        return user

    } catch(e) {
        throw e
    }
}

export const signUp = async (data) => {
    try {
        const response = await apiClient.post('/auth/signup', data)
        const { token, user } = response.data

        localStorage.setItem('token', token)
        return user

    } catch(e) {
        throw e
    }
}

export const getProfile = async ()=> {
    try {
        const response = await apiClient.get('/app/profile')
        const {user} = response.data

        return user

    } catch(e) {
        throw e

    }
}


//----------------------CRUD START HERE----------------------

export const createProduct = async (data) => {
    try {
        let userId = localStorage.getItem('userId')
        const response = await apiClient.post(`/app/${userId}/product`, data)
        const { user } = response.data
        return user
    } catch(e) {
        throw e
    }
}


export const getProducts = async () => {
    try {
        const response = await apiClient.get(`/app/product`)
        return response.data
    } catch (e){
        throw e
    }
}


export const getMyStoreProducts = async () => {
    try {
        let userId = localStorage.getItem('userId')
        const response = await apiClient.get(`/app/${userId}/my-product`)
        return response.data
    } catch (e){
        throw e
    }
}

//Update

export const updateProduct = async (productId, data ) => {
    try {
        let userId = localStorage.getItem('userId')
        const response = await apiClient.put(`/app/product/user/${userId}/update/${productId}`, data)
        return response
    } catch (e) {
        throw e
    }
}


export const getProduct = async (productId ) => {
    try {
        const response = await apiClient.get(`/app/product/${productId}`)
        return response
    } catch (e) {
        throw e
    }
}


export const deleteProduct = async (productId) => {
    try {
        const response = await apiClient.delete(`/app/product/${productId}/delete`)
        return response

    } catch (e){
        throw e
    }
}