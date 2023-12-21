import { Product } from "~/server/models/model";

export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  console.log(body);

  try {
    const product = await Product.findByIdAndUpdate(body.id, body);
    return product;
  } catch (e) {
    throw createError({
      statusCode: 400,
      statusMessage: "Error",
      data: e,
    });
  }
});
