

export const validateSignUpForm = (data) => {
    const errors = {};

    if (!data.username.trim()) {
        errors.username = 'Username is required';
    } else if (data.username.length < 4) {
        errors.username = 'Username must be at least 4 characters long';
    }

    if (!data.name.trim()) {
        errors.name = 'Name is required';
    } else if (data.name.length < 4) {
        errors.name = 'Name must be at least 4 characters long';
    }

    if (!data.bio.trim()) {
        errors.bio = 'Bio is required';
    } else if (data.bio.length < 10) {
        errors.bio = 'Bio must be at least 10 characters long';
    }


    if (!data.password) {
        errors.password = 'Password is required';
    } else if (data.password.length < 8) {
        errors.password = 'Password must be at least 8 characters long';
    }


    return errors;
};

export const validateLoginForm = (data) => {
    const errors = {};

    if (!data.username.trim()) {
        errors.username = 'Username is required';
    } else if (data.username.length < 4) {
        errors.username = 'Username must be at least 4 characters long';
    }

    if (!data.password) {
        errors.password = 'Password is required';
    } else if (data.password.length < 8) {
        errors.password = 'Password must be at least 8 characters long';
    }
    return errors;
};