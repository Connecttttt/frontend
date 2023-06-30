import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { WagmiConfig, configureChains, createConfig } from "wagmi";
import { publicProvider } from "wagmi/providers/public";
import { jsonRpcProvider } from "wagmi/providers/jsonRpc";

const { chains, publicClient, webSocketPublicClient } = configureChains(
  // @ts-ignore
  [1663],
  [
    jsonRpcProvider({
      rpc: (chain) => ({
        http: `https://gobi-testnet.horizenlabs.io/ethv1`,
      }),
    }),
  ]
);

const config = createConfig({
  autoConnect: true,
  publicClient,
  webSocketPublicClient,
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <WagmiConfig config={config}>
      <Component {...pageProps} />
    </WagmiConfig>
  );
}
