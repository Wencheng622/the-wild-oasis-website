"use client";
import { signInAction } from "@/app/_lib/actions";
function SignInButton({ src, alt, children, platform }) {
  return (
    <button
      onClick={() => signInAction(platform)}
      className="flex items-center gap-6 text-lg border border-primary-300 px-10 py-4 font-medium"
    >
      <img src={src} alt={alt} height="24" width="24" />
      {children}
    </button>
  );
}

export default SignInButton;
