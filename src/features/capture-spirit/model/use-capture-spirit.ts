import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";

import { Spirit } from "@/entities/spirit";
import { QUERY_KEYS } from "@/shared/constants";

import { captureSpirit } from "../api/capture-spirit";

export const useCaptureSpirit = (id: string) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: () => captureSpirit(id),
    onMutate: async () => {
      await queryClient.cancelQueries({ queryKey: [QUERY_KEYS.SPIRITS] });

      const previousSpirits = queryClient.getQueryData<Spirit[]>([
        QUERY_KEYS.SPIRITS,
      ]);

      queryClient.setQueryData<Spirit[]>([QUERY_KEYS.SPIRITS], (old) =>
        old
          ? old.map((s) => (s.id === id ? { ...s, status: "Captured" } : s))
          : []
      );

      return { previousSpirits };
    },
    onError: (_err, _variables, context) => {
      if (context?.previousSpirits) {
        queryClient.setQueryData([QUERY_KEYS.SPIRITS], context.previousSpirits);
      }

      toast.error("Oops... The spirit capture error");
    },

    onSettled: () =>
      queryClient.invalidateQueries({ queryKey: [QUERY_KEYS.SPIRITS] }),
  });
};
