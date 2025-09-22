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
      <h2 className="text-sm text-gray-400 uppercase mb-2">
        Developer Insights
      </h2>
      <h1 className="text-3xl font-bold mb-6">
        GitHub <span className="text-pink-500">Activity</span>
      </h1>

      {/* GitHub Contribution Heatmap */}
      <div className="mb-8">
        <GitHubCalendar username={username} />
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
        <div className="bg-purple-900 p-4 rounded-lg text-center">
          <p className="text-sm text-gray-300">Followers</p>
          <p className="text-2xl font-bold">{stats.followers}</p>
        </div>
        <div className="bg-yellow-900 p-4 rounded-lg text-center">
          <p className="text-sm text-gray-300">Total Stars</p>
          <p className="text-2xl font-bold">{stats.totalStars}</p>
        </div>
        <div className="bg-green-900 p-4 rounded-lg text-center">
          <p className="text-sm text-gray-300">Public Repos</p>
          <p className="text-2xl font-bold">{stats.repos}</p>
        </div>
        <div className="bg-blue-900 p-4 rounded-lg text-center">
          <p className="text-sm text-gray-300">Pull Requests</p>
          <p className="text-2xl font-bold">{stats.totalPullRequests}</p>
        </div>
      </div>
    </div>
  );
}
