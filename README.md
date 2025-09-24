# Support Ticket API

A RESTful API for managing support tickets built with Node.js. This API allows users to create, read, update, and delete support tickets with a simple JSON-based database.

## 🚀 Features

- **Create Support Tickets**: Submit new support requests with equipment details and descriptions
- **View All Tickets**: Retrieve a list of all support tickets
- **Update Tickets**: Modify existing ticket information
- **Close Tickets**: Update ticket status to closed
- **Delete Tickets**: Remove tickets from the system
- **JSON Database**: Lightweight file-based storage system
- **CORS Support**: Ready for frontend integration

## 📋 Prerequisites

- Node.js (v16 or higher)
- npm or pnpm package manager

## 🛠️ Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd support-ticket-api
```

2. Install dependencies:
```bash
npm install
# or if using pnpm
pnpm install
```

## 🚀 Usage

### Development Mode

Run the server in development mode with auto-restart on file changes:

```bash
npm run dev
# or
pnpm dev
```

The API will be available at `http://localhost:3333`

### Production Mode

Run the server in production:

```bash
node src/server.js
```

## 📚 API Documentation

### Base URL
```
http://localhost:3333
```

### Endpoints

#### Create Ticket
- **POST** `/tickets`
- **Body** (JSON):
```json
{
  "equipment": "Mouse",
  "description": "Left click not working",
  "user_name": "John Doe"
}
```
- **Response**: Created ticket object with generated ID and timestamps

#### Get All Tickets
- **GET** `/tickets`
- **Response**: Array of all tickets

#### Update Ticket
- **PUT** `/tickets/:id`
- **Body** (JSON): Updated ticket fields
- **Response**: Updated ticket object

#### Close Ticket
- **PATCH** `/tickets/:id/close`
- **Response**: Ticket with updated status to "closed"

#### Delete Ticket
- **DELETE** `/tickets/:id`
- **Response**: 204 No Content

### Ticket Data Structure

```json
{
  "id": "uuid-string",
  "equipment": "string",
  "description": "string",
  "user_name": "string",
  "status": "open|closed",
  "created_at": "ISO-date-string",
  "updated_at": "ISO-date-string"
}
```

### Example Requests

#### Create a new ticket:
```bash
curl -X POST http://localhost:3333/tickets \
  -H "Content-Type: application/json" \
  -d '{
    "equipment": "Keyboard",
    "description": "Spacebar not responding",
    "user_name": "Jane Smith"
  }'
```

#### Get all tickets:
```bash
curl http://localhost:3333/tickets
```

#### Update a ticket:
```bash
curl -X PUT http://localhost:3333/tickets/:id \
  -H "Content-Type: application/json" \
  -d '{
    "description": "Spacebar and Enter key not working"
  }'
```

## 🏗️ Project Structure

```
support-ticket-api/
├── src/
│   ├── controllers/
│   │   └── tickets/
│   │       ├── create.js      # Create ticket controller
│   │       ├── index.js       # List tickets controller
│   │       ├── update.js      # Update ticket controller
│   │       ├── updateStatus.js # Close ticket controller
│   │       └── remove.js      # Delete ticket controller
│   ├── database/
│   │   ├── database.js       # Database class
│   │   └── db.json           # JSON database file
│   ├── middlewares/
│   │   ├── jsonHandler.js    # JSON request parser
│   │   └── routeHandler.js   # Route dispatcher
│   ├── routes/
│   │   ├── index.js          # Route configuration
│   │   └── tickets.js        # Ticket routes
│   ├── utils/
│   │   └── parseRoutePath.js # Route parameter parser
│   └── server.js             # HTTP server setup
└── package.json
```

## 🔧 Configuration

The API runs on port `3333` by default. To change the port, modify the `server.js` file:

```javascript
http.createServer(listener).listen(3000) // Change 3333 to desired port
```

## 📊 Database

The application uses a simple JSON file-based database (`src/database/db.json`) that stores all ticket data. The database is automatically created if it doesn't exist.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the ISC License - see the [LICENSE](LICENSE) file for details.

## 👤 Author

**Walleska Maier**
- GitHub: [@walleskamaier](https://github.com/walleskamaier)

## 🙏 Acknowledgments

- Built with vanilla Node.js for educational purposes
- Demonstrates fundamental REST API concepts
- Lightweight and easy to understand architecture
