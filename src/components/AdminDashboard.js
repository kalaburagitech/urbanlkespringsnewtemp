import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './AdminDashboard.css'; // Import your CSS file here

export default function AdminDashboard() {
  const [phoneNumbers, setPhoneNumbers] = useState([]);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    // Check if the user is logged in
    const isLoggedIn = sessionStorage.getItem('isLoggedIn');
    if (!isLoggedIn) {
      // Redirect to login page if not logged in
      navigate('/admin');
    } else {
      // Fetch the phone numbers if logged in
      const fetchPhoneNumbers = async () => {
        try {
          const response = await axios.get('https://urbanlakesprings.in/contact.php');
          if (response.data.success) {
            setPhoneNumbers(response.data.data);
          } else {
            setError(response.data.message);
          }
        } catch (err) {
          setError('Failed to fetch phone numbers');
        }
      };

      fetchPhoneNumbers();
    }
  }, [navigate]);

  return (
    <div className="admin-dashboard">
      <header className="dashboard-header">
        <h2>Admin Dashboard</h2>
      </header>

      {error && <p className="error">{error}</p>}

      <main className="dashboard-content">
        <table>
          <thead>
            <tr>
              <th>Phone Number</th>
            </tr>
          </thead>
          <tbody>
            {phoneNumbers.map((phone, index) => (
              <tr key={index}>
                <td>
                  <a href={`tel:${phone.phone}`} className="phone-link">
                    {phone.phone}
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </main>

      <footer className="dashboard-footer">
        <p>&copy; 2025 UrbanLakeSprings. All Rights Reserved.</p>
      </footer>
    </div>
  );
}
