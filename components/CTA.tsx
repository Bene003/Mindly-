import Image from "next/image";
import Link from "next/link";

const Cta = () => {
    return (
        <section className="cta-section">
            <div className="cta-badge">Commence à apprendre à ta façon</div>
            <h2 className="text-3xl font-bold">
                Crée et personnalise ton assistant d’apprentissage
            </h2>
            <p>Choisis un nom, une matière, une voix et une personnalité — et commence à apprendre à travers des conversations vocales naturelles et amusantes.</p>
            <Image src="images/cta.svg" alt="cta" width={362} height={232} />
            <button className="btn-primary">
                <Image src="/icons/plus.svg" alt="plus" width={12} height={12}/>
                <Link href="/companions/new">
                    <p>Créer un nouvel assistant</p>
                </Link>
            </button>
        </section>
    )
}
export default Cta