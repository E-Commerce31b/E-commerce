import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const getProducts = createAsyncThunk(
  "products/getProducts",
  async () => {
    try {
      // const response = await axios.get('https://api-paranoid-bikes-production.up.railway.app/api/bikes')
      const response = await axios.get("http://localhost:3001/api/bikes");

      const data = response.data.sort(function (a, b) {
        if (a.name < b.name) return -1;
        if (a.name > b.name) return 1;
        return 0;
      });
      const mapeo = data.map((q) => {
        return {
          id: q._id,
          name: q.name,
          category: q.category,
          maker: q.maker,
          created: q.year,
          gender: q.gender,
          count: q.count,
          price: `${q.priceAmount} ${q.priceCurrency}`,
          // stock: q.stock,
          image: q.image,
          isEBike: q.isEBike,
        };
      });
      console.log(mapeo);
      return mapeo;
    } catch (error) {
      return error.message;
    }
  }
);
export const getProduct = createAsyncThunk(
  "products/getProductById",
  async (id) => {
    try {
      // const response = await axios.get(`https://api-paranoid-bikes-production.up.railway.app/api/bikes/${id}`)
      const response = await axios.get(`http://localhost:3001/api/bikes/${id}`);
      const data = response.data;

      return {
        id: data._id,
        name: data.name,
        type: data.type,
        created: data.year,
        genre: data.gender,
        maker: data.maker,
        size: data.size,
        price: data.priceAmount,
        image: data.image,
        // isExpanded: false,
      };
    } catch (error) {
      return error.message;
    }
  }
);

export const postProduct = createAsyncThunk(
  "products/postProduct",
  async (newBike) => {
    try {
        // const response = await axios.post('https://api-paranoid-bikes-production.up.railway.app/api/bikes', newBike)
        const response = await axios.post('http://localhost:3001/api/bikes', newBike)
        return response.data
    } catch (error) {
      return error.message;
    }
  }
);

export const putProduct = createAsyncThunk(
  "products/putProduct",
  async ({ _id, ...product }) => {
    try {
        // const response = await axios.put(`https://api-paranoid-bikes-production.up.railway.app/api/bikes/${_id}`, product)
        const response = await axios.put(`http://192.168.0.215:3001/api/bikes/${_id}`, product)
        return response.data
    } catch (error) {
      return error.message;
    }
  }
);

export const deleteProduct = createAsyncThunk(
  "products/deleteProduct",
  async (id) => {
    try {
        // const response = axios.delete(`https://api-paranoid-bikes-production.up.railway.app/api/bikes/${id}`) 
        const response = axios.delete(`http://192.168.0.215:3001/api/bikes/${id}`) 
        return response.data
    } catch (error) {
      return error.message;
    }
  }
);
