import { ProductList, useProducts } from ".."


export const CompleteListPage = () => {
  
  const {productListQuery} = useProducts({});

  return (
    <div className="flex-col">
      <h1 className="text-2xl font-bold">Todos los productos</h1>
      {productListQuery.isLoading && <p>Cargando...</p>}
      <ProductList products={productListQuery.data || []} />

    </div>
  )
}