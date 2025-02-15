import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

// Predefined list of image URLs
const imageUrls = [
  "https://images.pexels.com/photos/3184613/pexels-photo-3184613.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  "https://images.pexels.com/photos/3184434/pexels-photo-3184434.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  "https://images.pexels.com/photos/30688592/pexels-photo-30688592/free-photo-of-high-level-business-meeting-in-lagos-office.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  "https://images.pexels.com/photos/3184416/pexels-photo-3184416.jpeg?auto=compress&cs=tinysrgb&w=600",
  "https://images.pexels.com/photos/7005500/pexels-photo-7005500.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  "https://images.pexels.com/photos/7005074/pexels-photo-7005074.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
];

const AchievementDetails = () => {
  const { id } = useParams(); // Get the `id` parameter from the URL
  const [achievement, setAchievement] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [imageUrl, setImageUrl] = useState(""); // State for selected image URL
  const navigate = useNavigate();

  useEffect(() => {
    const fetchAchievementDetails = async () => {
      try {
        const response = await fetch(`https://cysec-victim-backend.onrender.com/achievements/${id}`);
        if (!response.ok) {
          throw new Error(`Failed to fetch data: ${response.statusText}`);
        }
        const data = await response.json();
        console.log("Fetched achievement data:", data);

        if (data && typeof data === "object") {
          setAchievement(data[0]); // Expecting an object here
        } else {
          throw new Error("Expected an object but got something else");
        }
      } catch (error) {
        console.error("Error fetching achievements:", error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchAchievementDetails();
  }, [id]); // Add `id` to the dependency array

  // Select a random image URL from the predefined list
  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * imageUrls.length);
    setImageUrl(imageUrls[randomIndex]);
  }, []); // Run only once on component mount

  if (loading) {
    return <div className="flex justify-center items-center h-screen text-gray-600">Loading...</div>;
  }

  if (error) {
    return <div className="flex justify-center items-center h-screen text-red-600">Error: {error}</div>;
  }

  if (!achievement) {
    return <div className="flex justify-center items-center h-screen text-gray-600">No data found.</div>;
  }

  const AwardDate = new Date(achievement.AwardDate).toDateString();

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <button
          onClick={() => navigate(-1)}
          className="text-sm text-gray-500 hover:text-gray-700 mb-4"
        >
          &larr; Back to Achievements
        </button>
        <div className="bg-white p-6 rounded-lg shadow-sm">
          {/* Display the selected image */}
          {imageUrl && (
            <img
              src={imageUrl}
              alt="Achievement"
              className="w-full h-64 object-cover rounded-lg mb-4"
            />
          )}
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            {achievement.Title}
          </h2>
          <p className="text-sm text-gray-500 mb-2">
            Awarded by: {achievement.AwardingBody}
          </p>
          <p className="text-gray-600 mb-4">{achievement.Description}</p>
          <p className="text-sm text-gray-500">
            <strong>Date:</strong> {AwardDate || "Unknown"}
          </p>
        </div>
      </div>
    </div>
  );
};

export default AchievementDetails;