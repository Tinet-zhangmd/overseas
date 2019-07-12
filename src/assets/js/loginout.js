import store from '@/store';
import Router from 'vue-router'
import baseURL from '@/assets/js/ajax/baseURL';
export default loginout => {
    
    // window.location.href = "http://192.168.0.134:8089/#/my/login";
    let url = window.location.host,urlTMP=window.location.href.indexOf('#');
    // let url = window.location.href.split("#")[0]

    if(urlTMP!=-1){
        window.location.href = url+"#/login";
    }else{
        window.location.href = url+"/login";

    }

    store.dispatch('SETTOKEN', { token: '' });
    window.localStorage.removeItem("token");
    window.localStorage.removeItem("fromPath");
    window.localStorage.removeItem("saleDebt");
    window.localStorage.removeItem("avatarImg");  
    window.localStorage.removeItem("phone");  
    window.localStorage.removeItem("cid");
    window.localStorage.removeItem("oldval");
    window.localStorage.removeItem("val");
    window.localStorage.removeItem("findType");
    window.localStorage.removeItem("selectHotGoods")
    
     window.location.reload()
}