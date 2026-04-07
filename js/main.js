// ========== TRANSLATIONS (FR & EN) ==========
const translations = {
  fr: {
    // Navigation
    'logo': 'Lead Labs',
    'nav-services': 'Services',
    'nav-method': 'Méthode',
    'nav-projects': 'Projets',
    'nav-pricing': 'Tarifs',
    'nav-about': 'À propos',
    'start-project': 'Démarrer un projet',
    // Hero
    'available-projects': 'Disponible pour de nouveaux projets',
    'hero-line1': 'Développez plus vite.',
    'hero-line2': 'Vendez mieux.',
    'hero-line3': 'Passez à l\'échelle sans chaos.',
    'hero-desc': 'Plateformes, sites et automatisations sur mesure conçus par quelqu\'un qui livre vraiment — pas seulement un conseiller.',
    'meet-dev': 'Rencontrez votre développeur',
    'see-work': 'Voir nos réalisations',
    'conversion-label': 'Hausse conversion',
    // Strip
    'exp-fullstack': 'Expérience Full-Stack',
    'client-satisfaction': 'Satisfaction Client',
    'conversion-boost': 'Boost de Conversion',
    'custom-platforms': 'Plateformes sur mesure',
    // Services section (home)
    'services-title': 'Concentrez-vous sur l\'essentiel.<br>Je bâtis le reste.',
    'services-desc': 'Nous éliminons le superflu pour livrer des outils haute performance qui résolvent vos vrais problèmes business.',
    'service1-title': 'Création & Lancement',
    'service1-item1': 'Sites Next.js & SEO',
    'service1-item2': 'Plateformes SaaS & Dashboards',
    'service1-item3': 'Landing Pages haute conversion',
    'service2-title': 'Automatisation & Scale',
    'service2-item1': 'Systèmes CRM sur mesure',
    'service2-item2': 'Moteurs de réservation',
    'service2-item3': 'Workflow & Email Automation',
    'service3-title': 'Monétisation',
    'service3-item1': 'Intégrations Stripe',
    'service3-item2': 'Systèmes d\'abonnement SaaS',
    'service3-item3': 'Tunnels de vente optimisés',
    // Work (home)
    'work-title': 'Des résultats concrets.',
    'work-desc': 'Nous ne créons pas des fonctionnalités. Nous créons des résultats.',
    'project1-title': 'Hôtellerie Scale-Up',
    'project1-desc': 'Refonte complète d\'un moteur de réservation fragmenté en une plateforme unifiée. Augmentation du taux de conversion de 0.1% à 7% en 3 mois.',
    'project2-title': 'CRM Automatisé',
    'project2-desc': 'Outil interne sur mesure pour gérer plus de 500 leads quotidiens sans aucune saisie manuelle via des webhooks personnalisés.',
    'project3-title': 'Paiement & Onboarding',
    'project3-desc': 'Intégration fluide pour une plateforme de coaching haut de gamme, réduisant le churn de 22%.',
    'project4-title': 'Moteur de Réservation Custom',
    'project4-desc': 'Solution en marque blanche pour les entreprises basées sur la prise de rendez-vous avec rappels SMS automatisés.',
    // Process
    'process-title': 'Le chemin de l\'exécution.',
    'process-desc': 'Pas de comités. Pas d\'agences lourdes. Juste une communication directe et des itérations rapides.',
    'step1-title': 'Rencontrez votre développeur',
    'step1-desc': 'Un appel introductif de 15 min pour vérifier l\'adéquation. On parle objectifs business, pas seulement code.',
    'step2-title': 'Obtenez un plan clair',
    'step2-desc': 'Vous recevez un périmètre fixe, un calendrier transparent et un prix garanti. Aucune surprise.',
    'step3-title': 'Construisez & Lancez vite',
    'step3-desc': 'Rapports de progression hebdomadaires et ligne directe Slack/WhatsApp avec la personne qui code vraiment.',
    // Pricing preview
    'pricing-title': 'Tarifs transparents. Pas de coûts cachés.',
    'pricing-desc': 'Faites évoluer votre investissement en même temps que votre business.',
    'starter-name': 'Starter',
    'starter-sub': 'Parfait pour valider une idée.',
    'starter-feat1': 'Landing Page / Petit Site',
    'starter-feat2': 'Optimisé Mobile',
    'starter-feat3': 'Setup Vitesse & SEO',
    'choose-starter': 'Choisir Starter',
    'most-popular': 'Le plus populaire',
    'growth-name': 'Growth',
    'growth-sub': 'Développez votre présence.',
    'growth-feat1': 'Plateforme complète / Multi-pages',
    'growth-feat2': 'Intégrations CRM & API',
    'growth-feat3': 'Automatisations avancées',
    'choose-growth': 'Passer à Growth',
    'custom-name': 'Custom',
    'custom-sub': 'Exécution à grande échelle.',
    'custom-feat1': 'Plateformes SaaS complexes',
    'custom-feat2': 'Dashboards avancés',
    'custom-feat3': 'Automatisations gérées',
    'contact-quote': 'Contact pour devis',
    'flexible-payments-title': 'Options de paiement flexibles disponibles',
    'flexible-payments-desc': '50% à la commande / 50% à la livraison, ou paiement mensuel.',
    // About preview
    'about-title': 'Direct. Humain. Efficace.',
    'about-desc1': 'Lead Labs est centré sur l\'exécution. J\'ai remarqué que trop d\'entreprises s\'enlisent dans le "piège du conseil" — payer pour des recommandations sans jamais voir un produit qui fonctionne réellement.',
    'about-desc2': 'En engageant Lead Labs, vous travaillez directement avec moi. Pas de gestionnaires de compte, pas de développeurs juniors. Juste un expert qui sait livrer des produits générateurs de revenus.',
    'about-desc3': 'Je traite chaque projet comme s\'il s\'agissait de ma propre entreprise, en me focalisant sur le chemin le plus court vers le ROI.',
    'founder-title': 'Fondateur & Lead Dev',
    // Final CTA
    'cta-title': 'Arrêtez de trop réfléchir.<br>Bâtissons quelque chose qui marche.',
    'meet-dev-cta': 'Rencontrez votre développeur',
    // Footer
    'footer-tagline': '© 2024 Lead Labs. Bâti pour une exécution haute conversion.',
    'linkedin': 'LinkedIn',
    'privacy': 'Confidentialité',
    'terms': 'Conditions',
    // Services page
    'services-hero-title': 'Ce que nous construisons',
    'services-hero-desc': 'Tout n\'a pas besoin d\'un développement massif. Mais si vous construisez — ',
    'services-hero-em': 'faites-le correctement.',
    'cat1-label': 'Fondations Digitales',
    'cat1-title': 'Sites haute performance',
    'cat1-desc': 'Des plateformes propulsées par Next.js, prêtes pour le SEO dès la première ligne de code. Nous construisons pour la vitesse et la supériorité technique.',
    'speed-focus': 'Focus Vitesse',
    'saas-title': 'Plateformes SaaS',
    'saas-desc': 'Des tableaux de bord complexes qui semblent simples pour l\'utilisateur final. Technologie de pointe, interface fluide.',
    'complexity-solved': 'Complexité résolue',
    'landing-title': 'Pages de destination',
    'landing-desc': 'Tunnels de conversion haute performance conçus avec une précision éditoriale. Chaque pixel a son rôle.',
    'conversion-priority': 'Conversion prioritaire',
    'cat2-label': 'Moteur & Efficacité',
    'crm-title': 'Systèmes CRM',
    'crm-desc': 'Des outils internes adaptés à la façon dont votre équipe travaille réellement.',
    'reduced-friction': 'Friction réduite',
    'booking-title': 'Systèmes de Réservation',
    'booking-desc': 'Des flux de réservation conçus pour gérer la montée en charge tout en maintenant une UX haut de gamme.',
    'high-throughput': 'Débit élevé',
    'automation-title': 'Automatisation & Systèmes',
    'automation-desc': 'De la capture de leads à l\'exécution automatique. Nous construisons les robots pour que vous n\'en soyez pas un.',
    'total-simplicity': 'Simplicité totale',
    'cat3-label': 'Échange de Valeur',
    'payments-title': 'Paiements & Monétisation',
    'payments-desc': 'L\'intégration n\'est pas seulement une question d\'API ; c\'est une question de confiance au moment du paiement. Nous construisons des flux Stripe personnalisés et des systèmes d\'abonnement infaillibles.',
    'service-accuracy': 'Précision de service',
    'churn-reduction': 'Réduction de l\'attrition',
    'subscription-level': 'Niveau d\'Abonnement',
    'pro-monthly': 'Pro Mensuel',
    'amount-billed': 'Montant Facturé',
    'processing-payment': 'Paiement en cours...',
    'services-cta-title': 'Dites-moi ce que vous essayez de construire',
    'services-cta-desc': 'Qu\'il s\'agisse d\'un nouveau projet ou d\'une plateforme en pleine croissance, nous vous dirons honnêtement si nous sommes le bon partenaire.',
    'contact-us': 'Contactez-nous',
    // Portfolio page
    'case-studies': 'Études de cas',
    'portfolio-title': 'Nos Réalisations',
    'portfolio-desc': 'Du travail concret. Des résultats réels. Nous ne nous contentons pas de concevoir des interfaces ; nous bâtissons la croissance par la précision architecturale.',
    'conversion-goal': 'OBJECTIF CONVERSION',
    'case1-title': 'Refonte de plateforme hôtelière',
    'problem': 'Problématique',
    'case1-problem': 'Le flux de réservation précédent était encombré, entraînant une chute massive des conversions lors de l\'étape finale de paiement.',
    'solution': 'Solution',
    'case1-solution': 'Une interface fluide sur un seul écran qui privilégie le luxe visuel tout en simplifiant les choix de l\'utilisateur.',
    'result': 'Résultat',
    'case1-result': 'Conversion améliorée de 0,1% à 7%',
    'case2-title': 'Tableau de bord de réservation + système d\'automatisation',
    'problem-short': 'Problématique :',
    'case2-problem': 'La saisie manuelle causait un taux d\'erreur de 15% dans la logistique interne.',
    'solution-short': 'Solution :',
    'case2-solution': 'Pipeline automatisé qui synchronise les calendriers et affecte les ressources automatiquement.',
    'result-short': 'Résultat',
    'case2-result': 'Taux d\'erreur → 0% · 40h/semaine économisées',
    'case3-title': 'Système de paiement + flux d\'onboarding',
    'case3-problem': 'Les utilisateurs trouvaient le processus de vérification en plusieurs étapes intimidant et lent.',
    'case3-solution': 'Un onboarding à divulgation progressive qui semble humain et guide l\'utilisateur étape par étape.',
    'case3-result': 'Temps d\'activation -65% dès le premier mois',
    'precision-building': 'CONSTRUCTION DE PRÉCISION',
    'case4-title': 'CRM sur mesure',
    'case4-problem': 'Les CRM du marché étaient trop complexes, ralentissant les opérations quotidiennes de l\'équipe commerciale.',
    'case4-solution': 'Un CRM épuré et spécifique qui se concentre uniquement sur les actions à haute valeur ajoutée réellement effectuées par l\'équipe.',
    'case4-result': 'Vélocité des ventes augmentée de 40% sans formation requise.',
    'build-yours': 'Construisons le vôtre',
    'build-yours-desc': 'Votre projet mérite le même niveau de précision architecturale et de design axé sur l\'exécution.',
    'start-project-btn': 'Lancer un projet',
    'view-pricing': 'Voir les tarifs',
    // Pricing page
    'pricing-hero-title': 'Tarification simple et transparente',
    'pricing-hero-desc': 'Pas de coûts cachés. Pas d\'estimations vagues. Vous saurez exactement ce que vous obtenez.',
    'pack-01': 'Pack 01',
    'pack-02': 'Pack 02',
    'pack-03': 'Pack 03',
    'starting-from': 'à partir de',
    'fast-execution': 'Exécution rapide',
    'ideal-for-beginnings': 'Idéal pour les débuts',
    'get-started': 'Commencer',
    'integrations-included': 'Intégrations incluses',
    'designed-to-scale': 'Conçu pour évoluer',
    'automated-systems': 'Systèmes automatisés',
    'saas-products': 'Produits SaaS',
    'contact-us-short': 'Contactez-nous',
    'flexible-payments-title': 'Options de paiement flexibles',
    'flexible-payments-desc': 'Nous pouvons structurer les paiements en fonction de la taille de votre projet. Notre objectif est de rendre l\'ingénierie premium accessible.',
    'split-5050': 'Répartition 50/50',
    'split-desc': '50% à l\'avance / 50% après livraison. Standard pour la plupart des projets.',
    'monthly-payments': 'Mensualités',
    'monthly-desc': 'Étalez le coût sur la durée de la réalisation. Options disponibles pour les offres Growth & Custom.',
    'define-project': 'Définissons votre projet',
    'consultation': 'Consultation',
    'free': 'Gratuit',
    'estimated-timeline': 'Délai estimé',
    'request-quote': 'Demander un devis',
    'precision-built': 'Conçu pour la précision. Payé pour la valeur.',
    'pricing-quote': '"Nous privilégions l\'exécution à la négociation. Nos tarifs reflètent notre engagement à livrer du code de haute qualité, rapidement."',
    'define-my-project': 'Définir mon projet',
    'view-portfolio': 'Voir le Portfolio',
    // About page
    'execution-philosophy': 'La philosophie de l\'exécution',
    'why-leadlabs': 'Pourquoi Lead Labs',
    'about-hero-desc': 'Lead Labs est bâti sur l\'exécution. Pas d\'intermédiaires, pas de transferts — vous travaillez directement avec le développeur qui construit votre produit.',
    'value1-title': 'Décisions plus rapides',
    'value1-desc': 'En supprimant les intermédiaires, nous itérons en quelques minutes, pas lors de réunions. La vitesse est notre principal avantage architectural.',
    'value2-title': 'Code plus propre',
    'value2-desc': 'Aucune dette technique issue de mauvaises transmissions. Chaque ligne de code est écrite avec l\'objectif final à l\'esprit.',
    'value3-title': 'Zéro erreur de communication',
    'value3-desc': 'Le partage direct du contexte garantit que la vision originale est exactement ce qui finit en production. Zéro erreur de traduction.',
    'direct-accountability': 'Responsabilité directe.<br>Expertise directe.',
    'founder-desc1': 'Foued a construit des plateformes dans l\'hôtellerie, le coaching et les entreprises de services — toujours axées sur la performance et les résultats concrets.',
    'founder-quote': '"Si cela doit fonctionner correctement, cela doit être construit correctement."',
    '100-direct-delivery': 'Livraison 100% Directe',
    'execution-log': 'Journal d\'exécution',
    'hotel-engine': 'Moteur Hôtelier',
    'hotel-engine-desc': 'Système de réservation évolutif',
    'coaching-hub': 'Hub de Coaching',
    'coaching-hub-desc': 'LMS de bout en bout',
    'ready-to-build': 'Prêt à construire correctement ?',
    'start-project': 'Démarrer votre projet',
    // Contact page
    'connection': 'Connexion',
    'start-conversation': 'Démarrer',
    'the-conversation': 'la conversation',
    'contact-desc': 'Dites-moi ce que vous essayez de construire. Je vous dirai comment nous y parviendrons.',
    'execution-pipeline': 'Pipeline d\'Exécution',
    'spec-review': 'Examen de vos spécifications',
    'architecture-team': 'Groupe d\'Architecture Lead Labs',
    'feasibility-analysis': 'Analyse de faisabilité',
    'awaiting-info': 'En attente d\'informations...',
    'name-label': 'Nom',
    'email-label': 'Email',
    'project-label': 'Que construisez-vous ?',
    'budget-label': 'Budget (optionnel)',
    'select-range': 'Sélectionnez une tranche',
    'send-request': 'Envoyer la demande',
    'or': 'ou',
    'book-call': 'Réserver un appel rapide',
    'message-received': 'Message reçu !',
    'response-message': 'Foued vous répondra dans les 24 heures. Merci pour votre confiance.'
  },
  en: {
    // Navigation
    'logo': 'Lead Labs',
    'nav-services': 'Services',
    'nav-method': 'Method',
    'nav-projects': 'Projects',
    'nav-pricing': 'Pricing',
    'nav-about': 'About',
    'start-project': 'Start a Project',
    // Hero
    'available-projects': 'Available for new projects',
    'hero-line1': 'Build Faster.',
    'hero-line2': 'Sell Better.',
    'hero-line3': 'Scale Without Chaos.',
    'hero-desc': 'Custom platforms, websites and automations built by someone who actually delivers — not just advises.',
    'meet-dev': 'Meet Your Developer',
    'see-work': 'See Our Work',
    'conversion-label': 'Conversion Increase',
    // Strip
    'exp-fullstack': 'Full-Stack Experience',
    'client-satisfaction': 'Client Satisfaction',
    'conversion-boost': 'Conversion Boost',
    'custom-platforms': 'Custom Platforms',
    // Services section (home)
    'services-title': 'Focus on what matters.<br>I build the rest.',
    'services-desc': 'We eliminate the superfluous to deliver high-performance tools that solve your real business problems.',
    'service1-title': 'Creation & Launch',
    'service1-item1': 'Next.js Sites & SEO',
    'service1-item2': 'SaaS Platforms & Dashboards',
    'service1-item3': 'High-Conversion Landing Pages',
    'service2-title': 'Automation & Scale',
    'service2-item1': 'Custom CRM Systems',
    'service2-item2': 'Booking Engines',
    'service2-item3': 'Workflow & Email Automation',
    'service3-title': 'Monetization',
    'service3-item1': 'Stripe Integrations',
    'service3-item2': 'SaaS Subscription Systems',
    'service3-item3': 'Optimized Sales Funnels',
    // Work (home)
    'work-title': 'Concrete results.',
    'work-desc': 'We don\'t build features. We build results.',
    'project1-title': 'Hospitality Scale-Up',
    'project1-desc': 'Complete redesign of a fragmented booking engine into a unified platform. Increased conversion rate from 0.1% to 7% in 3 months.',
    'project2-title': 'Automated CRM',
    'project2-desc': 'Custom internal tool to manage over 500 daily leads without any manual entry via custom webhooks.',
    'project3-title': 'Payment & Onboarding',
    'project3-desc': 'Seamless integration for a high-end coaching platform, reducing churn by 22%.',
    'project4-title': 'Custom Booking Engine',
    'project4-desc': 'White-label solution for appointment-based businesses with automated SMS reminders.',
    // Process
    'process-title': 'The path to execution.',
    'process-desc': 'No committees. No heavy agencies. Just direct communication and rapid iterations.',
    'step1-title': 'Meet Your Developer',
    'step1-desc': 'A 15-min intro call to check fit. We talk business goals, not just code.',
    'step2-title': 'Get a Clear Plan',
    'step2-desc': 'You receive a fixed scope, transparent timeline, and guaranteed price. No surprises.',
    'step3-title': 'Build & Launch Fast',
    'step3-desc': 'Weekly progress reports and direct Slack/WhatsApp line with the person who actually codes.',
    // Pricing preview
    'pricing-title': 'Transparent pricing. No hidden costs.',
    'pricing-desc': 'Scale your investment as your business grows.',
    'starter-name': 'Starter',
    'starter-sub': 'Perfect for validating an idea.',
    'starter-feat1': 'Landing Page / Small Site',
    'starter-feat2': 'Mobile Optimized',
    'starter-feat3': 'Speed & SEO Setup',
    'choose-starter': 'Choose Starter',
    'most-popular': 'Most Popular',
    'growth-name': 'Growth',
    'growth-sub': 'Expand your presence.',
    'growth-feat1': 'Full Platform / Multi-page',
    'growth-feat2': 'CRM & API Integrations',
    'growth-feat3': 'Advanced Automations',
    'choose-growth': 'Go to Growth',
    'custom-name': 'Custom',
    'custom-sub': 'Large-scale execution.',
    'custom-feat1': 'Complex SaaS Platforms',
    'custom-feat2': 'Advanced Dashboards',
    'custom-feat3': 'Managed Automations',
    'contact-quote': 'Contact for Quote',
    'flexible-payments-title': 'Flexible payment options available',
    'flexible-payments-desc': '50% upfront / 50% upon delivery, or monthly payment.',
    // About preview
    'about-title': 'Direct. Human. Efficient.',
    'about-desc1': 'Lead Labs is built on execution. I noticed too many businesses get stuck in the "consulting trap" — paying for recommendations without ever seeing a working product.',
    'about-desc2': 'When you hire Lead Labs, you work directly with me. No account managers, no junior devs. Just an expert who knows how to deliver revenue-generating products.',
    'about-desc3': 'I treat every project as if it were my own business, focusing on the shortest path to ROI.',
    'founder-title': 'Founder & Lead Dev',
    // Final CTA
    'cta-title': 'Stop overthinking.<br>Let\'s build something that works.',
    'meet-dev-cta': 'Meet Your Developer',
    // Footer
    'footer-tagline': '© 2024 Lead Labs. Built for high-conversion execution.',
    'linkedin': 'LinkedIn',
    'privacy': 'Privacy',
    'terms': 'Terms',
    // Services page
    'services-hero-title': 'What We Build',
    'services-hero-desc': 'Not everything needs massive development. But if you\'re building — ',
    'services-hero-em': 'do it right.',
    'cat1-label': 'Digital Foundations',
    'cat1-title': 'High-Performance Sites',
    'cat1-desc': 'Next.js-powered platforms, SEO-ready from the first line of code. We build for speed and technical superiority.',
    'speed-focus': 'Speed Focus',
    'saas-title': 'SaaS Platforms',
    'saas-desc': 'Complex dashboards that feel simple to the end user. Cutting-edge technology, fluid interface.',
    'complexity-solved': 'Complexity Solved',
    'landing-title': 'Landing Pages',
    'landing-desc': 'High-conversion funnels built with editorial precision. Every pixel has its purpose.',
    'conversion-priority': 'Conversion Priority',
    'cat2-label': 'Engine & Efficiency',
    'crm-title': 'CRM Systems',
    'crm-desc': 'Internal tools adapted to how your team actually works.',
    'reduced-friction': 'Reduced Friction',
    'booking-title': 'Booking Systems',
    'booking-desc': 'Reservation flows designed to handle scale while maintaining a high-end UX.',
    'high-throughput': 'High Throughput',
    'automation-title': 'Automation & Systems',
    'automation-desc': 'From lead capture to automated execution. We build the robots so you don\'t have to be one.',
    'total-simplicity': 'Total Simplicity',
    'cat3-label': 'Value Exchange',
    'payments-title': 'Payments & Monetization',
    'payments-desc': 'Integration isn\'t just about APIs; it\'s about trust at checkout. We build custom Stripe flows and bulletproof subscription systems.',
    'service-accuracy': 'Service Accuracy',
    'churn-reduction': 'Churn Reduction',
    'subscription-level': 'Subscription Level',
    'pro-monthly': 'Pro Monthly',
    'amount-billed': 'Amount Billed',
    'processing-payment': 'Processing payment...',
    'services-cta-title': 'Tell me what you\'re trying to build',
    'services-cta-desc': 'Whether it\'s a new project or a growing platform, we\'ll honestly tell you if we\'re the right partner.',
    'contact-us': 'Contact Us',
    // Portfolio page
    'case-studies': 'Case Studies',
    'portfolio-title': 'Our Work',
    'portfolio-desc': 'Tangible work. Real results. We don\'t just design interfaces; we build growth through architectural precision.',
    'conversion-goal': 'CONVERSION GOAL',
    'case1-title': 'Hotel Platform Redesign',
    'problem': 'Problem',
    'case1-problem': 'The previous booking flow was cluttered, causing massive drop-offs at the final payment step.',
    'solution': 'Solution',
    'case1-solution': 'A streamlined single-screen interface that prioritizes visual luxury while simplifying user choices.',
    'result': 'Result',
    'case1-result': 'Conversion improved from 0.1% to 7%',
    'case2-title': 'Booking Dashboard + Automation System',
    'problem-short': 'Problem:',
    'case2-problem': 'Manual data entry caused a 15% error rate in internal logistics.',
    'solution-short': 'Solution:',
    'case2-solution': 'Automated pipeline that syncs calendars and allocates resources automatically.',
    'result-short': 'Result',
    'case2-result': 'Error rate → 0% · 40 hours/week saved',
    'case3-title': 'Payment System + Onboarding Flow',
    'case3-problem': 'Users found the multi-step verification process intimidating and slow.',
    'case3-solution': 'A progressive disclosure onboarding that feels human and guides the user step by step.',
    'case3-result': 'Activation time -65% within the first month',
    'precision-building': 'PRECISION BUILDING',
    'case4-title': 'Custom CRM',
    'case4-problem': 'Off-the-shelf CRMs were too complex, slowing down the sales team\'s daily operations.',
    'case4-solution': 'A streamlined, specific CRM that focuses only on high-value actions the team actually performs.',
    'case4-result': 'Sales velocity increased by 40% with no training required.',
    'build-yours': 'Build Yours',
    'build-yours-desc': 'Your project deserves the same level of architectural precision and execution-driven design.',
    'start-project-btn': 'Start a Project',
    'view-pricing': 'View Pricing',
    // Pricing page
    'pricing-hero-title': 'Simple & Transparent Pricing',
    'pricing-hero-desc': 'No hidden costs. No vague estimates. You\'ll know exactly what you\'re getting.',
    'pack-01': 'Pack 01',
    'pack-02': 'Pack 02',
    'pack-03': 'Pack 03',
    'starting-from': 'starting from',
    'fast-execution': 'Fast Execution',
    'ideal-for-beginnings': 'Ideal for beginnings',
    'get-started': 'Get Started',
    'integrations-included': 'Integrations included',
    'designed-to-scale': 'Designed to scale',
    'automated-systems': 'Automated systems',
    'saas-products': 'SaaS products',
    'contact-us-short': 'Contact Us',
    'flexible-payments-title': 'Flexible Payment Options',
    'flexible-payments-desc': 'We can structure payments based on your project size. Our goal is to make premium engineering accessible.',
    'split-5050': '50/50 Split',
    'split-desc': '50% upfront / 50% upon delivery. Standard for most projects.',
    'monthly-payments': 'Monthly Payments',
    'monthly-desc': 'Spread the cost over the development duration. Options available for Growth & Custom packages.',
    'define-project': 'Let\'s Define Your Project',
    'consultation': 'Consultation',
    'free': 'Free',
    'estimated-timeline': 'Estimated Timeline',
    'request-quote': 'Request a Quote',
    'precision-built': 'Built for precision. Paid for value.',
    'pricing-quote': '"We prioritize execution over negotiation. Our pricing reflects our commitment to delivering high-quality code, fast."',
    'define-my-project': 'Define My Project',
    'view-portfolio': 'View Portfolio',
    // About page
    'execution-philosophy': 'The Execution Philosophy',
    'why-leadlabs': 'Why Lead Labs',
    'about-hero-desc': 'Lead Labs is built on execution. No middlemen, no handoffs — you work directly with the developer building your product.',
    'value1-title': 'Faster Decisions',
    'value1-desc': 'By removing intermediaries, we iterate in minutes, not meetings. Speed is our main architectural advantage.',
    'value2-title': 'Cleaner Code',
    'value2-desc': 'No technical debt from poor handoffs. Every line of code is written with the end goal in mind.',
    'value3-title': 'Zero Communication Errors',
    'value3-desc': 'Direct context sharing ensures the original vision is exactly what ends up in production. Zero translation errors.',
    'direct-accountability': 'Direct Accountability.<br>Direct Expertise.',
    'founder-desc1': 'Foued has built platforms in hospitality, coaching, and service businesses — always focused on performance and tangible results.',
    'founder-quote': '"If it needs to work right, it needs to be built right."',
    '100-direct-delivery': '100% Direct Delivery',
    'execution-log': 'Execution Log',
    'hotel-engine': 'Hotel Engine',
    'hotel-engine-desc': 'Scalable booking system',
    'coaching-hub': 'Coaching Hub',
    'coaching-hub-desc': 'End-to-end LMS',
    'ready-to-build': 'Ready to Build Right?',
    'start-project': 'Start Your Project',
    // Contact page
    'connection': 'Connection',
    'start-conversation': 'Start',
    'the-conversation': 'the Conversation',
    'contact-desc': 'Tell me what you\'re trying to build. I\'ll tell you how we\'ll get there.',
    'execution-pipeline': 'Execution Pipeline',
    'spec-review': 'Your specifications review',
    'architecture-team': 'Lead Labs Architecture Group',
    'feasibility-analysis': 'Feasibility analysis',
    'awaiting-info': 'Awaiting information...',
    'name-label': 'Name',
    'email-label': 'Email',
    'project-label': 'What are you building?',
    'budget-label': 'Budget (optional)',
    'select-range': 'Select a range',
    'send-request': 'Send Request',
    'or': 'or',
    'book-call': 'Book a Quick Call',
    'message-received': 'Message Received!',
    'response-message': 'Foued will get back to you within 24 hours. Thank you for your trust.'
  }
};

