import { useState, useEffect } from 'react';

export default function Contact() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className={`fade-in ${mounted ? 'opacity-100' : 'opacity-0'}`}>
      <div className="max-w-4xl">
        <div className="mb-12">
          <h2 className="text-lg mb-6" style={{ opacity: 0.9 }}>Get in Touch</h2>

          <div className="space-y-8">
            <div>
              <p className="text-base mb-4" style={{ opacity: 0.8 }}>
                For work inquiries, collaborations, or just to say hello:
              </p>
              <a
                href="mailto:gihanw56@gmail.com"
                className="text-xl hover:opacity-70 transition-opacity inline-block"
                style={{ color: 'var(--text-secondary)' }}
              >
                gihanw56@gmail.com
              </a>
            </div>

            <div className="pt-8 border-t border-gray-800">
              <h3 className="text-base mb-4" style={{ opacity: 0.9 }}>Social Media</h3>
              <div className="space-y-3">
                <div>
                  <a
                    href="https://www.linkedin.com/in/gihanwanninayaka/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center hover:opacity-70 transition-opacity"
                  >
                    <span>LinkedIn</span>
                    <span className="ml-2">↗</span>
                  </a>
                </div>
                <div>
                  <a
                    href="https://github.com/GihanV28"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center hover:opacity-70 transition-opacity"
                  >
                    <span>GitHub</span>
                    <span className="ml-2">↗</span>
                  </a>
                </div>
                <div>
                  <a
                    href="https://www.instagram.com/gihaaan/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center hover:opacity-70 transition-opacity"
                  >
                    <span>Instagram</span>
                    <span className="ml-2">↗</span>
                  </a>
                </div>
                <div>
                  <a
                    href="https://www.facebook.com/gihan.wanninayaka.75/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center hover:opacity-70 transition-opacity"
                  >
                    <span>Facebook</span>
                    <span className="ml-2">↗</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
