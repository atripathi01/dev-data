import Sidebar from '@/components/pagecomponents/sidebar';
import '@/styles/globals.css';
import type { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className='flex justify-start items-start flex-row'>
      <Sidebar />
      <Component {...pageProps} />
    </div>
  );
}
