import 'tailwindcss/tailwind.css';
import { useForm, FormProvider } from 'react-hook-form';
import useSWR, { SWRConfig } from 'swr';

import Wrapper from '../components/layout/Wrapper';
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
            <Component {...pageProps} />
          </Wrapper>
        </FormProvider>
      </SWRConfig>
    </Provider>
  );
}

export default MyApp;
