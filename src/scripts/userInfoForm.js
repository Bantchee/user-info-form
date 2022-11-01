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
        
    }

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