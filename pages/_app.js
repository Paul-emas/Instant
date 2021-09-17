import 'tailwindcss/tailwind.css';

import Wrapper from '../components/layout/Wrapper';
import '../styles/global.css';

function MyApp({ Component, pageProps }) {
  return (
    <Wrapper>
      <Component {...pageProps} />
    </Wrapper>
  );
}

export default MyApp;
