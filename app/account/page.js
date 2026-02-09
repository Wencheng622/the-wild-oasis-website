import { auth } from "@/app/_lib/auth";
export const metadata = {
  title: "Guest Area",
};
export default async function page() {
  const session = await auth();
  return <h1>Welcome {session.user.name}</h1>;
}
