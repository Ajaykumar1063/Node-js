import { useState, useEffect } from "react";
import AIRTRIBE_API from "../api/baseApi";

export function useGetAllProducts(limit = 20) {
    const [loading, setLoading] = useState(false);
    const [products, setProducts] = useState([]);

    useEffect(() => {
        async function getAllProducts() {
            setLoading(true);
            const products = await AIRTRIBE_API.get(`/products?limit=${limit}`);
            setLoading(false);
            setProducts(products.data);
        }
        try {
            getAllProducts();
        } catch (error) {
            setLoading(false);
        }
    }, [limit])
    return [products, loading]
}
export function useGetProductsById(productId) {
    const [loading, setLoading] = useState(false);
    const [product, setProduct] = useState({});
    useEffect(() => {
        async function getSingleProductDetails(productId) {
            setLoading(true);
            const product = await AIRTRIBE_API.get(`/products/${productId}`);
            setLoading(false);
            setProduct(product.data);
        }
        try {
            getSingleProductDetails(productId);
        } catch (error) {
            setLoading(false);
        }
    }, [productId])
    return [product, loading]
}