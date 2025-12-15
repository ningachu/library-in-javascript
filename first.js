const prompt = require("prompt-sync")();

const main = () => {
    const userName = [];
    const passWord = [];
    const credentials = [];
    
    const welcomeTop = () => {
        console.log ( "##############################################################################################################################")        
        console.log ( "#################              welcome to sumerbot library system                       ######################################")    
        console.log ( "##############################################################################################################################")
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
            newUserpswd = prompt(`Password: `)
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

            //call the funstion to be in the library here or break

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
