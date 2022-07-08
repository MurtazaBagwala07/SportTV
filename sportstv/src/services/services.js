import axios from 'axios';

export const getVideosService= async()=> await axios.get('/api/videos');
export const getCategoryService=async()=> await axios.get('/api/categories')
