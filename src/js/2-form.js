const feedbackForm = document.querySelector('.feedback-form');
const emailInput = feedbackForm.querySelector('input[name="email"]');
const messageTextarea = feedbackForm.querySelector('textarea[name="message"]');

feedbackForm.addEventListener('input', (event) => {
  if (event.target === emailInput || event.target === messageTextarea) {
    const formState = {
      email: emailInput.value,
      message: messageTextarea.value,
    };
    localStorage.setItem('feedback-form-state', JSON.stringify(formState));
  }
});

window.addEventListener('DOMContentLoaded', () => {
  const storedState = localStorage.getItem('feedback-form-state');
  if (storedState) {
    const parsedState = JSON.parse(storedState);
    emailInput.value = parsedState.email;
    messageTextarea.value = parsedState.message;
  }
});

feedbackForm.addEventListener('submit', (event) => {
  event.preventDefault();

  localStorage.removeItem('feedback-form-state');
  emailInput.value = '';
  messageTextarea.value = '';

  const formData = {
    email: emailInput.value,
    message: messageTextarea.value,
  };
  console.log(formData);
});
