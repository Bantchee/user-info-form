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
        form: null,
        emailInput: null,
        countryInput: null,
        zipCodeInput: null,
        passwordInput: null,
        passwordConInput: null,
        btnSubmit: null,
    }

    // Render form and all of its contents
    const render = () => {
        // Form
        state.form = createElement('form', document.body);
            // Input : Email
            state.emailInput = createElement('input', state.form);
            // Input : Country
            state.countryInput = createElement('input', state.form);
            // Input : Zip Code
            state.zipCodeInput = createElement('input', state.form);
            // Input : Password
            state.passwordInput = createElement('input', state.form);
            // Input : Password Confirmation
            state.passwordConInput = createElement('input', state.form);
            // Button : Sumbition
            state.btnSubmit = createElement('button', state.form);

        update();
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