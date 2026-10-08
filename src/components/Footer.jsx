function Footer() {
  return (
    <footer className="footer">
      <div className="footer-left">
        © {new Date().getFullYear()} KAAN.
      </div>

      <div className="footer-links">
        <a
          href="https://github.com/Dephless/"
          target="_blank"
          rel="noreferrer"
        >
          GitHub
        </a>

        <a href="#top">Nach oben ↑</a>
      </div>
    </footer>
  )
}

export default Footer