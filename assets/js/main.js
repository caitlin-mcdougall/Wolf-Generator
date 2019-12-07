var greeting = new Vue({
    el: "#greeting",
    data:{
        message: "Welcome to your daily dose of adorably majestic content"
    }
})

var action = new Vue({
    el: "#action",
    data:{
        image: "./images/1.jpg"
        
    },
    methods:{
            
        changeImage: function(){
            var num_images = 3;
            var curr_image = this.image;
            var new_image;
            do{
            var picture_number = Math.floor(Math.random() * (num_images)+1);
            picture_number.toString();
            new_image="./images/"+ picture_number +".jpg";
            } while(curr_image == new_image);

            this.image = new_image;
            
        }
    }
})