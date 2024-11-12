import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./customToast.css"; // Import custom CSS for toast styling

const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobileNumber: "",
    password: "",
    encryptedNIDUrl: "", // Field for encrypted image URL
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Encrypt the password (simple Base64 encoding example, replace with stronger encryption in production)
    const encryptedPassword = btoa(formData.password);

    // Prepare the form data with encrypted password
    const formDataWithEncryptedPassword = {
      ...formData,
      password: encryptedPassword,
      verified: false, // Initial verification status
    };

    // Store data in local storage
    localStorage.setItem(
      "userRegistrationData",
      JSON.stringify(formDataWithEncryptedPassword)
    );
    console.log("Data stored in local storage:", formDataWithEncryptedPassword);

    // Show toast notification
    toast.info("Your request is processing. After verification, you can log in. We will send a verification message to your email.", {
      className: "custom-toast", // Apply custom styling
    });

    // Clear the form
    setFormData({
      name: "",
      email: "",
      mobileNumber: "",
      password: "",
      encryptedNIDUrl: "",
    });
  };

  return (
    <div className="max-w-md mx-auto bg-white shadow-md rounded-lg p-8 mt-8">
      <h2 className="text-2xl font-bold text-center mb-6">User Registration</h2>
      <form onSubmit={handleSubmit}>
        {/* Name */}
        <div className="mb-4">
          <label className="block text-gray-700">User Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            className="w-full p-2 border rounded-md"
            placeholder="Enter your name"
            required
          />
        </div>

        {/* Email */}
        <div className="mb-4">
          <label className="block text-gray-700">User Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            className="w-full p-2 border rounded-md"
            placeholder="Enter your email"
            required
          />
        </div>

        {/* Mobile Number */}
        <div className="mb-4">
          <label className="block text-gray-700">User Mobile Number</label>
          <input
            type="tel"
            name="mobileNumber"
            value={formData.mobileNumber}
            onChange={handleInputChange}
            className="w-full p-2 border rounded-md"
            placeholder="Enter your mobile number"
            required
          />
        </div>

        {/* Password */}
        <div className="mb-4">
          <label className="block text-gray-700">User Password</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            className="w-full p-2 border rounded-md"
            placeholder="Enter your password"
            required
          />
        </div>

        {/* Encrypted NID URL */}
        <div className="mb-6">
          <label className="block text-gray-700">Encrypted NID Image URL</label>
          <input
            type="url"
            name="encryptedNIDUrl"
            value={formData.encryptedNIDUrl}
            onChange={handleInputChange}
            className="w-full p-2 border rounded-md"
            placeholder="Enter the encrypted NID image URL"
            required
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-primary text-white py-2 rounded-md hover:bg-primary-dark"
        >
          Register
        </button>
      </form>

      {/* Toast Container */}
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={true}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
};

export default Register;
