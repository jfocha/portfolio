import React, { useState } from 'react';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import Box from '@mui/material/Box';

const Contact = () => {
  const [status, setStatus] = useState('Send');
  const [formState, setFormState] = useState({ name: '', email: '', subject: '', message: '' });

  const url = window.location.origin + '/contact';
  // const url = 'http://localhost:5000/contact';

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Sending...');
    let response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
      body: JSON.stringify(formState),
      disableFileAccess: true,
    });
    setStatus('Send Again?');
    let result = await response.json();
    setFormState({ name: '', email: '', subject: '', message: '' });
    alert(result.status);
  };

  return (
    <Box component='div'>
      <Box
        component='div'
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
          pt: '1rem',
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

      <form noValidate autoComplete='off' onSubmit={handleSubmit}>
        <div>
          <label className='form-label' htmlFor='name'>Name:</label>
          <input
            className='form-input'
            placeholder='Your Name'
            name='name'
            type='text'
            id='name'
            value={formState.name}
            onChange={handleChange}
            required />
        </div>
        <div>
          <label className='form-label' htmlFor='email'>Email:</label>
          <input
            className='form-input'
            placeholder='Your Email'
            name='email'
            type='email'
            id='email'
            value={formState.email}
            onChange={handleChange}
            required />
        </div>
        <div>
          <label className='form-label' htmlFor='subject'>Subject:</label>
          <input
            className='form-input'
            placeholder='Subject'
            name='subject'
            type='subject'
            id='subject'
            value={formState.subject}
            onChange={handleChange}
            required />
        </div>
        <div>
          <label className='form-label' htmlFor='message'>Message:</label>
          <textarea
            className='form-textarea'
            placeholder="Tell Joe there's a job for him"
            name='message'
            id='message'
            value={formState.message}
            onChange={handleChange}
            required />
        </div>
        <Button variant='contained' type='submit' endIcon={<SendIcon />}>{status}</Button>
      </form>
    </Box>
  );
};

export default Contact;