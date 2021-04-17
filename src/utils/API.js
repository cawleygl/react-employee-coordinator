import axios from "axios";  

const apiCall = {
  search: function() {
    return axios.get("https://randomuser.me/api/?results=10&nat=us") 
  }
};

export default apiCall

