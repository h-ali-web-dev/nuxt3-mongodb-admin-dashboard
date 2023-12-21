import { User } from "~/server/models/model";

export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  console.log(body);

  try {
    const user = await User.findByIdAndUpdate(body.id, body);
    return user;
  } catch (e) {
    throw createError({
      statusCode: 400,
      statusMessage: "Error",
      data: e,
    });
  }
});
