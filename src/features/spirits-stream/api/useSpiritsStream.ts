import { useEffect } from "react";

import { useQueryClient } from "@tanstack/react-query";

import { Spirit } from "@/entities/spirit";
import { QUERY_KEYS } from "@/shared/constants";

export const useSpiritsStream = () => {
  const queryClient = useQueryClient();

  useEffect(() => {
    const eventSource = new EventSource("/api/spirits/stream");

    eventSource.onmessage = (event) => {
      const updatedSpirit: Spirit = JSON.parse(event.data);

      queryClient.setQueryData<Spirit[]>([QUERY_KEYS.SPIRITS], (prev) =>
        prev
          ? prev.map((s) => (s.id === updatedSpirit.id ? updatedSpirit : s))
          : prev
      );
    };

    return () => eventSource.close();
  }, [queryClient]);
};
