// ResetPassword.js
import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const ResetPassword = () => {
    const { token } = useParams(); // Get the token from the URL
    const navigate = useNavigate(); // For redirection
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [message, setMessage] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setMessage('');
        setError('');

        // Validate password match
        if (password !== confirmPassword) {
            setError('Passwords do not match');
            setLoading(false);
            return;
        }

        try {
            const response = await fetch(`http://localhost:5000/api/auth/reset-password/${token}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({newPassword: password }),
            });
            
            const data = await response.json();
            

            if (response.ok) {
                setMessage('Password has been reset successfully. Redirecting...');
                //setTimeout(() => navigate('/login'), 3000); // Redirect to login page
            } else {
                setError(data.message || 'Failed to reset password. Please try again.');
            }
        } catch (error) {
            console.error('Error:', error);
            setError('An error occurred. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
            <div style={{ maxWidth: '400px', width: '100%', padding: '20px', boxShadow: '0 4px 6px rgba(0,0,0,0.1)', borderRadius: '8px' }}>
                <h2>Reset Password</h2>
                <form onSubmit={handleSubmit}>
                    <div style={{ marginBottom: '15px' }}>
                        <label htmlFor="password" style={{ display: 'block', marginBottom: '5px' }}>New Password</label>
                        <input
                            type="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            style={{
                                width: '100%',
                                padding: '10px',
                                borderRadius: '4px',
                                border: '1px solid #ccc',
                                fontSize: '16px',
                            }}
                        />
                    </div>
                    <div style={{ marginBottom: '15px' }}>
                        <label htmlFor="confirmPassword" style={{ display: 'block', marginBottom: '5px' }}>Confirm Password</label>
                        <input
                            type="password"
                            id="confirmPassword"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            required
                            style={{
                                width: '100%',
                                padding: '10px',
                                borderRadius: '4px',
                                border: '1px solid #ccc',
                                fontSize: '16px',
                            }}
                        />
                    </div>
                    <button
                        type="submit"
                        disabled={loading}
                        style={{
                            width: '100%',
                            padding: '10px',
                            backgroundColor: '#007bff',
                            color: 'white',
                            border: 'none',
                            borderRadius: '4px',
                            cursor: loading ? 'not-allowed' : 'pointer',
                            fontSize: '16px',
                        }}
                    >
                        {loading ? 'Resetting...' : 'Reset Password'}
                    </button>
                </form>
                {message && <p style={{ marginTop: '15px', color: 'green' }}>{message}</p>}
                {error && <p style={{ marginTop: '15px', color: 'red' }}>{error}</p>}
            </div>
        </div>
    );
};

export default ResetPassword;
