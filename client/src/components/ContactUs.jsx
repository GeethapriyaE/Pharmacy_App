import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './ContactUs.css'; // Import ContactUs CSS file
import GoogleMap from './GoogleMap'; // Import GoogleMap component

const ContactUs = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [contactMethod, setContactMethod] = useState('');
  const [contactTime, setContactTime] = useState('');
  const [file, setFile] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Form validation
    if (!name || !email || !subject || !message || !contactMethod || !contactTime || !file) {
      alert('Please fill in all fields');
      return;
    }
    if (!/^[a-zA-Z ]+$/.test(name)) {
      alert('Name should contain only letters and spaces');
      return;
    }
    if (!/\S+@\S+\.\S+/.test(email)) {
      alert('Please enter a valid email address');
      return;
    }
    if (!/^\d{10}$/.test(phone)) {
      alert('Phone should contain exactly 10 digits');
      return;
    }
    // Check if the file is an image
    if (file && !file.type.startsWith('image')) {
      alert('Please upload a valid image file');
      return;
    }

    // Here you can add logic to send the form data via email
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Phone:', phone);
    console.log('Subject:', subject);
    console.log('Message:', message);
    console.log('Contact Method:', contactMethod);
    console.log('Contact Time:', contactTime);
    console.log('File:', file);

    // Reset form fields
    setName('');
    setEmail('');
    setPhone('');
    setSubject('');
    setMessage('');
    setContactMethod('');
    setContactTime('');
    setFile(null);

    // Navigate to the Home page after form submission
    navigate('/');
  };

  return (
    <div className="contact-container">
      <div className="image-container">
        <GoogleMap />
      </div>
      <div className="form-container">
        <h2>Contact Us</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <strong><label>Name:</label></strong>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="input-field"
            />
          </div>
          <div>
            <strong><label>Email:</label></strong>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="input-field"
            />
          </div>
          <div>
            <strong><label>Phone:</label></strong>
            <input
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="input-field"
            />
          </div>
          <div>
            <strong><label>Subject:</label></strong>
            <input
              type="text"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              required
              className="input-field"
            />
          </div>
          <div>
            <strong><label>Message:</label></strong>
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
              className="input-field"
            ></textarea>
          </div>
          <div>
            <strong><label>Contact Method:</label></strong>
            <select
              value={contactMethod}
              onChange={(e) => setContactMethod(e.target.value)}
              required
              className="input-field"
            >
              <option value="">Select</option>
              <option value="email">Email</option>
              <option value="phone">Phone</option>
            </select>
          </div>
          <div>
            <strong><label>Contact Time:</label></strong>
            <select
              value={contactTime}
              onChange={(e) => setContactTime(e.target.value)}
              required
              className="input-field"
            >
              <option value="">Select</option>
              <option value="8am-12pm">8:00 am - 12:00 pm</option>
              <option value="12pm-4pm">12:00 pm - 4:00 pm</option>
              <option value="4pm-8pm">4:00 pm - 8:00 pm</option>
              {/* Add more options as needed */}
            </select>
          </div>
          <div>
            <strong><label>Attach File (Doctor's Prescription only):</label></strong>
            <input
              type="file"
              accept="image/*"
              onChange={(e) => setFile(e.target.files[0])}
              className="input-field"
            />
          </div>
          <button type="submit" className="submit-button">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;