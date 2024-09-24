exports.handler = async (event, context) => {
  if (
    event.pathParameters.email === "test@gmail.com" &&
    event.pathParameters.password === "test123"
  ) {
    const response = {
      statusCode: 200,
      body: JSON.stringify({
        message: "login successs",
      }),
    };

    return response;
  } else {
    const response = {
      statusCode: 401,
      body: JSON.stringify({
        message: "wrong password",
      }),
    };

    return response;
  }
};
