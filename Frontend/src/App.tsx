import "./App.css";
import "./index.css";
import { ClerkProvider } from "@clerk/clerk-react";

import LandingPage from "./components/LandigPage";

const clerkPubKey = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

export default function App() {
  return (
    <ClerkProvider publishableKey={clerkPubKey}>
      <div className="App">
        <LandingPage />
        {/* Add your main content here */}
      </div>
    </ClerkProvider>
  );
}