let currentLanguage = 'fr';

function switchLanguage(lang) {
  currentLanguage = lang;
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (translations[lang][key]) {
      if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
        el.placeholder = translations[lang][key];
      } else if (el.tagName === 'SELECT') {
        // For selects, we handle options separately if needed
        for (let i = 0; i < el.options.length; i++) {
          const optKey = el.options[i].getAttribute('data-i18n');
          if (optKey && translations[lang][optKey]) {
            el.options[i].text = translations[lang][optKey];
          }
        }
      } else {
        el.innerHTML = translations[lang][key];
      }
    }
  });
  const toggle = document.getElementById('langToggle');
  if (toggle) toggle.textContent = lang === 'fr' ? '🇬🇧 EN' : '🇫🇷 FR';
  localStorage.setItem('leadlabs_lang', lang);
  document.documentElement.lang = lang;
  document.title = lang === 'fr' ? 'Lead Labs | Développez plus vite. Vendez mieux.' : 'Lead Labs | Build Faster. Sell Better.';
}

// Scroll reveal
function initReveal() {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('visible');
        observer.unobserve(e.target);
      }
    });
  }, { threshold: 0.1 });
  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
}

// Navbar scroll shadow
function initNavScroll() {
  const nav = document.getElementById('nav');
  window.addEventListener('scroll', () => {
    if (nav) nav.classList.toggle('scrolled', window.scrollY > 20);
  });
}

