import Vue from 'vue'
import utils from './utils.js'
new Vue({
    el:'#app',
    data:{
        user:utils.user()
    },
    methods:{
        logout:function(){
            utils.logout();
            location.reload();
        }
    }
});