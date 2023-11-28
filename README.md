
# Wave Tech Assessment Backend

## Table of Contents

- [Wave Tech Assessment Backend](#wave-tech-assessment-backend)
  - [Table of Contents](#table-of-contents)
  - [Description](#description)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Environment Configuration](#environment-configuration)
- [Database Configuration](#database-configuration)
- [JWT Configuration](#jwt-configuration)
  - [Database Seeding](#database-seeding)
  - [Running the Application](#running-the-application)
  - [API Endpoints](#api-endpoints)
  - [Contributing](#contributing)
  - [License](#license)

## Description

This is a NestJS API project that provides [provide a brief description of your project].

## Prerequisites

Before you begin, ensure you have met the following requirements:

- [Node.js](https://nodejs.org/) installed on your machine.
- [npm](https://www.npmjs.com/) or [Yarn](https://yarnpkg.com/) package manager installed.

## Installation

To clone and install the project, follow these steps:

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/your-repo.git
   ```

2. Navigate to the project directory:

   ```bash
   cd your-repo
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

   or

   ```bash
   yarn
   ```

## Environment Configuration

1. Copy the `.env.example` file to create a new `.env` file:

   ```bash
   cp .env.example .env
   ```

2. Update the `.env` file with the necessary configuration for your project, including the database connection details, JWT secret, etc.


Update the .env file with the necessary configuration for your project:

env
Copy code
# Database Configuration
DATABASE_TYPE=mysql
DATABASE_URL=
DATABASE_HOST=localhost
DATABASE_PORT=3306
DATABASE_USERNAME=root
DATABASE_PASSWORD=
DATABASE_NAME=assessment
DATABASE_SYNCHRONIZE=true

# JWT Configuration
JWT_SECRET=Michael78
AUTH_JWT_TOKEN_EXPIRES_IN=7d

DATABASE_TYPE: The type of your database (mysql).

DATABASE_URL: The connection URL for your database (optional, if using a URL).

DATABASE_HOST: The hostname for your database server.

DATABASE_PORT: The port number for your database server.

DATABASE_USERNAME: The username for connecting to your database.

DATABASE_PASSWORD: The password for connecting to your database.

DATABASE_NAME: The name of your database.

DATABASE_SYNCHRONIZE: Set to true if you want TypeORM to auto-create or update the database schema.

JWT_SECRET: The secret key for JWT token generation.

AUTH_JWT_TOKEN_EXPIRES_IN: The expiration time for JWT access tokens.


## Database Seeding

To seed data into the database, run the following command:

```bash
npm run seed
```

## Running the Application

To start the application, use the following command:

```bash
npm run start
```

This will start the application at `http://localhost:5000/api` (or your specified port).

## API Endpoints

- **GET /api/hospitals**: Get a list of hospitals.

  Example: `http://localhost:5000/api/hospitals`

- **GET /api/users/:id**: Get user details by ID.

  Example: `http://localhost:5000/api/users/1`

- [Add more endpoints as needed]

## Contributing

Contributions are welcome! Feel free to open an issue or submit a pull request.

## License

This project is licensed under the [Your License Name] License - see the [LICENSE](LICENSE) file for details.
