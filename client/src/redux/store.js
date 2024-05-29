import { configureStore } from '@reduxjs/toolkit';
import appStateSlice from './features/appStateSlice';
import authModalSlice from './features/authModalSlice';
import themeModeSlice from './features/themeModeSlice';
import userSlice from './features/userSlice';
import globalLoadingSlice from './features/globalLoadingSlice';

const store = configureStore({
    reducer: {
        appState: appStateSlice,
        authModal: authModalSlice,
        themeMode: themeModeSlice,
        globalLoading: globalLoadingSlice,
        user: userSlice
    }
    });

export default store;