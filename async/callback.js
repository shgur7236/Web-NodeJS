// JavaScript is synchronous.
// Execute the code block by orger after hoisting.
// hoisting: var, function declaration
console.log('1');
setTimeout(() => console.log('2'), 1000);
console.log('3');

// Snchronous callback
function printImmediately(print){
    print();
}
printImmediately(()=> console.log());


//Asynchronous callback
function printWithDelay(print, timeout){
    setTimeout(print, timeout);
}
printWithDelay(() => console.log('async callback'), 2000);

//Callback Hell example
class UserStorage {
    loginUser(id, password, onSuccess, onError){
        setTimeout(() => {
            if (
                (id === 'shgur' && password === 'dream') ||
                (id === 'corder' && password == 'academy')
            ){
                onSuccess(id);
            } else {
                onError(new Error('not found'));
            }
            
        },2000);
    }

    getRoles(user, onSuccess, onError) {
        setTimeout(() => {
            if (user === 'shgur') {
                onSuccess({ name: 'shgur', role: 'admin'});
            } else {
                onError(new Error('no access'));
            }
        }, 1000);
    }
}

const userStorage = new UserStorage();
const id =prompt('enter your id');
const password = prompt('enter your password');
userStorage.loginUser(
    id,
    password,
    user => {
        userStorage.getRoles(
            user,
            userWithRole => {
                alert(`hello ${userWithRole.name}, you have a ${userWithRole.role} role`)
            },
            eroor => {
                console.log(rerror)
            }
        );
    },
    error => {
        console.log(error);
    }
);