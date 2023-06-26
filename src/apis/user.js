export const emailValidationApi = async (email, { onSuccess, onError }) => {
  try {
    const response = await fetch('https://api.mandarin.weniv.co.kr/user/emailvalid', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        user: {
          email,
        },
      }),
    });

    const result = await response.json();
    console.log(result);
    onSuccess(result);
  } catch (err) {
    onError(err);
  }
};

export const accountNameValidationApi = async (accountname, { onSuccess, onError }) => {
  try {
    const response = await fetch('https://api.mandarin.weniv.co.kr/user/accountnamevalid', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        user: {
          accountname,
        },
      }),
    });

    const result = await response.json();
    console.log(result);
    onSuccess(result);
  } catch (err) {
    onError(err);
  }
};

export const signUpApi = async (
  { username, email, password, accountname, intro, image },
  { onSuccess, onError },
) => {
  const usernameReq = username ? { username } : { username: accountname };
  const introReq = intro ? { intro } : null;
  const imageReq = image ? { image } : null;

  try {
    const response = await fetch('https://api.mandarin.weniv.co.kr/user', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        user: {
          email,
          password,
          accountname,
          ...usernameReq,
          ...introReq,
          ...imageReq,
        },
      }),
    });

    const result = await response.json();
    console.log(result);
    onSuccess(result);
  } catch (err) {
    onError(err);
  }
};

export const loginApi = async ({ email, password }, { onSuccess, onError }) => {
  try {
    const response = await fetch('https://api.mandarin.weniv.co.kr/user/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        user: {
          email,
          password,
        },
      }),
    });

    const result = await response.json();
    console.log(result);
    onSuccess(result);
  } catch (err) {
    onError(err);
  }
};
