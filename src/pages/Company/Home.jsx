import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Hero Section */}
      <section className="bg-primary text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">
            ABC Money Transaction Service
          </h1>
          <p className="text-lg md:text-2xl">
            Secure, fast, and reliable money transactions at your fingertips.
          </p>
        </div>
      </section>

      {/* About Section */}
      <section className="container mx-auto px-4 py-8 text-center">
        <h2 className="text-2xl font-semibold mb-4">About Us</h2>
        <p className="text-gray-700 mb-8">
          ABC Company provides secure and convenient money transfer services. With us, your transactions are safe, fast, and accessible from anywhere.
        </p>
        <Link
          to="/about"
          className="btn bg-primary text-white px-4 py-2 rounded-md hover:bg-primary-dark"
        >
          Learn More
        </Link>
      </section>

      {/* Services Section */}
      <section className="bg-gray-200 py-8">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-semibold text-center mb-6">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* NID Verification */}
            <Link
              to="/nid-verification"
              className="bg-white shadow-lg p-6 rounded-lg text-center hover:bg-gray-100"
            >
              <h3 className="text-xl font-semibold mb-2">NID Verification</h3>
              <p>Verify your National ID to secure your transactions</p>
            </Link>

            {/* Money Transfer */}
            <Link
              to="/money-transfer"
              className="bg-white shadow-lg p-6 rounded-lg text-center hover:bg-gray-100"
            >
              <h3 className="text-xl font-semibold mb-2">Money Transfer</h3>
              <p>Send money quickly and easily to anyone, anywhere</p>
            </Link>

            {/* Transaction History */}
            <Link
              to="/transaction-history"
              className="bg-white shadow-lg p-6 rounded-lg text-center hover:bg-gray-100"
            >
              <h3 className="text-xl font-semibold mb-2">Transaction History</h3>
              <p>Review your past transactions for better management</p>
            </Link>
          </div>
        </div>
      </section>

      {/* Latest News Section */}
      <section className="container mx-auto px-4 py-8">
        <h2 className="text-2xl font-semibold text-center mb-6">Latest News</h2>
        <div className="space-y-4">
          <div className="bg-white shadow-lg p-4 rounded-lg">
            <h3 className="text-xl font-semibold">New Feature: International Transfers</h3>
            <p className="text-gray-600">Now you can send money internationally with ease...</p>
            <Link to="/news" className="text-primary hover:underline">Read more</Link>
          </div>
          <div className="bg-white shadow-lg p-4 rounded-lg">
            <h3 className="text-xl font-semibold">Enhanced Security Features</h3>
            <p className="text-gray-600">We are adding multi-factor authentication to keep your transactions safe...</p>
            <Link to="/news" className="text-primary hover:underline">Read more</Link>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-primary text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
          <p>Reach out to ABC Company for assistance or more information on our services.</p>
          <Link
            to="/contact"
            className="btn bg-white text-primary mt-4 px-4 py-2 rounded-md hover:bg-gray-100"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
