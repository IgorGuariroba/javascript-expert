class User {

    constructor({id, name, profession, age}) {
        this.id = parseInt(id);
        this.name = name.trim();
        this.profession = profession.trim();
        this.birthDay = new Date().getFullYear() - age;
    }
}

module.exports = User