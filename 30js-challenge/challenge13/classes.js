/* 
Create the instance properties fullname and email in the 
Employee class. Given a person's first and last names:

Form the fullname by simply joining the first and last 
name together, separated by a space.
Form the email by joining the first and last name 
together with a . in between, and follow it with 
@company.com at the end. Make sure everything is in lowercase.
*/

// Examples
// emp1 = Employee("John", "Smith")
// emp1.fullname ➞ "John Smith"

// emp2 = Employee("Mary",  "Sue")
// emp2.email ➞ "mary.sue@company.com"

// emp3 = Employee("Antony", "Walker")
// emp3.firstname ➞ "Antony"

class Employee {
	constructor (firstname, lastname) {
		this.firstname = firstname
		this.lastname = lastname
		// Complete the code!
		this.fullname = `${firstname} ${lastname}`
		this.email = `${firstname.toLowerCase()}.${lastname.toLowerCase()}@company.com`
	}
}
emp1 = new Employee("John", "Smith")
emp2 = new Employee("Mary",  "Sue")
emp3 = new Employee("Antony", "Walker")
emp4 = new Employee("Joshua", "Senoron")
console.log(emp1.firstname, "John")
//John John

console.log(emp1.lastname, "Smith")
console.log(emp1.fullname, "John Smith")
console.log(emp1.email, "john.smith@company.com")
console.log(emp2.firstname, "Mary")
console.log(emp2.lastname, "Sue")
console.log(emp2.fullname, "Mary Sue")
console.log(emp2.email, "mary.sue@company.com")
console.log(emp3.firstname, "Antony")
console.log(emp3.lastname, "Walker")
console.log(emp3.fullname, "Antony Walker")
console.log(emp3.email, "antony.walker@company.com")
console.log(emp4.firstname, "Joshua")
console.log(emp4.lastname, "Senoron")
console.log(emp4.fullname, "Joshua Senoron")
console.log(emp4.email, "joshua.senoron@company.com")
// Smith Smith
// John Smith John Smith
// john.smith@company.com john.smith@company.com
// Mary Mary
// Sue Sue
// Mary Sue Mary Sue
// mary.sue@company.com mary.sue@company.com
// Antony Antony
// Walker Walker
// Antony Walker Antony Walker
// antony.walker@company.com antony.walker@company.com
// Joshua Joshua
// Senoron Senoron
// Joshua Senoron Joshua Senoron
// joshua.senoron@company.com joshua.senoron@company.com