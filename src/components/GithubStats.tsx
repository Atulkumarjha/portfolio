"use client";

import { useEffect, useState } from "react";
import GitHubCalendar from "react-github-calendar";

interface GitHubStats {
  followers: number;
  totalStars: number;
  repos: number;
  totalPullRequests: number;
}

interface Props {
  username: string;
}

export default function GitHubActivity({ username }: Props) {
  const [stats, setStats] = useState<GitHubStats | null>(null);
  const [loading, setLoading] = useState(true);

  const fetchGitHubStats = async () => {
    try {
      setLoading(true);

      const query = `
        query {
          user(login: "${username}") {
            followers {
              totalCount
            }
            repositories(privacy: PUBLIC, first: 100) {
              totalCount
              nodes {
                stargazerCount
              }
            }
            pullRequests(first: 1) {
              totalCount
            }
          }
        }
      `;

      const res = await fetch("https://api.github.com/graphql", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `bearer ${process.env.NEXT_PUBLIC_GITHUB_TOKEN}`,
        },
        body: JSON.stringify({ query }),
      });

      const data = await res.json();

      if (!data?.data?.user) throw new Error("GitHub user not found");

      const user = data.data.user;
      const totalStars = user.repositories.nodes.reduce(
        (sum: number, repo: any) => sum + repo.stargazerCount,
        0
      );

      setStats({
        followers: user.followers.totalCount,
        totalStars,
        repos: user.repositories.totalCount,
        totalPullRequests: user.pullRequests.totalCount,
      });

      setLoading(false);
    } catch (error) {
      console.error("Error fetching GitHub stats:", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchGitHubStats();
    const interval = setInterval(fetchGitHubStats, 5 * 60 * 1000); // Refresh every 5 mins
    return () => clearInterval(interval);
  }, []);

  if (loading || !stats)
    return (
      <p className="text-white text-center mt-8">Loading GitHub stats...</p>
    );

  return (
    <div className="bg-black p-6 rounded-lg text-white max-w-5xl mx-auto">
      <div className="flex flex-col items-center justify-center">
        <h2 className="text-xl text-gray-400 uppercase mb-2 italic">
          Developer Insights
        </h2>
        <h1 className="text-6xl font-bold mb-6 italic">
          GitHub <span className="bg-gradient-to-r from-pink-600 via-blue-500 to-pink-600 bg-clip-text text-transparent animate-gradient-x italic pe-2">Activity</span>
        </h1>
      </div>

      {/* GitHub Contribution Heatmap */}
      <div className="mb-8">
        <GitHubCalendar username={username} />
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
        <div className="bg-zinc-900 p-4 rounded-lg text-center border-2 border-amber-400">
          <p className="text-sm text-gray-300">Followers</p>
          <p className="text-2xl font-bold">{stats.followers}</p>
        </div>
        <div className="bg-zinc-900 p-4 rounded-lg text-center border-2 border-purple-400">
          <p className="text-sm text-gray-300">Total Stars</p>
          <p className="text-2xl font-bold">{stats.totalStars}</p>
        </div>
        <div className="bg-zinc-900 p-4 rounded-lg text-center border-2 border-green-400">
          <p className="text-sm text-gray-300">Public Repos</p>
          <p className="text-2xl font-bold">{stats.repos}</p>
        </div>
        <div className="bg-zinc-900 p-4 rounded-lg text-center border-2 border-blue-400">
          <p className="text-sm text-gray-300">Pull Requests</p>
          <p className="text-2xl font-bold">{stats.totalPullRequests}</p>
        </div>
      </div>
    </div>
  );
}
