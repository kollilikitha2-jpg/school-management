
import { useMemo, useState } from "react";
import Header from "./components/Header";
import StudentForm from "./components/StudentForm";
import StudentList from "./components/StudentList";
import "./App.css";

const initialStudents = [
  {
    id: 1,
    name: "Sai Dheeraj",
    email: "sai@example.com",
    roll: "STU001",
    className: "10-A",
  },
  {
    id: 2,
    name: "Priya Sharma",
    email: "priya@example.com",
    roll: "STU002",
    className: "10-B",
  },
  {
    id: 3,
    name: "Rahul Kumar",
    email: "rahul@example.com",
    roll: "STU003",
    className: "9-A",
  },
];

export default function App() {
  const [students, setStudents] = useState(initialStudents);
  const [search, setSearch] = useState("");
  const [darkMode, setDarkMode] = useState(false);

  const filteredStudents = useMemo(
    () =>
      students.filter((student) =>
        [
          student.name,
          student.email,
          student.roll,
          student.className,
        ].some((value) =>
          value.toLowerCase().includes(search.toLowerCase())
        )
      ),
    [students, search]
  );

  function addStudent(student) {
    setStudents((previous) => [
      ...previous,
      { ...student, id: Date.now() },
    ]);
  }

  function deleteStudent(id) {
    setStudents((previous) =>
      previous.filter((student) => student.id !== id)
    );
  }

  return (
    <main className={`app ${darkMode ? "dark" : "light"}`}>
      <div className="dashboard">
        <Header
          darkMode={darkMode}
          toggleTheme={() => setDarkMode((value) => !value)}
        />

        <section className="welcome">
          <div>
            <span className="eyebrow">SCHOOL ADMINISTRATION</span>
            <h2>Student Management</h2>
            <p>Manage student records from one simple dashboard.</p>
          </div>

          <div className="total-card">
            <span>Total Students</span>
            <strong>{students.length}</strong>
            <small>Registered students</small>
          </div>
        </section>

        <div className="content-grid">
          <StudentForm onAddStudent={addStudent} />

          <section className="list-card">
            <div className="list-heading">
              <div>
                <h3>Student Directory</h3>
                <p>View and manage your student records.</p>
              </div>
              <span className="count-badge">
                {filteredStudents.length} students
              </span>
            </div>

            <div className="search-box">
              <span aria-hidden="true">⌕</span>
              <input
                type="search"
                placeholder="Search name, email, class..."
                value={search}
                onChange={(event) => setSearch(event.target.value)}
                aria-label="Search students"
              />
            </div>

            <StudentList
              students={filteredStudents}
              onDelete={deleteStudent}
            />
          </section>
        </div>

        <footer>© 2026 Student Management System</footer>
      </div>
    </main>
  );
}