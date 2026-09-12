# Legal

Legal is not a lawyer directory — it's a **full legal services operating
platform**. It connects **client → consultation → case → documents →
contract → lawyer → law firm → notary** in one place, so a legal matter's
entire lifecycle — request, advice, representation, paperwork, and
certification — lives in one system instead of being scattered across
email threads, paper files, and phone calls.

This repository is currently a static, investor-facing demo of that product
vision — real, realistic content and a fully navigable app, with no backend
or persistence behind it yet.

## The core entities

- **Client** — a person or business seeking legal help. Has requests,
  consultations, cases, documents, and contracts tied to their profile.
- **Consultation** — a booked session with a lawyer or notary: topic,
  date/time, format (in person, call, video), notes, and outcome.
- **Case** — a legal matter being handled for a client: type (civil,
  corporate, family, criminal, etc.), status, assigned lawyer(s), timeline
  of actions, related documents, and billing.
- **Document** — a file tied to a case or client: contracts, filings,
  evidence, correspondence, court decisions, and their version history.
- **Contract** — a drafted or reviewed agreement: parties, terms, drafting
  status, approval/signature status, and the case or client it belongs to.
- **Lawyer** — a legal professional providing consultations, drafting,
  representation, and case management. Tracks specialization, experience,
  caseload, and firm affiliation.
- **Law Firm** — an organization employing lawyers, serving clients across
  cases and services, and managing its own team, service catalog, and
  operations.
- **Notary Act** — a notarization, verification, or certification event:
  document, notary, date, parties, and legal validity record.
- **Notary** — a legal professional providing notarization, certification,
  and verification services independent of representation in a case.
- **Service** — a catalog entry offered by a lawyer, firm, or notary
  (e.g. contract review, incorporation, will certification), with pricing
  and description.
- **Comment / Review** — feedback left by a client about a lawyer, firm, or
  notary after a consultation or case.

## Roles

Every person or business on the platform plays one or more of these roles.
Each has its own marketing/onboarding page (`/for-*`):

1. **Client** — finds legal help, requests consultations, and manages
   their cases, documents, and contracts.
   ([/for-clients](src/app/pages/for-clients))
2. **Lawyer** — provides consultations, manages clients and cases, prepares
   documents, represents clients, and tracks legal work.
   ([/for-lawyers](src/app/pages/for-lawyers))
3. **Law Firm** — organizes lawyers, clients, cases, services, documents,
   teams, and firm operations.
   ([/for-law-firms](src/app/pages/for-law-firms))
4. **Notary** — provides notarization, verification, certification, and
   other legally recognized document services.
   ([/for-notaries](src/app/pages/for-notaries))

## Status

Static demo, no backend or persistence yet. For contributor/developer setup
and coding conventions, see [AGENTS.md](AGENTS.md).
