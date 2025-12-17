const prompt = require("prompt-sync")();

const main = () => {
    const userName = [];
    const passWord = [];
    const credentials = [];
    const booksInLibrary = ["1984", "Fathers of Nations", "The Samaritan", "Ego"];
    
    const welcomeTop = () => {
        console.log ( "##############################################################################################################################")        
        console.log ( "#################              welcome to sumerbot library system                       ######################################")    
        console.log ( "##############################################################################################################################")
    };
        const inTheLibrary = () => {
        while (true){
            console.log(`Welcome to Downtown Library`);
            console.log(`prompt 1 to Show all books in the Library`);
            console.log(`prompt 2 to Borrow a book by its Name`);
            console.log(`prompt 3 to return a borrowed book`);
            console.log(`prompt 4 to exit`);
            let libraryUserInput = Number(prompt());
            if (libraryUserInput === 1){
                console.log(`Available books: `)
                booksInLibrary.forEach((book, index) => {
                    console.log(`${index +1}. ${book} `);
                })
            } else if (libraryUserInput === 2){
                while (true){
                    console.log(`Input the name of the book u would want to borrow: `);
                    bookToBorrow = prompt();
                    if (booksInLibrary.includes(bookToBorrow)){
                        booksInLibrary.splice(bookToBorrow);
                        console.log(`${bookToBorrow} succesfully borrowed!`) ;
                        break;
                    } else{
                        console.log(`Book unavailable in the library!`);
                    }
                }

            } else if (libraryUserInput === 3){ 
                console.log(`Input the name of the book u would want to return: `);
                let bookToReturn = prompt();
                booksInLibrary.push(bookToReturn);
                console.log(`${bookToReturn} succesfully returned!`) ;
            } else if (libraryUserInput === 4){
                console.log(`Exiting the library...`);
                break;
            } else {
                console.log(`Invalid input!`)
            } 
        }
    };

    const signUp = () => {
        welcomeTop();
        let newUsername;
        let newUserpswd;
        while (true){
            newUsername = prompt(`Username: `);
            if (userName.includes(newUsername)) {
                console.log(`Username already in use.`);
            } else{
                break;
            }
        }
        while(true){
            let newUserpswd = prompt(`Password: `)
            const confirmnewUserpswd = prompt(`Confirm password: `)
            if ( confirmnewUserpswd === newUserpswd && newUserpswd !== "" && newUserpswd.length >= 4 ){
                console.log(`New account ${newUsername} is created.`)
                break;
            } else { 
                console.log(`the password do not match try again`)
            }
        }
        userName.push(newUsername);
        passWord.push(newUserpswd);
        credentials.push({Username: newUsername, Password: newUserpswd});
        
    };
    const logIn = () => {
        const randomMessage = () => {
            const randomMesso = [
                "Welcome back i knew i would see you soon haha!",
                "its been a while waaah",
                "u back already ??"
            ]
            const randomWelcomeMessage = randomMesso[Math.floor(Math.random() * randomMesso.length)];
            console.log(randomWelcomeMessage)
        };
        while (true){
            let logInUsername = prompt(`Username: `);
            const user = credentials.find(u => u.Username === logInUsername);

            if (user){

                const logInPswd = prompt(`Password: `);
                if (user.Password === logInPswd){
                    console.log(`logged in!`);
                    randomMessage();
                    inTheLibrary();
                } else{
                    console.log(`invalid Password or Username!`)
                }
            }
        };
    };

    let eror = false;
    while (eror === false){
        try{
            console.log(`1. SignUp`);
            console.log(`2. LogIn`);
            console.log(`3. Exit`);
            console.log(`Choose one option (1 2 or 3).`);
            let usersChoice = Number(prompt());
            if (usersChoice === 1){
                signUp();
            } else if ( usersChoice == 2){
                logIn();
            } else if( usersChoice === 3){
                break
            } else {
                console.log(`Invalid input!`)
            }
        } catch (error){
            console.log(`unexpected error accured: `, error) 
            break
        }
    }
};
main();
