const getContactForm = () => {
  return [
    {
      tag: 'input',
      type: 'text',
      name: 'fullName',
      placeholder: 'Imię i nazwisko',
      validators: {
        required: 'Imię i nazwisko jest wymagane!',
      },
    },
    {
      tag: 'input',
      type: 'email',
      name: 'email',
      placeholder: 'Email',
      validators: {
        required: 'Email jest wymagany!',
        pattern: {
          value: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(.\w{2,3})+$/,
          message: 'Niepoprawny format email!',
        },
      },
    },
    {
      tag: 'input',
      type: 'phone',
      name: 'phone',
      placeholder: 'Telefon (opcjonalnie)',
      validators: {
        pattern: {
          value: /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s./0-9]*$/,
          message: 'Niewłaściwy format',
        },
      },
    },
    {
      tag: 'textarea',
      type: 'message',
      name: 'message',
      placeholder: 'Wiadomość',
      validators: { required: 'Wiadomość jest wymagana!' },
    },
  ];
};

export { getContactForm };
