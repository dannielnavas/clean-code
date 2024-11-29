// Permite escalar el código se hace fácil de leer y entender

// Sin responsabilidad única ❌

class UserSetting {
  constructor(user, settings) {
    this.user = user;
    this.settings = settings;
  }

  changeSetting(settings) {
    if (this.verifyCredencials()) {
    }
  }

  verifyCredencials() {}
}

// Con responsabilidad única ✅

class UserAuth {
  constructor(user) {
    this.user = user;
  }

  verifyCredencials() {
    return true;
  }
}

class UserSetting extends UserAuth {
  constructor(user, settings) {
    super(user);
    this.settings = settings;
  }

  changeSetting() {
    if (this.verifyCredencials()) {
      console.log("Credenciales válidas para cambiar la configuración");
    }
  }
}

const newAccess = new UserSetting("Daniel", { theme: "dark" });
newAccess.changeSetting(); // >> Credenciales válidas para cambiar la configuración
