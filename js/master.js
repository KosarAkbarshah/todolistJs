const inp = document.querySelector('.box1>input')
const btn = document.querySelector('.box1>button')
const ul = document.querySelector('.box1>ul')
const h3 = document.querySelector('.toDobg>h3')

btn.addEventListener('click', () => {
    if (inp.value != '') {
        let li = document.createElement('li')
        li.innerHTML = ` 
        <h3>${inp.value}</h3>
        <input type='text' class='hide'>
 <!-- // this is added so we know which delete is being clicked -->
 <svg style='color: rgba(0, 0, 0, 0.643)' onclick='myDelete(this)'  xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
 <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z"/>
   <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z"/>
    </svg>
       
        <svg onclick='myEdit(this)' style='color: rgba(0, 0, 0, 0.643)' xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16">
       <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
           <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5z"/>
            </svg>
        <!-- crosses out the selected task -->
        <input onclick='myCheck(this)' type="checkbox">
        <input class='calender' type="date">
        <svg onclick='myFave(this)' xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-suit-heart-fill" viewBox="0 0 16 16">
<path d="M4 1c2.21 0 4 1.755 4 3.92C8 2.755 9.79 1 12 1s4 1.755 4 3.92c0 3.263-3.234 4.414-7.608 9.608a.513.513 0 0 1-.784 0C3.234 9.334 0 8.183 0 4.92 0 2.755 1.79 1 4 1"/>
</svg>
        `
        ul.appendChild(li)
        /////after adding new li, make the inp empty:
        inp.value = null;
        inp.focus()

    } else {
        alert('fill the empty spaces!')
    }
})


//////delete function

const myDelete = (s) => {
    console.log(s.parentElement);
    /////s.parentElement returns li
    s.parentElement.classList.add('left')
    // s.parentElement.remove()
    setTimeout(() => {
        s.parentElement.remove()
    }, 700);

}

/////edit function

let mod = 1;
const myEdit = (s) => {
    if (mod % 2) {
        let temp = s.parentElement.children[0].innerHTML
        s.parentElement.children[0].innerHTML = ''
        s.previousElementSibling.classList.add('hide')
        s.previousElementSibling.previousElementSibling.classList.remove('hide')
        s.previousElementSibling.previousElementSibling.value = temp
        s.innerHTML = `<svg style='color: rgba(0, 0, 0, 0.643)' xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check" viewBox="0 0 16 16">
<path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425z"/>
</svg>`



    } else {

        s.previousElementSibling.classList.remove('hide')
        let temp = s.previousElementSibling.previousElementSibling.value
        if (temp != '') {
            s.parentElement.children[0].innerHTML = temp;
            s.previousElementSibling.previousElementSibling.classList.add('hide')
            s.innerHTML = `<svg style='color: rgba(0, 0, 0, 0.643)' xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16">
    <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
    <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5z"/>
</svg>`;

        } else {
            s.parentElement.classList.add('left')
            // s.parentElement.remove()
            setTimeout(() => {
                s.parentElement.remove()
            }, 700);

        }

    }
    mod++
}

////// checked out function

const myCheck = (s) => {
    console.log(s.checked);
    if (s.checked) {
        s.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.classList.add('line')
    } else {
        s.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.classList.remove('line')
    }

}

/////adding to fave function
mod2 = 1;
const myFave = (s) => {
    if (mod2 % 2) {
        s.style.fill = 'red';
    } else {
        s.style.removeProperty('fill');
    }
    mod2++
}

/////local timing setting

let myTime = new Date();
myTime = myTime.getHours();
console.log(myTime);

let flag = ''
switch (true) {
    case myTime < 6: flag = 'Dawn'; break
    case myTime < 11: flag = 'Morning'; break
    case myTime < 13: flag = 'Noon'; break
    case myTime < 17: flag = 'Afternoon'; break
    case myTime < 19: flag = 'evening'; break
    case myTime < 23: flag = 'night'; break
    default: flag = 'dusk'; break
}
console.log('good' + flag);
h3.innerHTML = 'Good ' + flag + ' !'