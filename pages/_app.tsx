import type { AppProps } from "next/app";
import { RecoilRoot } from "recoil";
import { AuthProvider } from "../hooks/useAuth";
import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    // Higher Order Component
    <RecoilRoot>
      <AuthProvider>
        <Component {...pageProps} />
      </AuthProvider>
    </RecoilRoot>
  );
}

export default MyApp;
