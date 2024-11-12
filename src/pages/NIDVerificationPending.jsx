import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const NIDVerificationPending = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch the updated user data from local storage
    const storedUserData = JSON.parse(localStorage.getItem("userRegistrationData"));
    if (storedUserData) {
      setUser(storedUserData);
    }
  }, []);

  const handleVerifyUser = () => {
    if (user) {
      // Update user status to Verified and set verified to true
      const updatedUser = { ...user, status: "Verified", verified: true };
      localStorage.setItem("userRegistrationData", JSON.stringify(updatedUser));
      setUser(updatedUser); // Update the state to reflect the new status

      // Navigate to AllData page after verifying
      navigate("/all-data");
    }
  };

  if (!user) return <p>No user data available.</p>;

  return (
    <div className="w-[80%] h-[50%] mx-auto bg-white shadow-md rounded-lg p-8 mt-8">
      <h2 className="text-2xl font-bold text-center mb-6">NID Verification Pending</h2>
      <table className="min-w-full table-auto">
        <thead>
          <tr>
            <th className="px-4 py-2 border">Name</th>
            <th className="px-4 py-2 border">Email</th>
            <th className="px-4 py-2 border">Mobile Number</th>
            <th className="px-4 py-2 border">Encrypted NID URL</th>
            <th className="px-4 py-2 border">Encypted Image</th>
            <th className="px-4 py-2 border">Status</th>
            <th className="px-4 py-2 border">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="px-4 py-2 border">{user.name}</td>
            <td className="px-4 py-2 border">{user.email}</td>
            <td className="px-4 py-2 border">{user.mobileNumber}</td>
            <td className="px-4 py-2 border">{user.encryptedNIDUrl}</td>
            <td className="px-4 py-2 border"><img src={user.encryptedNIDUrl} alt="" /></td>
            <td className="px-4 py-2 border">{user.status}</td>
            <td className="px-4 py-2 border">
              {user.status === "Pending" ? (
                <button
                  onClick={handleVerifyUser}
                  className="bg-green-500 text-white py-1 px-3 rounded hover:bg-green-600"
                >
                  Mark as Verified
                </button>
              ) : (
                <span className="text-green-600 font-bold">Verified</span>
              )}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default NIDVerificationPending;