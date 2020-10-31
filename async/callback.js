// Javascript is synchronous.
// Execute the code block in order after hoisting.
// hoisting: var, function declaration
console.log(1);
setTimeout(() => console.log(2), 1000);
console.log(3);

// Synchronous callback
function printImmediately(print) {
  print();
}

printImmediately(() => console.log("Hello"));

// Asynchronous callback
function printWithDelay(print, timeout) {
  setTimeout(print, timeout);
}
printWithDelay(() => console.log("async callback"), 2000);

// Callback Hell example
class UserStorage {
  loginUser(id, pw, onSucess, onError) {
    setTimeout(() => {
      if (
        (id === "sky" && pw === "1234") ||
        (id === "haneul" && pw === "5678")
      ) {
        onSucess(id);
      } else {
        onError(new Error("not found"));
      }
    }, 2000);
  }

  getRoles(user, onSucess, onError) {
    setTimeout(() => {
      if (user === "sky") {
        onSucess({ name: "sky", role: "admin" });
      } else {
        onError(new Error("no access"));
      }
    }, 1000);
  }
}

const userStorage = new UserStorage();
const id = prompt("enter your id");
const pw = prompt("enter your password");
userStorage.loginUser(
  id,
  pw,
  (user) => {
    userStorage.getRoles(
      user,
      (userWithRole) => {
        alert(
          `Hello ${userWithRole.name}, you have a ${userWithRole.role} role`
        );
      },
      (error) => {
        console.log(error);
      }
    );
  },
  (error) => {
    console.log(error);
  }
);
