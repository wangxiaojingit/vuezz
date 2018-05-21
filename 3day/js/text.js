var myapp=new Vue({
    el:"#main",
    data:{
       lists:["http://image.xcbobo.com/PubImgSour/null.png","http://www.xiuktv.com/imgs/indeximg/icon.png"],
       
    },
    methods:{
        isHasImg:function(pathImg){
            debugger;
             var ImgObj=new Image();
             ImgObj.src=pathImg;
             if(ImgObj.fileSize > 0 || (ImgObj.width > 0 && ImgObj.height > 0))
             {
             return true;
             } else {
             return false;
             }
        },
        //图片
        imgurl:function(item){
            var imgurl=item
            if(this.isHasImg(imgurl)){
                //如果图片链接有效 就返回原有的图片地址
                return imgurl
            }else {
                //如果图片链接无效就用有效图片地址
                return "./images/avtor.jpg";
            }
          
        },
    }
})