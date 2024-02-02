const feedbackForm = document.querySelector('.feedback-form');
const emailInput = feedbackForm.querySelector('[name="email"]');
const messageTextarea = feedbackForm.querySelector('[name="message"]');

document.addEventListener('DOMContentLoaded', () => {
const savedState = localStorage.getItem('feedback-form-state');

  if (savedState) {
    const parsedState = JSON.parse(savedState);
    emailInput.value = parsedState.email;
    messageTextarea.value = parsedState.message;
  }
});

feedbackForm.addEventListener('input', (event) => {
  if (event.target === emailInput || event.target === messageTextarea) {
    const formState = {
      email: emailInput.value.trim(),
      message: messageTextarea.value.trim(),
    };
    localStorage.setItem('feedback-form-state', JSON.stringify(formState));
  }
});

feedbackForm.addEventListener('submit', (event) => {
event.preventDefault();

const formData = {
  email: emailInput.value.trim(),
  message: messageTextarea.value.trim(),
};
console.log(formData);

  localStorage.removeItem('feedback-form-state');
  emailInput.value = '';
  messageTextarea.value = '';
});
