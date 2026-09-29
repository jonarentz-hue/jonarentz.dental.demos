# Demissie Dental - Modern Dental Practice Demo

A responsive dental practice web application built with React, Vite, Tailwind CSS, Express, and Google Gemini AI.

## Features

- **Online Appointment Booking**: Multi-step booking wizard with appointment type selection, doctor preference (Dr. Amy Demissie, DDS), date/time slot picker, and patient information.
- **Patient Smiles Gallery**: Interactive before-and-after smile transformation gallery with sliders and procedure details.
- **24/7 AI Dental Chatbot**: "Pearl" AI dental concierge powered by Google Gemini, capable of answering practice FAQs, treatment inquiries, insurance questions, and booking details.
- **Patient Portal**: Simulated patient dashboard with appointment history, upcoming visits, dental health records, digital forms, and billing/insurance details.
- **Emergency & Services Showcase**: Comprehensive overview of cosmetic, general, restorative, and pediatric dental treatments.
- **Office Information & Location**: San Bernardino, CA practice location with direct contact information `(909) 882-4988`.

## Tech Stack

- **Frontend**: React 19, TypeScript, Tailwind CSS v4, Lucide Icons, Motion
- **Backend / API**: Node.js, Express, tsx
- **AI Integration**: `@google/genai` (Google Gemini API)
- **Build Tool**: Vite

---

## Getting Started Locally

### 1. Prerequisites
- [Node.js](https://nodejs.org/) (v18 or higher recommended)
- `npm` or `bun`

### 2. Installation
Clone the repository and install dependencies:

```bash
git clone https://github.com/<YOUR_USERNAME>/<YOUR_REPOSITORY_NAME>.git
cd <YOUR_REPOSITORY_NAME>
npm install
```

### 3. Environment Variables
Copy `.env.example` to `.env`:

```bash
cp .env.example .env
```

Add your Google Gemini API key:
```env
GEMINI_API_KEY="your-gemini-api-key-here"
```
*(Get an API key at [Google AI Studio](https://aistudio.google.com/))*

### 4. Running the Application
Start the development server:

```bash
npm run dev
```

Open your browser at `http://localhost:3000`.

### 5. Production Build

To build the client and server for production:
```bash
npm run build
npm start
```
