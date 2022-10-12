import axios from 'axios'; // 액시오스

export default function commonAxios(url, callback) {
    
  axios(
    {
      url: '/api' + url,
      method: 'post',
      baseURL: 'http://localhost:9999',
      withCredentials: true,
    }
  ).then(function (response) {
      //callback(response);
      debugger;

      console.log(response.data);

      callback(response.data[1].email);
  });
}