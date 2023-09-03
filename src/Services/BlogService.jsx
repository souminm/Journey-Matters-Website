
import axios from 'axios';

class Post{

    getData(){
        const url ="http://localhost:8080/api/get-listing";
        return axios.get(url);
    }

    deleteData(id){
        const url ="http://localhost:8080/api/delete-listing/"+id;
        return axios.get(url);
    }

    update(formData){
        const url = "http://localhost:8080/api/update-listing";
        return axios.post(url,formData);
    }


}

export default new Post();
