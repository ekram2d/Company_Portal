import { useState, useEffect } from "react";

const AllData = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Retrieve user data from local storage
    const storedUserData = JSON.parse(localStorage.getItem("userRegistrationData"));
    if (storedUserData) {
      setUser(storedUserData);
    }
  }, []);

  if (!user) return <p>No data available.</p>;

  return (
    <div className="w-[80%] h-[50%] mx-auto bg-white shadow-md rounded-lg p-8 mt-8">
      <h2 className="text-2xl font-bold text-center mb-6">All User Data</h2>
      <table className="min-w-full table-auto">
        <thead>
          <tr>
            <th className="px-4 py-2 border">Name</th>
            <th className="px-4 py-2 border">Email</th>
            <th className="px-4 py-2 border">Mobile Number</th>
            <th className="px-4 py-2 border">Encrypted NID URL</th>
            <th className="px-4 py-2 border">Encypted Image</th>
            <th className="px-4 py-2 border">Status</th>
            <th className="px-4 py-2 border">Verified</th>
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
              {user.verified ? "Yes" : "No"}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default AllData;
