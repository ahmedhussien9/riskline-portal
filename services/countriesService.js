import { Config } from "../config";

export async function GetCountries() {
  const res = await fetch(`${Config.baseUrl}widgets/alerts_feed/collection`);
  const data = await res.json();
  return await data;
}
