const personGenerator = {
    surnameJson: `{  
        "count": 15,
        "list": {
            "id_1": "Иванов",
            "id_2": "Смирнов",
            "id_3": "Кузнецов",
            "id_4": "Васильев",
            "id_5": "Петров",
            "id_6": "Михайлов",
            "id_7": "Новиков",
            "id_8": "Федоров",
            "id_9": "Кравцов",
            "id_10": "Николаев",
            "id_11": "Семёнов",
            "id_12": "Славин",
            "id_13": "Степанов",
            "id_14": "Павлов",
            "id_15": "Александров",
            "id_16": "Морозов"
        }
    }`,
    firstNameMaleJson: `{
        "count": 10,
        "list": {     
            "id_1": "Александр",
            "id_2": "Максим",
            "id_3": "Иван",
            "id_4": "Артем",
            "id_5": "Дмитрий",
            "id_6": "Никита",
            "id_7": "Михаил",
            "id_8": "Даниил",
            "id_9": "Егор",
            "id_10": "Андрей"
        }
    }`,
    firstNameFemaleJson: `{
        "count": 10,
        "list": {
            "id_1": "Анастасия",
            "id_2": "Божена",
            "id_3": "Мария",
            "id_4": "Алиса",
            "id_5": "София",
            "id_6": "Анна",
            "id_7": "Валерия",
            "id_8": "Виктория",
            "id_9": "Дарья",
            "id_10": "Алина"
        }
    }`,
    patronymicMaleJson: `{
        "count": 5,
        "list": {
            "id_1": "Иванович",
            "id_2": "Александрович",
            "id_3": "Дмитриевич",
            "id_4": "Николаевич",
            "id_5": "Михайлович"
        }
    }`,
    patronymicFemaleJson: `{
        "count": 5,
        "list": {
            "id_1": "Ивановна",
            "id_2": "Александровна",
            "id_3": "Дмитриевна",
            "id_4": "Николаевна",
            "id_5": "Михайловна"
        }
    }`,
    professionMaleJson: `{
        "count": 5,
        "list": {
            "id_1": "Инженер",
            "id_2": "Врач",
            "id_3": "Программист",
            "id_4": "Учитель",
            "id_5": "Шофёр"
        }
    }`,
    professionFemaleJson: `{
        "count": 5,
        "list": {
            "id_1": "Врач",
            "id_2": "Учитель",
            "id_3": "Медсестра",
            "id_4": "Бухгалтер",
            "id_5": "Дизайнер"
        }
    }`,
    GENDER_MALE: 'Мужчина',
    GENDER_FEMALE: 'Женщина',

    randomIntNumber: (max = 1, min = 0) => Math.floor(Math.random() * (max - min + 1) + min),

    randomValue: function (json) {
        const obj = JSON.parse(json);
        const prop = `id_${this.randomIntNumber(obj.count, 1)}`;
        return obj.list[prop];
    },

    randomFirstName: function (gender) {
        const firstNameJson = gender === this.GENDER_MALE ? this.firstNameMaleJson : this.firstNameFemaleJson;
        return this.randomValue(firstNameJson);
    },

    randomSurname: function (gender) {
        const surname = this.randomValue(this.surnameJson);

        if (gender === this.GENDER_FEMALE) {
            return surname + 'а';
        }

        return surname;
    },

    randomPatronymic: function (gender) {
        const patronymicJson = gender === this.GENDER_MALE ? this.patronymicMaleJson : this.patronymicFemaleJson;
        return this.randomValue(patronymicJson);
    },

    randomProfession: function (gender) {
        const professionJson = gender === this.GENDER_MALE ? this.professionMaleJson : this.professionFemaleJson;
        return this.randomValue(professionJson);
    },

    randomGender: function () {
        return Math.random() < 0.5 ? this.GENDER_MALE : this.GENDER_FEMALE;
    },

    generateBirthDate: function () {
        const monthJson = `{
            "count": 12,
            "list": {
                "id_1": "января",
                "id_2": "февраля",
                "id_3": "марта",
                "id_4": "апреля",
                "id_5": "мая",
                "id_6": "июня",
                "id_7": "июля",
                "id_8": "августа",
                "id_9": "сентября",
                "id_10": "октября",
                "id_11": "ноября",
                "id_12": "декабря"
            }
        }`;

        const month = this.randomValue(monthJson);
        const daysInMonth = month === "февраля" ? 28 : month === "апреля" || month === "июня" || month === "сентября" || month === "ноября" ? 30 : 31;

        const day = this.randomIntNumber(daysInMonth, 1);

        return `${day} ${month}`;
    },
    
    randomYearOfBirth: function () {
        return this.randomIntNumber(2003, 1970);
    },

    getPerson: function () {
        this.person = {};
        this.person.gender = this.randomGender();
        this.person.firstName = this.randomFirstName(this.person.gender);
        this.person.surname = this.randomSurname(this.person.gender);
        this.person.patronymic = this.randomPatronymic(this.person.gender);
        this.person.profession = this.randomProfession(this.person.gender);
        this.person.birthDate = this.generateBirthDate();
        this.person.birthYear = this.randomYearOfBirth();
        return this.person;
    }
};
