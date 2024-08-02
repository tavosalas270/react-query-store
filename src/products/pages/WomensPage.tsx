import { ProductList, useProducts } from ".."

export const WomensPage = () => {
  
  const {productListQuery} = useProducts({filterKey: "women's clothing"});

  return (
    <div className="flex-col">
      <h1 className="text-2xl font-bold">Productos para mujeres</h1>
      {productListQuery.isLoading && <p>Cargando...</p>}
      <ProductList products={productListQuery.data || []} />

    </div>
  )
}