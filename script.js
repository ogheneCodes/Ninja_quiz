const correctAnswers = ['B', 'B', 'B', 'B'];
const form = document.querySelector('.quiz-form');
const result = document.querySelector('.result');

form.addEventListener('submit', e =>{
    e.preventDefault();
    
    let score = 0;
    const userAnswers = [form.q1.value, form.q2.value, form.q3.value, form.q4.value];
    // check Answers
    userAnswers.forEach((answer, index)=>{
        if(answer === correctAnswers[index]){
            score += 25;
        }
        
    });
//show result on page
scrollTo(0, 0);

result.classList.remove('d-none'); //to remove the the class of d-one
let output = 0;
const timer = setInterval(() =>{
    result.querySelector('span').textContent = `${output}%`; //to insert text inside a <span>tag inside <div>
//     console.log(score);
if(output === score){
    clearInterval(timer);
} else{
    output++
}
}, 10);

});
