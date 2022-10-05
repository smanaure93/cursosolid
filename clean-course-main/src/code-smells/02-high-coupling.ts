(()=>{
    // No aplicando el principio de responsabilidad única
    type Gender = 'M'|'F';

    // Alto Acoplamiento

    class Person {
        constructor(
            public firstName: string,
            public lastName: string,
            public gender: Gender,
            public birthdate: Date,
        ){}
    }

    class User extends Person {
        constructor(
            public email: string,
            public role: string,
            private lastAccess: Date,
            birthdate: Date,
            firstName: string,
            lastName: string,
            gender: Gender,
        ){
            super(firstName, lastName, gender, birthdate);
            this.lastAccess = new Date();
        }

        checkCredentials() {
            return true;
        }
    }


class UserSettings extends User {
    constructor(
        public lastFolderOpen: string,
        public workingDirectory: string,
        birthdate : Date,
        email     : string,
        firstName: string,
        lastName: string,
        gender    : Gender,
        role      : string,
    ){
        super(
            email,
            role,
            new Date(),
            birthdate,
            firstName,
            lastName,
            gender,
        )
    }
}
    


    const userSettings = new UserSettings(
        '/urs/home',
        '/development',
        new Date('1993-02-05'),
        'smanaure93@gmail.com',
        'Sócrates',
        'Manaure',
        'M',
        'Dev',
    );

    console.log({ userSettings, credentials: userSettings.checkCredentials() });
    
})()