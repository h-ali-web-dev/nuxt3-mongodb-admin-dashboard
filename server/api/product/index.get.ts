import { Product } from "~/server/models/model";

export default defineEventHandler(async (event) => {
  const query = getQuery(event);
  try {
    let products;
    if (query.id) {
      products = await Product.findById(query.id);
    } else {
      products = await Product.find();
    }
    return products;
  } catch (e) {
    throw createError({
      statusCode: 400,
      statusMessage: "Error",
      data: e,
    });
  }
});
