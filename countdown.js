function countDown(time){
  console.log('Good morning!');
  let timer = setInterval(function(){
    time--;
   if(time <= 0){
      clearInterval(timer);
      console.log('Good night!');
    }
    else if(time <= 7){
      console.log("Good Afternoon!");
    }
  },1000)

}
countDown(10);
