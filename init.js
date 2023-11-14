window.onload = function () {
    const initPerson = personGenerator.getPerson();
    document.getElementById('firstNameOutput').innerText = initPerson.firstName;
    document.getElementById('surnameOutput').innerText = initPerson.surname;
    document.getElementById('patronymicOutput').innerText = initPerson.patronymic;
    document.getElementById('professionOutput').innerText = initPerson.profession;
    document.getElementById('genderOutput').innerText = initPerson.gender;
    document.getElementById('birthYearOutput').innerText = initPerson.birthYear;
    document.getElementById('birthDateOutput').innerText = initPerson.birthDate;
};

function generatePerson() {
    const generatedPerson = personGenerator.getPerson();
    document.getElementById('firstNameOutput').innerText = generatedPerson.firstName;
    document.getElementById('surnameOutput').innerText = generatedPerson.surname;
    document.getElementById('genderOutput').innerText = generatedPerson.gender;
    document.getElementById('birthYearOutput').innerText = generatedPerson.birthYear;
    document.getElementById('patronymicOutput').innerText = generatedPerson.patronymic;
    document.getElementById('professionOutput').innerText = generatedPerson.profession;
    document.getElementById('birthDateOutput').innerText = generatedPerson.birthDate;
}

function clearData() {
    document.getElementById('firstNameOutput').innerText = 'Генерация имени';
    document.getElementById('surnameOutput').innerText = 'Генерация фамилии';
    document.getElementById('genderOutput').innerText = 'Генерация пола';
    document.getElementById('birthYearOutput').innerText = 'Генерация года рождения';
    document.getElementById('patronymicOutput').innerText = 'Генерация отчества';
    document.getElementById('professionOutput').innerText = 'Генерация профессии';
    document.getElementById('birthDateOutput').innerText = 'Генерация даты рождения';
}

document.getElementById('generateBtn').addEventListener('click', generatePerson);
document.getElementById('clearBtn').addEventListener('click', clearData);
