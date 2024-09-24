# Using Step Function for login workflow using JWT token

- This step function first takes the credentials using path parameter and then when it matches the credentials in db( for ex: In the it is explicitly checking the credentials )
- The status code returned from the lambda is checked using Choice State in Step Function.
- If statusCode is 200 then it is passed to a lambda which generates JWT token 
- If statusCode is 401 then JWT token is not generated and it will go to fail state

