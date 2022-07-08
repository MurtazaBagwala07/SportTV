import axios from 'axios';

export const getVideosService= async()=> await axios.get('/api/videos');

export const getCategoryService=async()=> await axios.get('/api/categories')

export const searchVideos = (videos, search) => {
    return search
      ? [...videos].filter((video) =>
          video.title.toLowerCase().includes(search.toLowerCase())
        )
      : [...videos];
  };
  
  export const sortVideosCategory = (videos, sortBy) => {
    if (sortBy && sortBy !== 'All') {
      return [...videos].filter((video) => video.category === sortBy);
    }
    return [...videos];
  };
