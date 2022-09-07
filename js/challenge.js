
const h1Counter = document.querySelector('#counter');
const bttnPause = document.querySelector('#pause');
const bttnSubmit = document.querySelector('#submit'); 
const bttnMinus = document.querySelector('#minus');
const bttnPlus = document.querySelector('#plus');
const restart = document.querySelector('#restart');




function setTimer (){
    h1Counter.innerText++ 
}

const newTimer = setInterval(setTimer, 1000);

/////

// Minus Button
bttnMinus.onclick=function(){

    h1Counter.innerText--
}

// Plus Button
bttnPlus.onclick=function(){
        h1Counter.innerText++
}

// Restart Button

restart.onclick=function(){
    //clearInterval(setInterval)
    const bttnSubmit = document.querySelector('#submit');
    h1Counter.innerText = 0
    bttnMinus.disabled = false;
    bttnPlus.disabled = false;
    bttnSubmit.disabled = false;
    bttnHeart.disabled = false;
   bttnPause.innerText = 'pause'
   //setInterval(setTimer, 1000)

    
}

// Adding Comment
const form = document.querySelector('#comment-form');
form.addEventListener('submit', (e)=>{
    e.preventDefault();
    const input1= form.comment_input.value
    const pTag = document.createElement('li');
    const h3 = document.querySelector('#add_comment')
    pTag.innerText = input1
    h3.appendChild(pTag)
    form.reset()
});


// Heart Button
const bttnHeart = document.querySelector('#heart');
bttnHeart.onclick=function(){
    //Want '8 has been liked 3 times'
    let numberOfClicks = 0
        numberOfClicks+=1
        
    //let postClicks = numberOfClicks +=1
    const ulLikes = document.querySelector('.likes')
    const liTagLikes = document.createElement('li');
    liTagLikes.innerText = `${h1Counter.innerText} has been liked ${numberOfClicks} times`
    ulLikes.appendChild(liTagLikes)
    };


// Pause Button

bttnPause.onclick= function(){
    if(bttnPause.innerText==='pause'){
        clearInterval(newTimer)
    bttnMinus.disabled = true;
    bttnPlus.disabled = true;
    bttnSubmit.disabled = true;
    bttnHeart.disabled = true;
   bttnPause.innerText = 'resume'
    }
    else {
        newTimer()
        bttnMinus.disabled = false;
    bttnPlus.disabled = false;
    bttnSubmit.disabled = false;
    bttnHeart.disabled = false;
    bttnPause.innerText = 'pause'
    }


}
    

//    restart.addEventListener('click', (e)=>{
//     e.preventDefault()
//     clearInterval(setInterval)
//     h1Counter.innerText = 0
//     bttnMinus.disabled = false;
//     bttnPlus.disabled = false;
//     bttnSubmit.disabled = false;
//     bttnHeart.disabled = false;
//     setInterval(setTimer, 1000)

//    })

    /*bttnPause.addEventListener('click', (e)=>{
        e.preventDefault()
       function newTimer() {
        h1Counter.innerText++ 
       }

       setInterval(newTimer(), 1000)
       


    })}*/