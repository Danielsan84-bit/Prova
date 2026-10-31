# Analytics delle iscrizioni

Mind Haven registra il click sui link che aprono la pagina di iscrizione Systeme.io con l'evento `signup_cta_click`.

| Campo | Valori |
| --- | --- |
| `path` | `homepage`, `guida`, `sonno`, `respiro`, `focus` |
| `position` | `homepage_header`, `homepage_mobile_menu`, `homepage_hero`, `homepage_funnel`, `guide_section`, `intent_membership` |

L'evento contiene solo il percorso e la posizione del link cliccato: non invia email o altri dati personali. Misura l'interesse verso il link, non il completamento dell'iscrizione. I click verso YouTube, Spotify e Amazon Music non sono conteggiati come iscrizioni.

Per verificare le iscrizioni completate, controlla le conversioni nella dashboard di Systeme.io. Le analytics Replit registrano l'evento solo se vengono attivate nelle impostazioni di pubblicazione e l'app viene pubblicata o ripubblicata; senza queste condizioni, l'evento non viene raccolto.
