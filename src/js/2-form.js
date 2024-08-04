const formData = {
    email: '',
    message: '',
}

const form = document.querySelector('.feedback-form')

form.addEventListener('input', (event) => {
    formData[event.target.name] = event.target.value;
    localStorage.setItem('feedback-form-state', JSON.stringify(formData));
});
