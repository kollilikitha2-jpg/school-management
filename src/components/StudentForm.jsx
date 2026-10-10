
import { useState } from "react";

const emptyForm = {
  name: "",
  email: "",
  roll: "",
  className: "",
};

export default function StudentForm({ onAddStudent }) {
  const [form, setForm] = useState(emptyForm);

  function handleChange(event) {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();

    onAddStudent({
      name: form.name.trim(),
      email: form.email.trim(),
      roll: form.roll.trim(),
      className: form.className.trim(),
    });

    setForm(emptyForm);
  }

  return (
    <section className="form-card">
      <div className="section-icon">＋</div>
      <h3>Add New Student</h3>
      <p className="muted">Enter the student details below.</p>

      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Student Name</label>
        <input
          id="name"
          name="name"
          placeholder="Enter full name"
          value={form.name}
          onChange={handleChange}
          required
        />

        <label htmlFor="email">Email Address</label>
        <input
          id="email"
          name="email"
          type="email"
          placeholder="student@example.com"
          value={form.email}
          onChange={handleChange}
          required
        />

        <div className="form-row">
          <div>
            <label htmlFor="roll">Roll Number</label>
            <input
              id="roll"
              name="roll"
              placeholder="STU004"
              value={form.roll}
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <label htmlFor="className">Class</label>
            <input
              id="className"
              name="className"
              placeholder="10-A"
              value={form.className}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <button className="add-button" type="submit">
          + Add Student
        </button>
      </form>
    </section>
  );
}