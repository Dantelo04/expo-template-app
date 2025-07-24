# Expo Template App

A modern React Native application built with Expo Router and Better Auth for authentication. This template provides a solid foundation for building cross-platform mobile applications with secure authentication.

## Features

- 🚀 **Expo Router** - File-based routing for React Native
- 🔐 **Better Auth** - Secure authentication with email/password and Google OAuth
- 📱 **Cross-platform** - iOS, Android, and Web support
- 🎨 **Modern UI** - Customizable theme system with dark/light mode
- 🔧 **TypeScript** - Full type safety
- 📦 **Component Library** - Reusable UI components
- 🌐 **External Backend** - Authentication handled by external Better Auth server

## Prerequisites

Before running this project, make sure you have the following installed:

- [Node.js](https://nodejs.org/) (v18 or higher)
- [Expo CLI](https://docs.expo.dev/get-started/installation/)
- [Git](https://git-scm.com/)

## Environment Setup

This project requires environment variables to be configured. Create a `.env` file in the root directory with the following variables:

```env
# Better Auth server URL (for client-side authentication)
EXPO_PUBLIC_BETTER_AUTH_URL=https://your-backend-url.com
```

### Environment Variables Explained

- **`EXPO_PUBLIC_BETTER_AUTH_URL`**: URL where your external Better Auth server is running
  - For development: Your local or deployed backend URL
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
   # Edit .env with your actual backend URL
   ```

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
│   ├── SessionProvider.tsx # Authentication state management
│   └── ThemeContext.tsx   # Theme state management
├── lib/                  # Utility libraries
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
- External backend integration

### Authentication Context

The app uses a `SessionProvider` context (`context/SessionProvider.tsx`) that provides:

- **Session Management**: Handles user session state and authentication status
- **Authentication Methods**: 
  - `signIn(email, password)` - Email/password authentication
  - `signInWithGoogle()` - Google OAuth authentication
  - `signUp(email, password)` - User registration
  - `signOut()` - User logout
- **State Management**: 
  - `session` - Current session data
  - `user` - Current user data
  - `isLoading` - Loading state
  - `isAuthenticated` - Authentication status
  - `error` - Error handling

### Using the Authentication Context

```typescript
import { useSession, useUser, useAuth } from '@/context/SessionProvider';

// In your component
const { signIn, signOut, isAuthenticated, isLoading } = useSession();
const user = useUser();
const { isAuthenticated, isLoading } = useAuth();
```

### Authentication Flow

1. Users can sign up with email and password
2. Users can sign in with existing credentials
3. Users can sign in with Google OAuth
4. Authentication state is managed globally through SessionProvider
5. Protected routes automatically redirect to sign-in
6. All authentication requests are handled by the external backend

### Google OAuth Flow

1. User taps "Sign in with Google" button
2. App opens Google OAuth flow
3. User authenticates with Google
4. Google redirects back to the app
5. Better Auth client handles the OAuth callback
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

2. **Authentication not working**
   - Verify `EXPO_PUBLIC_BETTER_AUTH_URL` is correct and points to your backend
   - Check that the external Better Auth server is running and accessible
   - Ensure the backend is properly configured with Google OAuth credentials

3. **Google OAuth not working**
   - Verify that your backend has `GOOGLE_CLIENT_ID` and `GOOGLE_CLIENT_SECRET` configured
   - Check that Google OAuth redirect URIs are configured properly in Google Cloud Console
   - Ensure the OAuth consent screen is configured correctly

4. **Session management issues**
   - Check that the SessionProvider is wrapping your app correctly
   - Verify that the auth client is properly configured
   - Ensure SecureStore is working on your target platform

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