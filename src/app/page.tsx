import Hero from "@/components/home/Hero";

export default function Home() {
  return (
    <>
      <Hero />
      <div className="container py-16">
        <h2 className="text-3xl font-bold text-center mb-16">
          Bienvenue sur le site en construction de Jeff Entretien
        </h2>
        <p className="text-center text-lg">
          Notre site web est en cours de développement. Nous mettons en place un site professionnel 
          et moderne qui présentera tous nos services d&apos;entretien et d&apos;aménagement paysager.
        </p>
      </div>
    </>
  );
}