import React, { useState } from 'react';

function CourseCatalog() {
  const [search, setSearch] = useState('');
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [enrolledCourses, setEnrolledCourses] = useState([]);

  const courseList = [
    {
      id: 101,
      title: 'Web Development in React',
      code: 'BCA-501',
      credits: 4,
      category: 'Development',
      instructor: 'Prof. Arjun Patel',
      students: 128,
      duration: '12 Weeks',
      icon: '⚛️',
      color: '#4f46e5',
    },
    {
      id: 102,
      title: 'Database Management Systems',
      code: 'BCA-502',
      credits: 3,
      category: 'Database',
      instructor: 'Prof. Neha Shah',
      students: 96,
      duration: '10 Weeks',
      icon: '🗄️',
      color: '#0891b2',
    },
    {
      id: 103,
      title: 'Python Data Science',
      code: 'BCA-503',
      credits: 4,
      category: 'Data Science',
      instructor: 'Prof. Rahul Mehta',
      students: 114,
      duration: '14 Weeks',
      icon: '🐍',
      color: '#16a34a',
    },
    {
      id: 104,
      title: 'Cloud Computing Fundamentals',
      code: 'BCA-504',
      credits: 3,
      category: 'Cloud',
      instructor: 'Prof. Priya Desai',
      students: 82,
      duration: '10 Weeks',
      icon: '☁️',
      color: '#7c3aed',
    },
    {
      id: 105,
      title: 'UI/UX Design Fundamentals',
      code: 'BCA-505',
      credits: 3,
      category: 'Design',
      instructor: 'Prof. Riya Patel',
      students: 74,
      duration: '8 Weeks',
      icon: '🎨',
      color: '#db2777',
    },
    {
      id: 106,
      title: 'Cyber Security Essentials',
      code: 'BCA-506',
      credits: 4,
      category: 'Security',
      instructor: 'Prof. Karan Shah',
      students: 91,
      duration: '12 Weeks',
      icon: '🔐',
      color: '#dc2626',
    },
  ];

  const filteredCourses = courseList.filter(function (course) {
    return (
      course.title
        .toLowerCase()
        .includes(search.toLowerCase()) ||
      course.code
        .toLowerCase()
        .includes(search.toLowerCase()) ||
      course.category
        .toLowerCase()
        .includes(search.toLowerCase())
    );
  });

  function handleEnroll(courseId) {
    if (!enrolledCourses.includes(courseId)) {
      setEnrolledCourses([
        ...enrolledCourses,
        courseId,
      ]);
    }
  }

  return (
    <div className="catalog-page">

      <style>{`

        * {
          box-sizing: border-box;
        }

        body {
          margin: 0;

          font-family:
            Inter,
            Arial,
            Helvetica,
            sans-serif;

          background: #f0fdfa;
        }

        .catalog-page {
          min-height: 100vh;

          padding: 35px 20px;

          background:
            radial-gradient(
              circle at top left,
              rgba(20,184,166,0.14),
              transparent 30%
            ),

            radial-gradient(
              circle at bottom right,
              rgba(45,212,191,0.12),
              transparent 30%
            ),

            linear-gradient(
              135deg,
              #f0fdfa,
              #ffffff,
              #ecfeff
            );
        }

        .catalog-container {
          width: 100%;

          max-width: 1100px;

          margin: auto;
        }

        /* =========================
           HEADER
        ========================= */

        .catalog-header {
          display: flex;

          align-items: center;

          justify-content: space-between;

          gap: 20px;

          margin-bottom: 25px;
        }

        .brand-area {
          display: flex;

          align-items: center;

          gap: 14px;
        }

        .brand-icon {
          width: 58px;
          height: 58px;

          display: flex;

          align-items: center;
          justify-content: center;

          border-radius: 17px;

          color: white;

          background:
            linear-gradient(
              135deg,
              #0f766e,
              #14b8a6
            );

          font-size: 27px;

          box-shadow:
            0 12px 25px
            rgba(13,148,136,0.25);

          animation:
            floatIcon 3s ease-in-out infinite;
        }

        .catalog-title {
          margin: 0;

          color: #134e4a;

          font-size: 26px;

          font-weight: 900;
        }

        .catalog-subtitle {
          margin: 5px 0 0;

          color: #64748b;

          font-size: 11px;
        }

        .semester-badge {
          padding: 9px 13px;

          color: #0f766e;

          background: #ccfbf1;

          border:
            1px solid #99f6e4;

          border-radius: 50px;

          font-size: 10px;

          font-weight: 900;
        }

        /* =========================
           STATS
        ========================= */

        .stats-grid {
          display: grid;

          grid-template-columns:
            repeat(3, 1fr);

          gap: 14px;

          margin-bottom: 22px;
        }

        .stat-card {
          display: flex;

          align-items: center;

          gap: 13px;

          padding: 17px;

          background: rgba(255,255,255,0.9);

          border:
            1px solid #ccfbf1;

          border-radius: 15px;

          box-shadow:
            0 8px 22px
            rgba(15,118,110,0.06);

          transition: 0.25s ease;
        }

        .stat-card:hover {
          transform:
            translateY(-4px);

          box-shadow:
            0 13px 28px
            rgba(15,118,110,0.12);
        }

        .stat-icon {
          width: 42px;
          height: 42px;

          display: flex;

          align-items: center;
          justify-content: center;

          background: #f0fdfa;

          border-radius: 11px;

          font-size: 20px;
        }

        .stat-number {
          color: #134e4a;

          font-size: 20px;

          font-weight: 900;
        }

        .stat-label {
          margin-top: 3px;

          color: #94a3b8;

          font-size: 9px;

          font-weight: 700;
        }

        /* =========================
           SEARCH
        ========================= */

        .control-bar {
          display: flex;

          align-items: center;

          justify-content: space-between;

          gap: 15px;

          margin-bottom: 18px;
        }

        .search-box {
          position: relative;

          flex: 1;
        }

        .search-box span {
          position: absolute;

          left: 14px;

          top: 50%;

          transform:
            translateY(-50%);

          font-size: 15px;
        }

        .search-input {
          width: 100%;

          padding: 13px 15px 13px 42px;

          border:
            1px solid #d1fae5;

          outline: none;

          border-radius: 11px;

          color: #334155;

          background: white;

          font-size: 11px;

          transition: 0.2s ease;
        }

        .search-input:focus {
          border-color: #14b8a6;

          box-shadow:
            0 0 0 3px
            rgba(20,184,166,0.10);
        }

        .course-count {
          padding: 11px 14px;

          color: #0f766e;

          background: #ccfbf1;

          border-radius: 10px;

          font-size: 10px;

          font-weight: 900;

          white-space: nowrap;
        }

        /* =========================
           COURSE GRID
        ========================= */

        .course-grid {
          display: grid;

          grid-template-columns:
            repeat(2, 1fr);

          gap: 17px;
        }

        .course-card {
          position: relative;

          overflow: hidden;

          padding: 20px;

          background: rgba(255,255,255,0.95);

          border:
            1px solid #e2e8f0;

          border-radius: 17px;

          box-shadow:
            0 8px 25px
            rgba(15,23,42,0.05);

          transition:
            transform 0.25s ease,
            box-shadow 0.25s ease;
        }

        .course-card:hover {
          transform:
            translateY(-5px);

          box-shadow:
            0 16px 35px
            rgba(15,118,110,0.11);
        }

        .course-card::before {
          content: "";

          position: absolute;

          left: 0;
          top: 0;

          width: 4px;
          height: 100%;

          background:
            linear-gradient(
              #0f766e,
              #2dd4bf
            );
        }

        .course-top {
          display: flex;

          align-items: flex-start;

          justify-content: space-between;

          gap: 10px;

          margin-bottom: 15px;
        }

        .course-icon {
          width: 45px;
          height: 45px;

          display: flex;

          align-items: center;
          justify-content: center;

          border-radius: 12px;

          font-size: 22px;
        }

        .credits {
          padding: 6px 9px;

          color: #0f766e;

          background: #ccfbf1;

          border-radius: 7px;

          font-size: 9px;

          font-weight: 900;
        }

        .course-title {
          margin: 0;

          color: #134e4a;

          font-size: 15px;

          font-weight: 900;

          line-height: 1.4;
        }

        .course-code {
          margin: 5px 0 0;

          color: #14b8a6;

          font-size: 9px;

          font-weight: 900;
        }

        .course-category {
          display: inline-block;

          margin-top: 10px;

          padding: 5px 8px;

          color: #475569;

          background: #f1f5f9;

          border-radius: 6px;

          font-size: 8px;

          font-weight: 800;
        }

        .course-info {
          display: grid;

          grid-template-columns:
            1fr 1fr;

          gap: 8px;

          margin-top: 15px;

          padding-top: 13px;

          border-top:
            1px dashed #cbd5e1;
        }

        .info-item {
          color: #94a3b8;

          font-size: 8px;
        }

        .info-value {
          display: block;

          margin-top: 3px;

          color: #475569;

          font-size: 9px;

          font-weight: 800;
        }

        .course-actions {
          display: flex;

          gap: 8px;

          margin-top: 15px;
        }

        .details-button,
        .enroll-button {
          flex: 1;

          padding: 9px;

          border-radius: 8px;

          cursor: pointer;

          font-size: 9px;

          font-weight: 900;

          transition: 0.2s ease;
        }

        .details-button {
          color: #0f766e;

          background: #f0fdfa;

          border:
            1px solid #99f6e4;
        }

        .details-button:hover {
          background: #ccfbf1;
        }

        .enroll-button {
          color: white;

          border: none;

          background:
            linear-gradient(
              135deg,
              #0f766e,
              #14b8a6
            );
        }

        .enroll-button:hover {
          transform:
            translateY(-2px);

          box-shadow:
            0 7px 15px
            rgba(20,184,166,0.20);
        }

        .enrolled {
          color: #15803d;

          background: #dcfce7;

          border:
            1px solid #bbf7d0;
        }

        /* =========================
           EMPTY
        ========================= */

        .empty {
          grid-column: 1 / -1;

          padding: 45px;

          text-align: center;

          color: #94a3b8;

          background: white;

          border:
            1px dashed #cbd5e1;

          border-radius: 15px;
        }

        .empty-icon {
          font-size: 35px;

          margin-bottom: 8px;
        }

        /* =========================
           MODAL
        ========================= */

        .modal-overlay {
          position: fixed;

          inset: 0;

          z-index: 100;

          display: flex;

          align-items: center;
          justify-content: center;

          padding: 20px;

          background:
            rgba(15,23,42,0.45);

          backdrop-filter:
            blur(5px);
        }

        .modal {
          width: 100%;

          max-width: 430px;

          padding: 25px;

          background: white;

          border-radius: 18px;

          box-shadow:
            0 25px 70px
            rgba(15,23,42,0.20);

          animation:
            modalIn 0.25s ease;
        }

        .modal-header {
          display: flex;

          align-items: center;

          justify-content: space-between;
        }

        .modal-title {
          margin: 0;

          color: #134e4a;

          font-size: 18px;

          font-weight: 900;
        }

        .close-button {
          width: 30px;
          height: 30px;

          border: none;

          border-radius: 8px;

          color: #64748b;

          background: #f1f5f9;

          cursor: pointer;
        }

        .modal-code {
          margin-top: 5px;

          color: #14b8a6;

          font-size: 9px;

          font-weight: 900;
        }

        .modal-description {
          margin: 18px 0;

          color: #64748b;

          font-size: 11px;

          line-height: 1.7;
        }

        .modal-detail {
          display: flex;

          justify-content: space-between;

          padding: 10px 0;

          border-bottom:
            1px solid #f1f5f9;

          color: #64748b;

          font-size: 10px;
        }

        .modal-detail strong {
          color: #334155;
        }

        /* =========================
           FOOTER
        ========================= */

        .footer {
          margin-top: 25px;

          text-align: center;

          color: #94a3b8;

          font-size: 9px;
        }

        /* =========================
           ANIMATIONS
        ========================= */

        @keyframes floatIcon {
          0%, 100% {
            transform:
              translateY(0);
          }

          50% {
            transform:
              translateY(-5px);
          }
        }

        @keyframes modalIn {
          from {
            opacity: 0;

            transform:
              scale(0.95)
              translateY(10px);
          }

          to {
            opacity: 1;

            transform:
              scale(1)
              translateY(0);
          }
        }

        /* =========================
           RESPONSIVE
        ========================= */

        @media (max-width: 800px) {

          .course-grid {
            grid-template-columns: 1fr;
          }

          .stats-grid {
            grid-template-columns:
              repeat(3, 1fr);
          }

        }

        @media (max-width: 600px) {

          .catalog-page {
            padding: 20px 12px;
          }

          .catalog-header {
            align-items: flex-start;

            flex-direction: column;
          }

          .catalog-title {
            font-size: 22px;
          }

          .stats-grid {
            grid-template-columns:
              1fr;
          }

          .control-bar {
            flex-direction: column;

            align-items: stretch;
          }

          .course-count {
            text-align: center;
          }

        }

        @media (max-width: 380px) {

          .brand-icon {
            width: 48px;
            height: 48px;

            font-size: 22px;
          }

          .catalog-title {
            font-size: 19px;
          }

          .course-card {
            padding: 17px;
          }

        }

      `}</style>


      <div className="catalog-container">

        {/* HEADER */}

        <div className="catalog-header">

          <div className="brand-area">

            <div className="brand-icon">
              🎓
            </div>

            <div>

              <h1 className="catalog-title">
                Department Course Catalog
              </h1>

              <p className="catalog-subtitle">
                Explore courses and build your
                academic journey.
              </p>

            </div>

          </div>

          <div className="semester-badge">
            📚 SEMESTER 5
          </div>

        </div>


        {/* STATS */}

        <div className="stats-grid">

          <div className="stat-card">

            <div className="stat-icon">
              📚
            </div>

            <div>
              <div className="stat-number">
                {courseList.length}
              </div>

              <div className="stat-label">
                Available Courses
              </div>
            </div>

          </div>


          <div className="stat-card">

            <div className="stat-icon">
              ⭐
            </div>

            <div>
              <div className="stat-number">
                21
              </div>

              <div className="stat-label">
                Total Credits
              </div>
            </div>

          </div>


          <div className="stat-card">

            <div className="stat-icon">
              🎯
            </div>

            <div>
              <div className="stat-number">
                {enrolledCourses.length}
              </div>

              <div className="stat-label">
                Enrolled Courses
              </div>
            </div>

          </div>

        </div>


        {/* SEARCH */}

        <div className="control-bar">

          <div className="search-box">

            <span>🔍</span>

            <input
              type="text"
              className="search-input"
              placeholder="Search course, code or category..."
              value={search}
              onChange={function (event) {
                setSearch(event.target.value);
              }}
            />

          </div>

          <div className="course-count">
            {filteredCourses.length} Courses Found
          </div>

        </div>


        {/* COURSE LIST */}

        <div className="course-grid">

          {filteredCourses.length > 0 ? (

            filteredCourses.map(function (course) {

              const isEnrolled =
                enrolledCourses.includes(course.id);

              return (

                <div
                  key={course.id}
                  className="course-card"
                >

                  <div className="course-top">

                    <div
                      className="course-icon"
                      style={{
                        background:
                          course.color + '15',
                      }}
                    >
                      {course.icon}
                    </div>

                    <span className="credits">
                      {course.credits} CREDITS
                    </span>

                  </div>


                  <h3 className="course-title">
                    {course.title}
                  </h3>


                  <p className="course-code">
                    COURSE CODE: {course.code}
                  </p>


                  <span className="course-category">
                    {course.category}
                  </span>


                  <div className="course-info">

                    <div className="info-item">
                      Instructor

                      <span className="info-value">
                        {course.instructor}
                      </span>
                    </div>

                    <div className="info-item">
                      Students

                      <span className="info-value">
                        {course.students}+
                      </span>
                    </div>

                    <div className="info-item">
                      Duration

                      <span className="info-value">
                        {course.duration}
                      </span>
                    </div>

                    <div className="info-item">
                      Level

                      <span className="info-value">
                        Undergraduate
                      </span>
                    </div>

                  </div>


                  <div className="course-actions">

                    <button
                      className="details-button"
                      onClick={function () {
                        setSelectedCourse(course);
                      }}
                    >
                      👁 View Details
                    </button>


                    <button
                      className={
                        isEnrolled
                          ? 'enroll-button enrolled'
                          : 'enroll-button'
                      }
                      onClick={function () {
                        handleEnroll(course.id);
                      }}
                    >
                      {isEnrolled
                        ? '✓ Enrolled'
                        : '+ Enroll'
                      }
                    </button>

                  </div>

                </div>

              );

            })

          ) : (

            <div className="empty">

              <div className="empty-icon">
                🔎
              </div>

              <strong>
                No courses found
              </strong>

              <p>
                Try searching with another
                course name or code.
              </p>

            </div>

          )}

        </div>


        {/* MODAL */}

        {selectedCourse && (

          <div className="modal-overlay">

            <div className="modal">

              <div className="modal-header">

                <div>

                  <h2 className="modal-title">
                    {selectedCourse.title}
                  </h2>

                  <div className="modal-code">
                    {selectedCourse.code}
                  </div>

                </div>

                <button
                  className="close-button"
                  onClick={function () {
                    setSelectedCourse(null);
                  }}
                >
                  ✕
                </button>

              </div>


              <p className="modal-description">
                This course provides students with
                practical knowledge and theoretical
                understanding of
                {` ${selectedCourse.category}`}
                technologies and concepts.
              </p>


              <div className="modal-detail">
                <span>Instructor</span>

                <strong>
                  {selectedCourse.instructor}
                </strong>
              </div>


              <div className="modal-detail">
                <span>Credits</span>

                <strong>
                  {selectedCourse.credits}
                </strong>
              </div>


              <div className="modal-detail">
                <span>Duration</span>

                <strong>
                  {selectedCourse.duration}
                </strong>
              </div>


              <div className="modal-detail">
                <span>Students</span>

                <strong>
                  {selectedCourse.students}+
                </strong>
              </div>

            </div>

          </div>

        )}


        <p className="footer">
          🎓 Department of Computer Applications
          • Academic Course Management System
        </p>

      </div>

    </div>
  );
}

export default CourseCatalog;