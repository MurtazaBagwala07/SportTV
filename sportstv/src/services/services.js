import axios from 'axios';

export const getVideosService= async()=> await axios.get('/api/videos');

export const getCategoryService=async()=> await axios.get('/api/categories')

export const loginService=async(email, password)=> {
  try {
    console.log(email, password)
    const response = await axios.post('/api/auth/login', {
        email, password
    })
    console.log(response)
    if (response.status === 200 || response.status === 201) {
        return response.data
    }
  } catch (error) {
   console.error(error);  
  }
}

export const signUpService =async(firstName,lastName,email, password) => {
  try {
    const response = await axios.post('/api/auth/signup', {
      firstName,lastName, email, password

  })
  if (response.status === 200 || response.status === 201) {
      return response.data.encodedToken
  }
  } catch (error) {
    console.error(error);
  }
}

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
