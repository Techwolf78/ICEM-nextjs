import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-gray-50 flex items-center justify-center px-4">
      <div className="text-center animate-fade-in">
        <div className="mb-8">
          <h1 className="text-9xl font-bold text-secondary mb-4 animate-bounce">404</h1>
          <p className="text-2xl text-primary mb-4">Oops! Page not found</p>
          <p className="text-lg text-gray-500">The page you're looking for doesn't exist. It might have been moved or deleted.</p>
        </div>
        <div className="mb-8">
          <Link href="/" className="inline-block px-8 py-3 bg-secondary text-white rounded-lg hover:bg-primary transition-all duration-300 transform hover:scale-105 shadow-lg">
            Go Home
          </Link>
        </div>
        <div className="mt-8 text-sm text-gray-500">
          <p>If you believe this is an error, please <Link href="/contact" className="text-indigo-600 hover:underline">contact us</Link>.</p>
        </div>
      </div>
    </div>
  );
}