import React, { useState } from 'react';
import './StudentAttendance.css';

function StudentAttendance() {
  const [student] = useState({
    name: 'Gayathri Pannala',
    rollNumber: '24J45A1210',
    email: 'gayathriravinderreddy@gmail.com',
    phone: '9876543210'
  });

  const [attended, setAttended] = useState(0);
  const totalWorkingDays = 100;

  const percentage = ((attended / totalWorkingDays) * 100).toFixed(1);

  const getCondonationFee = () => {
    const percent = (attended / totalWorkingDays) * 100;
    if (percent >= 75) return 0;
    else if (percent >= 65) return 500;
    else if (percent >= 50) return 1000;
    else return "Detained";
  };

  const markAttended = () => {
    if (attended < totalWorkingDays) {
      setAttended(attended + 1);
    }
  };

  const markNotAttended = () => {
    if (attended > 0) {
      setAttended(attended - 1);
    }
  };

  return (
    <div className="student-container">
      <header className="header">
        <img src="/mylogo.png" alt="logo" className="college-logo" />
        <h1 className="college-name">AARYA INSTITUTE OF TECHNOLOGY</h1>
        <p className="tagline">Where the innovation Begins</p>
      </header>

      <section className="student-info">
        <h2> Student Information</h2>
        <p><strong>Name:</strong> {student.name}</p>
        <p><strong>Roll Number:</strong> {student.rollNumber}</p>
        <p><strong>Email:</strong> {student.email}</p>
        <p><strong>Phone:</strong> {student.phone}</p>
      </section>

      <section className="attendance-info">
        <h2> Attendance Details</h2>
        <p><strong>Days Attended:</strong> {attended}</p>
        <p><strong>Total Working Days:</strong> {totalWorkingDays}</p>
        <p><strong>Attendance Percentage:</strong> {percentage}%</p>

        <p><strong>Condonation Fee:</strong> ₹{getCondonationFee()}</p>
        <marquee className="warning"> If the attendance is below 50%, the student will be Detained.</marquee>

        <div className="buttons">
          <button onClick={markAttended}>+Attended</button>
          <button onClick={markNotAttended}>-NotAttended</button>
        </div>
      </section>

      <footer className="footer">
        <p>© 2025 Aarya Institute of Technology </p>
      </footer>
    </div>
  );
}

export default StudentAttendance;
