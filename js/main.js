// ========== TRANSLATIONS (FR & EN) ==========
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

    // Hero (new landing page)
    'available-projects': 'Disponible pour de nouveaux projets',
    'hero-line1': 'Nous repensons',
    'hero-line2': 'les sites web obsolètes',
    'hero-line3': 'en pages génératrices',
    'hero-line4': 'de leads.',
    'hero-desc': 'Commencez par une refonte de la page d’accueil. Passez à un site complet ou à un système quand nécessaire.',
    'get-quote': 'Demander un devis',
    'conversion-label': 'Hausse conversion',

    // Credibility strip (old, but kept for reference)
    'exp-fullstack': 'Expérience Full-Stack',
    'client-satisfaction': 'Satisfaction Client',
    'conversion-boost': 'Boost de Conversion',
    'custom-platforms': 'Plateformes sur mesure',

    // Problem section (new)
    'problem-title': 'Votre site web vous freine-t-il ?',
    'start-redesign': 'Commencez par une refonte de la page d’accueil',
    'problem1-title': 'Site web obsolète',
    'problem1-desc': 'Votre identité visuelle ne correspond pas à la qualité de vos services.',
    'problem2-title': 'Pas de leads',
    'problem2-desc': 'Les visiteurs arrivent mais ne convertissent jamais car le chemin n’est pas clair.',
    'problem3-title': 'Pas visible sur Google',
    'problem3-desc': 'Structure incohérente qui vous empêche de bien vous positionner.',
    'problem4-title': 'Pages lentes',
    'problem4-desc': 'Lourdeur qui fait rebondir 40% des utilisateurs avant le chargement.',
    'problem5-title': 'Difficile à mettre à jour',
    'problem5-desc': 'Dette technique qui rend les modifications simples compliquées.',

    // Redesign focus
    'redesign-title': 'Le moyen le plus rapide d’améliorer votre site sans refonte complète.',
    'redesign-feat1': 'Coût réduit',
    'redesign-feat2': 'Livraison plus rapide',
    'redesign-feat3': 'Améliorations immédiates',
    'redesign-feat4': 'Pas de refonte complète',

    // Services bento (new)
    'services-title-new': 'Commencez avec un meilleur site. Montez en puissance quand nécessaire.',
    'services-sub': 'Nous proposons une approche modulaire de l’excellence numérique.',
    'bento1-title': 'Refonte de site web',
    'bento1-desc': 'Une intervention tactique ciblée pour moderniser vos pages principales et booster la conversion.',
    'learn-more': 'En savoir plus',
    'bento2-title': 'Automatisation & systèmes',
    'bento2-desc': 'Rationalisez vos processus métier avec des intégrations et workflows personnalisés.',
    'bento3-title': 'Constructions sur mesure',
    'bento3-desc': 'Développement de bout en bout de plateformes numériques adaptées à vos besoins spécifiques.',

    // Portfolio / Recent improvements
    'portfolio-title': 'Améliorations récentes',
    'portfolio1-title': 'Tableau de bord personnalisé',
    'portfolio1-tag': 'Outil interne',
    'portfolio1-desc': 'Reporting et suivi automatisés',
    'portfolio2-title': 'Système de réservation',
    'portfolio2-tag': 'Entreprise de services',
    'portfolio2-desc': 'Rendez-vous et rappels automatisés',
    'portfolio3-title': 'Site web professionnel',
    'portfolio3-tag': 'Petite entreprise',
    'portfolio3-desc': 'Structure claire et chargement plus rapide.',
    'portfolio4-title': 'Refonte de page d’accueil',
    'portfolio4-tag': 'Génération de leads',
    'portfolio4-desc': 'Mise en page et messages axés sur les leads.',

    // Testimonials
    'testimonials-title': 'Ce que disent nos clients',
    'testimonial1-name': 'Fondatrice',
    'testimonial1-role': 'Entreprise de services',
    'testimonial1-text': '« Délai rapide et communication claire. La refonte a rapidement amélioré nos conversions. »',
    'testimonial2-name': 'Consultant',
    'testimonial2-role': 'Indépendant',
    'testimonial2-text': '« J’ai commencé par une refonte de la page d’accueil puis j’ai étendu à un site complet. Processus fluide. »',
    'testimonial3-name': 'Propriétaire',
    'testimonial3-role': 'Commerce local',
    'testimonial3-text': '« Tarifs clairs, paiements flexibles et livraison rapide. Exactement ce dont nous avions besoin. »',

    // Pricing (landing page – reuses keys from pricing page, plus a few extras)
    'pricing-title-landing': 'Tarification simple. Pas de surprises.',
    'pricing-sub-landing': 'Investissez dans les résultats, pas dans les incertitudes.',
    'starter-name': 'Redesign',
    'starter-feat1': 'Accent sur la page d’accueil',
    'starter-feat2': 'Refonte UX/UI',
    'starter-feat3': 'Livraison en 5 jours',
    'select-plan': 'Sélectionner',
    'most-popular': 'Le plus populaire',
    'growth-name': 'Business',
    'growth-feat1': 'Site multi-pages complet',
    'growth-feat2': 'Optimisation SEO',
    'growth-feat3': 'Intégration CMS',
    'custom-name': 'Sur mesure',
    'custom-feat1': 'Applications web sur mesure',
    'custom-feat2': 'Automatisation avancée',
    'custom-feat3': 'Support prioritaire',
    'inquire': 'Demander',
    'flexible-payments-title-landing': 'Options de paiement flexibles',
    'flexible-payments-desc-landing': 'Paiements fractionnés disponibles.',
    'split-5050': '50/50',
    'split-desc': 'Payez 50% à l’avance et 50% à la livraison.',
    'milestone-payments': 'Par étape',
    'milestone-desc': 'Paiements libérés à chaque étape du projet.',
    'monthly-payments': 'Mensuel',
    'monthly-desc': 'Options de retenue pour un support continu.',

    // How it works (new)
    'process-title-new': 'Comment ça fonctionne',
    'step1-title-new': 'Parlez directement à votre développeur',
    'step1-desc-new': 'Accès direct à l’esprit technique qui construit votre projet dès le premier jour. Pas de discours commercial.',
    'step2-title-new': 'Obtenez un plan clair',
    'step2-desc-new': 'Calendrier, tarifs et options de paiement.',
    'step3-title-new': 'Construisez et révisez',
    'step3-desc-new': 'Développement itératif avec des retours toutes les 48 heures pour garantir l’alignement.',
    'step4-title-new': 'Lancement et support',
    'step4-desc-new': 'Déploiement fluide et surveillance active pour garantir le succès après le lancement.',

    // Developer profile
    'available-badge': 'Disponible pour de nouveaux projets',
    'dev-name': 'Foued Douiri',
    'dev-title': 'Développeur Full-Stack Senior',
    'dev-tag1': 'Certifié : peut tout construire',
    'dev-tag2': 'Construit les choses complexes',
    'dev-tag3': 'Oui, même ça',
    'dev-desc': 'Pas d’intermédiaire. Pas de chefs de projet. Juste une expertise technique directe pour transformer votre vision en actif numérique haute performance.',
    'timeline1-title': 'Refonte de page d’accueil',
    'timeline1-days': '3–5 jours',
    'timeline2-title': 'Site web professionnel',
    'timeline2-days': '1–2 semaines',
    'timeline3-title': 'Plateforme sur mesure',
    'timeline3-days': '2–4 semaines',
    'timeline-footer': 'Périmètre clair. Communication directe. Paiements flexibles.',

    // Final CTA
    'final-title': 'Commencez petit. Développez quand nécessaire.',
    'final-desc': 'Refonte de page d’accueil, nouveau site web, automatisation ou plateforme sur mesure — nous vous aiderons à choisir le bon point de départ.',
    'book-call': 'Réserver un appel',

    // ========== OLD KEYS (kept for other pages) ==========
    // Services section (old home preview – not used anymore, but kept for reference)
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

    // Work (old home preview – not used)
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

    // Process (old home preview – not used)
    'process-title': 'Le chemin de l\'exécution.',
    'process-desc': 'Pas de comités. Pas d\'agences lourdes. Juste une communication directe et des itérations rapides.',
    'step1-title': 'Rencontrez votre développeur',
    'step1-desc': 'Un appel introductif de 15 min pour vérifier l\'adéquation. On parle objectifs business, pas seulement code.',
    'step2-title': 'Obtenez un plan clair',
    'step2-desc': 'Vous recevez un périmètre fixe, un calendrier transparent et un prix garanti. Aucune surprise.',
    'step3-title': 'Construisez & Lancez vite',
    'step3-desc': 'Rapports de progression hebdomadaires et ligne directe Slack/WhatsApp avec la personne qui code vraiment.',

    // Pricing preview (old home preview – not used)
    'pricing-title': 'Tarifs transparents. Pas de coûts cachés.',
    'pricing-desc': 'Faites évoluer votre investissement en même temps que votre business.',
    'starter-sub': 'Parfait pour valider une idée.',
    'choose-starter': 'Choisir Starter',
    'growth-sub': 'Développez votre présence.',
    'choose-growth': 'Passer à Growth',
    'custom-sub': 'Exécution à grande échelle.',
    'contact-quote': 'Contact pour devis',
    'flexible-payments-title': 'Options de paiement flexibles disponibles',
    'flexible-payments-desc': '50% à la commande / 50% à la livraison, ou paiement mensuel.',

    // About preview (old home – not used)
    'about-title': 'Direct. Humain. Efficace.',
    'about-desc1': 'Lead Labs est centré sur l\'exécution. J\'ai remarqué que trop d\'entreprises s\'enlisent dans le "piège du conseil" — payer pour des recommandations sans jamais voir un produit qui fonctionne réellement.',
    'about-desc2': 'En engageant Lead Labs, vous travaillez directement avec moi. Pas de gestionnaires de compte, pas de développeurs juniors. Juste un expert qui sait livrer des produits générateurs de revenus.',
    'about-desc3': 'Je traite chaque projet comme s\'il s\'agissait de ma propre entreprise, en me focalisant sur le chemin le plus court vers le ROI.',
    'founder-title': 'Fondateur & Lead Dev',

    // Final CTA old
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

    // Pricing page (full)
    'pricing-hero-title': 'Ce que nous construisons',
    'pricing-hero-subtitle': 'Des sites et systèmes conçus pour générer plus de leads et fluidifier vos opérations.',
    'pricing-hero-desc': 'Commencez petit ou construisez plus grand. Nous vous aiderons à choisir.',
    'pricing-cat-entry': 'Niveau d\'entrée',
    'pricing-title-entry': 'Landing Page / Refonte de la page d\'accueil',
    'pricing-from': 'À partir de',
    'pricing-approx-entry': '~760 $ / ~3 000 zł',
    'pricing-best-for-label': 'Idéal pour',
    'pricing-best-for-entry': 'Sites web obsolètes, Nouvelles offres, Amélioration des conversions',
    'pricing-what-you-get': 'Ce que vous obtenez',
    'pricing-feat-entry1': 'Nouvelle structure de page d\'accueil',
    'pricing-feat-entry2': 'Message clair',
    'pricing-feat-entry3': 'Mise en page axée sur les leads',
    'pricing-feat-entry4': 'Placement des appels à l\'action',
    'pricing-feat-entry5': 'Chargement plus rapide',
    'pricing-timeline': 'Délai',
    'pricing-time-entry': '3–5 jours',
    'pricing-start-project': 'Commencer le projet',
    'pricing-most-popular': 'Le plus populaire',
    'pricing-cat-core': 'Solution principale',
    'pricing-title-core': 'Site web professionnel',
    'pricing-approx-core': '~1 630 $ / ~6 400 zł',
    'pricing-best-for-core': 'Petites entreprises, Sociétés de services, Startups',
    'pricing-feat-core1': '4–6 pages',
    'pricing-feat-core2': 'Page d\'accueil axée sur les leads',
    'pricing-feat-core3': 'Structure de services claire',
    'pricing-feat-core4': 'Mise en place du contact ou des réservations',
    'pricing-feat-core5': 'Structure prête pour le référencement',
    'pricing-time-core': '1–2 semaines',
    'pricing-cat-enterprise': 'Entreprise',
    'pricing-title-enterprise': 'Construction sur mesure / Automatisation',
    'pricing-approx-enterprise': '~3 260 $ / ~12 800 zł',
    'pricing-best-for-enterprise': 'Automatisation, Tableaux de bord, Systèmes de réservation, Plateformes sur mesure',
    'pricing-feat-ent1': 'Plateforme sur mesure',
    'pricing-feat-ent2': 'Configuration de l\'automatisation',
    'pricing-feat-ent3': 'Interface tableau de bord',
    'pricing-feat-ent4': 'Intégrations',
    'pricing-feat-ent5': 'Structure évolutive',
    'pricing-time-enterprise': 'Sur mesure',
    'pricing-contact-us': 'Contactez-nous',
    'pricing-standard-title': 'Inclus dans chaque projet',
    'pricing-standard-desc': 'Nous ne construisons pas seulement des sites ; nous construisons des outils prêts à l\'emploi qui performent dès le premier jour.',
    'feature1-title': 'Mise en page structurée et claire',
    'feature1-desc': 'Construite avec des hiérarchies logiques qui guident les utilisateurs exactement là où ils doivent aller.',
    'feature2-title': 'Message orienté conversion',
    'feature2-desc': 'Un texte et une structure conçus pour transformer les visiteurs en leads immédiatement.',
    'feature3-title': 'Pages à chargement rapide',
    'feature3-desc': 'Code propre et ressources optimisées pour une expérience utilisateur sans friction.',
    'feature4-title': 'Navigation simple',
    'feature4-desc': 'Des chemins intuitifs qui éliminent la confusion et réduisent les taux de rebond.',
    'feature5-title': 'Communication directe',
    'feature5-desc': 'Des lignes ouvertes tout au long de la construction. Vous parlez directement aux architectes.',
    'feature6-title': 'Déploiement inclus',
    'feature6-desc': 'Nous gérons le lancement. Mettez en ligne sans les maux de tête techniques.',
    'feature7-title': 'Structure prête pour le référencement',
    'feature7-desc': 'Un HTML sémantiquement correct que les moteurs de recherche adorent dès le premier jour.',
    'pricing-addons-title': 'Options supplémentaires',
    'addon1': 'Maintenance & Support',
    'addon2': 'Hébergement & Surveillance',
    'addon3': 'Améliorations des conversions',
    'addon4': 'Configuration de l\'automatisation',
    'pricing-how-title': 'Comment cela fonctionne',
    'pricing-how-desc': 'Un processus simple et transparent pour une exécution de haut niveau.',
    'cta-book-call': 'Réserver un appel',
    'cta-start-project': 'Commencer un projet',

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

    // Contact page
    'contact-hero-title': 'Démarrer votre projet',
    'contact-hero-subtitle': 'Choisissez comment procéder',
    'contact-hero-desc': 'Commencez rapidement, demandez un devis ou réservez un appel. Notre processus d’accueil respecte votre temps et apporte une clarté immédiate.',
    'start-now': 'Commencer maintenant',
    'book-call-hero': 'Réserver un appel',
    'card-fast-title': 'Je veux démarrer rapidement',
    'card-fast-desc': 'Je sais déjà ce dont j’ai besoin. Commencez vite et évitez les allers-retours.',
    'card-help-title': 'J’ai besoin d’aide pour le définir',
    'card-help-desc': 'Pas encore sûr ? Partagez votre idée, nous vous aiderons à définir le périmètre, le calendrier et le budget.',
    'select-path': 'Choisir cette voie',
    'start-project-title': 'Démarrer votre projet',
    'get-quote-title': 'Obtenir un devis',
    'name-label': 'Nom',
    'email-label': 'Email',
    'company-label': 'Entreprise',
    'project-type-label': 'Type de projet',
    'timeline-label': 'Calendrier',
    'budget-label': 'Budget',
    'project-details-label': 'Détails du projet',
    'project-details-quote-label': 'Détails du projet',
    'start-project-btn': 'Démarrer le projet',
    'get-quote-btn': 'Obtenir un devis',
    'website-label': 'Site Web (URL)',
    'project-type-landing': 'Page d’accueil / Landing page',
    'project-type-business': 'Site web professionnel',
    'project-type-redesign': 'Refonte complète',
    'project-type-automation': 'Automatisation',
    'project-type-custom': 'Plateforme sur mesure',
    'timeline-2-4': '2-4 semaines',
    'timeline-1-2': '1-2 mois',
    'timeline-3-plus': '3 mois ou plus',
    'consultation-pill': 'Consultation',
    'call-title': 'Vous préférez parler ?',
    'call-desc': 'Réservez un appel rapide avec votre développeur. Nous examinerons votre idée et définirons les prochaines étapes.',
    'check1': 'Introduction gratuite de 15 minutes',
    'check2': 'Discuter du périmètre',
    'check3': 'Calendrier approximatif',
    'check4': 'Prochaines étapes',
    'call-testimonial': '« Sans engagement. Juste une conversation rapide pour voir si nous sommes compatibles. »',
    'lead-dev-name': 'Développeur principal',
    'lead-dev-role': 'Disponible pour des appels de 15/30 min',
    'timezone': 'GMT +0 (Londres)',
    'pick-slot': 'Choisir un créneau',
    'roadmap-title': 'Feuille de route d’exécution',
    'step1-badge': 'Étape 01',
    'step1-title': 'Soumettre la demande',
    'step1-desc': 'Nos systèmes enregistrent vos besoins techniques dans notre file d’attente de révision immédiatement.',
    'step2-badge': 'Étape 02',
    'step2-title': 'Nous examinons et répondons',
    'step2-desc': 'Un ingénieur étudie votre brief et répond sous 24 heures avec les prochaines étapes.',
    'step3-badge': 'Étape 03',
    'step3-title': 'Nous commençons la construction',
    'step3-desc': 'Appel de lancement planifié et premier sprint de développement.',
    'final-cta-title': 'Prêt à construire ?',
    'start-project-final': 'Démarrer un projet',
    'book-call-final': 'Réserver un appel',
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

    // Hero (new landing page)
    'available-projects': 'Available for new projects',
    'hero-line1': 'We redesign',
    'hero-line2': 'outdated websites',
    'hero-line3': 'into lead-generating',
    'hero-line4': 'pages.',
    'hero-desc': 'Start with a homepage redesign. Expand to a full website or system when needed.',
    'get-quote': 'Get a Quote',
    'conversion-label': 'Conversion Increase',

    // Credibility strip
    'exp-fullstack': 'Full-Stack Experience',
    'client-satisfaction': 'Client Satisfaction',
    'conversion-boost': 'Conversion Boost',
    'custom-platforms': 'Custom Platforms',

    // Problem section
    'problem-title': 'Is your website holding you back?',
    'start-redesign': 'Start with a homepage redesign',
    'problem1-title': 'Website looks outdated',
    'problem1-desc': 'Your visual identity doesn\'t match the quality of your services.',
    'problem2-title': 'Not getting leads',
    'problem2-desc': 'Visitors land but never convert because the path isn\'t clear.',
    'problem3-title': 'Not showing up on Google',
    'problem3-desc': 'Inconsistent structure that prevents you from ranking high.',
    'problem4-title': 'Pages load slowly',
    'problem4-desc': 'Heaviness that causes 40% of users to bounce before loading.',
    'problem5-title': 'Hard to update content',
    'problem5-desc': 'Technical debt that makes simple changes a nightmare.',

    // Redesign focus
    'redesign-title': 'Fastest way to improve your website without a full rebuild.',
    'redesign-feat1': 'Lower cost',
    'redesign-feat2': 'Faster delivery',
    'redesign-feat3': 'Immediate improvements',
    'redesign-feat4': 'No full rebuild',

    // Services bento
    'services-title-new': 'Start with a better website. Scale when needed.',
    'services-sub': 'We offer a modular approach to digital excellence.',
    'bento1-title': 'Website redesign',
    'bento1-desc': 'A focused tactical intervention to modernize your core pages and boost conversion.',
    'learn-more': 'Learn More',
    'bento2-title': 'Automation & systems',
    'bento2-desc': 'Streamlining your business processes with custom integrations and workflows.',
    'bento3-title': 'Custom builds',
    'bento3-desc': 'End-to-end development of bespoke digital platforms tailored to your specific needs.',

    // Portfolio / Recent improvements
    'portfolio-title': 'Recent improvements',
    'portfolio1-title': 'Custom dashboard',
    'portfolio1-tag': 'Internal tool',
    'portfolio1-desc': 'Automated reporting and tracking',
    'portfolio2-title': 'Booking system',
    'portfolio2-tag': 'Service business',
    'portfolio2-desc': 'Automated appointments and reminders',
    'portfolio3-title': 'Business website',
    'portfolio3-tag': 'Small company',
    'portfolio3-desc': 'Clear structure and faster loading.',
    'portfolio4-title': 'Homepage redesign',
    'portfolio4-tag': 'Lead generation',
    'portfolio4-desc': 'Lead-focused layout and messaging.',

    // Testimonials
    'testimonials-title': 'What clients say',
    'testimonial1-name': 'Founder',
    'testimonial1-role': 'Service Business',
    'testimonial1-text': '"Fast turnaround and clear communication. The redesign improved our conversions quickly."',
    'testimonial2-name': 'Consultant',
    'testimonial2-role': 'Independent',
    'testimonial2-text': '"Started with a homepage redesign and later expanded to a full website. Smooth process."',
    'testimonial3-name': 'Owner',
    'testimonial3-role': 'Local Retail',
    'testimonial3-text': '"Clear pricing, flexible payments and fast delivery. Exactly what we needed."',

    // Pricing (landing page)
    'pricing-title-landing': 'Simple pricing. No surprises.',
    'pricing-sub-landing': 'Invest in results, not guesswork.',
    'starter-name': 'Redesign',
    'starter-feat1': 'Homepage focus',
    'starter-feat2': 'UX/UI overhaul',
    'starter-feat3': '5-day delivery',
    'select-plan': 'Select',
    'most-popular': 'Most Popular',
    'growth-name': 'Business',
    'growth-feat1': 'Full multi-page site',
    'growth-feat2': 'SEO Optimization',
    'growth-feat3': 'CMS Integration',
    'custom-name': 'Custom',
    'custom-feat1': 'Custom Web Apps',
    'custom-feat2': 'Advanced Automation',
    'custom-feat3': 'Priority Support',
    'inquire': 'Inquire',
    'flexible-payments-title-landing': 'Flexible payment options',
    'flexible-payments-desc-landing': 'Split payments available.',
    'split-5050': 'Split',
    'split-desc': 'Pay 50% upfront and 50% on completion.',
    'milestone-payments': 'Milestone',
    'milestone-desc': 'Payments released as we hit project goals.',
    'monthly-payments': 'Monthly',
    'monthly-desc': 'Retainer options for ongoing support.',

    // How it works
    'process-title-new': 'How it works',
    'step1-title-new': 'Talk directly with your developer',
    'step1-desc-new': 'Direct access to the technical mind building your project from day one. No sales fluff.',
    'step2-title-new': 'Get a clear plan',
    'step2-desc-new': 'Timeline, pricing and payment options.',
    'step3-title-new': 'Build and review',
    'step3-desc-new': 'Iterative development with feedback loops every 48 hours to ensure alignment.',
    'step4-title-new': 'Launch and support',
    'step4-desc-new': 'Seamless deployment and active monitoring to guarantee post-launch success.',

    // Developer profile
    'available-badge': 'Available for new projects',
    'dev-name': 'Foued Douiri',
    'dev-title': 'Senior Full-Stack Developer',
    'dev-tag1': 'Certified: can build anything',
    'dev-tag2': 'Builds the hard stuff',
    'dev-tag3': 'Yes, even that',
    'dev-desc': 'No middleman. No project managers. Just direct engineering expertise to transform your vision into a high-performance digital asset.',
    'timeline1-title': 'Homepage redesign',
    'timeline1-days': '3–5 days',
    'timeline2-title': 'Business website',
    'timeline2-days': '1–2 weeks',
    'timeline3-title': 'Custom platform',
    'timeline3-days': '2–4 weeks',
    'timeline-footer': 'Clear scope. Direct communication. Flexible payments.',

    // Final CTA
    'final-title': 'Start small. Expand when needed.',
    'final-desc': 'Homepage redesign, new website, automation or custom platform — we’ll help you choose the right starting point.',
    'book-call': 'Book a Call',

    // ========== OLD KEYS (kept for other pages) ==========
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
    'process-title': 'The path to execution.',
    'process-desc': 'No committees. No heavy agencies. Just direct communication and rapid iterations.',
    'step1-title': 'Meet Your Developer',
    'step1-desc': 'A 15-min intro call to check fit. We talk business goals, not just code.',
    'step2-title': 'Get a Clear Plan',
    'step2-desc': 'You receive a fixed scope, transparent timeline, and guaranteed price. No surprises.',
    'step3-title': 'Build & Launch Fast',
    'step3-desc': 'Weekly progress reports and direct Slack/WhatsApp line with the person who actually codes.',
    'pricing-title': 'Transparent pricing. No hidden costs.',
    'pricing-desc': 'Scale your investment as your business grows.',
    'starter-sub': 'Perfect for validating an idea.',
    'choose-starter': 'Choose Starter',
    'growth-sub': 'Expand your presence.',
    'choose-growth': 'Go to Growth',
    'custom-sub': 'Large-scale execution.',
    'contact-quote': 'Contact for Quote',
    'flexible-payments-title': 'Flexible payment options available',
    'flexible-payments-desc': '50% upfront / 50% upon delivery, or monthly payment.',
    'about-title': 'Direct. Human. Efficient.',
    'about-desc1': 'Lead Labs is built on execution. I noticed too many businesses get stuck in the "consulting trap" — paying for recommendations without ever seeing a working product.',
    'about-desc2': 'When you hire Lead Labs, you work directly with me. No account managers, no junior devs. Just an expert who knows how to deliver revenue-generating products.',
    'about-desc3': 'I treat every project as if it were my own business, focusing on the shortest path to ROI.',
    'founder-title': 'Founder & Lead Dev',
    'cta-title': 'Stop overthinking.<br>Let\'s build something that works.',
    'meet-dev-cta': 'Meet Your Developer',
    'footer-tagline': '© 2024 Lead Labs. Built for high-conversion execution.',
    'linkedin': 'LinkedIn',
    'privacy': 'Privacy',
    'terms': 'Terms',
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
    'case-studies': 'Case Studies',
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
    'pricing-hero-title': 'What we build',
    'pricing-hero-subtitle': 'Websites and systems designed to bring more leads and make things run smoother.',
    'pricing-hero-desc': 'Start small or build something bigger. We’ll help you choose.',
    'pricing-cat-entry': 'Entry Level',
    'pricing-title-entry': 'Landing Page / Homepage Redesign',
    'pricing-from': 'From',
    'pricing-approx-entry': '~$760 / ~3,000 zł',
    'pricing-best-for-label': 'Best For',
    'pricing-best-for-entry': 'Outdated websites, New offers, Improving conversions',
    'pricing-what-you-get': 'What you get',
    'pricing-feat-entry1': 'New homepage structure',
    'pricing-feat-entry2': 'Clear messaging',
    'pricing-feat-entry3': 'Lead-focused layout',
    'pricing-feat-entry4': 'CTA placement',
    'pricing-feat-entry5': 'Faster loading',
    'pricing-timeline': 'Timeline',
    'pricing-time-entry': '3–5 days',
    'pricing-start-project': 'Start Project',
    'pricing-most-popular': 'Most Popular',
    'pricing-cat-core': 'Core Solution',
    'pricing-title-core': 'Business Website',
    'pricing-approx-core': '~$1,630 / ~6,400 zł',
    'pricing-best-for-core': 'Small businesses, Service companies, Startups',
    'pricing-feat-core1': '4–6 pages',
    'pricing-feat-core2': 'Homepage focused on leads',
    'pricing-feat-core3': 'Clear service structure',
    'pricing-feat-core4': 'Contact or booking setup',
    'pricing-feat-core5': 'SEO-ready structure',
    'pricing-time-core': '1–2 weeks',
    'pricing-cat-enterprise': 'Enterprise',
    'pricing-title-enterprise': 'Custom Build / Automation',
    'pricing-approx-enterprise': '~$3,260 / ~12,800 zł',
    'pricing-best-for-enterprise': 'Automation, Dashboards, Booking systems, Custom platforms',
    'pricing-feat-ent1': 'Custom platform',
    'pricing-feat-ent2': 'Automation setup',
    'pricing-feat-ent3': 'Dashboard interface',
    'pricing-feat-ent4': 'Integrations',
    'pricing-feat-ent5': 'Scalable structure',
    'pricing-time-enterprise': 'Custom',
    'pricing-contact-us': 'Contact Us',
    'pricing-standard-title': 'Standard in every project',
    'pricing-standard-desc': "We don't just build sites; we build execution-ready tools that perform from day one.",
    'feature1-title': 'Clear structured layout',
    'feature1-desc': 'Built with logical hierarchies that guide users exactly where they need to go.',
    'feature2-title': 'Messaging for conversions',
    'feature2-desc': 'Copy and structure engineered to turn visitors into leads immediately.',
    'feature3-title': 'Faster loading pages',
    'feature3-desc': 'Clean code and optimized assets to ensure zero friction for your users.',
    'feature4-title': 'Simple navigation',
    'feature4-desc': 'Intuitive paths that eliminate confusion and reduce bounce rates.',
    'feature5-title': 'Direct communication',
    'feature5-desc': 'Open lines throughout the build. You talk directly to the architects.',
    'feature6-title': 'Deployment included',
    'feature6-desc': 'We handle the launch. Go live without the technical headache.',
    'feature7-title': 'SEO-ready structure',
    'feature7-desc': 'Semantically correct HTML that search engines love from day one.',
    'pricing-addons-title': 'Optional Add-ons',
    'addon1': 'Maintenance & Support',
    'addon2': 'Hosting & Monitoring',
    'addon3': 'Conversion Improvements',
    'addon4': 'Automation Setup',
    'pricing-how-title': 'How it works',
    'pricing-how-desc': 'A simple, transparent process for high-level execution.',
    'cta-book-call': 'Book a Call',
    'cta-start-project': 'Start Project',

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

    // Contact page
    'contact-hero-title': 'Start Your Project',
    'contact-hero-subtitle': 'Choose how you’d like to proceed',
    'contact-hero-desc': 'Start fast, request a quote, or book a call. We’ve designed our intake process to respect your time and provide immediate clarity.',
    'start-now': 'Start Now',
    'book-call-hero': 'Book a Call',
    'card-fast-title': 'I want to start fast',
    'card-fast-desc': 'I already know what I need. Start quickly and skip the back-and-forth.',
    'card-help-title': 'I need help defining it',
    'card-help-desc': 'Not sure yet? Share your idea and we’ll help define scope, timeline and pricing.',
    'select-path': 'Select path',
    'start-project-title': 'Start your project',
    'get-quote-title': 'Get a quote',
    'name-label': 'Name',
    'email-label': 'Email',
    'company-label': 'Company',
    'project-type-label': 'Project Type',
    'timeline-label': 'Timeline',
    'budget-label': 'Budget Range',
    'project-details-label': 'Project Details',
    'project-details-quote-label': 'Project Details',
    'start-project-btn': 'Start project',
    'get-quote-btn': 'Get quote',
    'website-label': 'Website URL',
    'project-type-landing': 'Landing page',
    'project-type-business': 'Business website',
    'project-type-redesign': 'Full redesign',
    'project-type-automation': 'Automation',
    'project-type-custom': 'Custom platform',
    'timeline-2-4': '2-4 Weeks',
    'timeline-1-2': '1-2 Months',
    'timeline-3-plus': '3+ Months',
    'consultation-pill': 'Consultation',
    'call-title': 'Prefer to talk?',
    'call-desc': 'Book a quick call with your developer. We’ll review your idea and define next steps.',
    'check1': 'Free 15 minute intro',
    'check2': 'Discuss scope',
    'check3': 'Rough timeline',
    'check4': 'Next steps',
    'call-testimonial': '"No commitment. Just a quick conversation to see if we’re a fit."',
    'lead-dev-name': 'Lead Developer',
    'lead-dev-role': 'Available for 15/30 min calls',
    'timezone': 'GMT +0 (London)',
    'pick-slot': 'Pick a Slot',
    'roadmap-title': 'Execution Roadmap',
    'step1-badge': 'Step 01',
    'step1-title': 'Submit request',
    'step1-desc': 'Our systems log your technical requirements into our review queue immediately.',
    'step2-badge': 'Step 02',
    'step2-title': 'We review and reply',
    'step2-desc': 'An engineer reviews your brief and responds within 24 hours with next steps.',
    'step3-badge': 'Step 03',
    'step3-title': 'We start building',
    'step3-desc': 'Kick-off call scheduled and the first development sprint begins.',
    'final-cta-title': 'Ready to build?',
    'start-project-final': 'Start project',
    'book-call-final': 'Book a Call',
  },
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