import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import axios from 'axios';

 
 axios.interceptors.response.use(
    (res) => {
       // Add configurations here
       if (res.status === 201) {
        
       }
       return res;
    },
    (err) => {
        console.log("faild");
       return Promise.reject(err);
    }
 );
ReactDOM.render(<App />, document.getElementById('root'));