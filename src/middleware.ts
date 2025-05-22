import { defineMiddleware } from "astro:middleware";
import { validateUserToken } from "./helpers";

export const onRequest = defineMiddleware(async (context, next) => {
  const isAPIRequest = context.request.url.includes("/api");
  const token = context.cookies.get("token")?.value;

  if (typeof token === "string") {
    const userData = await validateUserToken(token);
    Object.assign(context.locals, userData);
    console.log(context.locals)
  } else if (context.request.url.includes("/api")) {
    return context.redirect("/");
  }
  return next();
});
