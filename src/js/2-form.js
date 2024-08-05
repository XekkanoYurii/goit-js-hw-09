let formData = {
    email: '',
    message: '',
}

const form = document.querySelector('.feedback-form')

form.addEventListener('input', (event) => {
    formData[event.target.name] = event.target.value;
    localStorage.setItem('feedback-form-state', JSON.stringify(formData));
});
  window.addEventListener('DOMContentLoaded', () => {
    const savedFormData = JSON.parse(localStorage.getItem('feedback-form-state'));
    if (savedFormData) {
        formData = savedFormData;
        form.elements.email.value = savedFormData.email;
        form.elements.message.value = savedFormData.message;
    }
});
  
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    if (!formData.email || !formData.message) {
        alert('Fill please all fields');
    } else {
        console.log(formData);
        localStorage.removeItem('feedback-form-state');
        formData = { email: "", message: "" };
        document.querySelector('form').reset();
    }
});