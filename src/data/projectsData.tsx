import React from 'react';

export interface SubCategory {
  title: string;
  githubUrl: string;
  liveUrl?: string;
}

export interface Project {
  id: string;
  title: string;
  category: 'aiml' | 'fullstack';
  description: string;
  purpose: string;
  tech: string[];
  challenges: string[];
  solutions: string[];
  liveUrl?: string;
  githubUrl?: string;
  thumbnailGradients: string;
  graphicCode: React.ReactNode;
  subCategories?: SubCategory[];
}

export const projectsData: Project[] = [
  {
    id: 'cricket-iq',
    title: 'CricketIQ',
    category: 'aiml',
    description: 'Enterprise-grade SaaS combining advanced cricket data analytics with a LangChain RAG pipeline, multi-modal voice interaction, and real-time match simulations.',
    purpose: 'CricketIQ was engineered to unify unstructured sports data with conversational intelligence. It allows users to query custom cricket documents (scorecards/articles) via dense vector similarity searches, compare head-to-head metrics using interactive radar maps, and view live match simulations with real-time AI-predicted win probabilities.',
    tech: ['React.js', 'FastAPI', 'Python', 'LangChain', 'Google Gemini API', 'ChromaDB', 'PostgreSQL', 'Tailwind CSS', 'Recharts'],
    challenges: [
      'Advanced RAG Integration: Correctly splitting and indexing complex unstructured cricket documents to perform sub-second semantic search queries without hallucinating statistics.',
      'Isolated PDF Ingestion: Allowing users to upload custom PDF match logs and scorecards, ensuring queries are strictly bounded within that document rather than global database context.',
      'Real-Time Match Simulation: Ticking run rates, batsman strike rates, and AI-predicted win probabilities dynamically in the background every 8 seconds without UI rendering lag.'
    ],
    solutions: [
      'Designed a LangChain pipeline pairing HuggingFace Sentence Transformers (all-MiniLM-L6-v2) for 384-dimensional dense embeddings with a local ChromaDB instance to perform high-speed cosine similarity retrieval.',
      'Configured separate temporary vector collections in ChromaDB on a per-document basis, bounded by user session tokens, allowing isolated document-centric Q&A.',
      'Structured an asynchronous background task runner in FastAPI that recalculates match probabilities and pushes state updates to the React client via Axios JSON queries.'
    ],
    liveUrl: 'https://cricket-iq-lime.vercel.app/',
    githubUrl: 'https://github.com/alubillijyaneswarrao-creator/CricketIQ',
    thumbnailGradients: 'from-emerald-700 to-teal-800',
    graphicCode: (
      <svg viewBox="0 0 100 60" className="w-full h-full text-white/20 fill-current">
        <path d="M12 48 L48 12 A3 3 0 0 1 52 16 L16 52 A3 3 0 0 1 12 48 Z" stroke="currentColor" strokeWidth="1.5" fill="none" />
        <circle cx="56" cy="18" r="3" stroke="currentColor" strokeWidth="1.5" fill="none" />
        <rect x="68" y="32" width="6" height="18" rx="1" />
        <rect x="78" y="22" width="6" height="28" rx="1" />
        <rect x="88" y="12" width="6" height="38" rx="1" />
        <path d="M60 45 L68 35 L78 30 L88 20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
        <circle cx="60" cy="45" r="1.5" />
        <circle cx="68" cy="35" r="1.5" />
        <circle cx="78" cy="30" r="1.5" />
        <circle cx="88" cy="20" r="1.5" />
      </svg>
    )
  },
  {
    id: 'turing-body',
    title: 'Turing Body',
    category: 'aiml',
    description: 'AI-powered clinical diagnostic system for detecting Multiple Sclerosis (MS) from biometric logs and telemetry data, optimizing early intervention timelines.',
    purpose: 'Turing Body was built as a final-year project to solve a critical healthcare challenge: early and accurate detection of Multiple Sclerosis (MS). Traditional diagnostics require expensive MRIs and lumbar punctures. This system uses machine learning classifiers to analyze non-invasive biometric telemetry logs and cognitive performance scores, identifying MS indicators early to optimize treatment timelines.',
    tech: ['Python', 'TensorFlow', 'Scikit-learn', 'React.js', 'FastAPI', 'Pandas'],
    challenges: [
      'Class Imbalance: MS clinical datasets are highly imbalanced, with very few positive diagnoses compared to control groups.',
      'High-Dimensional Biometric Logs: Handling multi-variate telemetry feeds containing noise and missing data points.',
      'Low-Latency Diagnostic Inference: Connecting the python-based deep learning backend with a responsive web dashboard without delays.'
    ],
    solutions: [
      'Implemented SMOTE (Synthetic Minority Over-sampling Technique) and class weight tuning in TensorFlow to balance training bias.',
      'Designed a robust data preprocessing pipeline utilizing K-Nearest Neighbors (KNN) imputation and Z-score normalization.',
      'Connected React with FastAPI using streaming JSON response bodies and cached ML model weights in memory.'
    ],
    liveUrl: 'https://ai-ms-detection-system.vercel.app/',
    githubUrl: 'https://github.com/alubillijyaneswarrao-creator/ai-ms-detection-system',
    thumbnailGradients: 'from-blue-700 to-indigo-800',
    graphicCode: (
      <svg viewBox="0 0 100 60" className="w-full h-full text-white/20 fill-current">
        <path d="M10 30h15l5-15l5 30l5-20l5 10l5-5h40" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
        <circle cx="50" cy="30" r="4" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="70" cy="30" r="4" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="90" cy="30" r="4" stroke="currentColor" strokeWidth="1.5" />
        <line x1="50" y1="30" x2="70" y2="30" stroke="currentColor" strokeWidth="1.2" />
        <line x1="70" y1="30" x2="90" y2="30" stroke="currentColor" strokeWidth="1.2" />
      </svg>
    )
  },
  {
    id: 'internseed',
    title: 'InternSeed',
    category: 'fullstack',
    description: 'Startup internship portal connecting students with internship roles. Features multi-role authentication, application pipelines, and recruiter dashboards.',
    purpose: 'InternSeed (formerly InternPulse) is an enterprise MERN-stack application built to solve the disjointed hiring pipeline between early-stage startup founders and student interns. It offers students a structured profile setup to showcase achievements and provides recruiters with a unified dashboard to screen applications, schedule evaluations, and issue offer letters.',
    tech: ['MongoDB', 'Express.js', 'React.js', 'Node.js', 'JWT Auth', 'Tailwind CSS'],
    challenges: [
      'Role-Based Application Access: Managing secure routes and data structures for completely distinct student and recruiter user flows.',
      'Real-time Pipelines: Updating candidate status across recruiter stages (applied, interviewing, accepted) instantly.',
      'Performance Optimization: Database search indexing for thousands of internship posts with complex filters.'
    ],
    solutions: [
      'Implemented secure JWT-based cookie authorization, verified through Node middleware checks, to handle roles.',
      'Configured React-Query hooks with cached polling to trigger automated dashboard re-renders upon state updates.',
      'Designed composite indexing in MongoDB across location, tech tags, and company listings, dropping search times by 80%.'
    ],
    liveUrl: 'https://internpulse-fullstack.vercel.app/',
    githubUrl: 'https://github.com/alubillijyaneswarrao-creator/internpulse-fullstack',
    thumbnailGradients: 'from-blue-600 to-indigo-700',
    graphicCode: (
      <svg viewBox="0 0 100 60" className="w-full h-full text-white/20 fill-current">
        <rect x="5" y="5" width="90" height="50" rx="4" stroke="currentColor" strokeWidth="1.5" fill="none" />
        <line x1="5" y1="15" x2="95" y2="15" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="12" cy="10" r="1.5" />
        <circle cx="17" cy="10" r="1.5" />
        <circle cx="22" cy="10" r="1.5" />
        <rect x="15" y="22" width="30" height="8" rx="2" stroke="currentColor" strokeWidth="1" fill="none" />
        <rect x="15" y="34" width="70" height="15" rx="2" stroke="currentColor" strokeWidth="1" fill="none" />
        <circle cx="75" cy="26" r="3" />
      </svg>
    )
  },
  {
    id: 'cipher-trace',
    title: 'Cipher-Trace',
    category: 'aiml',
    description: 'AI-powered online harassment detection system using Natural Language Processing (NLP) models to classify toxic comments and alert moderators.',
    purpose: 'Cipher-Trace was developed to combat online cyberbullying and toxic messages. Utilizing NLP classification techniques, the system scans text entries in real-time, categorizing them into toxic subclasses (insult, threat, hate speech) and instantly notifying moderators to automate content safety.',
    tech: ['Python', 'NLP', 'Streamlit', 'Scikit-learn', 'TF-IDF', 'Pandas'],
    challenges: [
      'Sarcasm & Contextual Insults: Correctly identifying toxic remarks that lack explicit swear words but carry malicious intent.',
      'Lightweight Deployability: Shipping machine learning models to the web without needing expensive, high-spec virtual machines.',
      'Dataset Overlap: Resolving classifier ambiguities where neutral discussions overlap with toxic vocabulary.'
    ],
    solutions: [
      'Trained an ensemble classifier pairing Logistic Regression with TF-IDF n-grams to capture contextual word combinations.',
      'Built and hosted the front-end directly via Streamlit Community Cloud, loading optimized serialized model files (Pickle).',
      'Configured custom confidence probability thresholds to flag ambiguous phrases for human review rather than absolute rejection.'
    ],
    liveUrl: 'https://cipher-trace-harassment.streamlit.app/',
    githubUrl: 'https://github.com/alubillijyaneswarrao-creator/Cipher-trace',
    thumbnailGradients: 'from-cyan-600 to-blue-700',
    graphicCode: (
      <svg viewBox="0 0 100 60" className="w-full h-full text-white/20 fill-current">
        <circle cx="50" cy="30" r="22" stroke="currentColor" strokeWidth="1.5" fill="none" />
        <path d="M38 30L46 38L62 22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
        <line x1="10" y1="10" x2="30" y2="20" stroke="currentColor" strokeWidth="1" />
        <line x1="90" y1="10" x2="70" y2="20" stroke="currentColor" strokeWidth="1" />
        <line x1="10" y1="50" x2="30" y2="40" stroke="currentColor" strokeWidth="1" />
        <line x1="90" y1="50" x2="70" y2="40" stroke="currentColor" strokeWidth="1" />
      </svg>
    )
  },
  {
    id: 'infrawatchx',
    title: 'InfraWatchX',
    category: 'aiml',
    description: 'Computer Vision surveillance and occupancy monitoring platform leveraging YOLO models to detect threats and manage security logs.',
    purpose: 'InfraWatchX is a computer vision surveillance and classroom tracking suite designed to provide real-time spatial monitoring. Powered by YOLO detection models, the system scans live video feeds to track occupancy levels, identify security threats (like unauthorized intrusions), and construct database safety logs.',
    tech: ['Python', 'YOLO v8', 'OpenCV', 'IP camera feeds', 'NumPy'],
    challenges: [
      'IP Camera Stream Latency: Processing high-definition camera feeds over RTSP protocols without accumulating frames.',
      'Dynamic Lighting Clutter: Minimizing false-positive object detections caused by shifting shadows or reflections.',
      'Logging Scale: Storing intrusion timestamps and logging files in an organized database without disk memory congestion.'
    ],
    solutions: [
      'Structured a multi-threaded Python framework separating video ingestion (RTSP) from YOLO inference queues.',
      'Applied frame difference background subtraction filters to ignore stationary environments and only evaluate motion.',
      'Implemented a circular logging database system that stores log history while writing lightweight metadata tables.'
    ],
    githubUrl: 'https://github.com/alubillijyaneswarrao-creator/IXai-smart-classroom-monitoring',
    thumbnailGradients: 'from-emerald-600 to-cyan-700',
    graphicCode: (
      <svg viewBox="0 0 100 60" className="w-full h-full text-white/20 fill-current">
        <rect x="25" y="10" width="50" height="40" rx="3" stroke="currentColor" strokeWidth="1.5" fill="none" />
        <circle cx="50" cy="30" r="10" stroke="currentColor" strokeWidth="1.5" fill="none" />
        <circle cx="50" cy="30" r="3" />
        <path d="M15 15L25 15M15 15V25" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M85 15L75 15M85 15V25" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M15 45L25 45M15 45V35" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M85 45L75 45M85 45V35" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    )
  },
  {
    id: 'raw-fitness',
    title: 'RAW Fitness Platform',
    category: 'fullstack',
    description: 'Fully responsive fitness management platform featuring secure JWT authentication, progress tracking, and user exercise challenges.',
    purpose: 'RAW Fitness is a full-featured fitness ecosystem designed to replace generic workout trackers. It gives users a responsive landing interface to set up exercise routines, track calorie burns over time, join challenges, and visualize their progress with metrics dashboards.',
    tech: ['MongoDB', 'Express.js', 'React.js', 'Node.js', 'JWT', 'CSS3 / Chart.js'],
    challenges: [
      'Dynamic Analytics Rendering: Re-drawing calorie charts dynamically as users log new exercise data without reloading page context.',
      'Secure Authentication Cookie Management: Storing authentication states safely against Cross-Site Scripting (XSS) attacks.',
      'Mobile Layout Responsiveness: Displaying data-heavy progress tables and complex graphs across narrow smartphone screens.'
    ],
    solutions: [
      'Used Chart.js connected to React state hooks, forcing chart instances to update datasets without full re-mounts.',
      'Configured HTTP-only cookie parameters for secure JWT storage, protecting tokens from browser JavaScript scripts.',
      'Designed modular CSS grid panels with horizontal scroll scopes for dashboard tables, maintaining mobile layout flow.'
    ],
    liveUrl: 'https://rawchallenges.netlify.app/?fbclid=PAVERFWASZNRNleHRuA2FlbQIxMABzcnRjBmFwcF9pZA8xMjQwMjQ1NzQyODc0MTQAAadRQZIBDuVG0SI_tGgVwYHo3hJIBHB08CsYpJ2ebq6c9j8aVTFNNra_L9FWew_aem_4C_fUVs6_v_MqXXgiekYaw',
    githubUrl: 'https://github.com/alubillijyaneswarrao-creator/RAW2',
    thumbnailGradients: 'from-amber-600 to-red-700',
    graphicCode: (
      <svg viewBox="0 0 100 60" className="w-full h-full text-white/20 fill-current">
        <line x1="20" y1="30" x2="80" y2="30" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
        <rect x="12" y="20" width="8" height="20" rx="2" stroke="currentColor" strokeWidth="1.5" />
        <rect x="80" y="20" width="8" height="20" rx="2" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="50" cy="18" r="6" stroke="currentColor" strokeWidth="1" fill="none" />
        <path d="M42 45C45 42 55 42 58 45" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" fill="none" />
      </svg>
    )
  },
  {
    id: 'traveloop',
    title: 'Traveloop',
    category: 'fullstack',
    description: 'Dynamic travel route optimizer built for Odoo Hackathon 2026. Optimizes travel loops, routing structures, and itinerary plans.',
    purpose: 'Traveloop is a custom route optimization application developed during the Odoo Hackathon 2026. Designed to help users plan trips efficiently, the system solves complex spatial routing issues, scheduling optimal stops and loops to cut travel costs and minimize times.',
    tech: ['Python', 'Odoo Framework', 'JavaScript', 'PostgreSQL', 'XML Views'],
    challenges: [
      'The Travelling Salesperson Problem (TSP): Structuring an optimal routing algorithm that computes sequence solutions in milliseconds.',
      'Odoo Custom Views Integration: Designing responsive user layouts within Odoo\'s strict XML template system.',
      'Dynamic Coordinate Feeds: Mapping geocoding coordinates to Odoo models.'
    ],
    solutions: [
      'Implemented a nearest-neighbor heuristics solver in Python to compute travel sequences, minimizing computation times.',
      'Inherited and extended base Odoo web clients, layering customized JavaScript interfaces to handle rich interactive maps.',
      'Configured custom coordinates fields that parse location responses from spatial APIs directly into travel loops.'
    ],
    githubUrl: 'https://github.com/alubillijyaneswarrao-creator/Traveloop-odoo-Hackathon-2026-',
    thumbnailGradients: 'from-indigo-600 to-purple-700',
    graphicCode: (
      <svg viewBox="0 0 100 60" className="w-full h-full text-white/20 fill-current">
        <path d="M15 30C25 15 45 45 60 20C75 35 85 15 85 15" stroke="currentColor" strokeWidth="1.5" fill="none" strokeDasharray="3 3" />
        <circle cx="15" cy="30" r="3" />
        <circle cx="85" cy="15" r="3" />
        <circle cx="60" cy="20" r="3" />
        <circle cx="45" cy="45" r="3" />
      </svg>
    )
  },
  {
    id: 'ai-mini-gpts',
    title: 'AI Mini GPTs',
    category: 'aiml',
    description: 'Suite of three specialized AI agents evaluating coding sandbox runs, documents research, and startup metrics.',
    purpose: 'AI Mini GPTs is a multi-agent system containing three custom LLM evaluators. The suite includes: 1) Coding Interview Agent (sandbox code logic analyzer), 2) Research Agent (document survey and retrieval), and 3) Startup Validator (product metrics assessment).',
    tech: ['Python', 'LLM APIs', 'LangChain', 'Prompt Engineering', 'Streamlit'],
    challenges: [
      'Multi-Agent State Management: Passing context and memory across independent agents without creating chat loops.',
      'Hallucination Safeguards: Preventing the agents from inventing metrics when validating startup concepts.',
      'Rate Limit Congestion: Managing consecutive API calls to Gemini and OpenAI backends without getting locked out.'
    ],
    solutions: [
      'Configured a central supervisor agent using LangChain StateGraph to delegate tasks and track memory variables.',
      'Used strict JSON schemas in system instructions, forcing models to only output data based on input documents.',
      'Structured asynchronous throttling queues that batch requests and spread API calls to stay within limits.'
    ],
    githubUrl: 'https://github.com/alubillijyaneswarrao-creator',
    thumbnailGradients: 'from-rose-600 to-pink-700',
    graphicCode: (
      <svg viewBox="0 0 100 60" className="w-full h-full text-white/20 fill-current">
        <rect x="10" y="10" width="22" height="40" rx="3" stroke="currentColor" strokeWidth="1" fill="none" />
        <rect x="39" y="10" width="22" height="40" rx="3" stroke="currentColor" strokeWidth="1" fill="none" />
        <rect x="68" y="10" width="22" height="40" rx="3" stroke="currentColor" strokeWidth="1" fill="none" />
        <circle cx="21" cy="20" r="2" />
        <circle cx="50" cy="20" r="2" />
        <circle cx="79" cy="20" r="2" />
      </svg>
    )
  },
  {
    id: 'disease-predictions',
    title: 'Disease Predictions using ML',
    category: 'aiml',
    description: 'Comprehensive suite of Machine Learning models predicting biometric diagnostics, housing costs, sales margins, and Titanic survival stats.',
    purpose: 'This project represents a unified suite of predictive models exploring classification, regression, and clustering algorithms. The models range from medical diagnostics (heart disease detection, diabetes predictions) to financial and history datasets (housing price estimation, Titanic survival models).',
    tech: ['Python', 'Scikit-learn', 'Streamlit', 'Pandas', 'Matplotlib'],
    challenges: [
      'Diverse Data Structures: Organizing raw, heterogeneous files (biometric tables, housing values, text logs) into standard models.',
      'Feature Selection: Eliminating redundant variables to prevent model overfitting in linear regressions.',
      'Unified Serving: Launching six distinct predictive models under a single web frontend without crash issues.'
    ],
    solutions: [
      'Built a centralized pandas processing pipeline that standardizes scales, imputes values, and encodes columns.',
      'Applied Recursive Feature Elimination (RFE) to identify core features, optimizing predictions.',
      'Designed a modular Streamlit wrapper that dynamically loads the appropriate pre-trained model weights based on tab choices.'
    ],
    thumbnailGradients: 'from-violet-600 to-indigo-800',
    graphicCode: (
      <svg viewBox="0 0 100 60" className="w-full h-full text-white/20 fill-current">
        <path d="M10 50 L30 30 L50 40 L70 15 L90 25" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
        <circle cx="30" cy="30" r="3" />
        <circle cx="70" cy="15" r="3" />
      </svg>
    ),
    subCategories: [
      {
        title: '1. Heart Disease Detection',
        githubUrl: 'https://github.com/alubillijyaneswarrao-creator/HeartDiseaseDetection',
        liveUrl: 'https://heartdiseasedetectionbyjyanesh.streamlit.app/'
      },
      {
        title: '2. House Price Prediction',
        githubUrl: 'https://github.com/alubillijyaneswarrao-creator/house-price-prediction-ml'
      },
      {
        title: '3. Diabetic Prediction',
        githubUrl: 'https://github.com/alubillijyaneswarrao-creator/Diabetes-Prediction-Project'
      },
      {
        title: '4. Sales Prediction (Linear Regression)',
        githubUrl: 'https://github.com/alubillijyaneswarrao-creator/Sales-Prediction-Using-Linear-Regression'
      },
      {
        title: '5.1 Titanic Unsupervised Learning',
        githubUrl: 'https://github.com/alubillijyaneswarrao-creator/Titanic-Unsupervised-Learning-Project'
      },
      {
        title: '5.2 Titanic Survival Prediction',
        githubUrl: 'https://github.com/alubillijyaneswarrao-creator/Titanic-Survival-Predict'
      }
    ]
  }
];
