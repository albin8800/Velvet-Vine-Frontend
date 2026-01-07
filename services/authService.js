import api from '@/lib/axios.js';

const login = async (data) => {
    const res = await api.post('/api/auth/login', data);
    return res.data;

}

const register = async (data) => {
    const res = await api.post('/api/auth/register', data);
    return res.data;
}

export  { login, register };