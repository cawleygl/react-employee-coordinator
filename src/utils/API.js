import axios from "axios";  

const apiCall = {
  search: function() {
    return axios.get("https://randomuser.me/api/") 
  }
};

export default apiCall

