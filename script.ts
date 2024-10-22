document.addEventListener('DOMContentLoaded', () => {

  function displayError(inputId, message) {
    const Errorinput = document.getElementById(inputId) as HTMLInputElement;
    if (Errorinput) {
      Errorinput.style.borderColor = "red";
      Errorinput.placeholder = message;
    }
  }

  function displaySuccess(inputId) {
    const suceedInput = document.getElementById(inputId) as HTMLInputElement;
    if (suceedInput) {
      suceedInput.style.borderColor = "green";
      suceedInput.placeholder = '';
      suceedInput.classList.add('valid');
    }
  }
  const validEmail = (email: string): boolean => {
    const re = /^[a-zA-Z0-9._%+-]+@gmail.com$/;
    return re.test(String(email).toLowerCase());
  };

  const form = document.getElementById('formDetails') as HTMLFormElement | null;
  const ModalBtn = document.getElementById('closeModal') as HTMLFormElement;
  const modal = document.getElementById('successModal') as HTMLFormElement;
  const formStatus = document.getElementById('formStatus') as HTMLInputElement;
  const container = document.querySelector('.container') as HTMLInputElement;

  //Modal closing
  ModalBtn.addEventListener('click', function () {
    modal.style.display = 'none';
  });


  if (form) {
    //form Submission
    form.addEventListener('submit', async (event) => {

      event.preventDefault();

      const nameInput = document.getElementById('name') as HTMLInputElement | null;
      const name = nameInput ? nameInput.value : '';

      const emailInput = document.getElementById('email') as HTMLInputElement;
      const email = emailInput ? emailInput.value : '';

      const contactInput = document.getElementById('contact') as HTMLInputElement;
      const contact = contactInput ? contactInput.value : '';

      const subjectInput = document.getElementById('subject') as HTMLInputElement;
      const subject = subjectInput ? subjectInput.value : '';

      const messageInput = document.getElementById('message') as HTMLInputElement;
      const message = messageInput ? messageInput.value : '';

      var isvalid = true;
      if (!name) {
        displayError('name', 'Name is Required');
        isvalid = false;
      }
      else {
        displaySuccess('name')
      }
      if (!email || !validEmail(email)) {
        displayError('email', 'Email is Required');
        isvalid = false;
      }
      else {
        displaySuccess('email')
      }
      if (!contact || contact.length < 10) {
        displayError('contact', 'Mobile number is Required');
        isvalid = false;
      }
      else {
        displaySuccess('contact')
      }
      if (!subject || subject.length < 3) {
        displayError('subject', 'Subject is Required');
        isvalid = false;
      }
      else {
        displaySuccess('subject')
      }
      if (!message || message.length < 3) {
        displayError('message', 'Message is Required');
        isvalid = false;
      }
      else {
        displaySuccess('message')
      }

      // form is valid
      if (isvalid) {

        const formData = {
          name: name,
          email: email,
          contact: contact,
          subject: subject,
          message: message
        }
        console.log(formData);
        try {
          const response = await fetch('https://6716738b3fcb11b265d27849.mockapi.io/contactUS/users', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
          });
          if (response.ok) {
            form.reset();
            formStatus.innerHTML = '';
           // formStatus.style.display="none";
            modal.style.display = "block";
            container.style.backgroundColor = "smokewhite"

          }
          else {
            throw new Error('network was not ok')
          }
        }
        catch (error) {
          console.log(error);
          formStatus.style.display="block";
          formStatus.innerHTML = `Submission Failed.<br>Try Again!!`;
          formStatus.classList.add("error");

        }
      }
    });
  } else {
    formStatus.textContent = 'Please fill out all fields correctly.';
    formStatus.classList.add("error");
  }
});
