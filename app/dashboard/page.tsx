"use client";
import { useAuth } from "@/app/context/AuthContext";
import { useFollow } from "@/app/context/FollowContext";
import { Profile } from "@/app/types";
import { useRouter } from "next/navigation";

const PROFILES: Profile[] = [
  {
    id: 1,
    name: "Alice Johnson",
    role: "Frontend Developer",
    avatar: "https://i.pravatar.cc/150?img=1",
  },
  {
    id: 2,
    name: "Bob Smith",
    role: "Backend Developer",
    avatar: "https://i.pravatar.cc/150?img=2",
  },
  {
    id: 3,
    name: "Charlie Lee",
    role: "UI/UX Designer",
    avatar: "https://i.pravatar.cc/150?img=3",
  },
];

export default function DashboardPage() {
  const { user, logout } = useAuth();
  const { following, toggleFollow } = useFollow();
  const router = useRouter();

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-black">Hello, {user}</h1>
        <button
          onClick={() => {
            logout();
            router.push("/");
          }}
          className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
        >
          Logout
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {PROFILES.map((profile) => (
          <div
            key={profile.id}
            className="p-4 border border-gray-300 rounded shadow-sm bg-white flex flex-col items-center"
          >
            <img
              src={profile.avatar}
              alt={profile.name}
              className="w-24 h-24 rounded-full mb-3"
            />
            <h2 className="text-xl font-semibold text-black">{profile.name}</h2>
            <p className="text-gray-600">{profile.role}</p>
            <button
              onClick={() => toggleFollow(profile.id)}
              className={`mt-3 px-4 py-2 rounded ${
                following.includes(profile.id)
                  ? "bg-yellow-400 text-white"
                  : "bg-gray-200 text-gray-700"
              }`}
            >
              {following.includes(profile.id) ? "Unfollow" : "Follow"}
            </button>
          </div>
        ))}
      </div>

      {following.length > 0 && (
        <div className="mt-8">
          <h2 className="text-2xl font-bold mb-2 text-black">Following</h2>
          <ul className="list-disc pl-5 text-black">
            {PROFILES.filter((p) => following.includes(p.id)).map((p) => (
              <li key={p.id}>{p.name}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
