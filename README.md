# Node.js Custom Module Example

This project demonstrates a modular approach to building a Node.js application with a custom API module. The custom module is separated from the main application logic and can be easily extended with more routes and services.
## Structure

- `app.js`: Initializes the Express server and integrates the custom API module.
- `customModule/`: Contains the separated API and service logic.
    - `api.js`: Sets up the `/api/hello_custom` endpoint.
    - `service.js`: Houses the business logic for the API.

## Features

- **Modular Architecture**: Clean separation between API routes and service logic.
- **Scalable Design**: Easily add more routes and services.
- **Simple RESTful API Example**: Demonstrates a basic API setup in Node.js.

## Getting Started

### Prerequisites

- Node.js installed on your machine.

### Installation

1. Clone the repository.
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the server:
   ```bash
   node app.js
   ```
4. Access the API at `http://localhost:3000/api/hello_custom`.

## Contributing

Contributions are welcome. Please open an issue first to discuss what you would like to change.

## License

[MIT](https://choosealicense.com/licenses/mit/)