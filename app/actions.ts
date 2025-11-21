import {Query} from "@/app/models/query.models";
import {Product} from "@/app/models/product.model";

export const getData = async (query: Query) => {
  const response = await fetch("https://ozon-be655-default-rtdb.europe-west1.firebasedatabase.app/goods.json");
  const data = await response.json();

  return data.filter((product: Product) => {
    if (query.category && query.category !== product.category) {
      return false;
    }

    if (query.search && !product.title.toLowerCase().includes(query.search.toLowerCase())) {
      return false;
    }

    return true;
  });
}