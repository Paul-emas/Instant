import 'tailwindcss/tailwind.css';
import { useForm, FormProvider } from 'react-hook-form';
import { ToastContainer } from 'react-toastify';
import { Provider } from 'react-redux';
import 'react-toastify/dist/ReactToastify.min.css';
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
            <ToastContainer />
            <Component {...pageProps} />
          </Wrapper>
        </FormProvider>
      </PersistGate>
    </Provider>
  );
}

export default MyApp;
