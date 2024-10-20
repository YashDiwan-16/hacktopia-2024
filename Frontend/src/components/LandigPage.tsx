import React from 'react';
import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";

const LandingPage = () => {
  const [darkMode, setDarkMode] = React.useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle('dark');
  };

  return (
    <div className={`min-h-screen ${darkMode ? 'dark' : ''}`}>
      <nav className="bg-white dark:bg-gray-800 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <a href="/" className="flex-shrink-0 flex items-center">
                <img className="h-8 w-8 mr-2" src="/api/placeholder/32/32" alt="ReConnect" />
                <span className="text-xl font-bold text-gray-800 dark:text-white">ReConnect</span>
              </a>
              <div className="hidden md:block">
                <div className="ml-10 flex items-baseline space-x-4">
                  <a href="/" className="text-gray-800 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium">Home</a>
                  <a href="/event-directory" className="text-gray-800 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium">Event Directory</a>
                  <a href="/about-us" className="text-gray-800 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium">About Us</a>
                  <a href="/join-us" className="text-gray-800 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium">Join Us</a>
                </div>
              </div>
            </div>
            <div className="hidden md:block">
              <div className="ml-4 flex items-center md:ml-6">
                <Button variant="ghost" size="icon" onClick={toggleDarkMode}>
                  {darkMode ? <Sun className="h-[1.2rem] w-[1.2rem]" /> : <Moon className="h-[1.2rem] w-[1.2rem]" />}
                </Button>
                <Button variant="outline" className="ml-4">
                  Sign In
                </Button>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Welcome to ReConnect</h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">Bringing people together through meaningful events.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white dark:bg-gray-700 overflow-hidden shadow rounded-lg">
              <div className="px-4 py-5 sm:p-6">
                <h3 className="text-lg font-medium text-gray-900 dark:text-white">Upcoming Events</h3>
                <div className="mt-5">
                  <ul className="divide-y divide-gray-200 dark:divide-gray-600">
                    <li className="py-4">Tech Meetup - June 15, 2023</li>
                    <li className="py-4">Community Picnic - July 4, 2023</li>
                    <li className="py-4">Art Exhibition - August 1, 2023</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="bg-white dark:bg-gray-700 overflow-hidden shadow rounded-lg">
              <div className="px-4 py-5 sm:p-6">
                <h3 className="text-lg font-medium text-gray-900 dark:text-white">Join Our Community</h3>
                <p className="mt-2 text-sm text-gray-500 dark:text-gray-300">
                  Connect with like-minded individuals and stay updated on the latest events.
                </p>
                <div className="mt-5">
                  <Button className="w-full">Sign Up Now</Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default LandingPage;