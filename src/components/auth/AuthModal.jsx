import { useState, useEffect } from 'react';

export default function AuthModal({ isOpen = false, onClose = () => {}, initialMode = 'login' } = {}) {
  // Ensure mode is strictly a string ('login' or 'signup')
  const safeInitialMode = typeof initialMode === 'string' ? initialMode : 'login';
  const [mode, setMode] = useState(safeInitialMode);

  // Sync mode if parent changes initialMode
  useEffect(() => {
    if (typeof initialMode === 'string') {
      setMode(initialMode);
    }
  }, [initialMode]);

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    role: 'Student',
  });

  // If not open, safely return null without breaking React
  if (!isOpen) return null;

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitted EduPulse Form:', formData);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-index flex items-start justify-center bg-black/60 backdrop-blur-sm p-4">
      <div className="relative w-full max-w-md bg-white rounded-2xl shadow-2xl p-8 border border-gray-100">
        
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 text-xl font-bold w-8 h-8 rounded-full hover:bg-gray-100 flex items-center justify-center"
        >
          ✕
        </button>

        {/* EduPulse Header */}
        <div className="text-center mb-6">
          <h2 className="text-2xl font-bold text-blue-700">EduPulse</h2>
          <p className="text-xs text-gray-500 mt-1">
            {mode === 'login' ? 'Welcome back! Log in to your account.' : 'Join EduPulse for free today.'}
          </p>
        </div>

        {/* Mode Toggle Tabs */}
        <div className="flex bg-gray-100 p-1 rounded-xl mb-6">
          <button
            type="button"
            onClick={() => setMode('login')}
            className={`flex-1 py-2 text-sm font-semibold rounded-lg transition ${
              mode === 'login' ? 'bg-white text-blue-700 shadow-sm' : 'text-gray-500'
            }`}
          >
            Log In
          </button>
          <button
            type="button"
            onClick={() => setMode('signup')}
            className={`flex-1 py-2 text-sm font-semibold rounded-lg transition ${
              mode === 'signup' ? 'bg-white text-blue-700 shadow-sm' : 'text-gray-500'
            }`}
          >
            Join for Free
          </button>
        </div>

        {/* Input Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          {mode === 'signup' && (
            <div>
              <label className="block text-xs font-semibold text-gray-700 mb-1">Full Name</label>
              <input
                type="text"
                name="fullName"
                required
                placeholder="e.g. Alex Johnson"
                value={formData.fullName}
                onChange={handleChange}
                className="w-full px-4 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 outline-none"
              />
            </div>
          )}

          <div>
            <label className="block text-xs font-semibold text-gray-700 mb-1">Email Address</label>
            <input
              type="email"
              name="email"
              required
              placeholder="name@example.com"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 outline-none"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-gray-700 mb-1">Password</label>
            <input
              type="password"
              name="password"
              required
              placeholder="••••••••"
              value={formData.password}
              onChange={handleChange}
              className="w-full px-4 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 outline-none"
            />
          </div>

          {mode === 'signup' && (
            <div>
              <label className="block text-xs font-semibold text-gray-700 mb-1">Role</label>
              <select
                name="role"
                value={formData.role}
                onChange={handleChange}
                className="w-full px-4 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 outline-none bg-white"
              >
                <option value="Student">Student / Individual</option>
                <option value="University">University Student / Educator</option>
                <option value="Enterprise">Business / Enterprise</option>
              </select>
            </div>
          )}

          <button
            type="submit"
            className="w-full py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm rounded-lg shadow transition"
          >
            {mode === 'login' ? 'Log In' : 'Create Free Account'}
          </button>
        </form>
      </div>
    </div>
  );
}