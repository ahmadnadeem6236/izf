import { Button } from "@/components/ui/button";
import {
  RegisterLink,
  LoginLink,
} from "@kinde-oss/kinde-auth-nextjs/components";

export default function AdminPage() {
  return (
    <div className="flex flex-col justify-center gap-4 items-center h-svh">
      <p>Hey Admin</p>
      <div className="flex justify-center items-center gap-4">
        <Button asChild>
          <LoginLink>Login</LoginLink>
        </Button>
        <Button asChild>
          <RegisterLink>Register</RegisterLink>
        </Button>
      </div>
    </div>
  );
}
