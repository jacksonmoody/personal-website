export function scrollTo(id: string) {
  return (ev: React.MouseEvent<HTMLElement, MouseEvent>) => {
    ev.preventDefault();
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
  };
}
