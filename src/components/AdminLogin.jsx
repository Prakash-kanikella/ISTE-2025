import { useState, useEffect, useCallback } from "react";
import axios from "axios";
import './AdminLogin.css';

export default function AdminLogin() {
  const [password, setPassword] = useState("");
  const [entries, setEntries] = useState([]);
  const [error, setError] = useState("");
  const [filterUnread, setFilterUnread] = useState(false);
  const [isLoading, setIsLoading] = useState(false); 
  const [isLoggedIn, setIsLoggedIn] = useState(false); 

  const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5001"; 

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);  
    try {
      const res = await axios.post(`${API_URL}/admin`, { password });
      setEntries(res.data);
      setError("");
      setIsLoggedIn(true);  
    } catch (err) {
      console.log(err.message);
      setError("Invalid password or server error");
    } finally {
      setIsLoading(false);  
    }
  };

  const fetchMessages = useCallback(async () => {
    const endpoint = filterUnread
      ? `${API_URL}/admin/messages?newOnly=true`
      : `${API_URL}/admin/messages`;
    try {
      const res = await axios.get(endpoint);
      setEntries(res.data);
    } catch (err) {
      console.log(err);
    }
  }, [filterUnread, API_URL]);

  useEffect(() => {
    if (isLoggedIn) {
      fetchMessages();
    }
  }, [isLoggedIn, fetchMessages]);

  const markAsRead = async (id) => {
    try {
      await axios.patch(`${API_URL}/admin/message/${id}/read`);
      fetchMessages();
    } catch (err) {
      console.error(err.message);
    }
  };

  const toggleReadStatus = async (id) => {
    try {
      await axios.patch(`${API_URL}/admin/message/${id}/toggle`);
      fetchMessages();
    } catch (err) {
      console.error(err.message);
    }
  };

  const deleteMessage = async (id) => {
    try {
      await axios.delete(`${API_URL}/admin/message/${id}`);
      setEntries((prev) => prev.filter((e) => e._id !== id));
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <div className="admin-container">
      {!isLoggedIn ? (
        <form onSubmit={handleSubmit} className="admin-form">
          <h2>Admin Login</h2>
          <input
            type="password"
            placeholder="Enter admin password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit" disabled={isLoading}>
            {isLoading ? "Logging in..." : "Login"}
          </button>
          {error && <p className="admin-error">{error}</p>}
        </form>
      ) : (
        <div className="admin-dashboard">
          <div className="dashboard-header">
            <h2>Form Submissions</h2>
            <label>
              <input
                type="checkbox"
                checked={filterUnread}
                onChange={(e) => setFilterUnread(e.target.checked)}
              />
              <span>Show unread only</span>
            </label>
          </div>

          {entries.length === 0 ? (
            <div className="empty-state">
              No messages yet. Please check back later!
            </div>
          ) : (
            <div className="admin-messages">
              {entries.map((entry) => (
                <div
                  key={entry._id}
                  className={`message-card ${entry.isnew ? "new" : ""}`}
                >
                  <div>
                    <span>
                      {entry.isnew ? <span className="message-status new"><i className="fas fa-circle text-blue"></i> New</span> : <span className="message-status read"><i className="fas fa-check text-green"></i> Read</span>}
                    </span>
                  </div>
                  <p><strong>Name:</strong> {entry.name}</p>
                  <p><strong>Email:</strong> {entry.email}</p>
                  <p><strong>Subject:</strong> {entry.subject}</p>
                  <p><strong>Message:</strong> {entry.message}</p>
                  <small>{new Date(entry.createdAt).toLocaleString()}</small>
                  <div className="actions">
                    {!entry.isnew && (
                      <button onClick={() => toggleReadStatus(entry._id)}>
                        Mark as Unread
                      </button>
                    )}
                    {entry.isnew && (
                      <button onClick={() => markAsRead(entry._id)}>
                        Mark as Read
                      </button>
                    )}
                    <button onClick={() => deleteMessage(entry._id)}>
                      Delete
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
}