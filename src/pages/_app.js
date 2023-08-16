import { RarityProvider } from "@/contexts/rarityContext";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <RarityProvider>
      <Component {...pageProps} />
    </RarityProvider>
  );
}
