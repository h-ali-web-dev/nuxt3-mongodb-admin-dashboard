import { Product } from "~/server/models/model";

export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  try {
    const product = await Product.create(body);
    return product;
  } catch (e) {
    throw createError({
      statusCode: 400,
      statusMessage: "Error",
      data: e,
    });
  }
});
