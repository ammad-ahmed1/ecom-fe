

export default function HamburgerBtn () {
  return (
    <button
      type="button"
      aria-haspopup="dialog"
      aria-expanded="false"
      aria-controls="mobile-menu"
      data-state="closed"
      className="cursor-pointer"
    >
      <img
        src="/svgs/menu.svg"
        alt="menu"
        width="22"
        height="22"
        className="max-w-[22px] max-h-[22px]"
      />
    </button>
  );
}
