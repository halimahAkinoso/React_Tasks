import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <p className="footer-copy">© {new Date().getFullYear()} Halimat Akinoso</p>

        <div className="social-list" aria-label="social media links">
          <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="Twitter">
            <svg viewBox="0 0 24 24" className="icon" aria-hidden="true"><path fill="currentColor" d="M22 5.92c-.63.28-1.3.47-2 .56.72-.43 1.27-1.12 1.53-1.94-.68.4-1.44.7-2.25.86A3.48 3.48 0 0 0 12.1 8.5c0 .27.03.54.09.8-2.9-.14-5.47-1.54-7.19-3.66-.3.52-.47 1.12-.47 1.76 0 1.21.62 2.28 1.57 2.9-.58-.02-1.12-.18-1.6-.45v.05c0 1.7 1.2 3.12 2.82 3.44-.3.08-.62.12-.95.12-.23 0-.46-.02-.68-.06.46 1.44 1.8 2.5 3.39 2.53A6.98 6.98 0 0 1 3 19.54a9.85 9.85 0 0 0 5.33 1.56c6.4 0 9.9-5.3 9.9-9.9v-.45c.68-.5 1.27-1.12 1.73-1.82-.63.28-1.3.47-2 .56.72-.43 1.27-1.12 1.53-1.94z"/></svg>
          </a>

          <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="LinkedIn">
            <svg viewBox="0 0 24 24" className="icon" aria-hidden="true"><path fill="currentColor" d="M19 3A2 2 0 0 1 21 5v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-11.75 7.5H6.5V18h.75V10.5M7.12 8.93A.87.87 0 0 0 6.26 8a.87.87 0 1 0 .86.93zM18 18v-4.5a2 2 0 0 0-1.75-2c-.98 0-1.5.67-1.75 1.15V18h.75v-3.5c0-.84.5-1.25 1-1.25s1 .42 1 1.25V18H18z"/></svg>
          </a>

          <a href="https://github.com/" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="GitHub">
            <svg viewBox="0 0 24 24" className="icon" aria-hidden="true"><path fill="currentColor" d="M12,2A10,10 0 0,0 2,12C2,16.42 4.87,20.17 8.84,21.5C9.34,21.58 9.5,21.27 9.5,21.01C9.5,20.78 9.5,20.14 9.5,19.3C6.73,19.91 6.14,17.97 6.14,17.97C5.68,16.81 5,16.5 5,16.5C4.09,15.88 5.08,15.9 5.08,15.9C6.1,15.97 6.63,16.95 6.63,16.95C7.5,18.48 9.02,18 9.66,17.74C9.75,16.98 10.04,16.5 10.36,16.2C7.83,15.9 5.15,14.95 5.15,10.66C5.15,9.45 5.56,8.5 6.25,7.78C6.14,7.48 5.8,6.45 6.34,4.99C6.34,4.99 7.16,4.67 9.5,6.17C10.26,5.94 11.09,5.82 11.92,5.82C12.75,5.82 13.58,5.94 14.34,6.17C16.68,4.67 17.5,4.99 17.5,4.99C18.04,6.45 17.7,7.48 17.59,7.78C18.28,8.5 18.69,9.45 18.69,10.66C18.69,14.96 16,15.89 13.47,16.19C13.9,16.55 14.28,17.27 14.28,18.37C14.28,19.95 14.26,20.98 14.26,21.01C14.26,21.27 14.42,21.59 14.93,21.5C18.9,20.17 21.77,16.42 21.77,12A10,10 0 0,0 12,2Z"/></svg>
          </a>
        </div>

      </div>
    </footer>
  )
}

export default Footer