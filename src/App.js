import React, { useState, useEffect } from 'react';

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('about');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Simple icon components to replace lucide-react
  const icons = {
    mail: '✉',
    phone: '📞',
    graduation: '🎓',
    code: '💻',
    user: '👤',
    briefcase: '💼',
    star: '⭐'
  };

  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      fontFamily: 'Arial, sans-serif',
      color: '#333'
    }}>
      {/* Header */}
      <header style={{
        background: 'rgba(255, 255, 255, 0.95)',
        backdropFilter: 'blur(10px)',
        padding: '1rem 0',
        position: 'fixed',
        width: '100%',
        top: 0,
        zIndex: 1000,
        boxShadow: '0 2px 20px rgba(0,0,0,0.1)'
      }}>
        <nav style={{
          maxWidth: '1200px',
          margin: '0 auto',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '0 2rem'
        }}>
          <h1 style={{
            fontSize: '1.5rem',
            fontWeight: 'bold',
            color: '#667eea',
            margin: 0
          }}>Muktha M V</h1>
          <div style={{ display: 'flex', gap: '2rem' }}>
            {['about', 'skills', 'projects', 'contact'].map((section) => (
              <button
                key={section}
                onClick={() => setActiveSection(section)}
                style={{
                  background: activeSection === section ? '#667eea' : 'transparent',
                  color: activeSection === section ? 'white' : '#667eea',
                  border: '2px solid #667eea',
                  padding: '0.5rem 1rem',
                  borderRadius: '25px',
                  cursor: 'pointer',
                  fontWeight: '600',
                  textTransform: 'capitalize',
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  if (activeSection !== section) {
                    e.target.style.background = '#667eea';
                    e.target.style.color = 'white';
                  }
                }}
                onMouseLeave={(e) => {
                  if (activeSection !== section) {
                    e.target.style.background = 'transparent';
                    e.target.style.color = '#667eea';
                  }
                }}
              >
                {section}
              </button>
            ))}
          </div>
        </nav>
      </header>

      {/* Main Content */}
      <main style={{
        paddingTop: '100px',
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '100px 2rem 2rem'
      }}>
        {/* Hero Section */}
        <section style={{
          textAlign: 'center',
          marginBottom: '4rem',
          transform: isVisible ? 'translateY(0)' : 'translateY(50px)',
          opacity: isVisible ? 1 : 0,
          transition: 'all 0.8s ease'
        }}>
          <div style={{
            width: '150px',
            height: '150px',
            borderRadius: '50%',
            background: 'linear-gradient(45deg, #667eea, #764ba2)',
            margin: '0 auto 2rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '3rem',
            color: 'white',
            fontWeight: 'bold',
            boxShadow: '0 10px 30px rgba(0,0,0,0.2)'
          }}>
            MM
          </div>
          <h1 style={{
            fontSize: '3rem',
            fontWeight: 'bold',
            color: 'white',
            margin: '0 0 1rem 0',
            textShadow: '2px 2px 4px rgba(0,0,0,0.3)'
          }}>Muktha M V</h1>
          <p style={{
            fontSize: '1.2rem',
            color: 'rgba(255,255,255,0.9)',
            maxWidth: '600px',
            margin: '0 auto',
            lineHeight: '1.6'
          }}>
            Engineering Student at Malnad College of Engineering with a passion for innovation and technology
          </p>
        </section>

        {/* Content Sections */}
        <div style={{
          background: 'rgba(255, 255, 255, 0.95)',
          borderRadius: '20px',
          padding: '3rem',
          boxShadow: '0 20px 60px rgba(0,0,0,0.1)',
          backdropFilter: 'blur(10px)',
          minHeight: '500px'
        }}>
          {activeSection === 'about' && (
            <div style={{
              animation: 'fadeIn 0.5s ease-in'
            }}>
              <h2 style={{
                fontSize: '2.5rem',
                color: '#667eea',
                marginBottom: '2rem',
                display: 'flex',
                alignItems: 'center',
                gap: '1rem'
              }}>
                <span style={{ fontSize: '2rem' }}>{icons.user}</span>
                About Me
              </h2>
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                gap: '2rem'
              }}>
                <div>
                  <h3 style={{ color: '#764ba2', marginBottom: '1rem' }}>Academic Excellence</h3>
                  <div style={{
                    background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)',
                    padding: '1.5rem',
                    borderRadius: '15px',
                    marginBottom: '1rem'
                  }}>
                    <p style={{ margin: '0 0 0.5rem 0', fontWeight: '600' }}>
                      <span style={{ marginRight: '0.5rem' }}>{icons.graduation}</span>
                      Malnad College of Engineering
                    </p>
                    <p style={{ margin: 0, color: '#666' }}>CGPA: 8.0/10.0</p>
                  </div>
                </div>
                <div>
                  <h3 style={{ color: '#764ba2', marginBottom: '1rem' }}>Languages</h3>
                  <div style={{
                    background: 'linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)',
                    padding: '1.5rem',
                    borderRadius: '15px'
                  }}>
                    <p style={{ margin: 0, fontWeight: '600' }}>Languages Spoken</p>
                    <p style={{ margin: '0.5rem 0 0 0', color: '#666' }}>Telugu (Native)</p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeSection === 'skills' && (
            <div>
              <h2 style={{
                fontSize: '2.5rem',
                color: '#667eea',
                marginBottom: '2rem',
                display: 'flex',
                alignItems: 'center',
                gap: '1rem'
              }}>
                <span style={{ fontSize: '2rem' }}>{icons.code}</span>
                Technical Skills
              </h2>
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                gap: '2rem'
              }}>
                {[
                  {
                    title: 'Operating Systems',
                    skills: ['Windows', 'Ubuntu (Linux)'],
                    color: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
                  },
                  {
                    title: 'Programming Languages',
                    skills: ['Python', 'C'],
                    color: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)'
                  },
                  {
                    title: 'Application Packages',
                    skills: ['MS Office'],
                    color: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)'
                  },
                  {
                    title: 'Tools & Design',
                    skills: ['Wokwi', 'Figma', 'Canva'],
                    color: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)'
                  }
                ].map((category, index) => (
                  <div key={index} style={{
                    background: category.color,
                    padding: '2rem',
                    borderRadius: '15px',
                    color: 'white',
                    transform: 'translateY(0)',
                    transition: 'transform 0.3s ease',
                    cursor: 'pointer'
                  }}
                  onMouseEnter={(e) => e.target.style.transform = 'translateY(-5px)'}
                  onMouseLeave={(e) => e.target.style.transform = 'translateY(0)'}
                  >
                    <h3 style={{ margin: '0 0 1rem 0', fontSize: '1.3rem' }}>{category.title}</h3>
                    {category.skills.map((skill, skillIndex) => (
                      <div key={skillIndex} style={{
                        background: 'rgba(255,255,255,0.2)',
                        padding: '0.5rem 1rem',
                        borderRadius: '20px',
                        margin: '0.5rem 0',
                        display: 'inline-block',
                        marginRight: '0.5rem'
                      }}>
                        {skill}
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeSection === 'projects' && (
            <div>
              <h2 style={{
                fontSize: '2.5rem',
                color: '#667eea',
                marginBottom: '2rem',
                display: 'flex',
                alignItems: 'center',
                gap: '1rem'
              }}>
                <span style={{ fontSize: '2rem' }}>{icons.briefcase}</span>
                Projects
              </h2>
              <div style={{
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                padding: '2.5rem',
                borderRadius: '20px',
                color: 'white',
                boxShadow: '0 15px 35px rgba(0,0,0,0.1)'
              }}>
                <h3 style={{
                  fontSize: '1.8rem',
                  margin: '0 0 1rem 0',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem'
                }}>
                  <span>{icons.star}</span>
                  Areca Nut Drying Machine
                </h3>
                <p style={{
                  fontSize: '1.1rem',
                  lineHeight: '1.6',
                  margin: 0,
                  opacity: 0.9
                }}>
                  An areca nut drying machine is a specialized device designed to efficiently dehydrate areca nuts, 
                  reducing moisture content to prevent spoilage and prepare them for storage or processing. This project 
                  demonstrates practical application of engineering principles in agricultural technology.
                </p>
                <div style={{
                  marginTop: '1.5rem',
                  padding: '1rem',
                  background: 'rgba(255,255,255,0.1)',
                  borderRadius: '10px',
                  fontSize: '0.9rem'
                }}>
                  <strong>Impact:</strong> Enhances agricultural efficiency and reduces post-harvest losses
                </div>
              </div>
            </div>
          )}

          {activeSection === 'contact' && (
            <div>
              <h2 style={{
                fontSize: '2.5rem',
                color: '#667eea',
                marginBottom: '2rem',
                display: 'flex',
                alignItems: 'center',
                gap: '1rem'
              }}>
                <span style={{ fontSize: '2rem' }}>{icons.mail}</span>
                Get In Touch
              </h2>
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                gap: '2rem'
              }}>
                <div style={{
                  background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                  padding: '2rem',
                  borderRadius: '15px',
                  color: 'white',
                  textAlign: 'center'
                }}>
                  <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>{icons.mail}</div>
                  <h3 style={{ margin: '0 0 0.5rem 0' }}>Email</h3>
                  <p style={{ margin: 0, fontSize: '1.1rem' }}>mukthamv07@gmail.com</p>
                </div>
                <div style={{
                  background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
                  padding: '2rem',
                  borderRadius: '15px',
                  color: 'white',
                  textAlign: 'center'
                }}>
                  <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>{icons.phone}</div>
                  <h3 style={{ margin: '0 0 0.5rem 0' }}>Phone</h3>
                  <p style={{ margin: 0, fontSize: '1.1rem' }}>+91 9845271053</p>
                </div>
              </div>
              <div style={{
                marginTop: '2rem',
                textAlign: 'center',
                padding: '2rem',
                background: 'linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)',
                borderRadius: '15px'
              }}>
                <h3 style={{ color: '#764ba2', margin: '0 0 1rem 0' }}>Let's Connect!</h3>
                <p style={{ margin: 0, color: '#666', fontSize: '1.1rem' }}>
                  I'm always interested in discussing new opportunities and innovative projects. 
                  Feel free to reach out!
                </p>
              </div>
            </div>
          )}
        </div>
      </main>

      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
};

export default Portfolio;