# Expo Template App

A modern React Native application built with Expo Router and Better Auth for authentication. This template provides a solid foundation for building cross-platform mobile applications with secure authentication.

## Features

- 🚀 **Expo Router** - File-based routing for React Native
- 🔐 **Better Auth** - Secure authentication with email/password
- 📱 **Cross-platform** - iOS, Android, and Web support
- 🎨 **Modern UI** - Customizable theme system with dark/light mode
- 🔧 **TypeScript** - Full type safety
- 📦 **Component Library** - Reusable UI components

## Prerequisites

Before running this project, make sure you have the following installed:

- [Node.js](https://nodejs.org/) (v18 or higher)
- [Expo CLI](https://docs.expo.dev/get-started/installation/)
- [Git](https://git-scm.com/)

## Environment Setup

This project requires environment variables to be configured. Create a `.env` file in the root directory with the following variables:

```env
# Database connection string (PostgreSQL)
DB_URL=postgresql://username:password@localhost:5432/your_database_name

# Better Auth server URL (for client-side authentication)
EXPO_PUBLIC_BETTER_AUTH_URL=http://localhost:8081
```

### Environment Variables Explained

- **`DB_URL`**: PostgreSQL connection string for the Better Auth database
  - Format: `postgresql://username:password@host:port/database_name`
  - Example: `postgresql://myuser:mypassword@localhost:5432/auth_db`

- **`EXPO_PUBLIC_BETTER_AUTH_URL`**: URL where your Better Auth server is running
  - For local development: `http://localhost:8081`
  - For production: Your deployed server URL
  - Note: This variable must be prefixed with `EXPO_PUBLIC_` to be accessible in the client

## Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd expo-template-app
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up your environment variables**
   ```bash
   cp .env.example .env
   # Edit .env with your actual values
   ```

4. **Set up the database**
   - Ensure PostgreSQL is running
   - Create a database for the application
   - Update the `DB_URL` in your `.env` file

## Running the Application

### Development

```bash
# Start the development server
npm start

# Run on iOS simulator
npm run ios

# Run on Android emulator
npm run android

# Run on web
npm run web
```

### Production

```bash
# Build for production
expo build:android
expo build:ios
```

## Project Structure

```
expo-template-app/
├── app/                    # Expo Router pages
│   ├── (auth)/            # Authentication routes
│   ├── (tabs)/            # Tab navigation
│   └── api/               # API routes
├── components/            # Reusable UI components
├── context/              # React Context providers
├── lib/                  # Utility libraries
│   ├── auth.ts           # Better Auth server configuration
│   ├── auth-client.ts    # Better Auth client configuration
│   └── config/           # Configuration files
├── screens/              # Screen components
└── styles/               # Theme and styling
```

## Authentication

This project uses Better Auth for authentication with the following features:

- Email and password authentication
- Secure token storage using Expo SecureStore
- Cross-platform authentication flow
- Protected routes

### Authentication Flow

1. Users can sign up with email and password
2. Sign in with existing credentials
3. Authentication state is managed globally
4. Protected routes automatically redirect to sign-in

## Customization

### Theme

The app includes a customizable theme system located in `styles/theme/` and `styles/tokens/`. You can modify colors, typography, and other design tokens.

### Components

Reusable components are located in the `components/` directory. Each component includes:
- TypeScript definitions
- Styled components
- Props interface

## Testing

```bash
# Run tests
npm test

# Run tests in watch mode
npm run test:watch
```

## Deployment

### Expo Application Services (EAS)

1. Install EAS CLI:
   ```bash
   npm install -g @expo/eas-cli
   ```

2. Configure EAS:
   ```bash
   eas build:configure
   ```

3. Build for production:
   ```bash
   eas build --platform all
   ```

## Troubleshooting

### Common Issues

1. **Environment variables not loading**
   - Ensure your `.env` file is in the root directory
   - Restart the development server after adding environment variables
   - Check that `EXPO_PUBLIC_` prefix is used for client-side variables

2. **Database connection issues**
   - Verify PostgreSQL is running
   - Check your `DB_URL` format
   - Ensure the database exists and is accessible

3. **Authentication not working**
   - Verify `EXPO_PUBLIC_BETTER_AUTH_URL` is correct
   - Check that the Better Auth server is running
   - Ensure database migrations have been applied

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Support

For support and questions:
- Check the [Expo documentation](https://docs.expo.dev/)
- Review the [Better Auth documentation](https://better-auth.com/)
- Open an issue in this repository 