import axios from 'axios';



// const apiUrl = "https://localhost:7186"

 const apiUrl = process.env.REACT_APP_API
const instance = axios.create();

export default {
  getTasks: async () => {
    const result = await instance.get(`${apiUrl}/items`)    
    return result.data;
  },

  addTask: async(name)=>{
    console.log('addTask', name)
  const result = await instance.post(`${apiUrl}/items` ,{name})    
   //const response = await instance.post(`items/`,{name});
  
   

    //TODO
    return result;
  },

  setCompleted: async(id, isComplete)=>{
    console.log('setCompleted', {id, isComplete})
    const result = await instance.put(`${apiUrl}/items/${id}` )    
 
    //const response = await API.post(`items/${this.state.id}`);
   
    //TODO
    return result;
  },

  deleteTask:async(id)=>{
   const result = await instance.delete(`${apiUrl}/items/${id}` )    
  
   // const response = await API.delete(`items/${this.state.id}`);
  
    console.log('deleteTask')
    return result;
  }
};
