import { Link } from 'react-router-dom';
import { useState } from 'react';
import PropTypes from 'prop-types';

function Navigation({ isHomePage = false }) {
  const [menuOpen, setMenuOpen] = useState(false);

  // Render navigation link based on whether we're on home page or not
  const NavLink = ({ href, children }) => {
    if (isHomePage) {
      return (
        <a 
          href={href} 
          className="transition text-base" 
          style={{fontFamily: "'Lora', serif", color: '#89C541'}}
          onClick={() => setMenuOpen(false)}
          onMouseEnter={(e) => e.target.style.color = '#864198'} 
          onMouseLeave={(e) => e.target.style.color = '#89C541'}
        >
          {children}
        </a>
      );
    }
    return (
      <Link 
        to={`/${href}`} 
        className="transition text-base" 
        style={{fontFamily: "'Lora', serif", color: '#89C541'}}
        onClick={() => setMenuOpen(false)}
        onMouseEnter={(e) => e.currentTarget.style.color = '#864198'} 
        onMouseLeave={(e) => e.currentTarget.style.color = '#89C541'}
      >
        {children}
      </Link>
    );
  };

  NavLink.propTypes = {
    href: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired
  };

  const LogoLink = ({ children }) => {
    if (isHomePage) {
      return <div className="flex items-center justify-center">{children}</div>;
    }
    return (
      <Link to="/" className="flex items-center justify-center">
        {children}
      </Link>
    );
  };

  LogoLink.propTypes = {
    children: PropTypes.node.isRequired
  };

  return (
    <>
      <style>
        {`
          /* Hide desktop nav on small screens */
          @media (max-width: 960px) {
            .desktop-nav {
              display: none;
            }
          }
          
          /* Hide mobile nav on large screens */
          @media (min-width: 961px) {
            .mobile-nav {
              display: none;
            }
          }
        `}
      </style>
      <nav className="fixed top-0 w-full bg-black/80 backdrop-blur-sm z-50" style={{borderBottom: '1px solid rgba(137, 197, 65, 0.2)'}}>
        {/* Desktop Navigation */}
        <div className="desktop-nav max-w-7xl mx-auto px-6 py-5 flex justify-center items-center gap-10">
          {/* left menu */}
          <div className="flex items-center gap-6">
            <NavLink href={isHomePage ? "/about" : "about"}>About Me</NavLink>
            <NavLink href={isHomePage ? "/technical" : "technical"}>Technical Work</NavLink>
          </div>

          {/* center logo */}
          <LogoLink>
            <img src="/logo.png" alt="Logo" className="h-10 w-auto" />
          </LogoLink>

          {/* right menu */}
          <div className="flex items-center gap-6">
            <NavLink href={isHomePage ? "/creative" : "creative"}>Creative Work</NavLink>
            <a 
              href="mailto:knwelch00@yahoo.com"
              className="transition text-base" 
              style={{fontFamily: "'Lora', serif", color: '#89C541'}}
              onMouseEnter={(e) => e.target.style.color = '#864198'} 
              onMouseLeave={(e) => e.target.style.color = '#89C541'}
            >
              Get in Touch!
            </a>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className="mobile-nav px-6 py-5 flex justify-between items-center">
          {/* Logo on left */}
          <LogoLink>
            <img src="/logo.png" alt="Logo" className="h-10 w-auto" />
          </LogoLink>

          {/* Hamburger menu on right */}
          <button 
            onClick={() => setMenuOpen(!menuOpen)}
            className="flex flex-col gap-1.5 w-10 h-10 justify-center items-center relative"
            aria-label="Toggle menu"
          >
            <span className="w-6 h-0.5 transition-all absolute" style={{backgroundColor: '#89C541', transform: menuOpen ? 'rotate(45deg)' : 'translateY(-4px)'}}></span>
            <span className="w-6 h-0.5 transition-opacity absolute" style={{backgroundColor: '#89C541', opacity: menuOpen ? 0 : 1}}></span>
            <span className="w-6 h-0.5 transition-all absolute" style={{backgroundColor: '#89C541', transform: menuOpen ? 'rotate(-45deg)' : 'translateY(4px)'}}></span>
          </button>
        </div>

        {/* Mobile dropdown menu */}
        {menuOpen && (
          <div className="mobile-nav bg-black/95 border-t" style={{borderColor: 'rgba(137, 197, 65, 0.2)'}}>
            <div className="px-6 py-4 flex flex-col gap-4">
              <NavLink href={isHomePage ? "/about" : "about"}>About Me</NavLink>
              <NavLink href={isHomePage ? "/technical" : "technical"}>Technical Work</NavLink>
              <NavLink href={isHomePage ? "/creative" : "creative"}>Creative Work</NavLink>
              <a 
                href="mailto:knwelch00@yahoo.com"
                className="transition text-base" 
                style={{fontFamily: "'Lora', serif", color: '#89C541'}}
                onClick={() => setMenuOpen(false)}
                onMouseEnter={(e) => e.target.style.color = '#864198'} 
                onMouseLeave={(e) => e.target.style.color = '#89C541'}
              >
                Get in Touch!
              </a>
            </div>
          </div>
        )}
      </nav>
    </>
  );
}

Navigation.propTypes = {
  isHomePage: PropTypes.bool
};

export default Navigation;
