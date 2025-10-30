import { useEffect, useState } from 'react';

export default function Home() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className={`fade-in ${mounted ? 'opacity-100' : 'opacity-0'}`}>
      <div className="home-content">
        <div className="bio-text">
          <p>Innovative Web Developer with a</p>
          <p>proven track record in developing</p>
          <p>efficient web applications using</p>
          <p>the MERN stack and other technologies.</p>
          <p>Experienced in building full-stack</p>
          <p>solutions with modern JavaScript</p>
          <p>frameworks and libraries. Seeking an</p>
          <p>opportunity to leverage my expertise</p>
          <p>in web development within a</p>
          <p>forward-thinking technology company</p>
          <p>where I can contribute to impactful</p>
          <p>projects while continuously enhancing my technical skills.</p>
        </div>
      </div>
    </div>
  );
}
