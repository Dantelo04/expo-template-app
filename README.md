# Expo Template App

A modern React Native application built with Expo Router and Better Auth for authentication. This template provides a solid foundation for building cross-platform mobile applications with secure authentication.

## Features

- 🚀 **Expo Router** - File-based routing for React Native
- 🔐 **Better Auth** - Secure authentication with email/password and Google OAuth
- 📱 **Cross-platform** - iOS, Android, and Web support
- 🎨 **Modern UI** - Customizable theme system with dark/light mode
- 🔧 **TypeScript** - Full type safety
- 📦 **Component Library** - Reusable UI components
- 🌐 **ngrok Integration** - Secure tunneling for development and testing

## Prerequisites

Before running this project, make sure you have the following installed:

- [Node.js](https://nodejs.org/) (v18 or higher)
- [Expo CLI](https://docs.expo.dev/get-started/installation/)
- [Git](https://git-scm.com/)
- [ngrok](https://ngrok.com/) (for secure tunneling)
- [PostgreSQL](https://www.postgresql.org/) (for database)

## Environment Setup

This project requires environment variables to be configured. Create a `.env` file in the root directory with the following variables:

```env
# Database connection string (PostgreSQL)
DB_URL=postgresql://username:password@localhost:5432/your_database_name

# Better Auth server URL (for client-side authentication)
# Use ngrok URL for development and testing
EXPO_PUBLIC_BETTER_AUTH_URL=https://your-ngrok-url.ngrok.io

# Google OAuth Configuration
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret
```

### Environment Variables Explained

- **`DB_URL`**: PostgreSQL connection string for the Better Auth database
  - Format: `postgresql://username:password@host:port/database_name`
  - Example: `postgresql://myuser:mypassword@localhost:5432/auth_db`

- **`EXPO_PUBLIC_BETTER_AUTH_URL`**: URL where your Better Auth server is running
  - For development: Use ngrok URL (e.g., `https://abc123.ngrok.io`)
  - For production: Your deployed server URL
  - Note: This variable must be prefixed with `EXPO_PUBLIC_` to be accessible in the client
  - **Important**: Use ngrok URL for secure tunneling when testing on physical devices

- **`GOOGLE_CLIENT_ID`**: Google OAuth client ID from Google Cloud Console
  - Required for Google login functionality
  - Get this from [Google Cloud Console](https://console.cloud.google.com/)

- **`GOOGLE_CLIENT_SECRET`**: Google OAuth client secret from Google Cloud Console
  - Required for Google login functionality
  - Get this from [Google Cloud Console](https://console.cloud.google.com/)

## Google OAuth Setup

### 1. Create Google Cloud Project

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project or select an existing one
3. Enable the Google+ API and Google OAuth2 API

### 2. Configure OAuth Consent Screen

1. Navigate to "APIs & Services" > "OAuth consent screen"
2. Choose "External" user type
3. Fill in the required information:
   - App name
   - User support email
   - Developer contact information
4. Add scopes: `email`, `profile`, `openid`
5. Add test users if needed

### 3. Create OAuth 2.0 Credentials

1. Go to "APIs & Services" > "Credentials"
2. Click "Create Credentials" > "OAuth 2.0 Client IDs"
3. Choose "Web application"
4. Add authorized redirect URIs:
   - `https://your-ngrok-url.ngrok.io/auth/callback/google`
   - `expotemplateapp://one` (for mobile app)
5. Copy the Client ID and Client Secret to your `.env` file

## ngrok Setup

### 1. Install ngrok

```bash
# Using npm
npm install -g ngrok

# Or download from https://ngrok.com/
```

### 2. Start ngrok Tunnel

```bash
# Start ngrok on port 8081 (or your Better Auth server port)
ngrok http 8081
```

### 3. Update Environment Variables

1. Copy the ngrok URL (e.g., `https://abc123.ngrok.io`)
2. Update `EXPO_PUBLIC_BETTER_AUTH_URL` in your `.env` file
3. Update the Google OAuth redirect URI in Google Cloud Console

### 4. Update Google OAuth Redirect URIs

In your Google Cloud Console OAuth 2.0 credentials:
1. Add the new ngrok URL: `https://your-ngrok-url.ngrok.io/auth/callback/google`
2. Keep the existing mobile redirect: `expotemplateapp://one`

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
   # Note: Use ngrok URL for EXPO_PUBLIC_BETTER_AUTH_URL
   ```

4. **Set up the database**
   - Ensure PostgreSQL is running
   - Create a database for the application
   - Update the `DB_URL` in your `.env` file

5. **Start ngrok tunnel**
   ```bash
   ngrok http 8081
   ```

6. **Update Google OAuth redirect URIs**
   - Add your ngrok URL to Google Cloud Console
   - Update `EXPO_PUBLIC_BETTER_AUTH_URL` in `.env`

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
- Google OAuth authentication
- Secure token storage using Expo SecureStore
- Cross-platform authentication flow
- Protected routes

### Authentication Flow

1. Users can sign up with email and password
2. Users can sign in with existing credentials
3. Users can sign in with Google OAuth
4. Authentication state is managed globally
5. Protected routes automatically redirect to sign-in

### Google OAuth Flow

1. User taps "Sign in with Google" button
2. App opens Google OAuth flow
3. User authenticates with Google
4. Google redirects back to the app
5. Better Auth handles the OAuth callback
6. User is signed in and redirected to the main app

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
   - **Important**: Use ngrok URL for secure tunneling when testing on physical devices

4. **Google OAuth not working**
   - Verify `GOOGLE_CLIENT_ID` and `GOOGLE_CLIENT_SECRET` are set correctly
   - Check that Google OAuth redirect URIs are configured properly
   - Ensure the ngrok URL is added to Google Cloud Console redirect URIs
   - Verify the OAuth consent screen is configured correctly

5. **ngrok connection issues**
   - Ensure ngrok is running on the correct port
   - Check that the ngrok URL is accessible
   - Update both `.env` file and Google Cloud Console with the new ngrok URL
   - Restart the development server after changing ngrok URL

### ngrok Tips

- ngrok URLs change each time you restart ngrok (unless you have a paid account)
- Always update both your `.env` file and Google Cloud Console when ngrok URL changes
- Use `ngrok http 8081 --host-header=localhost:8081` if you encounter host header issues
- Consider using ngrok's reserved domains for consistent URLs (paid feature)

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
- Check the [Google OAuth documentation](https://developers.google.com/identity/protocols/oauth2)
- Open an issue in this repository 