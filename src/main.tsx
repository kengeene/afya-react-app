import React, { Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import App from '@/App'
import '@/assets/css/index.css'
import TopBar from "@/components/topBar";
import { Folder, Activity, MessageSquareMore, SlidersVertical } from "lucide-react";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
} from "@apollo/client";
import Loading from "@/components/shared/loading";

const baseClasses = "my-5 :hover cursor-pointer";

// Initialize Apollo Client
const client = new ApolloClient({
  uri: import.meta.env.VITE_APOLLO_API,
  cache: new InMemoryCache(),
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <div className="grid grid-cols-12 bg-white">
      <ApolloProvider client={client}>
        <Suspense fallback={<Loading />}>
          <div className="flex flex-col justify-center items-center h-1/2">
            <Folder className={baseClasses} />
            <Activity className={baseClasses + " text-purple-600"} />
            <MessageSquareMore className={baseClasses} />
            <SlidersVertical className={baseClasses} />
          </div>
          <div className="col-span-11">
            <TopBar />
            <App />
          </div>
        </Suspense>
      </ApolloProvider>
    </div>
  </React.StrictMode>
);
