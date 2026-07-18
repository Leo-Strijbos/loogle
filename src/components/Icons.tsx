export function SearchIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M15.5 14h-.79l-.28-.27A6.47 6.47 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
    </svg>
  );
}

export function MicIcon({ className = "h-6 w-6" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M12 14a3 3 0 0 0 3-3V6a3 3 0 1 0-6 0v5a3 3 0 0 0 3 3Z"
        fill="#4285F4"
      />
      <path
        d="M19 11a1 1 0 1 0-2 0 5 5 0 0 1-10 0 1 1 0 1 0-2 0 7 7 0 0 0 6 6.93V20H8a1 1 0 1 0 0 2h8a1 1 0 1 0 0-2h-3v-2.07A7 7 0 0 0 19 11Z"
        fill="#4285F4"
      />
    </svg>
  );
}

export function CameraIcon({ className = "h-6 w-6" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M9.5 7.5h5l1 1.5H18a1.5 1.5 0 0 1 1.5 1.5v7A1.5 1.5 0 0 1 18 19H6a1.5 1.5 0 0 1-1.5-1.5v-7A1.5 1.5 0 0 1 6 9h2.5l1-1.5Z"
        stroke="#4285F4"
        strokeWidth="1.5"
      />
      <circle cx="12" cy="13.5" r="2.75" stroke="#EA4335" strokeWidth="1.5" />
      <circle cx="12" cy="13.5" r="1.25" fill="#FBBC05" />
      <path d="M8 9.5h1.5" stroke="#34A853" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}
