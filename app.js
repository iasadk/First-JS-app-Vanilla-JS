const btns = document.querySelectorAll('.btn');
const ans = document.querySelector('#value');


btns.forEach((btn)=>{
    btn.addEventListener('click',function(e)
    {
        const event = e.currentTarget.classList;
        // console.log(event)
        if(event.contains('add'))
        {
            const num2 = document.getElementById("num2").value;
            const num1 = document.getElementById("num1").value;
            const add = parseInt(num1) + parseInt(num2);
            ans.textContent = add;
        }

        else if(event.contains('sub')){
            const num2 = document.getElementById("num2").value;
            const num1 = document.getElementById("num1").value;
            const sub = parseInt(num1) - parseInt(num2);
            ans.textContent = sub;
        }

        else if(event.contains('multiply')){
            const num2 = document.getElementById("num2").value;
            const num1 = document.getElementById("num1").value;
            const multiply = parseInt(num1) * parseInt(num2);
            ans.textContent = multiply;
        }

        else{
            const num2 = document.getElementById("num2").value;
            const num1 = document.getElementById("num1").value;
            const divide = parseInt(num1) / parseInt(num2);
            ans.textContent = divide;

        }

        
    })

})