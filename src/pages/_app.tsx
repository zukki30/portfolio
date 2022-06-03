import { useState, useEffect } from "react";
import type { AppPropsWithLayout } from "@/types";
import { useRouter } from "next/router";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import "reset-css";

import Loading from "@/components/Elements/Loading";
import Modal from "@/components/Elements/Modal";

config.autoAddCss = false;

const MyApp = ({ Component, pageProps }: AppPropsWithLayout) => {
  const router = useRouter();
  const getLayout = Component.useGetLayout ?? ((page) => page);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const handleStart = (url: string) => url !== router.asPath && setIsLoading(true);
    const handleComplete = () => setIsLoading(false);

    router.events.on("routeChangeStart", handleStart);
    router.events.on("routeChangeComplete", handleComplete);
    router.events.on("routeChangeError", handleComplete);

    return () => {
      router.events.off("routeChangeStart", handleStart);
      router.events.off("routeChangeComplete", handleComplete);
      router.events.off("routeChangeError", handleComplete);
    };
  }, [router]);

  return (
    <>
      {getLayout(<Component {...pageProps} />)}

      {isLoading && <Loading />}
    </>
  );
};

export default MyApp;
