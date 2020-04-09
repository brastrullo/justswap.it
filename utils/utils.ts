export const catchError = (error) => {
  if (error.response) {
    console.log('__Response__');
    console.log(error.response.data);
    console.log(error.response.status);
    console.log(error.response.headers);
  } else if (error.request) {
    console.log('Req:', error.request);
  } else {
    console.log('Error: ', error.message);
  }
  console.log(error.config);
}