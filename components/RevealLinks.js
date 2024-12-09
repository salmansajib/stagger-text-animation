import FlipLink from "./FlipLink";

function RevealLinks() {
  return (
    <section className="min-h-svh grid place-content-center gap-2 bg-green-300 px-8 text-slate-950">
      <FlipLink href="#">Twitter</FlipLink>
      <FlipLink href="#">Linkedin</FlipLink>
      <FlipLink href="#">Facebook</FlipLink>
      <FlipLink href="#">Instagram</FlipLink>
    </section>
  );
}

export default RevealLinks;
