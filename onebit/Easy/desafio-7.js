/*

 */

class Pilot{
    constructor(firstName, lastName, birthday, flyingLicense) {
            this.firstName = firstName;
            this.lastName = lastName;
            this.birthday = birthday;
            this.flyingLicense = false;
    }

    newLicense(str){
       // 'JORDA-9095.h'
        const regex = /^[A-Z]{5}-.{1}(0[1-9]|1[0-2])\d\.[a-z]$/;
        if(regex.test(str)) {
            return this.flyingLicense = str
        }else {
            return "Invalid"
        }

    }

}

const Pilot1 = new Pilot("Hal", "Jordan", "11/03/1992");
console.log(Pilot1.newLicense("ABCDE-9A13B.4.k"))
console.log(Pilot1)