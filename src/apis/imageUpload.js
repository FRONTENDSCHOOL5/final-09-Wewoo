export const imageUploadApi = async (image, { onSuccess, onError }) => {
  let formData = new FormData();
  formData.append('image', image);

  try {
    const response = await fetch('https://api.mandarin.weniv.co.kr/image/uploadfile', {
      method: 'POST',
      headers: {},
      body: formData,
    });

    const result = await response.json();
    onSuccess(result);
  } catch (err) {
    onError(err);
  }
};
