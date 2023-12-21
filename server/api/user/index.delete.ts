import { User } from "~/server/models/model";

export default defineEventHandler(async (event) => {
  const query = getQuery(event);
  try {
    await User.findByIdAndDelete(query.id);
    return { message: "deleted" };
  } catch (e) {
    throw createError({
      statusCode: 400,
      statusMessage: "Error",
      data: e,
    });
  }
});
