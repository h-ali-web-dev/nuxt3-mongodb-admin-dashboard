import { User } from "~/server/models/model";

export default defineEventHandler(async (event) => {
  const query = getQuery(event);
  try {
    let users;
    if (query.id) {
      users = await User.findById(query.id).select("-password");
    } else {
      users = await User.find().select("-password");
    }
    return users;
  } catch (e) {
    throw createError({
      statusCode: 400,
      statusMessage: "Error",
      data: e,
    });
  }
});
