import axios from "axios";
import type { Country } from "./country-types";

const COUNTRY_BASE_URL = "https://restcountries.com/v3.1";

export const countryService = {
  async listCountries() {
    const res = await axios.get<Country[]>(`${COUNTRY_BASE_URL}/all`, {
      params: {
        fields: "name,flags,population",
      },
    });

    return res.data;
  },
};
