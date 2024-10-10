# iHadith

iHadith is a comprehensive online platform that allows users to browse, search, and study authentic Hadith collections. Designed for ease of use and accessibility, it caters to both scholars and everyday users, providing a seamless experience for exploring the teachings of Prophet Muhammad (peace be upon him).

## Features

- **User Authentication**: Sign up, log in, and secure session management.
- **Hadith Collections**: Access a wide range of Hadith books like Sahih Bukhari, Sahih Muslim, Sunan Abu Dawood, and more.
- **Search Functionality**: Powerful search to find Hadith by keywords, topics, or narrators.
- **Hadith Categories**: Hadiths are categorized for easy navigation.
- **Hadith Details**: Detailed information about each Hadith, including Arabic text, translations, explanations, and references.
- **Favorites**: Add Hadiths to your favorites for quick access.
- **User Notes**: Write personal notes on Hadiths for future reference.
- **Responsive Design**: Fully responsive, optimized for mobile and desktop users.
- **Multi-language Support**: Browse Hadiths in multiple languages.

## Technologies Used

- **Backend**: Node.js, Express.js
- **Frontend**: Next.js
- **Database**: MongoDB
- **Authentication**: JWT (JSON Web Tokens)
- **Styling**: Tailwind CSS
- **Hosting**: Vercel, Render

## Installation

Follow these steps to set up the iHadith project locally.

### Prerequisites

Ensure you have the following installed:

- Node.js (version 12 or higher)
- MongoDB (local instance or MongoDB Atlas for cloud database)
- Git

### Cloning the Repository

Clone the iHadith repository:

```bash
git clone https://github.com/najmul-islam/ihadith.git
cd ihadith
```

### Install Dependencies

Install the required dependencies for both the frontend and backend.

```bash
# Install backend dependencies
npm install

# Navigate to the frontend directory and install dependencies
cd frontend
npm install
```

### Setting Up Environment Variables

Create a `.env` file in the root directory and add the following environment variables:

```env
PORT=5000
MONGO_URI=your_mongo_db_connection_string
JWT_SECRET=your_jwt_secret
```

### Running the Application

To run both the backend and frontend:

```bash
# Start the backend
npm run server

# Start the frontend
cd frontend
npm start
```

The backend will run on `http://localhost:5000` and the frontend on `http://localhost:3000`.

## API Endpoints

### User Authentication

- `POST /api/users/register`: Register a new user.
- `POST /api/users/login`: Log in a user.
- `GET /api/users/profile`: Get user profile (protected).

### Hadiths

- `GET /api/hadiths`: Get a list of all Hadiths.
- `GET /api/hadiths/:id`: Get details of a single Hadith.
- `GET /api/hadiths/search?q=keyword`: Search Hadiths by keyword.
- `POST /api/hadiths/favorites`: Add a Hadith to favorites (authenticated users).
- `GET /api/hadiths/favorites`: Get user's favorite Hadiths (authenticated users).

### Collections

- `GET /api/collections`: Get a list of Hadith collections.
- `GET /api/collections/:id`: Get Hadiths from a specific collection.

## Features to Implement

- **Audio Recitations**: Include audio versions of Hadiths.
- **Commentaries**: Add scholarly explanations and interpretations.
- **Community Features**: Implement forums or discussion boards.
- **Dark Mode**: Provide a dark theme option for users.
- **Advanced Search Filters**: Filter Hadiths by narrator, book, or chapter.

## Contribution

We welcome contributions! If you’d like to improve iHadith, please follow the steps below:

1. **Fork** the repository.
2. **Create a new branch** for your feature:

   ```bash
   git checkout -b feature/AmazingFeature
   ```

3. **Commit** your changes:

   ```bash
   git commit -m 'Add some AmazingFeature'
   ```

4. **Push** to the branch:

   ```bash
   git push origin feature/AmazingFeature
   ```

5. **Open a pull request** to review your changes.

## License

iHadith is open-source and distributed under the MIT License. See `LICENSE` for more information.

## Contact

If you have any questions or feedback, feel free to reach out:

- **Name**: Najmul Islam
- **Email**: [najmulislam519@gmail.com](mailto:najmulislam519@gmail.com)
- **Website**: [najmulislam.vercel.app](https://najmulislam.vercel.app)
