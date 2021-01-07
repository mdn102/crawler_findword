const btn = document.querySelector('#btn');
const reset = document.querySelector('#reset');
const count = document.createElement('h3');
//dynamically adding nodes to the treee 
const player1 = document.createElement('h2');
player1.innerText = 'Player 1'
player1.appendChild(count)

const player2 = document.createElement('h2');
player2.innerText = 'Player 2'
player2.appendChild(count)
const board = document.querySelector('#players');
board.appendChild(player1);
board.appendChild(player2);





document.addEventListener('load', ()=>{
    btn.classList.add('start');
    board.innerText = '0';
    
    
})
reset.addEventListener('click', ()=>{
    btn.classList.remove('win');
    btn.innerText = 'ClickMe'
})


btn.addEventListener('mouseover',() => {
    console.log('mousedove')
    const height = Math.floor(Math.random() * window.innerHeight);
    const width = Math.floor(Math.random()* window.innerWidth);
    btn.style.left = `${width}px`;
    btn.style.top = `${height}px`;
});

btn.addEventListener('click', () => {
    btn.innerText = 'You Got Me';
    btn.classList.add('win')

})