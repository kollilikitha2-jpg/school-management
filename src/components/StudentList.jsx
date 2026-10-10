
const avatarColors = [
  "avatar-purple",
  "avatar-blue",
  "avatar-orange",
  "avatar-green",
];

export default function StudentList({ students, onDelete }) {
  if (students.length === 0) {
    return (
      <div className="empty-state">
        <div className="empty-icon">⌕</div>
        <h3>No students found</h3>
        <p>Try another search or add a new student.</p>
      </div>
    );
  }

  return (
    <div className="table-wrapper">
      <table className="student-table">
        <thead>
          <tr>
            <th>Student</th>
            <th>Roll No.</th>
            <th>Class</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {students.map((student, index) => (
            <tr key={student.id}>
              <td>
                <div className="student-profile">
                  <div
                    className={`avatar ${
                      avatarColors[index % avatarColors.length]
                    }`}
                  >
                    {student.name
                      .split(" ")
                      .map((part) => part[0])
                      .join("")
                      .slice(0, 2)
                      .toUpperCase()}
                  </div>

                  <div className="student-info">
                    <strong>{student.name}</strong>
                    <span>{student.email}</span>
                  </div>
                </div>
              </td>

              <td>
                <span className="roll-number">{student.roll}</span>
              </td>

              <td>
                <span className="class-badge">
                  {student.className}
                </span>
              </td>

              <td>
                <button
                  className="delete-button"
                  onClick={() => onDelete(student.id)}
                  aria-label={`Delete ${student.name}`}
                  title="Delete student"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}