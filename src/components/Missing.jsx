import { Link } from "react-router-dom";

const Missing = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-900 text-white">
      <article className="text-center space-y-6">
        <h1 className="text-4xl font-bold">Exciting New Features Coming Soon!</h1>
        <p className="text-lg text-gray-300">Stay tuned for updates. We’re working hard to bring you amazing new features.</p>
        <div>
          <Link
            to="/home"
            className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-6 rounded-lg transition-colors duration-300"
          >
            Return to Homepage
          </Link>
        </div>
      </article>
    </div>
  );
};

export default Missing;
