const initLogin = () => {
    const username = document.getElementById("username");
    const password = document.getElementById("password");
    const submit = document.getElementById("loginSubmit");
    const loginContainer = document.getElementById('loginContainer');
    const collectionTypeContainer = document.getElementById('collectionTypeContainer');
    const landingContainer = document.getElementById('landingContainer');

    // console.log(sessionStorage.JWT)
    // if (sessionStorage.JWT) {
    //     loginContainer.classList.add('d-none')
    //     collectionTypeContainer.classList.remove('d-none');
    // }

    const handleLoginSubmit = async (event) => {
        event.preventDefault();

        let loginData = {};

        loginData.username = username.value;
        loginData.password = password.value;


        let user = await userAPI.loginUser(loginData);

        // if(user.id){

        // }   
        //      let collectionInfo = await collectionAPI.getAllCollectionByID();
        // console.log(collectionInfo);


        if (user.status === 500) {
            console.log(user.id)
            alert("You entered invalid credentials.")
            return;
        }
        if (user.id && sessionStorage.JWT !== null) {
            sessionStorage.setItem('authUser', JSON.stringify(user));
            loginContainer.classList.add('d-none')
            collectionTypeContainer.classList.remove('d-none');
        }

    }

    const validateInputs = () => {
        let isValid = true;

        if (!username.value.trim()) isValid = false;
        if (!password.value.trim()) isValid = false;
        isValid ? submit.removeAttribute('disabled') : submit.setAttribute('disabled', true);

    }


    //document.querySelectorAll('input').forEach(element => element.addEventListener("input"));
    document.querySelectorAll('input').forEach(element => element.addEventListener("input", validateInputs));

    submit.addEventListener('click', function (event) {
        handleLoginSubmit(event);
    })
}
initLogin();