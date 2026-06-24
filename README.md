# MediTrust

MediTrust is a full-stack medical literature review platform that converts clinical research questions into structured evidence reports. It retrieves PubMed articles, evaluates evidence quality with transparent scoring, summarizes consensus and contradictions, and exports PDF summaries.

## Features

- Search PubMed using NCBI E-utilities
- Expand clinical queries for broader literature retrieval
- Score article quality by study design, source credibility, sample size, and recency
- Plain-language topic explanations powered by Groq
- Identify consensus, contradictions, and uncertainty across abstracts
- Generate downloadable PDF evidence reports
- Responsive React dashboard with search, pipeline status, results review, and downloads

## Tech Stack

- Backend: Python, FastAPI, Pydantic, httpx, ReportLab
- Frontend: React, TypeScript, Vite, Tailwind CSS
- Data: PubMed / NCBI E-utilities
- Optional LLM: Groq via LangChain

## Getting Started

### Prerequisites

- Python 3.11+
- Node.js 18+

### Backend

```powershell
cd meditrust
python -m venv .venv
.venv\Scripts\activate
pip install -r requirements.txt
copy .env.example .env
# Edit .env and add your GROQ_API_KEY (optional)
uvicorn backend.app.main:app --reload --host 127.0.0.1 --port 8000
```

Or run `start_backend.bat`.

### Frontend

Open a second terminal:

```powershell
cd frontend
npm install
npm run dev
```

Open the app at `http://localhost:5173`.

API documentation is available at `http://localhost:8000/docs`.

## Environment

Create a `.env` file from `.env.example` and configure the variables below.

```env
GROQ_API_KEY=
GROQ_MODEL=llama-3.3-70b-versatile
GROQ_SUGGEST_MODEL=llama-3.1-8b-instant
REPORTS_DIR=data/reports
PDF_DIR=data/pdfs
```

The `GROQ_API_KEY` is optional. Without it, MediTrust uses PubMed retrieval with deterministic scoring and local fallbacks. With a key, Groq enriches topic summaries, bias notes, and contradiction detection.

## Notes

- Do not commit `.env`, generated reports, virtual environments, or dependency folders.
- The backend exposes OpenAPI docs at `/docs`.
- The frontend serves from Vite and communicates with the backend via the `/api` proxy.

## Disclaimer

MediTrust is intended for research review and literature summarization. It is not medical advice and should not be used as a substitute for professional clinical judgment.
