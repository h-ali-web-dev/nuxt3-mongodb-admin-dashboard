import { getServerSession } from "#auth";
import { authOptions } from "../api/auth/[...]";
export default eventHandler(async (event) => {
  const session = await getServerSession(event, authOptions);
  if (
    process.env.AUTH_BYPASS == "false" &&
    event.path.includes("/api/product")
  ) {
    if (!session) {
      throw createError({ statusMessage: "Unauthenticated", statusCode: 403 });
    }
  }
});
