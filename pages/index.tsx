import type { NextPage } from "next";
import Head from "next/head";
import { fetchAPI } from "../helpers/fetcher";

type Props = {
  data: any;
};

const Home: NextPage<Props> = ({ data }) => {
  console.log(data);
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>ENJOYABLE</title>
        <link rel="icon" href="/" />
      </Head>

      <main className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center">
        main
      </main>

      <footer className="flex h-24 w-full items-center justify-center border-t">
        footer
      </footer>
    </div>
  );
};

export default Home;

export async function getServerSideProps() {
  const url = "https://api.foursquare.com/v3/places/search";
  const response = await fetchAPI(url, {
    method: "GET",
    headers: {
      Authorization: "fsq3ruDe96WxdQxMXhGCPIaA8DYJCYR4LqZ/l6UhoZ/Tcm0=",
    },
  });
  return {
    props: { data: response },
  };
}
