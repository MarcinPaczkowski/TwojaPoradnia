import axios from 'axios';

const verifyRecaptcha = async (
  token: string,
  apiKey: string,
  treshold: number
) => {
  const response = await axios.post(
    'https://www.google.com/recaptcha/api/siteverify',
    {},
    {
      params: {
        secret: apiKey,
        response: token,
      },
    }
  );
  const { data } = response;
  if (!data.success) {
    return {
      success: false,
      error: 'Something went wrong during verifying captcha',
    };
  }

  return data.score >= treshold
    ? data
    : {
        success: false,
        score: data.score,
        error: 'I suppose it is a bot',
      };
};

export { verifyRecaptcha };
