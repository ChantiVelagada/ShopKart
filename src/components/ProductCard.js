import React from 'react';
import { Link } from 'react-router-dom';

function ProductCard({product}) {
  return (
    <div className="relative m-6 flex w-full max-w-xs align-middle flex-col overflow-hidden rounded-lg border border-gray-100 bg-white shadow-md hover:scale-95">
      <Link to={`/product/${product.id}`} className="mx-auto mt-3 flex h-60 overflow-hidden rounded-xl" href="#">
        <img className="hover:object-scale-down" src={product.image} alt="product image" />
      </Link>
      <div className="mt-3 px-4 pb-4">
        <Link to={`/product/${product.id}`}>
          <h5 className="text-lg tracking-tight text-slate-900">{product.title}</h5>
        </Link>
        <div className="mt-2 mb-4 flex items-center justify-between">
          <p>
            <span className="text-2xl font-bold text-slate-900">${product.price}</span>
            <span className="text-sm text-slate-900 line-through">${Math.round(product.price + 20)}</span>
          </p>
          <div className="flex items-center">
            <span className="mr-2 ml-3 rounded bg-yellow-200 px-2.5 py-0.5 text-xs font-semibold">{product.rating?.rate}</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductCard;