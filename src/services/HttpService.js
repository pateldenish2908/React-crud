import axios from 'axios';

const API_BASE_URL = "https://dummyjson.com/users";

// const token = 'denishgdfg65763475664878786567vbnbnbv'
// axios.defaults.headers.common["Authorization"] = `Bearer ${token}`
axios.defaults.headers.post["Content-Type"] = 'application/json'
// headers: {
//     'Content-Type': 'multipart/form-data'
//   }
class HttpService {

    getAll(){
        return axios.get(API_BASE_URL);

        // https://dummyjson.com/users?ID=12345
        // return axios.get(API_BASE_URL,{
        //     params: {
        //       ID: 12345
        //     }
        // });
    }

    getById(UserId){
        return axios.get(API_BASE_URL + ':' + UserId);
    }

    create(User){
        const headers = { 
            // 'Authorization': `bearer ${token}`,
            'Content-Type': 'application/json'
        };
        return axios.post(API_BASE_URL+'/add', User, headers);
    }

    update(User, UserId){
        return axios.put(API_BASE_URL + ':' + UserId, User);
    }

    delete(UserId){
        return axios.delete(API_BASE_URL+'/' + UserId);
    }
}

export default new HttpService()