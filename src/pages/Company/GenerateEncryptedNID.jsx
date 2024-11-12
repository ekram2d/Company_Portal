import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const GenerateEncryptedNIDImage = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [encryptedImageURL, setEncryptedImageURL] = useState("");
  const [encryptionKey, setEncryptionKey] = useState("");

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleGenerateEncryptedURL = () => {
    if (!selectedFile) {
      toast.error("Please select an NID image.");
      return;
    }

    // Generate a mock encrypted URL and encryption key for demonstration purposes
    const mockEncryptionKey = `KEY-${Math.random()
      .toString(36)
      .substr(2, 10)
      .toUpperCase()}`;

    setEncryptedImageURL(`https://ibb.co.com/54xg70d`);
    setEncryptionKey(mockEncryptionKey);

    toast.success("Your Encrypted NID Image URL and Key generated.");
  };

  const handleDownload = () => {
    // Create a temporary link to simulate download
    const link = document.createElement("a");
    link.href = encryptedImageURL;
    link.download = "encrypted_nid_image.jpg";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="w-[50%] h-96 mx-auto mt-10 bg-white shadow-lg p-6 rounded-lg text-center ">
      <ToastContainer position="top-center" /> {/* ToastContainer positioned at the top */}
      <h3 className="text-black uppercase text-2xl font-bold mb-4">
        Generate Encrypted NID Image (Demo)
      </h3>

      <input
        type="file"
        accept="image/*"
        onChange={handleFileChange}
        className="m-4 p-3 bg-white border border-red-500 shadow-lg"
      />

      <button
        onClick={handleGenerateEncryptedURL}
        className="btn bg-green-600 text-white px-4 py-3 border border-red-500 rounded-md hover:bg-primary-dark"
      >
        Generate Encrypted image URL and Key
      </button>

      {encryptedImageURL && (
        <div className="mt-4">
          <p className="text-gray-700"> Encrypted NID Image URL:</p>
          <a
            href={encryptedImageURL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary"
          >
            {encryptedImageURL}
          </a>

          <div className="mt-2">
            <p className="text-gray-700">Encryption Key:</p>
            <p className="text-primary font-semibold">{encryptionKey}</p>
          </div>

          <button
            onClick={handleDownload}
            className="mt-4 btn bg-green-600 text-white px-4 py-2 rounded-md hover:bg-secondary-dark"
          >
            Download Encrypted Image
          </button>
        </div>
      )}
    </div>
  );
};

export default GenerateEncryptedNIDImage;
