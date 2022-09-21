import React from 'react'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { getProducts } from '../../actions'

export const Products = () => {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts());
  })
  return (
    <div>Holaaa estas en Product!! 😎</div>
  )
}
