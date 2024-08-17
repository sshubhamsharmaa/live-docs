"use client";
import {
  LiveblocksProvider,
  ClientSideSuspense,
} from "@liveblocks/react/suspense";
import { ReactNode } from "react";

const Provider = ({ children }: { children: ReactNode }) => {
  return (
    <LiveblocksProvider authEndpoint="/api/liveblocks-auth">
      {/*    publicApiKey={
         "pk_dev_tcRzDWjygAmhgHDfE0gQknUoVVW3RhtTWyHYMPzIa5ykcpHqlod4F1nyzI6kKR1_"
       }> */}
      <ClientSideSuspense fallback={<div>Loading…</div>}>
        {children}
      </ClientSideSuspense>
    </LiveblocksProvider>
  );
};

export default Provider;
