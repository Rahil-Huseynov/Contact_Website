const add_contact_button = document.getElementById('add_contact_button');

const contact_menu = document.getElementById('contact_menu')

contact_menu.addEventListener('click', () =>{
    window.location.href = "index.html";
})
add_contact_button.addEventListener('click', () => {

    const name = document.getElementById('name');
    
    const surname = document.getElementById('surname');
    
    const email = document.getElementById('email');
    
    const number = document.getElementById('number');
    
    const description = document.getElementById('description');
    
    const emailCheck = /^([\w\.\_\!]{1,10})\@([a-z0-9]{2,10})\.([a-z]{2,3})$/

    const nameCheck = /^([A-Za-z]{2,10)$/

    const surnameCheck = /^([A-Za-z]{2,10)$/

    const numberCheck = /^(\+\d{1,3}[- ]?)?\d{10}$/
    
    

    if (emailCheck.test(email.value)) {
        email.style.bordercolor = 'green';
    }
    else{
        email.style.borderColor = 'red';
    }

    if (nameCheck.test(name.value)) {
        name.style.bordercolor = 'green';
    }
    else{
        name.style.borderColor = 'red';
    }

    if (surnameCheck.test(surname.value)) {
        surname.style.bordercolor = 'green';
    }
    else{
        surname.style.borderColor = 'red';
    }

    if (numberCheck.test(number.value)) {
        number.style.bordercolor = 'green';
    }
    else{
        number.style.borderColor = 'red';
    }

    const contact = {
    
        name: name.value,
    
        surname: surname.value,
    
        email: email.value,
    
        number: number.value,
    
        description: description.value
    
    };

    console.log(contact);

    localStorage.setItem('contacts', JSON.stringify(contact));

});
