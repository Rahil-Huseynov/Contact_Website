const add_contact_button = document.getElementById('add_contact_button');

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

        contacts.forEach(contact => {

            const contactDiv = document.createElement('div');

            const name = document.createElement('p');

            name.innerHTML = contact.name;

            const surname = document.createElement('p');

            surname.innerHTML = contact.surname;

            const email = document.createElement('p');

            email.innerHTML = contact.email;

            const number = document.createElement('p');

            number.innerHTML = contact.number;

            const description = document.createElement('p');

            description.innerHTML = contact.description;

            contactDiv.appendChild(name);

            contactDiv.appendChild(surname);

            contactDiv.appendChild(email);

            contactDiv.appendChild(number);

            contactDiv.appendChild(description);

            add_contact.appendChild(contactDiv);
        });

        console.log(all_contact);
    }
});
