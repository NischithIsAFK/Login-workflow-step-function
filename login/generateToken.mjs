import JWT from "jsonwebtoken";
const SECRET_KEY = "thisissecret1012";

export const handler = async (event) => {
  try {
    const credentials = {
      email: "test@gmail.com",
      password: "test123",
    };

    const token = JWT.sign(credentials, SECRET_KEY, { expiresIn: "1h" });

    return {
      statusCode: 200,
      body: JSON.stringify({ token }),
    };
  } catch (error) {
    console.error("Error generating tokenn:", error);

    return {
      statusCode: 500,
      body: JSON.stringify({
        message: "Internal Server Error",
        error: error.message,
      }),
    };
  }
};
