import React from 'react';
const axios = require('axios');



  const instance = axios.create({
  baseURL: 'https://shielded-basin-10438.herokuapp.com/',
  
})
export default instance

