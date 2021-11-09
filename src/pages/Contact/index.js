import React, { useState } from "react";
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import Box from '@mui/material/Box';

const Contact = () => {
  const [status, setStatus] = useState("Send");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");
    const { name, email, subject, message } = e.target.elements;
    let details = {
      name: name.value,
      email: email.value,
      subject: subject.value,
      message: message.value,
    };
    let response = await fetch("http://localhost:5000/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(details),
      disableFileAccess: true,

    });
    setStatus("Send Again?");
    let result = await response.json();
    alert(result.status);
  };

  return (
    <Box component="div" sx={{ pb: '4rem' }}>
      <Box
        component="div"
        sx={{
          fontFamily: 'default',
          fontStyle: 'oblique',
          letterSpacing: 10,
          fontSize: '3rem',
          textAlign: 'center',
          pt: '5rem',
          color: 'white',
          backgroundColor: 'inherit'
        }}>
        Contact Joe
      </Box>
      <Box
        sx={{
          display: 'flex',
          m: 3,
          pt: '4rem',
          minWidth: { md: 350 },
          flexDirection: { xs: 'column', md: 'row' },
          justifyContent: 'center',
          color: 'white',
          fontFamily: 'default',
          fontWeight: 'medium',
          fontSize: 20
        }}>
        Feel free to send me a message here. I'll CC the email address that's entered. Or I can simply be reached at:
      </Box>
      <Box
        sx={{
          display: 'flex',
          fontFamily: 'Permanent Marker',
          fontWeight: 'medium',
          justifyContent: 'center',
          fontSize: '2rem',
          color: 'white',
        }}>
        jfocha@gmail.com
      </Box>

      <form noValidate autoComplete="off" onSubmit={handleSubmit}>
        <div>
          <label className="form-label" htmlFor="name">Name:</label>
          <input className="form-input" type="text" id="name" required />
        </div>
        <div>
          <label className="form-label" htmlFor="email">Email:</label>
          <input className="form-input" type="email" id="email" required />
        </div>
        <div>
          <label className="form-label" htmlFor="subject">Subject:</label>
          <input className="form-input" type="subject" id="subject" required />
        </div>
        <div>
          <label className="form-label" htmlFor="message">Message:</label>
          <textarea className="form-textarea" id="message" required />
        </div>
        <Button variant="contained" type="submit" endIcon={<SendIcon />}>{status}</Button>
      </form>
    </Box>
  );
};

export default Contact;