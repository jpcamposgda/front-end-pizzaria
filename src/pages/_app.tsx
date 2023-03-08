import '../../styles/globals.scss'
import type { AppProps } from 'next/app'

import { AuthProvider } from '../contexts/AuthContext'

import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';


export default function App({ Component, pageProps }: AppProps) {
  return (
  <AuthProvider>
  <Component {...pageProps} />
  <ToastContainer autoClose={3000} position="bottom-right"/>
  </AuthProvider>
  )
}
