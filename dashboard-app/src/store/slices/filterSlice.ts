import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

export interface FiltersState {
  searchTerm: string;
  statusFilter: 'all' | 'active' | 'inactive' | 'pending';
  roleFilter: 'all' | 'Admin' | 'User' | 'Moderator';
}

const initialState: FiltersState = {
  searchTerm: '',
  statusFilter: 'all',
  roleFilter: 'all',
};

const filtersSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    setSearchTerm: (state, action: PayloadAction<string>) => {
      state.searchTerm = action.payload;
    },
    setStatusFilter: (state, action: PayloadAction<FiltersState['statusFilter']>) => {
      state.statusFilter = action.payload;
    },
    setRoleFilter: (state, action: PayloadAction<FiltersState['roleFilter']>) => {
      state.roleFilter = action.payload;
    },
    clearFilters: (state) => {
      state.searchTerm = '';
      state.statusFilter = 'all';
      state.roleFilter = 'all';
    },
  },
});

export const { setSearchTerm, setStatusFilter, setRoleFilter, clearFilters } = filtersSlice.actions;
export default filtersSlice.reducer;