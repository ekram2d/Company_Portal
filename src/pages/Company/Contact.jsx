export default function Contact() {
  return (
    <div className="bg-gray-100 min-h-screen p-8">
      <h1 className="text-3xl font-bold text-center text-blue-800 mb-8">
        Contact the Bangladesh Election Commission
      </h1>

      <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-lg p-8">
        {/* General Contact Information */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">General Inquiries</h2>
          <p className="text-gray-700">
            For general inquiries or assistance, you can reach the Bangladesh Election Commission office at:
          </p>
          <ul className="mt-4">
            <li className="text-gray-700">
              <span className="font-semibold">Phone:</span> +880-2-1234567
            </li>
            <li className="text-gray-700">
              <span className="font-semibold">Email:</span> info@ec.gov.bd
            </li>
            <li className="text-gray-700">
              <span className="font-semibold">Address:</span> Nirbachan Bhaban, Agargaon, Dhaka-1207, Bangladesh
            </li>
          </ul>
        </section>

        {/* Department Contacts */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Department Contacts</h2>
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold text-gray-800">Voter Registration</h3>
              <p className="text-gray-700">Phone: +880-2-2345678</p>
              <p className="text-gray-700">Email: voter_registration@ec.gov.bd</p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-800">Complaints and Feedback</h3>
              <p className="text-gray-700">Phone: +880-2-3456789</p>
              <p className="text-gray-700">Email: complaints@ec.gov.bd</p>
            </div>
          </div>
        </section>

        {/* Emergency Contact */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Emergency Contacts</h2>
          <p className="text-gray-700">
            For immediate assistance during elections, please contact the Election Support Center:
          </p>
          <ul className="mt-4">
            <li className="text-gray-700">
              <span className="font-semibold">Phone:</span> +880-2-4567890
            </li>
            <li className="text-gray-700">
              <span className="font-semibold">Email:</span> emergency@ec.gov.bd
            </li>
          </ul>
        </section>

        {/* Contact Form */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Send Us a Message</h2>
          <form className="space-y-4">
            <div>
              <label className="block text-gray-600">Name</label>
              <input
                type="text"
                className="w-full px-3 py-2 border rounded-lg"
                placeholder="Your Name"
              />
            </div>
            <div>
              <label className="block text-gray-600">Email</label>
              <input
                type="email"
                className="w-full px-3 py-2 border rounded-lg"
                placeholder="Your Email"
              />
            </div>
            <div>
              <label className="block text-gray-600">Message</label>
              <textarea
                className="w-full px-3 py-2 border rounded-lg"
                rows="4"
                placeholder="Your Message"
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
            >
              Submit
            </button>
          </form>
        </section>
      </div>
    </div>
  );
}
