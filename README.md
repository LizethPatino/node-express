# Node.js API with Express  

REST API built with Express.js, featuring full CRUD operations, data validation, error handling, and CORS support.  

## 🚀 Live Demo  
The API is deployed on Vercel:  
[https://node-express-ten-ebon.vercel.app/api/v1/products](https://node-express-ten-ebon.vercel.app/api/v1/products)  

## 🛠 Tech Stack  
- **Express** - Web framework for building APIs.  
- **CORS** - Middleware for security and cross-origin requests.  
- **@hapi/boom** - Structured error handling.  
- **Joi** - Data validation for request payloads.  
- **@faker-js/faker** - Generates fake data for testing.  
- **Morgan** - HTTP request logging.  
- **Dotenv** - Environment variable management.  
- **ESLint & Prettier** - Linting and code formatting.  

## 📌 Endpoints  

| Method  | Endpoint               | Description               |
|---------|------------------------|---------------------------|
| **GET**    | `/api/v1/products`     | Get all products          |
| **GET**    | `/api/v1/products/:id` | Get product by ID         |
| **POST**   | `/api/v1/products`     | Create a new product      |
| **PUT**    | `/api/v1/products/:id` | Update an existing product |
| **DELETE** | `/api/v1/products/:id` | Delete a product         |

## 🔧 Features  
✔ Full CRUD operations.  
✔ Validation with Joi.  
✔ Structured error handling with Boom.  
✔ Secure and cross-origin requests with CORS.  
✔ Logging HTTP requests with Morgan.  
✔ Environment variable management with Dotenv.  
✔ Deployed on Vercel for easy access.  

---
