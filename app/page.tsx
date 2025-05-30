import CompanionCard from '@/components/CompanionCard'
import CompanionList from '@/components/CompanionList'
import CTA from '@/components/CTA'
import { recentSessions } from '@/constants'


const page = () => {
  return (
    <main>
      <h1>Nos compagnons vedettes</h1>
        <section className='home-section'>
            <CompanionCard
                id="123"
                name="Ceuvra, l’exploratrice du cerveau"
                topic="Réseaux neuronaux du cerveau"
                subject="science"
                duration={45}
                color="#FCCC41"                
                
            />
            <CompanionCard
                id="456"
                name="Compta, la magicienne des nombres"
                topic="Dérivées et intégrales"
                subject="Maths"
                duration={30}
                color="#C8E6C9"
            />
            <CompanionCard
                id="789"
                name="Vocala, la bâtisseuse de vocabulaire"
                topic="Littérature anglaise"
                subject="Langue"
                duration={30}
                color="#BDE7FF"
            />
        </section>

        <section className='home-section'>
            <CompanionList
                title=" Dernière Session complétée"
                companions={recentSessions}
                classNames="w-2/3 max-lg:w-full" 
            />
            <CTA />
        </section>

    </main>
  )
}

export default page