// Mobile menu
function initMobileMenu() {
  const btn = document.getElementById('hamburger');
  const menu = document.getElementById('mobileMenu');
  if (btn && menu) {
    btn.addEventListener('click', () => {
      const isOpen = menu.classList.toggle('open');
      btn.classList.toggle('open', isOpen);
      document.body.classList.toggle('nav-open', isOpen);
    });
  }
}

function closeMobileMenu() {
  const menu = document.getElementById('mobileMenu');
  const btn = document.getElementById('hamburger');
  if (menu && btn) {
    menu.classList.remove('open');
    btn.classList.remove('open');
    document.body.classList.remove('nav-open');
  }
}

// Contact form
function initContactForm() {
  const form = document.getElementById('projectForm');
  if (!form) return;
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('contact-name')?.value.trim();
    const email = document.getElementById('contact-email')?.value.trim();
    const project = document.getElementById('contact-project')?.value.trim();
    if (!name || !email || !project) return;
    const formWrap = document.getElementById('contactForm');
    const successDiv = document.getElementById('formSuccess');
    if (formWrap) formWrap.style.display = 'none';
    if (successDiv) successDiv.classList.add('show');
  });
}

// Language toggle button
function initLanguageToggle() {
  const btn = document.getElementById('langToggle');
  if (btn) {
    btn.addEventListener('click', () => {
      switchLanguage(currentLanguage === 'fr' ? 'en' : 'fr');
    });
  }
  const saved = localStorage.getItem('leadlabs_lang');
  if (saved === 'fr' || saved === 'en') switchLanguage(saved);
  else switchLanguage('fr');
}

// Active page highlight in nav
function setActiveNav() {
  const path = window.location.pathname.split('/').pop() || 'index.html';
  const pageMap = {
    'index.html': 'home',
    'services.html': 'services',
    'portfolio.html': 'portfolio',
    'pricing.html': 'pricing',
    'about.html': 'about',
    'contact.html': 'contact'
  };
  const currentPage = pageMap[path] || 'home';
  document.querySelectorAll('.nav__links a').forEach(link => {
    const href = link.getAttribute('href');
    if (href && href.includes(currentPage === 'home' ? 'index.html' : currentPage + '.html')) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });
}

// Initialize everything
document.addEventListener('DOMContentLoaded', () => {
  initReveal();
  initNavScroll();
  initMobileMenu();
  initContactForm();
  initLanguageToggle();
  setActiveNav();
});