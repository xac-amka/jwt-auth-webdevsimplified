# JWT Authentication 

JSON web tokens are one of the more popular ways to secure applications, especially in micro-services, but JWT is much more complex than a simple session based user authentication. In this video I will be breaking down exactly how to set up authentication with JWT and how to ensure the authentication is secure. I will also be showing how to setup refresh tokens with JWT so that your application is even more resilient and secure. Lastly, I will show how to invalidate refresh tokens which is the ultimate last step in securing an application.


📚 Materials/References:

User Authentication Video: https://youtu.be/Ud5xKCYQTjM
JWT Explained Video: https://youtu.be/7Q17ubqLfaM
GitHub Code: https://github.com/WebDevSimplified/JWT-Authentication


🧠 Concepts Covered:

- Creating Node.js authentication middleware
- Using refresh tokens with JWT
- Authenticating users with JWT
- Invalidating refresh tokens to log users out
- How to use JWT securely

## Create random token key using node

```js
require('crypto').randomBytes(64).toString('hex')
```

