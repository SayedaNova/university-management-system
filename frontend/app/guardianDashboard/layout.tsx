import Session from "../components/guardianSession";
export default function AboutLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
    
   
      {children}
    </section>

  );
}