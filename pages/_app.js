import 'tailwindcss/tailwind.css';
import { useForm, FormProvider } from 'react-hook-form';
import { SWRConfig } from 'swr';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

import Wrapper from '../components/layout/Wrapper';
import '../styles/fonts.css';
import '../styles/global.css';
import { Provider } from '../context/Provider';

function MyApp({ Component, pageProps }) {
  const methods = useForm();

  return (
    <Provider>
      <SWRConfig
        value={{
          refreshInterval: 3000,
          fetcher: (resource, init) =>
            axios(resource, init).then(res => res.json()),
        }}
      >
        <FormProvider {...methods}>
          <Wrapper>
            <ToastContainer />
            <Component {...pageProps} />
          </Wrapper>
        </FormProvider>
      </SWRConfig>
    </Provider>
  );
}

export default MyApp;
