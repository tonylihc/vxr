
import axios from 'axios'
//api统一管理
const debugApiUrl = ''
const baseApiUrl = ''


// api接口地址，url中带debug，表示开启本地调试地址
export const api = window.location.href.indexOf("debug") > -1 ? {
  index: debugApiUrl + "index.json"
} : {
  index: baseApiUrl+"index"
};

//getData
export const getData = function(param, cb) {
  axios.get(param.url, {headers: {'X-Requested-With': 'XMLHttpRequest'}})
    .then(function(res) {
      cb && cb(res.data);
    })
    .catch(function (error) {
      console.log(error);
    });
}

//postData
export const postData = function(param, cb) {
  axios.get(param.url, param.data, {headers: {'X-Requested-With': 'XMLHttpRequest'}})
    .then(function(res) {
      cb && cb(res.data);
    })
    .catch(function (error) {
      console.log(error);
    });
}
