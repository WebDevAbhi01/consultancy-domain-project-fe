import { createSlice, createAsyncThunk, type PayloadAction } from "@reduxjs/toolkit"
import { wait } from "../../lib/helpers/helpers"

export type UserRole = "admin" | "agent" | null

export interface AuthUser {
  id: string
  name: string
  email: string
  role: UserRole
}

interface AuthState {
  user: AuthUser | null
  isAuthenticated: boolean
  status: "idle" | "loading" | "succeeded" | "failed"
  error: string | null
}

const initialState: AuthState = {
  user: null,
  isAuthenticated: false,
  status: "idle",
  error: null,
}

interface LoginCredentials {
  email: string
  password: string
  remember?: boolean
}

export const loginUser = createAsyncThunk<
  AuthUser,           // fulfilled value
  LoginCredentials,   // argument
  { rejectValue: string }
>("auth/loginUser", async (credentials, { rejectWithValue }) => {
  await wait(800) // simulate network

  // Phase-1 dummy gate — any email with password "password" works.
  // Admin email hint: admin@sanctionandco.in / password
  // Agent email hint: agent@sanctionandco.in  / password
  if (credentials.password !== "password") {
    return rejectWithValue("Incorrect email or password. Please try again.")
  }

  const isAdmin = credentials.email.toLowerCase().startsWith("admin")
  return {
    id: "usr-001",
    name: isAdmin ? "Vikram Shah" : "Sneha Reddy",
    email: credentials.email,
    role: isAdmin ? "admin" : "agent",
  }
})

// ─── Slice ───────────────────────────────────────────────────────────────────

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    // Direct login (e.g. from a token hydration on app load)
    login(state, action: PayloadAction<AuthUser>) {
      state.user = action.payload
      state.isAuthenticated = true
      state.status = "succeeded"
      state.error = null
    },
    logout(state) {
      state.user = null
      state.isAuthenticated = false
      state.status = "idle"
      state.error = null
    },
    clearAuthError(state) {
      state.error = null
      state.status = "idle"
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.status = "loading"
        state.error = null
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.status = "succeeded"
        state.user = action.payload
        state.isAuthenticated = true
        state.error = null
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.status = "failed"
        state.error = action.payload ?? "Something went wrong. Please try again."
      })
  },
})

export const { login, logout, clearAuthError } = authSlice.actions
export default authSlice.reducer