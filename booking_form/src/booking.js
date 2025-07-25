import React, { useState } from 'react';

 export function BookingForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    if (!formData.phone.trim()) newErrors.phone = 'Phone number is required';
    if (!formData.date) newErrors.date = 'Date is required';
    if (!formData.time) newErrors.time = 'Time is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
    setErrors({ ...errors, [e.target.id]: '' }); // clear error on change
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      setSubmitted(true);
    }
  };

  return (
    <div style={styles.container}>
      <h2>Book an Appointment</h2>
      {submitted ? (
        <div style={styles.confirmation}>
          <p>Thank you, {formData.name}! Your appointment is scheduled for {formData.date} at {formData.time}.</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} noValidate style={styles.form}>
          <InputField
            label="Full Name"
            id="name"
            value={formData.name}
            onChange={handleChange}
            error={errors.name}
          />
          <InputField
            label="Email"
            id="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            error={errors.email}
          />
          <InputField
            label="Phone Number"
            id="phone"
            type="tel"
            value={formData.phone}
            onChange={handleChange}
            error={errors.phone}
          />
          <InputField
            label="Appointment Date"
            id="date"
            type="date"
            value={formData.date}
            onChange={handleChange}
            error={errors.date}
          />
          <InputField
            label="Appointment Time"
            id="time"
            type="time"
            value={formData.time}
            onChange={handleChange}
            error={errors.time}
          />

          <button type="submit" style={styles.button}>Submit</button>
        </form>
      )}
    </div>
  );
}

// Reusable Input Component
const InputField = ({ label, id, type = "text", value, onChange, error }) => (
  <div style={styles.inputGroup}>
    <label htmlFor={id} style={styles.label}>{label}</label>
    <input
      id={id}
      type={type}
      value={value}
      onChange={onChange}
      style={styles.input}
      required
    />
    {error && <span style={styles.error}>{error}</span>}
  </div>
);

// Basic Inline CSS Styles
const styles = {
  container: {
    maxWidth: '450px',
    margin: 'auto',
    padding: '25px',
    background: '#f9f9f9',
    borderRadius: '10px',
    boxShadow: '0 0 10px rgba(0,0,0,0.1)'
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
  },
  inputGroup: {
    marginBottom: '15px'
  },
  label: {
    marginBottom: '5px',
    fontWeight: 'bold',
    display: 'block'
  },
  input: {
    width: '100%',
    padding: '10px',
    borderRadius: '5px',
    border: '1px solid #ccc'
  },
  error: {
    color: 'red',
    fontSize: '12px'
  },
  button: {
    padding: '12px',
    backgroundColor: '#28a745',
    color: 'white',
    fontWeight: 'bold',
    border: 'none',
    borderRadius: '6px',
    cursor: 'pointer'
  },
  confirmation: {
    backgroundColor: '#d4edda',
    color: '#155724',
    padding: '20px',
    borderRadius: '8px',
    textAlign: 'center'
  }
};


