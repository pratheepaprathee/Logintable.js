const name = document.querySelector("#name");
const email = document.querySelector("#email");
const age = document.querySelector("#age");
const contact = document.querySelector("#contact");
const submitbtn = document.querySelector("button");
const tbody = document.querySelector("tbody");

const userdetails = [];
submitbtn.addEventListener("click", () => {
    if (!name.value && !email.value &&
        !age.value && !contact.value) {
        alert("Please enter details properly")
    }

    const userdata = {
        name: name.value,
        email: email.value,
        age: age.value,
        contact: contact.value
    }
    userdetails.push(userdata);

    name.value = "";
    email.value = "";
    age.value = "";
    contact.value = "";

    displaydata();

})

function displaydata() {
    tbody.innerText = "";
    userdetails.forEach((user) => {
        const tr = document.createElement("tr");
        const nameData = document.createElement("td");
        const emailData = document.createElement("td");
        const ageData = document.createElement("td");
        const contactData = document.createElement("td");

        nameData.innerText = user.name;
        emailData.innerText = user.email;
        ageData.innerText = user.age;
        contactData.innerText = user.contact;

        tr.append(nameData);    //append detail row add paanu use this
        tr.append(emailData);
        tr.append(ageData);
        tr.append(contactData);

        tbody.append(tr);
    })
}




/*const userdetails = [];
submitbtn.addEventListener("click", () => {
    if (name.value == "" && name.value.length <= 3) {
        alert("Enter the name property");
    }
    if (email.value == "") {
        alert("email is invalid");
    }
    if (age.value == "" && age.value.length < 4) {
        alert("Enter age property")
    }
    if (contact.value == "" && contact.value.length !== 10) {
        alert("contat number should be 10")
    }
})*/


