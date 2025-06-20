import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-red-50 to-pink-100 rounded-3xl shadow-lg mt-16 mx-4 border border-red-100">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <h3 className="text-xl font-bold text-red-600">Mindly</h3>
            </div>
            <p className="text-red-500 mb-4">
              Apprends avec tes assistants IA personnalisés. Une nouvelle façon d'explorer tes matières préférées.
            </p>
          </div>

          {/* Navigation Links */}
          <div>
            <h4 className="font-semibold text-red-600 mb-4">Navigation</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-red-500 hover:text-red-600 transition-colors">
                  Accueil
                </Link>
              </li>              
              <li>
                <Link href="/companions/new" className="text-red-500 hover:text-red-600 transition-colors">
                  Créer un Assistant
                </Link>
              </li>
              <li>
                <Link href="/my-journey" className="text-red-500 hover:text-red-600 transition-colors">
                  Mon Parcours
                </Link>
              </li>
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h4 className="font-semibold text-red-600 mb-4">Support</h4>
            <ul className="space-y-2">             
              <li>
                <Link href="/contact" className="text-red-500 hover:text-red-600 transition-colors">
                  Nous contacter
                </Link>
              </li>
              <li>
                {/* Updated FAQ link to match the FAQPage route */}
                <Link href="/FAQ" className="text-red-500 hover:text-red-600 transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/subscription" className="text-red-500 hover:text-red-600 transition-colors">
                  Abonnements
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-red-200 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-red-500 text-sm">
            © 2025 Mindly. Tous droits réservés.
          </p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <Link href="/privacy" className="text-red-500 hover:text-red-600 text-sm transition-colors">
              Politique de confidentialité
            </Link>
            <Link href="/terms" className="text-red-500 hover:text-red-600 text-sm transition-colors">
              Conditions d'utilisation
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;