
export default function Header({ darkMode, toggleTheme }) {
  return (
    <header className="topbar">
      <div className="brand">
        <div className="brand-icon">S</div>
        <div>
          <h1>EduManage</h1>
          <span>School Management Portal</span>
        </div>
      </div>

      <button
        className="theme-toggle"
        onClick={toggleTheme}
        aria-label="Toggle color theme"
      >
        <span>{darkMode ? "☀" : "☾"}</span>
        {darkMode ? "Light Mode" : "Dark Mode"}
      </button>
    </header>
  );
}