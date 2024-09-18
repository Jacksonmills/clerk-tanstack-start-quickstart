import { Button } from '@/components/ui/button';
import {
  SignedIn,
  UserButton,
  SignOutButton,
  SignedOut,
  SignInButton,
  SignUpButton,
} from '@clerk/tanstack-start';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/')({
  component: Home,
});

function Home() {
  return (
    <div className="dark bg-background text-foreground h-full">
      <div className="grid place-content-center h-full">
        <h1>Index Route</h1>
        <SignedIn>
          <p>You are signed in</p>

          <UserButton />

          <Button asChild>
            <SignOutButton />
          </Button>
        </SignedIn>
        <SignedOut>
          <p>You are signed out</p>

          <div className="gap-2 flex">
            <Button asChild>
              <SignInButton />
            </Button>
            <Button asChild>
              <SignUpButton />
            </Button>
          </div>
        </SignedOut>
      </div>
    </div>
  );
}
