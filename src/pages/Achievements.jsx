import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Achievements = () => {
  const [achievements, setAchievements] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchAchievements = async () => {
      try {
        const response = await fetch("https://cysec-victim-backend.onrender.com/achievements");
        if (!response.ok) {
          throw new Error(`Failed to fetch data: ${response.statusText}`);
        }
        const data = await response.json();
        console.log("Fetched achievements data:", data);

        if (Array.isArray(data)) {
          setAchievements(data);
        } else {
          throw new Error("Expected an array but got something else");
        }
      } catch (error) {
        console.error("Error fetching achievements:", error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchAchievements();
  }, []);

  useEffect(() => {
    console.log("Achievements state updated:", achievements);
  }, [achievements]);

  if (loading) {
    return <div className="flex justify-center items-center h-screen text-gray-600">Loading...</div>;
  }

  if (error) {
    return <div className="flex justify-center items-center h-screen text-red-600">Error: {error}</div>;
  }


  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold text-center text-gray-900 mb-8">
          Company Achievements
        </h1>
        <ul className="space-y-6">
          {achievements.map((achievement) => (
            <li
              key={achievement.AchievementID}
              onClick={() => navigate(`/achievements/${achievement.AchievementID}`)}
              className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow cursor-pointer"
            >
              <h2 className="text-xl font-semibold text-gray-800">
                {achievement.Title}
              </h2>
              <p className="text-sm text-gray-500 mt-1">
                Awarded by: {achievement.AwardingBody}
              </p>
              <p className="text-gray-600 mt-2">{achievement.Description}</p>
              <p className="text-sm text-gray-500 mt-2">
                <strong>Date:</strong> {new Date(achievement.AwardDate).toDateString()  || "Unknown"}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Achievements;