export function Footer() {
  return (
    <footer className="mt-auto w-full bg-[#f2f2f2] text-[13px] text-[#70757a] sm:text-[14px]">
      <div className="border-b border-[#dadce0] px-4 py-3.5 sm:px-6">Switzerland</div>
      <div className="flex flex-col items-center justify-between gap-3 px-4 py-3.5 sm:flex-row sm:px-6">
        <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
          <a href="/search?q=Who%20is%20Leo%20Strijbos%3F" className="hover:underline">
            About
          </a>
          <a
            href="https://github.com/Leo-Strijbos"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            GitHub
          </a>
          <a href="mailto:ljfs2@cam.ac.uk" className="hover:underline">
            Email
          </a>
          <a href="/cv.pdf" className="hover:underline">
            CV
          </a>
        </div>
        <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
          <span>Privacy</span>
          <span>Terms</span>
          <span>Settings</span>
        </div>
      </div>
    </footer>
  );
}
