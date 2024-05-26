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

        const item = document.createElement('div')

        item.classList.add('item')

        const contactDiv = document.createElement('div');

        const descriptionDiv = document.createElement('div');

        descriptionDiv.classList.add('descriptionDiv')

        const imgcontainer = document.createElement('div');

        imgcontainer.classList.add('imgcontainer');

        const img = document.createElement('img');

        img.classList.add('img');

        img.src = './image/people.png';

        contactDiv.classList.add('contactDiv');

        const name = document.createElement('p');

        name.innerHTML = `<p style="text-align: center">Name: <span> ${contact.name}</span></p>`

        const surname = document.createElement('p');

        surname.innerHTML = `<p style="text-align: center;">Surname: <span> ${contact.surname}</span></p>`;

        const email = document.createElement('p');

        email.classList.add('email')

        email.innerHTML = ` <p class="email_p" > Email: </p> <p>${contact.email}</p>`;

        const number = document.createElement('p');

        number.innerHTML =`<p style="text-align: center;">Phone: <span> ${contact.number}</span></p>`; 

        const down = document.createElement('img');

        down.classList.add('down');

        down.src = './image/down-arrow.png';

        const del = document.createElement('img');

        del.classList.add('down');

        del.src = './image/delete.png';

        const description = document.createElement('p');

        description.innerHTML = `<p class="description_p">Description:</p> <p style="text-align: center;">${contact.description}</p>`;

        description.classList.add('description');

        imgcontainer.appendChild(img);

        item.appendChild(imgcontainer);

        item.appendChild(name);

        item.appendChild(surname);

        descriptionDiv.appendChild(email);

        item.appendChild(number);

        const icon = document.createElement('div')

        icon.classList.add('icon')

        item.appendChild(icon);

        icon.appendChild(del);

        icon.appendChild(down);

        descriptionDiv.appendChild(description);

        contactDiv.appendChild(item)

        contactDiv.appendChild(descriptionDiv);

        container.appendChild(contactDiv);

        add_contact.appendChild(container);

        down.addEventListener('click', () => {
            if (contactDiv.style.minHeight === '200px') {
                contactDiv.style.minHeight = '86px';
                description.style.display = 'none';
                email.style.display = 'none';
            } else {
                contactDiv.style.minHeight = '200px';
                description.style.display = 'block';
                email.style.display = 'block';
            }
        });

        del.addEventListener('click', () => {
            all_contact.splice(index, 1);

            localStorage.setItem('contacts', JSON.stringify(all_contact));

            displayContacts(all_contact);
        });

        item.addEventListener("mouseover", () => {
            let color = "#";
            const letters = "0123456789ABCDEF";
            for (let i = 0; i < 6; i++) {
                color += letters[Math.floor(Math.random() * 16)];
            }
            item.style.backgroundColor = color;
        });

        item.addEventListener("mouseout", () => {
            item.style.backgroundColor = "";
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


search_input.onkeydown = (e) => {

    if (e.key === 'Enter') {

        const searchValue = search_input.value.toLowerCase();

        const filteredContacts = all_contact.filter(contact =>
    
            contact.name.toLowerCase().includes(searchValue)
    
        );
    
        displayContacts(filteredContacts);

    }
};

