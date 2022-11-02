// Steps :
    // 1) Add structure (html)
    // 2) Add Styling (css)
    // 3) Add Functionality
        // Validation

// Form
    // Input : Email
    // Input : Country
    // Input : Zip Code
    // Input : Password
    // Input : Password Confirmation
    // Button : Sumbition

export const userInfoForm = () => {
    const state = {
        formContainer: null,
        errorContainer: null,
        formElement: null,
        emailElement: null,
        countryElement: null,
        zipCodeElement: null,
        passwordElement: null,
        passwordConElement: null,
        btnSubmitElement: null,
    }

    // Render form and all of its contents
    const render = () => {
        // formContainer
        state.formContainer = createElement('div', document.body, 'form-container');
            // errorContainer : Div
            state.errorContainer = createElement('div', state.formContainer, 'error-container');
            // Form
            state.formElement = createElement('form', state.formContainer);
                // Input : Email
                state.emailElement = renderEmailElement(state.formElement);
                // Input : Country
                state.countryElement = renderCountryElement(state.formElement);
                // Input : Zip Code
                state.zipCodeElement = renderZipCodeElement(state.formElement);
                // Input : Password
                state.passwordElement = renderPasswordElement(state.formElement);
                // Input : Password Confirmation
                state.passwordConElement = renderPasswordConElement(state.formElement);
                // Button : Sumbition
                state.btnSubmitElement = renderBtnSubmitElement(state.formElement);

        update();
    }

    // In > Out : parent > Div
    // render emailDiv, containing label and input to body. 
    // Then return emailDiv
    const renderEmailElement = (parent) => {
        // emailElement
        const emailElement = createElement('div', parent, 'email-element');
            // Label 
            const emailLabel = createElement('label', emailElement);
            emailLabel.textContent = "Email:";

            // Input
            const emailInput = createElement('input', emailElement, null, 'email');
            emailInput.classList.add('invalid');
            emailInput.setAttribute('type', 'email');

        return emailElement;
    }


    // In > Out : > Div
    // render emailDiv, containing label and input to body. 
    // Then return emailDiv
    const renderCountryElement = (parent) => {
        // Element
        const countryElement = createElement('div', parent, 'country-element');
            // Label 
            const countryLabel = createElement('label', countryElement);
            countryLabel.textContent = "Country:";

            // Input
            const countryInput = createElement('input', countryElement, null, 'country');
            countryInput.classList.add('invalid');
            countryInput.setAttribute('min', '1');

        return countryElement;
    }

    // In > Out : > Div
    // render emailDiv, containing label and input to body. 
    // Then return emailDiv
    const renderZipCodeElement = (parent) => {
        // Element
        const zipCodeElement = createElement('div', parent, 'zip-code-element');
            // Label 
            const zipCodeLabel = createElement('label', zipCodeElement);
            zipCodeLabel.textContent = "Zip Code:";

            // Input
            const zipCodeInput = createElement('input', zipCodeElement, null, 'zip-code');
            zipCodeInput.classList.add('invalid');

        return zipCodeElement;
    }

    // In > Out : > Div
    // render emailDiv, containing label and input to body. 
    // Then return emailDiv
    const renderPasswordElement = (parent) => {
        // Element
        const passwordElement = createElement('div', parent, 'zip-code-element');
            // Label 
            const passwordLabel = createElement('label', passwordElement);
            passwordLabel.textContent = "Password:";

            // Input
            const passwordInput = createElement('input', passwordElement, null, 'password');
            passwordInput.classList.add('invalid');
            passwordInput.setAttribute('type', 'password');

        return passwordElement;
    }

    // In > Out : > Div
    // render emailDiv, containing label and input to body. 
    // Then return emailDiv
    const renderPasswordConElement = (parent) => {
        // Element
        const passwordConElement = createElement('div', parent, 'zip-code-element');
            // Label 
            const passwordConLabel = createElement('label', passwordConElement);
            passwordConLabel.textContent = "Password Confirmation:";

            // Input
            const passwordConInput = createElement('input', passwordConElement, null, 'password-confirm');
            passwordConInput.classList.add('invalid');
            passwordConInput.setAttribute('type', 'password');

        return passwordConElement;
    }

    // In > Out : > Div
    // render emailDiv, containing label and input to body. 
    // Then return emailDiv
    const renderBtnSubmitElement = (parent) => {
        const btnSubmit = createElement('button', parent);
        btnSubmit.textContent = "Submit";

        return btnSubmit;
    }

    // Bind functionality (including validation) to form and child elements.
    const update = () => {
        // Get form
        const formElement = document.querySelector('form');

        // List of form inputs
        const inputList = formElement.querySelectorAll('input');

        // Get Email Input
        const emailInput = inputList[0];

        // Get Country Input
        const countryInput = inputList[1];

        // Get Zip Code Input
        const zipCodeInput = inputList[2];

        // Get Password Input
        const passwordInput = inputList[3];

        // Get Password Confirmation Input
        const passwordConInput = inputList[4];

        // Get Submit btn
        const submitBtn = formElement.querySelector('button');

        // Error text Array
        // let errorArray = [];

        // Email Input Validity
        emailInput.addEventListener('keydown', () => {
            if (emailInput.checkValidity()) {
                emailInput.classList.remove('invalid');
                emailInput.classList.add('valid');
            } 
            else {
                emailInput.classList.remove('valid');
                emailInput.classList.add('invalid');

                // if(emailInput.value.length ==- 0) {
                //     errorArray.push("Enter an email");
                // } 
                // else {
                //     errorArray.push("Email is invalid");
                // }
            }
        });

        // Country Input Validity
        countryInput.addEventListener('keydown', () => {
            if (countryInput.checkValidity()) {
                countryInput.classList.remove('invalid');
                countryInput.classList.add('valid');
            } 
            else {
                countryInput.classList.remove('valid');
                countryInput.classList.add('invalid');
                // errorArray.push("Enter a country name");
            }
        });

        // Zip Code Input Validity
        zipCodeInput.addEventListener('keyup', () => {
            if (/^\d+$/.test(zipCodeInput.value)) {
                if (zipCodeInput.value.length == 5) {
                    zipCodeInput.classList.remove('invalid');
                    zipCodeInput.classList.add('valid');
                } 
                else {
                    zipCodeInput.classList.remove('valid');
                    zipCodeInput.classList.add('invalid');
                    // errorArray.push("Zip code must to be 5 digits");
                }
            }  
            else {
                zipCodeInput.classList.remove('valid');
                zipCodeInput.classList.add('invalid');
                // errorArray.push("Enter a zip code with only numbers");
            }
        });

        // Password Input Validity
        passwordInput.addEventListener('keyup', () => {
            // At least 4 words
            let passWordArry = passwordInput.value.trim().split(" ");
            // console.log(passWordArry);
            // console.log(passWordArry.length >= 4);
            if(passWordArry.length >= 4) {
                passwordInput.classList.remove('invalid');
                passwordInput.classList.add('valid');
            } 
            else {
                passwordInput.classList.remove('valid');
                passwordInput.classList.add('invalid');
                // errorArray.push("Enter at least a 4 word passphrase");
            }
        });

        // Password Confirmation
        passwordConInput.addEventListener('keyup', () => {
            if(passwordConInput.value === passwordInput.value) {
                passwordConInput.classList.remove('invalid');
                passwordConInput.classList.add('valid');
            } 
            else {
                passwordConInput.classList.remove('valid');
                passwordConInput.classList.add('invalid');
                // errorArray.push("Passphrase does not match passphrase confirmation");
            }
        });

        // Submit Button
        submitBtn.addEventListener('click', (event) => {
            let formIsValid = emailInput.classList.contains('valid')
                && countryInput.classList.contains('valid')
                && zipCodeInput.classList.contains('valid')
                && passwordInput.classList.contains('valid')
                && passwordConInput.classList.contains('valid');
            if (!formIsValid) {
                event.preventDefault();
                // console.log(errorArray);
                showValidityErrors([emailInput, countryInput, zipCodeInput, passwordInput, passwordConInput]);
            }
        });
    };

    const showValidityErrors = (inputArr) => {
        while(state.errorContainer.firstElementChild) {
            state.errorContainer.removeChild(state.errorContainer.firstElementChild);
        }

        for(let i = 0; i < inputArr.length; i++) {
            if (inputArr[i].classList.contains('invalid')) {
                // Create new span, parent errorContainer
                let inputId = inputArr[i].id;
                const errSpan = createElement('span', state.errorContainer, ['error', `${inputArr[i].id}`]);
                errSpan.textContent = `${inputId} is invalid`;
            }
        }

    };

    // Create html element from inputs
    // In > Out: String, Object, String, String
    // In > Out: type, parent, class, id
    const createElement = (type, parent, clss = null, id = null) => {
        const element = document.createElement(type);
        parent.appendChild(element);
        if (clss !== null) {
        if (Array.isArray(clss)) {
            for (let i = 0; i < clss.length; i++) {
            element.classList.add(clss[i]);
            }
        } else {
            element.classList.add(clss);
        }
        }
        if (id !== null) {
        element.setAttribute("id", id);
        }
        return element;
    };

    return Object.assign(
        state,
        {render}
    );
}