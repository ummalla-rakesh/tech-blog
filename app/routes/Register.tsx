import { LoaderFunctionArgs, redirect } from "@remix-run/node";
import Registration from "~/components/Registration";
import type { ActionFunctionArgs } from "@remix-run/node";
import { prisma } from "utils/prisma.server";

// export async function loader({ request }: LoaderFunctionArgs) {
//   return {};
// }

export async function action({ request }: ActionFunctionArgs) {
  console.log("action triggered");

  const formData = new URLSearchParams(await request.text());
  const email = formData.get("email") || "";
  const password = formData.get("password") ?? "";
  const name = formData.get("name") || "";
  const profession = formData.get("profession") || "";
  const response = await prisma.user.create({
    data: {
      email,
      password,
      name,
      profession,
    },
  });
  console.log(response);
  return redirect(`/register?id=${response.id}`);
}

export default function Register() {
  return <Registration />;
}
