import axios from 'axios';

export const getVideosService= async()=> await axios.get('/api/videos');

export const getCategoryService=async()=> await axios.get('/api/categories')

export const loginService=async(email, password)=> {
  try {
    const response = await axios.post('/api/auth/login', {
        email, password
    })
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

export const likeVideoService = async(video,token)=>{
  try{
    const response = await axios.post('/api/user/likes',{
      video
    },{
      headers:{
        authorization:token,
      },
    })
    if(response.status === 201){
      return response.data
    }
  
  }catch (error) {
    console.error(error);
  }
}

export const removeLikeVideoService =async (video,token)=>{
  try {
    const response = await axios.delete(`/api/user/likes/${video._id}`,{
      headers:{
        authorization:token,
      }
    })

    if(response.status===200){
      return response.data
    }

  } catch (error) {
    console.error(error);
  }
}

export const addToHistoryService = async (video,token)=>{
  try {
    const response = await axios.post('/api/user/history',{
      video
    },{
      headers:{
        authorization:token,
      }
    })
    if(response.status===201){
      return response.data
    }
  } catch (error) {
    console.error(error);
  }
}

export const deleteFromHistoryService = async (video,token)=>{
  try {
    const response = await axios.delete(`/api/user/history/${video._id}`,{
      headers:{
        authorization:token,
      }
    })
    if(response.status===200|| response.status === 201){
      return response.data
    }
  } catch (error) {
    console.error(error);
  }
}

export const clearAllHistoryService = async (token)=>{
  try {
    const response = await axios.delete('/api/user/history/all',{
      headers:{
        authorization:token,
      }
    })
    if(response.status === 200 || response.status === 201){
      return response.data
    }
  } catch (error) {
    console.error(error);
  }
}

export const addToWatchLaterService = async(video,token)=>{
  try {
    const response = await axios.post('/api/user/watchlater',{
      video
    },{
      headers:{
        authorization:token,
      }
    })
    if(response.status === 200 || response.status === 201){
      return response.data
    }
  } catch (error) {
    console.error(error)
  }
}

export const removeFromWatchLaterService= async(video,token)=>{
  try {
    const  response = await axios.delete(`/api/user/watchlater/${video._id}`,{
      headers:{
        authorization:token,
      }
    })
    if(response.status === 200 || response.status === 201){
      return response.data
    }
  } catch (error) {
    console.error(error)
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
