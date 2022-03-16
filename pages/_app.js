import 'tailwindcss/tailwind.css';
import { useForm, FormProvider } from 'react-hook-form';
import { Toaster } from 'react-hot-toast';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import Wrapper from '../components/layout/Wrapper';
import '../styles/fonts.css';
import '../styles/global.css';
import { store, persistor } from '../store';

function MyApp({ Component, pageProps }) {
  const methods = useForm();

  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <FormProvider {...methods}>
          <Wrapper>
            <Toaster
              position="top-right"
              toastOptions={{
                duration: 6000,
              }}
            />
            <Component {...pageProps} />
          </Wrapper>
        </FormProvider>
      </PersistGate>
    </Provider>
  );
}

export default MyApp;
