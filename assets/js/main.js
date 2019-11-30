import fetch from 'node-fetch';
global.fetch = fetch;
var greeting = new Vue({
    el: "#greeting",
    data:{
        message: "Welcome to your daily dose of adorably majestic content"
    }
})

var action = new Vue({
    el: "#action",
    data:{
        image: "./images/initial.jpg"
        
    },
    methods:{
        changeImage: function(){
        this.image="./images/mountain.jpg"
        }
    }
})