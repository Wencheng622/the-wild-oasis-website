import SignInButton from "@/app/_components/SignInButton";
export const metadata = {
  title: "login",
};
export default function Page() {
  return (
    <div className="flex flex-col gap-10 mt-10 items-center">
      <h2 className="text-3xl font-semibold">
        Sign in to access your guest area
      </h2>
      <SignInButton
        src="https://authjs.dev/img/providers/google.svg"
        alt="Google logo"
        platform="google"
      >
        <span>Continue with Google</span>
      </SignInButton>
      <SignInButton
        src="https://authjs.dev/img/providers/github.svg"
        alt="Github logo"
        platform="github"
      >
        <span>Continue with Github</span>
      </SignInButton>
    </div>
  );
}
