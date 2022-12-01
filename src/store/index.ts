import { configureStore } from '@reduxjs/toolkit';

import userSlice from '@store/user';

const store = configureStore({
    reducer: {
        user: userSlice.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});

export default store;
export const dispatch = store.dispatch;
