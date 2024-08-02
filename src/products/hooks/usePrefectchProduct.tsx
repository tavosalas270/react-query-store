import { useQueryClient } from "@tanstack/react-query";
import { productActions } from "..";

export const usePrefectchProduct = () => {
    const queryClient = useQueryClient();
    const preFetchProduct = (id: number) => {
        queryClient.prefetchQuery({
            queryKey: ['products', id],
            queryFn: () => productActions.getProduct(id),
            retry: 0
        })
    }
    return preFetchProduct;
}