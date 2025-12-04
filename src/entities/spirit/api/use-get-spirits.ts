import { useQuery } from "@tanstack/react-query";

import { Spirit } from "@/entities/spirit";
import { QUERY_KEYS } from "@/shared/constants";

import { getSpirits } from "./get-spirits";

export const useGetSpirits = () =>
  useQuery<Spirit[]>({
    queryKey: [QUERY_KEYS.SPIRITS],
    queryFn: ({ signal }) => getSpirits({ signal }),
  });
