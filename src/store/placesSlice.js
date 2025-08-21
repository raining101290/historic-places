import { createSlice, createAction } from '@reduxjs/toolkit';

export const fetchPlaces = createAction('places/fetchPlaces');
export const randomSuggest = createAction('places/randomSuggest');

const initialState = {
  items: [],
  status: 'idle',   // 'idle' | 'loading' | 'succeeded' | 'failed'
  error: null,
  visited: {},      // id -> true
  suggestion: null  // suggested place id or null
};

const placesSlice = createSlice({
  name: 'places',
  initialState,
  reducers: {
    setStatus: (state, action) => { state.status = action.payload; },
    setPlaces: (state, action) => {
      state.items = action.payload;
      state.status = 'succeeded';
    },
    setError: (state, action) => {
      state.error = action.payload || 'Unknown error';
      state.status = 'failed';
    },
    toggleVisited: (state, action) => {
      const id = action.payload;
      if (state.visited[id]) delete state.visited[id];
      else state.visited[id] = true;
    },
    setSuggestion: (state, action) => {
      state.suggestion = action.payload;
    }
  },
  extraReducers: (builder) => {
    builder.addCase(randomSuggest, (state) => {
      if (state.items.length > 0) {
        const randomIndex = Math.floor(Math.random() * state.items.length);
        state.suggestion = state.items[randomIndex];
      }
    });
  }
});

export const { setStatus, setPlaces, setError, toggleVisited, setSuggestion } = placesSlice.actions;
export default placesSlice.reducer;
