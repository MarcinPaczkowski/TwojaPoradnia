const getContactData = () => {
  const contact = {
    email: 'paczkowska.malgorzata@outlook.com',
    phone: '+48 515 515 515',
  };

  return contact;
};

const getContactForm = () => {
  return [
    {
      tag: 'input',
      type: 'text',
      name: 'fullName',
      placeholder: 'Imię i nazwisko',
      validators: {
        required: true,
      },
      errorMessages: {
        required: 'Imię i nazwisko jest wymagane!',
      },
    },
    {
      tag: 'input',
      type: 'email',
      name: 'email',
      placeholder: 'Email',
      validators: {
        required: true,
        pattern: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
      },
      errorMessages: {
        required: 'Email jest wymagany!',
        pattern: 'Niepoprawny format email!',
      },
    },
    {
      tag: 'input',
      type: 'phone',
      name: 'phone',
      placeholder: 'Telefon (opcjonalnie)',
      validators: {},
      errorMessages: {},
    },
    {
      tag: 'textarea',
      type: 'message',
      name: 'message',
      placeholder: 'Wiadomość',
      validators: { required: true },
      errorMessages: { required: 'Wiadomość jest wymagana!' },
    },
  ];
};

export { getContactData, getContactForm };
