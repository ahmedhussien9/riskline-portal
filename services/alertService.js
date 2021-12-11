//http://195.201.29.59:8095/widgets/alerts_feed?location=new york

import { Config } from "../config";

export async function getAlertsApi(location) {
  const res = await fetch(
    `${Config.baseUrl}widgets/alerts_feed?location=${location}`
  );
  const data = await res.json();
  return await data;
}
