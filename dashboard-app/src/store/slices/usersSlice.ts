import { createSlice, createAsyncThunk, type PayloadAction} from '@reduxjs/toolkit';

export interface User {
  id: number;
  name: string;
  email: string;
  status: 'active' | 'inactive' | 'pending';
  role: string;
  lastLogin: string;
  actions: string;
}

interface ApiUser {
  id: number;
  name: string;
  email: string;
}

interface UsersState {
  users: User[];
  filteredUsers: User[];
  loading: boolean;
  error: string | null;
  totalUsers: number;
}

const initialState: UsersState = {
  users: [],
  filteredUsers: [],
  loading: false,
  error: null,
  totalUsers: 0,
};

// Async thunk for fetching users
export const fetchUsers = createAsyncThunk(
  'users/fetchUsers',
  async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const apiUsers: ApiUser[] = await response.json();
    
    // Transform API data to match our User interface
    const transformedUsers: User[] = apiUsers.map((user: ApiUser, index: number) => ({
      id: user.id,
      name: user.name,
      email: user.email,
      status: ['active', 'inactive', 'pending'][index % 3] as 'active' | 'inactive' | 'pending',
      role: ['Admin', 'User', 'Moderator'][index % 3],
      lastLogin: new Date(Date.now() - Math.random() * 7 * 24 * 60 * 60 * 1000).toLocaleString(),
      actions: 'Edit'
    }));

    return transformedUsers;
  }
);

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    setFilteredUsers: (state, action: PayloadAction<User[]>) => {
      state.filteredUsers = action.payload;
    },
    clearError: (state) => {
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.loading = false;
        state.users = action.payload;
        state.filteredUsers = action.payload;
        state.totalUsers = action.payload.length;
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Failed to fetch users';
      });
  },
});

export const { setFilteredUsers, clearError } = usersSlice.actions;
export default usersSlice.reducer;