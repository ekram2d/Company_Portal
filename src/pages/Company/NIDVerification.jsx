import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const NIDVerification = () => {
  const [user, setUser] = useState(null);
  const [emailStatus, setEmailStatus] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch single user data from local storage
    const storedUserData = JSON.parse(localStorage.getItem("userRegistrationData"));
    if (storedUserData) {
      setUser(storedUserData);
    }
  }, []);

  const handleSendVerification = () => {
    if (user) {
      // Update local storage to mark the user as pending
      const updatedUser = { ...user, status: "Pending" };
      localStorage.setItem("userRegistrationData", JSON.stringify(updatedUser));
      setEmailStatus(`Verification request for ${user.name} has been sent to the government.`);

      // Navigate to NIDVerificationPending page after sending
      navigate("/nid-verification-pending");
    }
  };

  if (!user) return <p>No user data available.</p>;

  return (
    <div className="w-[90%] mx-auto bg-white shadow-md rounded-lg p-8 mt-8">
      <h2 className="text-2xl font-bold text-center mb-6">NID Verification Request</h2>
      {emailStatus && <p className="mb-4 text-green-600">{emailStatus}</p>}
      <table className="min-w-full table-auto">
        <thead>
          <tr>
            <th className="px-4 py-2 border">Name</th>
            <th className="px-4 py-2 border">Email</th>
            <th className="px-4 py-2 border">Mobile Number</th>
            <th className="px-4 py-2 border">Encrypted NID URL</th>
            <th className="px-4 py-2 border">Encypted Image</th>
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
            <td className="px-4 py-2 border">
              <button
                onClick={handleSendVerification}
                className="bg-blue-500 text-white py-1 px-3 rounded hover:bg-blue-600"
              >
                Send for Verification
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default NIDVerification;
