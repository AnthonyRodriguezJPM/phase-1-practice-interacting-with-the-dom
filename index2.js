
/* const h1Counter = document.querySelector('#counter');

function setTimer (){
    h1Counter.innerText++ 
}
const startInterval = setInterval(setTimer, 1000)

/////

const bttnMinus = document.querySelector('#minus');

bttnMinus.addEventListener('click', (e)=>{
    e.preventDefault(e)
    h1Counter.innerText--
})

/////

const bttnPlus = document.querySelector('#plus');

bttnPlus.addEventListener('click', (e)=>{
    e.preventDefault();
    h1Counter.innerText++
})

/////

const bttnPause = document.querySelector('#pause');

bttnPause.addEventListener('click', (e)=>{
    e.preventDefault()
    clearInterval(startInterval)
    bttnMinus.disabled = true;
    bttnPlus.disabled = true;
    //add siable for heart and submit button\
   /* bttnPause.innerText = 'resume'
    bttnPause.addEventListener('click', (e)=>{
        e.preventDefault()
       function newTimer() {
        h1Counter.innerText++ 
       }

       setInterval(newTimer(), 1000)
       


    })
    
})*/

///////

/*const bttnHeart = document.querySelector('#heart');
bttnHeart.addEventListener('click', (e)=>{
    e.preventDefault();
    //Want '8 has been liked 1 time'
    let numberOfClicks = 0
    let postClicks = numberOfClicks +=1
    const ulLikes = document.querySelector('.likes')
    const liTagLikes = document.createElement('li');
    liTagLikes.innerText = `${h1Counter.innerText} has been liked ${postClicks} times`
    ulLikes.appendChild(liTagLikes)
})




// {{ DONE }} Add creat new PTAG, Append it and add it to Summary
const form = document.querySelector('#comment-form');
form.addEventListener('submit', (e)=>{
    e.preventDefault();
    const input1= form.comment_input.value
    
    const pTag = document.createElement('p');
    const h3 = document.querySelector('#add_comment')
    pTag.innerText = input1
    h3.appendChild(pTag)
    form.reset()
})


/////////

const restart = document.querySelector('#restart');
restart.addEventListener('click', (e)=>{
    e.preventDefault();
    h1Counter.innerText = 0

})*/
