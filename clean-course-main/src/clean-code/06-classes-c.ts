(() => {
  // Refactorización con principio de responsabilidad unica
  // Priorizar la composición frente a la herencia

  type Gender = "M" | "F";

  interface PersonProps {
    birthdate: Date;
    gender: Gender;
    name: string;
  }

  class Person {
    public birthdate: Date;
    public gender: Gender;
    public name: string;

    constructor({ name, gender, birthdate }: PersonProps) {
      this.birthdate = birthdate;
      this.gender = gender;
      this.name = name;
    }
  }

  interface UserProps {
    email: string;
    role: string;
  }

  class User {
    public email: string;
    private lastAccess: Date;
    public role: string;
    constructor({ email, role }: UserProps) {
      this.email = email;
      this.lastAccess = new Date();
      this.role = role;
    }

    checkCredentials() {
      return true;
    }
  }

  interface SettingsProps {
    lastOpenFolder: string;
    workingDirectory: string;
  }

  class Settings {
    public lastOpenFolder: string;
    public workingDirectory: string;
    constructor({ lastOpenFolder, workingDirectory }: SettingsProps) {
      this.lastOpenFolder = lastOpenFolder;
      this.workingDirectory = workingDirectory;
    }
  }

  class UserSettings {
    constructor(
      public person: Person,
      public user: User,
      public settings: Settings
    ) {}
  }
  const person = new Person({
    birthdate: new Date("1993-02-05"),
    gender: "M",
    name: "Sócrates",
  });

  const user = new User({
    email: "smanaure93@gmail.com",
    role: "Dev",
  });

  const settings = new Settings({
    lastOpenFolder: "./root/project",
    workingDirectory: "./root",
  });

  const userSettings = new UserSettings(person, user, settings);

  console.log({ userSettings });
})();
