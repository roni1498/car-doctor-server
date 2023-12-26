// 1. jwt - json web token
// 2. generate a token by using jwt.sign
// 3. create api set to cookie. httpOnly, secure, sameSite
// 4. from client side axios: withCredentials: true
// 5. cors setup with origin and credentials: true


// for secure api calls
// 1. Server Side: install cookie parser and use it as a middleware
// 2. req.cookies
// 3. on the client side: make api call using axios withCredentials: true or credentials: "include" while using fetch 