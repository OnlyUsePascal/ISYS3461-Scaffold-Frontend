import { useEffect, useState } from "react";
import type { Country } from "./country-types";
import { countryService } from "./country-service";

export default function useCountry() {
  const [countries, setContries] = useState<Country[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        const res = await countryService.listCountries();
        setContries(res);
        setError(null);
      } catch (error) {
        console.log(error);
        setError(
          error instanceof Error ? error.message : "Failed to fetch countries"
        );
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  return { countries, loading, error };
}
