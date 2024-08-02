import { useQuery } from "@tanstack/react-query"
import { productActions } from "..";

interface Options {
    id: number;
}

export const useProduct = ({id}: Options) => {
    const productQuery = useQuery({
        queryKey: ['products', id],
        queryFn: () => productActions.getProduct(id),
        staleTime: 1000 * 60 * 60
    })

    return {productQuery}
}