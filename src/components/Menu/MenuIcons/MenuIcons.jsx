import React from 'react';
import iconInstagram from '../images/icon-instagram.jpg';
import iconEmail from '../images/icon-email.jpg';
import './MenuIcons.scss';

const MenuIcons = () => (
  <div className="menu-icons">
    <table>
      <tbody>
        <tr>
          <td>
            <a
              href="https://www.instagram.com/lilit.grigoryants/"
              rel="noopener noreferrer"
              target="_blank"
            >
              <img src={iconInstagram} alt="Open Instagram" />
            </a>
          </td>
          <td>
            <a
              href="mailto:lilitgrigoryants@gmail.com"
              rel="noopener noreferrer"
              target="_blank"
            >
              <img src={iconEmail} alt="Send an email" />
            </a>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
);
export default MenuIcons;
