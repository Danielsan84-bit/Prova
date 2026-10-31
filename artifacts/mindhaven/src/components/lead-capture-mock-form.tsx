import { useState, type FormEvent } from 'react';
import { ArrowRight, Check } from 'lucide-react';

export default function LeadCaptureMockForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    event.currentTarget.reset();
    setSubmitted(true);
  }

  return (
    <form className="mh-mock-form" data-testid="mock-email-form" onSubmit={handleSubmit}>
      {submitted ? (
        <div className="mh-mock-form-success" role="status" aria-live="polite">
          <span className="mh-mock-form-success-icon"><Check size={18} /></span>
          <p className="mh-mock-form-eyebrow">ANTEPRIMA · INVIO SIMULATO</p>
          <h3>Il modulo è pronto.</h3>
          <p>Questa demo non ha salvato né inviato la tua email.</p>
          <button type="button" className="mh-mock-form-reset" onClick={() => setSubmitted(false)}>
            Rivedi il modulo
          </button>
        </div>
      ) : (
        <>
          <div className="mh-mock-form-heading">
            <p className="mh-mock-form-eyebrow">AUDIO GRATUITO · MEDITAZIONE GUIDATA</p>
            <h3>La tua pratica del mattino,<br /><em>nella tua email.</em></h3>
            <p>Una voce ti accompagna in una meditazione guidata in italiano, da ascoltare al tuo ritmo.</p>
          </div>

          <label className="mh-mock-form-label" htmlFor="mh-mock-email">Indirizzo email</label>
          <input
            className="mh-mock-form-input"
            id="mh-mock-email"
            name="email"
            type="email"
            autoComplete="email"
            placeholder="nome@esempio.it"
            required
            aria-describedby="mh-mock-form-note"
          />
          <button className="mh-mock-form-submit" type="submit">
            Ricevi la meditazione gratuita <ArrowRight size={16} />
          </button>
          <p className="mh-mock-form-note" id="mh-mock-form-note">
            Nessuno spam. Anteprima: i dati non vengono inviati né salvati.
          </p>
        </>
      )}
    </form>
  );
}
