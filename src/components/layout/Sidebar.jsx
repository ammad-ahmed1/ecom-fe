export default function Footer() {
  return (
    <footer className="h-12 border-t flex items-center justify-center">
      <p className="text-sm">
        &copy; {new Date().getFullYear()} My Store. All rights reserved.
      </p>
    </footer>
  );
}
