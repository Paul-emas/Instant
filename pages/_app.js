import 'tailwindcss/tailwind.css';
import { useForm, FormProvider } from 'react-hook-form';

import Wrapper from '../components/layout/Wrapper';
import '../styles/global.css';

function MyApp({ Component, pageProps }) {
  const methods = useForm();

  return (
    <FormProvider {...methods}>
      <Wrapper>
        <Component {...pageProps} />
      </Wrapper>
    </FormProvider>
  );
}

export default MyApp;
