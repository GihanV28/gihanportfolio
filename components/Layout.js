import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function Layout({ children }) {
  const [theme, setTheme] = useState('dark');
  const [isMonospaced, setIsMonospaced] = useState(false);
  const router = useRouter();

  useEffect(() => {
    // Load saved preferences
    const savedTheme = localStorage.getItem('theme') || 'dark';
    const savedMonospaced = localStorage.getItem('monospaced') === 'true';

    setTheme(savedTheme);
    setIsMonospaced(savedMonospaced);

    document.documentElement.setAttribute('data-theme', savedTheme);
    if (savedMonospaced) {
      document.body.classList.add('monospaced');
    }
  }, []);

  const toggleTheme = (newTheme) => {
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
  };

  const toggleMonospaced = () => {
    const newValue = !isMonospaced;
    setIsMonospaced(newValue);
    localStorage.setItem('monospaced', newValue);

    if (newValue) {
      document.body.classList.add('monospaced');
    } else {
      document.body.classList.remove('monospaced');
    }
  };

  const isActive = (path) => router.pathname === path;

  return (
    <div className="min-h-screen relative">
      {/* Header */}
      <header className="border-b border-gray-800 py-8">
        <div className="container">
          <div className="mb-8">
            <h1 className="text-3xl mb-1" style={{ fontWeight: '300', letterSpacing: '0.02em' }}>
              Gihan Wanninayaka
            </h1>
            <p className="text-sm" style={{ opacity: 0.7 }}>
              Full Stack Software Engineer
            </p>
          </div>

          {/* Navigation */}
          <nav className="flex flex-wrap gap-4">
            <Link href="/" className={`nav-item ${isActive('/') ? 'font-bold' : ''}`}>
              Home
            </Link>
            <Link href="/projects" className={`nav-item ${isActive('/projects') ? 'font-bold' : ''}`}>
              Projects
            </Link>
            <Link href="/contact" className={`nav-item ${isActive('/contact') ? 'font-bold' : ''}`}>
              Contact
            </Link>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="container pb-12" style={{ paddingTop: '2.5rem' }}>
        {children}
      </main>

      {/* Theme Switcher */}
      <div className="theme-toggle">
        <button
          onClick={toggleMonospaced}
          className={`theme-btn ${isMonospaced ? 'active' : ''}`}
          title="Monospaced font"
        >
          <span className="checkbox">{isMonospaced ? '☑' : '☐'}</span> MONOSPACED
        </button>
        <button
          onClick={() => toggleTheme('dark')}
          className={`theme-btn ${theme === 'dark' ? 'active' : ''}`}
          title="Dark mode"
        >
          <span className="checkbox">{theme === 'dark' ? '☑' : '☐'}</span> DARK
        </button>
        <button
          onClick={() => toggleTheme('light')}
          className={`theme-btn ${theme === 'light' ? 'active' : ''}`}
          title="Light mode"
        >
          <span className="checkbox">{theme === 'light' ? '☑' : '☐'}</span> LIGHT
        </button>
      </div>

      {/* Footer */}
      <footer className="border-t border-gray-800 py-6 mt-20">
        <div className="container">
          <p className="text-xs" style={{ opacity: 0.5 }}>
            © Gihan Wanninayaka
          </p>
        </div>
      </footer>
    </div>
  );
}
