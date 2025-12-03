import { useQuery } from "@tanstack/react-query";

import { Spirit } from "@/entities/spirit";

import { getSpirits } from "./get-spirits";

export const useGetSpirits = () =>
  useQuery<Spirit[]>({
    queryKey: ["spirits"],
    queryFn: ({ signal }) => getSpirits({ signal }),
  });
