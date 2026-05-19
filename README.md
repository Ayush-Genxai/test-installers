# React + Supabase Auth

A complete authentication starter with login, register, and protected routes.

## Project Structure

```
src/
├── lib/
│   └── supabase.js          # Supabase client
├── components/
│   ├── AuthContext.js        # Auth state + signIn/signUp/signOut
│   └── ProtectedRoute.js    # Redirect to /login if unauthenticated
├── pages/
│   ├── Login.js
│   ├── Register.js
│   └── Dashboard.js         # Protected page
├── App.js                   # Routes
└── App.css
```

## Setup

### 1. Install dependencies
```bash
npm install
```

### 2. Create a Supabase project
1. Go to https://supabase.com and create a free project
2. In your project go to **Settings → API**
3. Copy your **Project URL** and **anon/public key**

### 3. Configure environment variables
Edit `.env` and replace the placeholder values:
```
REACT_APP_SUPABASE_URL=https://your-project-id.supabase.co
REACT_APP_SUPABASE_ANON_KEY=your-anon-public-key-here
```

### 4. (Optional) Disable email confirmation for development
In Supabase: **Authentication → Providers → Email** → turn off "Confirm email"

### 5. Run the app
```bash
npm start
```

## Routes
| Path | Description |
|------|-------------|
| `/login` | Login page |
| `/register` | Registration page |
| `/dashboard` | Protected — requires login |

## Extending
- Add more protected routes by wrapping them in `<ProtectedRoute>`
- Access the current user anywhere with `const { user } = useAuth()`
- Call `signOut()` from `useAuth()` to log out
