import React from 'react'
import ReactDOM from 'react-dom/client'
import App from '@/App'
import '@/assets/css/index.css'
import TopBar from "@/components/TopBar";
import { Folder, Activity, MessageSquareMore, SlidersVertical } from "lucide-react";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
} from "@apollo/client";

const baseClasses = "my-5 :hover cursor-pointer";

// Initialize Apollo Client
const client = new ApolloClient({
  uri: "http://localhost:4000/",
  cache: new InMemoryCache(),
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <div className="grid grid-cols-12 bg-white">
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
      </div>
    </ApolloProvider>
  </React.StrictMode>
);
