import { profile } from "../../config/portfolio.js";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-line bg-paper">
      <div className="mx-auto flex max-w-6xl items-center justify-center px-6 py-6">
        <p className="text-[13px] text-muted">
          &copy; {year} {profile.name}
        </p>
      </div>
    </footer>
  );
}