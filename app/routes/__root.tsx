import {
  Outlet,
  ScrollRestoration,
  createRootRoute,
  createRootRouteWithContext,
} from '@tanstack/react-router';
import { Body, Head, Html, Meta, Scripts } from '@tanstack/start';
import type * as React from 'react';
import { ClerkProvider } from '@clerk/tanstack-start';
import globalsCss from '@/app/globals.css?url';

const NotFound = () => <div>Not Found</div>;

export const Route = createRootRouteWithContext()({
  links: () => [{ rel: 'stylesheet', href: globalsCss }],
  notFoundComponent: () => <NotFound />,
  component: RootComponent,
});

function RootComponent() {
  return (
    <RootDocument>
      <Outlet />
    </RootDocument>
  );
}

function RootDocument({ children }: { children: React.ReactNode }) {
  return (
    <ClerkProvider>
      <Html>
        <Head>
          <Meta />
        </Head>
        <Body>
          {children}
          <ScrollRestoration />
          <Scripts />
        </Body>
      </Html>
    </ClerkProvider>
  );
}
