const prompt = require("prompt-sync")();
class User {
       constructor(name, salary) {
        this.name = name
        this.salary = salary
    }

    getInfo() {
        this.getName()
        this.getSalary()
    }

    getName() {
        let name = prompt("What is your name? ")

        if (name === "" || name == false) {
            console.log("Enter a valid name")
            return this.getName()
        }
        return this.name = name 
    }

    getSalary() {
        let response = prompt("What is your annual salary? ")
        let salary = parseInt(response)
        
        if (salary < 0 || !(salary > 0)) {
            console.log("Enter a valid salary")
            return this.getSalary()
        }
        return this.salary = salary
    }
}

module.exports = {
    User
}