const add_contact_button = document.getElementById('add_contact_button');

const search_button = document.getElementById('search_button');

const search_input = document.getElementById('search_input');

const add_contact = document.getElementById('add_contact');

let all_contact = [];

add_contact_button.addEventListener('click', () => {

    window.location.href = "add_contact.html";

});

document.addEventListener('DOMContentLoaded', () => {

    const storedContacts = localStorage.getItem('contacts');

    if (storedContacts) {

        const contacts = JSON.parse(storedContacts);

        all_contact = contacts;

        displayContacts(contacts);

        console.log(all_contact);
    }
});


function displayContacts(contacts) {

    add_contact.innerHTML = ''; 

    contacts.forEach((contact, index) => {
        const container = document.createElement('div');

        const contactDiv = document.createElement('div');

        const imgcontainer = document.createElement('div');

        imgcontainer.classList.add('imgcontainer');

        const img = document.createElement('img');

        img.classList.add('img');

        img.src = './image/people.png';

        contactDiv.classList.add('contactDiv');

        const name = document.createElement('p');

        name.innerHTML = contact.name;

        const surname = document.createElement('p');

        surname.innerHTML = contact.surname;

        const email = document.createElement('p');

        email.innerHTML = contact.email;

        const number = document.createElement('p');

        number.innerHTML = contact.number;

        const down = document.createElement('img');

        down.classList.add('down');

        down.src = './image/down-arrow.png';

        const del = document.createElement('img');

        del.classList.add('down');

        del.src = './image/delete.png';

        const description = document.createElement('p');
        
        description.innerHTML = contact.description;
        
        description.classList.add('description');

        imgcontainer.appendChild(img);
        
        contactDiv.appendChild(imgcontainer);
        
        contactDiv.appendChild(name);
        
        contactDiv.appendChild(surname);
        
        contactDiv.appendChild(email);
        
        contactDiv.appendChild(number);
        
        contactDiv.appendChild(del);
        
        contactDiv.appendChild(down);
        
        contactDiv.appendChild(description);
        
        container.appendChild(contactDiv);
        
        add_contact.appendChild(container);

        down.addEventListener('click', () => {
            contactDiv.style.height = '200px';
        });

        del.addEventListener('click', () => {
            all_contact.splice(index, 1); 
        
            localStorage.setItem('contacts', JSON.stringify(all_contact)); 
        
            displayContacts(all_contact); 
        });
    });
}

search_button.addEventListener('click', () => {

    const searchValue = search_input.value.toLowerCase();

    const filteredContacts = all_contact.filter(contact =>

        contact.name.toLowerCase().includes(searchValue)

    );

    displayContacts(filteredContacts);

});
