function showError(container, errorMessage) {
      container.className = 'error';
      var msgElem = document.createElement('span');
      msgElem.className = "error-message";
      msgElem.innerHTML = errorMessage;
      container.appendChild(msgElem);
    }

    function resetError(container) {
      container.className = '';
      if (container.lastChild.className == "error-message") {
        container.removeChild(container.lastChild);
      }
    }

    function validate(form) {
      var elems = form.elements;

      resetError(elems.name.parentNode);
      if (!elems.name.value) {
        showError(elems.name.parentNode, 'Your name can\'t be blank.');
      }

      resetError(elems.title.parentNode);
      if (!elems.title.value) {
        showError(elems.title.parentNode, 'Title can\'t be empty');
      }

      resetError(elems.email.parentNode);
      if (! /(^\w.*@\w+\.\w)/.test(elems.email.value)) {
        showError(elems.email.parentNode, 'You should provide a valid email');
      }

      resetError(elems.message.parentNode);
      if (!elems.message.value) {
        showError(elems.message.parentNode, 'Comment can\'t be empty.');
      }

    }



