import { useEffect, useState } from "react";
import Controls from "../Controls/index";
import Map from "../Map/index";
import useSWR from "swr";

const URL = "https://api.wheretheiss.at/v1/satellites/25544";

const fetcher = (URL) => fetch(URL).then((res) => res.json());
// This returns a promise:
// 1. fetch(URL) makes API request and returns a promise
// 2. .then(res => res.json()) takes the response and parses it to JSON (also returns a promise)
// 3. This final promise gets returned by the fetcher function
// 4. SWR then handles this promise, managing loading states, errors and data

export default function ISSTracker() {
  //   const [coords, setCoords] = useState({
  //     longitude: 0,
  //     latitude: 0,
  //   });

  //   async function getISSCoords() {
  //     try {
  //       const response = await fetch(URL);
  //       if (response.ok) {
  //         const data = await response.json();
  //         setCoords({ longitude: data.longitude, latitude: data.latitude });
  //       }
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   }

  const { data, error, isLoading, isValidating, mutate } = useSWR(
    "https://api.wheretheiss.at/v1/satellites/25544",
    fetcher,
    { refreshInterval: 5000 }
  );

  if (isLoading) return <div>loading...</div>;

  //   useEffect(() => {
  //     const timer = setInterval(() => {
  //       getISSCoords();
  //     }, 5000);

  //     return () => {
  //       clearInterval(timer);
  //     };
  //   }, []);

  return (
    <main>
      <Map longitude={data.longitude} latitude={data.latitude} />
      <Controls
        longitude={data.longitude}
        latitude={data.latitude}
        onRefresh={() => mutate()}
        isRefreshing={isValidating}
      />
    </main>
  );
}
