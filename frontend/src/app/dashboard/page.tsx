"use client";

import { useState } from "react";
import { FiUpload, FiSearch } from "react-icons/fi";
import { Sidebar } from "@/components/navigation/Sidebar";
import { withAuth } from "@/components/auth/withAuth";
import { useAuth } from "@/hooks/useAuth";

interface Conversation {
  id: string;
  title: string;
  duration: string;
  summary: string;
  status: "ready" | "processing" | "failed";
  date: string;
  tags: string[];
}

function DashboardContent() {
  const { user } = useAuth();
  const [searchQuery, setSearchQuery] = useState("");
  const [conversations] = useState<Conversation[]>([
    {
      id: "1",
      title: "Team Meeting - Product Review",
      duration: "45:23",
      summary:
        "Discussion about Q4 product roadmap and feature prioritization...",
      status: "ready",
      date: "2024-03-20",
      tags: ["team-meeting", "product"],
    },
    // Add more mock conversations as needed
  ]);

  const userName = user?.name || "User";

  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar appName="TalkTrack" />

      {/* Main Content */}
      <main className="flex-1 p-8 overflow-y-auto">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-2xl font-bold text-gray-800">
              Welcome back, {userName}
            </h1>
            <button
              className="bg-blue-600 text-white px-6 py-3 rounded-lg flex items-center space-x-2 hover:bg-blue-700 transition-colors"
              onClick={() => {
                /* Handle upload */
              }}
            >
              <FiUpload className="w-5 h-5" />
              <span>Upload Audio/Video</span>
            </button>
          </div>

          {/* Search and Filters */}
          <div className="mb-8 space-y-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Search conversations..."
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <FiSearch className="absolute right-4 top-3.5 text-gray-400 w-5 h-5" />
            </div>
            <div className="flex space-x-4">
              <select
                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                aria-label="Filter by tags"
              >
                <option>All Tags</option>
                {/* Add tag options */}
              </select>
              <select
                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                aria-label="Filter by people"
              >
                <option>All People</option>
                {/* Add people options */}
              </select>
              <select
                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                aria-label="Sort by date"
              >
                <option>Date: Newest</option>
                <option>Date: Oldest</option>
              </select>
              <select
                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                aria-label="Filter by status"
              >
                <option>All Status</option>
                <option>Ready</option>
                <option>Processing</option>
                <option>Failed</option>
              </select>
            </div>
          </div>

          {/* Conversations Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {conversations.map((conversation) => (
              <div
                key={conversation.id}
                className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
              >
                <div className="flex justify-between items-start mb-4">
                  <h3 className="font-semibold text-lg text-gray-800">
                    {conversation.title}
                  </h3>
                  <span className="text-sm text-gray-500">
                    {conversation.duration}
                  </span>
                </div>
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                  {conversation.summary}
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-2">
                    {conversation.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 bg-gray-100 text-gray-600 rounded text-xs"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <span
                    className={`
                    px-2 py-1 rounded text-sm
                    ${
                      conversation.status === "ready"
                        ? "bg-green-100 text-green-800"
                        : ""
                    }
                    ${
                      conversation.status === "processing"
                        ? "bg-yellow-100 text-yellow-800"
                        : ""
                    }
                    ${
                      conversation.status === "failed"
                        ? "bg-red-100 text-red-800"
                        : ""
                    }
                  `}
                  >
                    {conversation.status === "ready" && "✅ Ready"}
                    {conversation.status === "processing" && "🌀 Processing"}
                    {conversation.status === "failed" && "❗Failed"}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}

export default withAuth(DashboardContent);
