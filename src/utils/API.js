import axios from "axios";  

const apiCall = {
  search: function() {
    return axios.get("https://randomuser.me/api/?results=5") 
  }
};

export default apiCall

