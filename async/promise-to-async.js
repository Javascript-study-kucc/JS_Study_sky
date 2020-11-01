class UserStorage {
  loginUser(id, pw) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (
          (id === "sky" && pw === "1234") ||
          (id === "haneul" && pw === "5678")
        ) {
          resolve(id);
        } else {
          reject(new Error("not found"));
        }
      }, 2000);
    });
  }

  getRoles(user) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (user === "sky") {
          resolve({ name: "sky", role: "admin" });
        } else {
          reject(new Error("no access"));
        }
      }, 1000);
    });
  }
}

// const userStorage = new UserStorage();
const id = prompt("enter your id");
const pw = prompt("enter your password");
// userStorage
//   .loginUser(id, pw)
//   .then(userStorage.getRoles)
//   .then((user) => alert(`Hello ${user.name}, you have a ${user.role} role`))
//   .catch(console.log);

async function userStorage() {
  try {
    const user = await userStorage.loginUser(id, pw);
    const role = await userStorage.getRoles(user);
    return `Hello ${user.name}, you have a ${user.role} role`;
  } catch (error) {
    return error;
  }
}

userStorage(id, pw).then(console.log);

// 나중에 다시
