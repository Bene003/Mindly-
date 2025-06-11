"use client";

import CompanionCard from '@/components/CompanionCard'
import CompanionList from '@/components/CompanionList'
import CTA from '@/components/CTA'
import { recentSessions } from '@/constants'
import { getAllCompanions, getRecentSessions, getUserSessions } from '@/lib/actions/companion.actions'
import { getSubjectColor } from '@/lib/utils'
import { useEffect, useState } from 'react'
import { SignedIn, SignedOut, useUser } from '@clerk/nextjs'

export default function HomePage() {
  const [companions, setCompanions] = useState<any[]>([])
  const [recentSessionsCompanions, setRecentSessionsCompanions] = useState<any[]>([])
  const { user, isSignedIn } = useUser()

  // Charger les compagnons vedettes (toujours affichés)
  useEffect(() => {
    getAllCompanions({ limit: 8 }).then(setCompanions)
  }, [])

  // Charger les sessions récentes personnelles si connecté
  useEffect(() => {
    if (isSignedIn && user?.id) {
      getUserSessions(user.id).then(setRecentSessionsCompanions)
    }
  }, [isSignedIn, user])

  return (
    <main>
      <h1>Nos compagnons vedettes</h1>
      <section className='home-section'>
        {companions.map((companion) => (
          <CompanionCard
            key={companion.id}
            {...companion}
            color={getSubjectColor(companion.subject)}
          />
        ))}
      </section>

      {/* Section pour les utilisateurs connectés */}
      <SignedIn>
        <section className='home-section'>
          <CompanionList
            title="Dernière Session complétée"
            companions={recentSessionsCompanions}
            classNames="w-full max-lg:w-full"
          />
          <CTA />
        </section>
      </SignedIn>

      {/* Section pour les visiteurs non connectés */}
      <SignedOut>
        <section className='home-section'>
          <CompanionList
            title="Choisis ton professeur"
            companions={recentSessions}
            classNames="w-full max-lg:w-full"
            showDuration={false}
          />
          <CTA />
        </section>
      </SignedOut>
    </main>
  )
}