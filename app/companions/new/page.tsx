import CompanionForm from "@/components/CompanionForm";
import {auth} from "@clerk/nextjs/server";
import {redirect} from "next/navigation";
import {newCompanionPermissions} from "@/lib/actions/companion.actions";
import Image from "next/image";
import Link from "next/link";

const NewCompanion = async () => {
    const { userId } = await auth();
    if(!userId) redirect('/sign-in');

    const canCreateCompanion = await newCompanionPermissions();

    return (
        <main className="min-lg:w-1/3 min-md:w-2/3 items-center justify-center">
            {canCreateCompanion ? (
                <article className="w-full gap-4 flex flex-col">
                    <h1>Créateur d'assistant</h1>

                    <CompanionForm />
                </article>
                ) : (
                    <article className="companion-limit">
                        <Image src="/images/limit.svg" alt="Limite d'assistants atteinte" width={360} height={230} />
                        <div className="cta-badge">
                            Améliore ton abonnement
                        </div>
                        <h1>Tu as atteint ta limite</h1>
                        <p>Tu as atteint ta limite d'assistants. Améliore ton abonnement pour créer plus d'assistants et accéder aux fonctionnalités premium.</p>
                        <Link href="/subscription" className="btn-primary w-full justify-center" >
                            Améliorer mon abonnement
                        </Link>
                    </article>
                )}
        </main>
    )
}

export default NewCompanion