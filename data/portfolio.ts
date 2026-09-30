export type Project = {
  slug: string;
  eyebrow: string;
  title: string;
  shortTitle: string;
  summary: string;
  tags: string[];
  challenge: string;
  approach: string[];
  contributions: string[];
  outcome: string;
  relatedPublication?: string;
  relatedPublicationLink?: string;
  relatedPublications?: {
    title: string;
    venue: string;
    href: string;
  }[];
  githubUrl?: string;
  coverImage?: string;
  coverAlt?: string;
  paperVisuals?: {
    label: string;
    title: string;
    src: string;
    alt: string;
    description: string;
  }[];
};

export const siteConfig = {
  name: "Khadija Shaheen",
  title: "AI & Software Engineer | Researcher",
  specialties: "Artificial Intelligence • Machine Learning • LLMs • Cloud & Data Engineering",
  email: "shaheenkhadija162@gmail.com",
  location: "Norway",
  url: "https://Khadija162.github.io",
  linkedin: "https://www.linkedin.com/in/khadija-shaheen-bb03ab1bb",
  github: "https://github.com/Khadija162",
  scholar: "https://scholar.google.com/citations?user=pz6EykYAAAAJ&hl=en&oi=ao",
};

export const expertise = [
  {
    number: "01",
    title: "Artificial Intelligence",
    text: "Machine Learning • Deep Learning • Anomaly Detection",
  },
  {
    number: "02",
    title: "Generative AI & LLMs",
    text: "LLMs • RAG • Multimodal AI • Knowledge Extraction",
  },
  {
    number: "03",
    title: "Software Engineering",
    text: "Architecture • Backend • APIs • Distributed Systems",
  },
  {
    number: "04",
    title: "Cloud & Data Engineering",
    text: "AWS • Azure • Data Pipelines • ETL • Deployment",
  },
];

export const projects: Project[] = [
  {
    slug: "rag-net-multimodal-recovery",
    eyebrow: "Graph Artificial Intelligence (AI) + Multimodal Imputation",
    title: "ReG-Net: Retrieval-Enhanced Graph Networks",
    shortTitle: "ReG-Net",
    summary:
      "ReG-Net is a retrieval-enhanced graph framework for recovering missing numerical, categorical and textual information in heterogeneous datasets. It combines language-model embeddings, graph and cross-modal attention, memory-augmented retrieval and modality-aware output heads for robust multimodal imputation.",
    tags: ["Graph Neural Networks", "Multimodal AI", "Retrieval-Enhanced Memory", "Missing Data", "Hydrogen Safety"],
    challenge:
      "Real-world industrial datasets often contain incomplete numerical measurements, categorical fields and free-text narratives at the same time. ReG-Net addresses this heterogeneous missing-data problem using the Hydrogen Incidents and Accidents Database (HIAD) 2.1 as a key application, where incomplete records can weaken risk analysis and downstream decision-making.",
    approach: [
      "Map numerical, categorical and textual attributes into a shared semantic space using a lightweight pretrained language model (PLM) and modality-aware projections.",
      "Represent attributes as graph nodes and combine intra-modality graph attention with cross-modal attention to capture structural and semantic dependencies.",
      "Retrieve contextual information from modality-specific memory banks and fuse it with the current representation through a gated memory-augmentation mechanism.",
      "Use modality-specific output heads for regression, classification and text generation, together with adaptive loss reweighting for missingness, imbalance and numerical bias.",
    ],
    contributions: [
      "First-author and corresponding-author research on ReG-Net",
      "Multimodal graph and retrieval-enhanced framework development",
      "Evaluation on HIAD 2.1 and additional benchmark datasets",
      "Open-source implementation and publication in the Institute of Electrical and Electronics Engineers (IEEE) Transactions on Knowledge and Data Engineering (TKDE)",
    ],
    outcome:
      "Published in IEEE Transactions on Knowledge and Data Engineering. Across MCAR, MAR and MNAR missingness settings, ReG-Net maintains strong numerical, categorical and textual reconstruction performance, and the paper reports competitive results across additional benchmark datasets beyond hydrogen safety.",
    relatedPublication:
      "ReG-Net: Retrieval-Enhanced Graph Networks for Robust Multimodal Missing Data Recovery",
    relatedPublicationLink: "https://doi.org/10.1109/TKDE.2026.3717320",
    githubUrl: "https://github.com/Khadija162/RegNet_1",
    coverImage: "/images/regnet/figure-1-regnet-architecture.png",
    coverAlt: "ReG-Net architecture for multimodal missing-data recovery",
    paperVisuals: [
      {
        label: "Table I",
        title: "Illustrative multimodal missing data in HIAD records",
        src: "/images/regnet/table-1-hiad-missing-data.png",
        alt: "Table I showing incomplete numerical, categorical and textual fields in HIAD records",
        description:
          "The paper begins with simplified HIAD examples in which release pressure, application type, consequence type and event descriptions are only partially observed. The table motivates multimodal imputation: information available in one modality can provide context for reconstructing values missing in another.",
      },
      {
        label: "Figure 1",
        title: "ReG-Net architecture",
        src: "/images/regnet/figure-1-regnet-architecture.png",
        alt: "Figure 1 workflow of ReG-Net from incomplete database to imputed database",
        description:
          "ReG-Net first embeds numerical, categorical and textual attributes into a common semantic space. Missing attributes are initialized using modality-specific memory retrieval, then refined through intra-modality graph aggregation and cross-modal attention. A memory-augmented retrieval block with gated fusion adds contextual information before modality-aware heads reconstruct text, numerical values and categories.",
      },
      {
        label: "Figure 2",
        title: "Robustness across missing completely at random (MCAR), missing at random (MAR), and missing not at random (MNAR)",
        src: "/images/regnet/figure-2-missingness-performance.png",
        alt: "Figure 2 showing ReG-Net performance across MCAR MAR and MNAR at different missing ratios",
        description:
          "The figure evaluates ReG-Net as the missing ratio increases under MCAR, MAR and MNAR conditions. Numerical mean absolute error (MAE) changes only moderately, categorical F1-score remains strongest under MCAR and MAR while MNAR is more difficult, and textual bilingual evaluation understudy (BLEU) stays comparatively stable. The paper uses these results to show robustness beyond purely random missingness assumptions.",
      },
      {
        label: "Figure 3",
        title: "Generalization across additional benchmark datasets",
        src: "/images/regnet/figure-3-benchmark-performance.png",
        alt: "Figure 3 comparing ReG-Net with baselines on Adult, Airbnb, New York City Motor Vehicle Crash and Australian Credit datasets",
        description:
          "ReG-Net is also evaluated on Adult, Airbnb Listings, New York City (NYC) Motor Vehicle Crash and Australian Credit under MCAR with a 0.3 missing ratio. The comparison shows competitive numerical error and categorical F1-score performance together with strong textual BLEU where text attributes are available, supporting the framework's applicability beyond the hydrogen incident domain.",
      },
    ],
  },
  {
    slug: "enterprise-multi-agent-ai-platform",
    eyebrow: "Agentic AI + Enterprise Software",
    title: "Enterprise Multi-Agent AI Platform",
    shortTitle: "Enterprise Multi-Agent AI Platform",
    summary:
      "A full-stack enterprise AI platform that coordinates specialized agents, retrieval-augmented generation (RAG), governed tool execution, human approvals and persistent mission state through a production-oriented control plane.",
    tags: ["Multi-Agent AI", "Enterprise RAG", "FastAPI", "React + TypeScript", "Human-in-the-Loop", "PostgreSQL + pgvector"],
    challenge:
      "Enterprise agentic systems need more than a collection of prompts. They require secure identity and authorization, reliable orchestration, grounded knowledge retrieval, persistent execution state, approval gates for sensitive actions, observability and deployment-ready software boundaries. This project packages those concerns into one end-to-end platform that can run locally with deterministic development components and extend to production LLM providers and infrastructure.",
    approach: [
      "Coordinate a Supervisor with specialized Research, Analyst, Architect, Software Engineer, Security/Compliance, Communication and Operations agents for multi-step missions.",
      "Ground agent work with enterprise retrieval-augmented generation using knowledge ingestion, local deterministic embeddings for zero-cost development and PostgreSQL with pgvector for vector storage.",
      "Pause deploy, send, delete and execute-style missions at human approval gates, then resume the same persistent workflow only after authorization.",
      "Persist mission plans, individual agent outputs, execution events, approvals, results, failures and audit history so workflows are inspectable and recoverable.",
      "Expose the platform through a FastAPI backend and a React + TypeScript control plane, with PostgreSQL/pgvector, Redis, Docker Compose, CI and deployment-hardening guidance.",
      "Abstract LLM access behind deterministic mock and OpenAI providers so development and testing do not depend on paid model calls.",
    ],
    contributions: [
      "Implemented the complete full-stack repository and system architecture",
      "Built authentication, JWT-based access control, Argon2 password hashing, role-based authorization and audit logging",
      "Implemented multi-agent orchestration, enterprise RAG, approval/resume workflows and persistent mission execution state",
      "Built the React + TypeScript control plane for missions, live execution trace, agents, knowledge, approvals and audits",
      "Containerized frontend, backend, PostgreSQL/pgvector and Redis with Docker Compose and added GitHub Actions continuous integration",
      "Added backend integration tests covering authentication, RAG ingestion, multi-agent execution, event persistence and approval workflows",
    ],
    outcome:
      "The result is a production-style enterprise agentic AI reference implementation with a complete backend, control-plane UI, persistent workflow state, human-in-the-loop governance, vector retrieval, provider abstraction, containerized infrastructure and passing integration tests for the core execution paths.",
    githubUrl: "https://github.com/Khadija162/Enterprise-Multi-Agent-AI-Platform",
  },
  {
    slug: "autonomous-coding-agent-github-issue-resolution",
    eyebrow: "Agentic AI + Software Engineering Automation",
    title: "Autonomous Coding Agent for GitHub Issue Resolution",
    shortTitle: "Autonomous Coding Agent",
    summary:
      "An autonomous AI software-engineering agent that turns GitHub issues and development tasks into validated code changes by exploring repositories, planning multi-file edits, executing tools in isolated environments, and iteratively debugging against tests, linting and type checks.",
    tags: ["Agentic AI", "Python + FastAPI", "LLM Tool Calling", "Code Intelligence", "Docker Sandboxing", "Automated Testing"],
    challenge:
      "Reliable autonomous coding requires much more than generating a patch from a prompt. An agent must understand an unfamiliar repository, select the right files without overflowing the model context, plan coordinated changes, execute commands safely, recover from failed attempts, and validate that the final patch actually solves the requested issue without introducing regressions. This project treats generated code as a hypothesis that must be verified through execution feedback.",
    approach: [
      "Use a state-machine-based reasoning and execution loop that moves from issue analysis and repository exploration to planning, editing, validation, failure analysis and replanning.",
      "Retrieve repository context selectively using file search, source inspection, semantic retrieval, symbol and dependency information, and Tree-sitter / abstract-syntax-tree analysis instead of loading the entire codebase into the language-model context.",
      "Expose controlled tools for file discovery, code search, source inspection, editing, terminal execution, Git operations and test execution, with structured outputs for plans, tool calls and validation results.",
      "Execute generated commands inside Docker sandboxes with restricted filesystem access, predefined tool permissions, execution budgets and policy controls for potentially dangerous operations.",
      "Validate every implementation with repository-appropriate unit tests, linting, formatting and static type checks, then use compiler errors, test failures and runtime feedback to drive iterative self-correction.",
      "Persist task state, previous actions, execution events, Git diffs and detailed traces so long-running tasks remain inspectable, debuggable and recoverable across multiple agent iterations.",
    ],
    contributions: [
      "Designed the modular Python/FastAPI architecture and state-machine orchestration for autonomous software-engineering tasks",
      "Implemented repository intelligence, selective context retrieval and large-codebase context management",
      "Built planning, LLM tool/function calling, multi-file editing and iterative debugging workflows",
      "Integrated Docker-based sandbox execution, bounded tool permissions, execution budgets and human-approval controls",
      "Implemented automated validation using tests, linting, formatting, type checking, Git diffs and change tracking",
      "Developed an evaluation pipeline for bugs, feature work, test repair, refactoring, type errors, API behavior and edge cases",
    ],
    outcome:
      "The final system demonstrates a closed-loop autonomous software-engineering workflow in which an LLM can understand repository context, plan and modify code, observe execution results, recover from failures and produce a validated Git diff with an implementation summary. The project brings together agentic AI architecture, code intelligence, retrieval, sandboxed execution, software-quality automation, observability and systematic evaluation.",
  },
  {
    slug: "water-distribution-ai-monitoring",
    eyebrow: "Artificial Intelligence + Water Infrastructure",
    title: "AI-Enabled Monitoring for Water Distribution Systems",
    shortTitle: "Water Distribution AI Monitoring",
    summary:
      "Ongoing research and engineering on artificial intelligence (AI)-enabled monitoring for water distribution systems (WDSs), with a focus on reliable hydraulic-state awareness, anomaly and leak monitoring, predictive analysis, and decision-support workflows.",
    tags: ["Artificial Intelligence", "Water Distribution Systems", "Surrogate Modelling", "Hydraulic State Estimation", "Anomaly Detection", "Leak Monitoring"],
    challenge:
      "Water distribution systems are large, interconnected infrastructure networks whose hydraulic state changes with demand, network conditions and operating scenarios. Monitoring becomes more difficult when measurements are noisy, sensor coverage is limited or abnormal events create only subtle changes in pressure and flow. The project therefore explores practical AI support for faster hydraulic-state awareness and more reliable monitoring workflows.",
    approach: [
      "AI-assisted hydraulic-state estimation using network, sensor and operating information",
      "Surrogate modelling as a fast data-driven approximation of hydraulic simulation for pressure and flow analysis",
      "Anomaly and leak monitoring under changing demand, measurement uncertainty and limited sensing",
      "Predictive analysis and decision-support workflows for infrastructure monitoring",
      "Reliable software, validation and reproducible experimentation for engineering use",
    ],
    contributions: [
      "Research problem formulation and AI workflow development",
      "Data-processing and software-integration workflows",
      "Robustness analysis, testing and validation",
      "Technical documentation and reproducible research software",
      "Cross-disciplinary collaboration across water, AI and engineering teams",
    ],
    outcome:
      "This is ongoing research. The portfolio intentionally presents only the public, high-level project scope rather than unpublished methodological details. Public code and materials intended for release are referenced through the GitHub repository.",
    githubUrl: "https://github.com/Khadija162/AI-Enabled-Monitoring-for-Water-Distribution-Systems",
  },
  {
    slug: "gas-pipeline-distributed-monitoring",
    eyebrow: "Statistical Signal Processing + Distributed Monitoring",
    title: "Distributed Multi-Sensor Monitoring for Gas Pipelines",
    shortTitle: "Gas Pipeline Monitoring",
    summary:
      "A multi-year research and engineering program on reliable monitoring of sensor-rich gas-pipeline infrastructure. The work combines transient-flow modelling, distributed multi-sensor data fusion, sensor fault diagnosis, statistical signal processing and artificial intelligence (AI)-based anomaly detection to support dependable state awareness and decision making in safety-critical operations.",
    tags: ["Statistical Signal Processing", "Distributed Systems", "Multi-Sensor Data Fusion", "Sensor Fault Diagnosis", "Transient Flow", "AI Anomaly Detection"],
    challenge:
      "Natural-gas pipelines depend on spatially distributed pressure, flow and temperature measurements for monitoring and operational decisions. The same sensors can become faulty because of harsh environments, aging, calibration problems or hardware and communication failures. Under transient operation, the underlying gas-flow dynamics are nonlinear and high-dimensional, so a monitoring system must distinguish genuine system changes from faulty measurements while remaining computationally practical for many sensors and multiple simultaneous faults.",
    approach: [
      "Model transient pipeline behaviour and use physics-informed state estimation as a reference for sensor validation and system monitoring.",
      "Distribute multi-sensor processing across local estimators and information-fusion stages so measurements can be analysed in parallel instead of relying on a single centralized monitor.",
      "Detect, isolate and accommodate faulty sensors by comparing local estimates, residuals or consistency measures and by adapting decision thresholds to changing operating conditions.",
      "Reduce repeated nonlinear computation through partial-distributed filtering, separating the shared nonlinear system evolution from local measurement updates.",
      "Combine model-based estimation with data-driven diagnostics, and extend the monitoring stack with AI-based time-series anomaly detection for system-level compressor faults and noisy multivariate sensor streams.",
    ],
    contributions: [
      "First-author research across distributed state estimation, sensor validation, fault diagnosis and anomaly detection for gas-pipeline monitoring",
      "Architecture and algorithm development for distributed and partial-distributed multi-sensor processing",
      "Transient-flow simulation, fault injection, robustness analysis and comparative evaluation",
      "Hybrid integration of model-based and data-driven monitoring components",
      "Research software, reproducible experiments, technical documentation and publication across Institute of Electrical and Electronics Engineers (IEEE) venues",
    ],
    outcome:
      "The project developed into a connected body of work spanning model-based distributed filtering, computationally lighter partial-distributed architectures, hybrid diagnostics and AI-enabled anomaly detection. The research was evaluated under transient flow, noise, multiple sensor faults and changing operating conditions, with extensions to hydrogen-blended natural gas and related pipeline-monitoring scenarios.",
    githubUrl: "https://github.com/Khadija162/Distributed-Multi-Sensor-Monitoring-for-Gas-Pipelines1",
    relatedPublication:
      "Model-Based Architecture for Multisensor Fault Detection, Isolation, and Accommodation in Natural-Gas Pipelines",
    relatedPublicationLink: "https://doi.org/10.1109/JSEN.2023.3345004",
    relatedPublications: [
      {
        title: "Model-based Sensor-Fault Detection and Isolation in Natural-Gas Pipelines for Transient Flow",
        venue: "2023 IEEE SENSORS",
        href: "https://doi.org/10.1109/SENSORS56945.2023.10325151",
      },
      {
        title: "Model-Based Architecture for Multisensor Fault Detection, Isolation, and Accommodation in Natural-Gas Pipelines",
        venue: "IEEE Sensors Journal, 2024",
        href: "https://doi.org/10.1109/JSEN.2023.3345004",
      },
      {
        title: "Sensor-Fault Detection, Isolation and Accommodation for Natural-Gas Pipelines Under Transient Flow",
        venue: "IEEE Transactions on Signal and Information Processing over Networks, 2024",
        href: "https://doi.org/10.1109/TSIPN.2024.3377134",
      },
      {
        title: "Partial-Distributed Architecture for Multisensor Fault Detection, Isolation, and Accommodation in Hydrogen-Blended Natural Gas Pipelines",
        venue: "IEEE Internet of Things Journal, 2024",
        href: "https://doi.org/10.1109/JIOT.2024.3435413",
      },
      {
        title: "Partial-Distributed Filtering for Fault Detection, Isolation and Accommodation in Natural-Gas Pipelines",
        venue: "27th International Conference on Information Fusion (FUSION), 2024",
        href: "https://doi.org/10.23919/FUSION59988.2024.10706467",
      },
      {
        title: "Hybrid Technique for Sensor Fault Diagnosis in Natural-Gas Pipelines",
        venue: "2024 IEEE SENSORS",
        href: "https://doi.org/10.1109/SENSORS60989.2024.10784789",
      },
      {
        title: "Trust-Enhanced Distributed Kalman Filtering for Sensor Fault Diagnosis in Sensor Networks",
        venue: "IEEE Transactions on Signal and Information Processing over Networks, 2025",
        href: "https://doi.org/10.1109/TSIPN.2025.3606167",
      },
      {
        title: "Sensitivity-Aware Transformer for Robust Compressor Fault Detection in Natural Gas Pipelines",
        venue: "2025 IEEE SENSORS",
        href: "https://doi.org/10.1109/SENSORS59705.2025.11330234",
      },
      {
        title: "Partial-Distributed Particle Filter for Multisensor Fault Diagnosis in Carbon Dioxide Pipelines",
        venue: "IEEE Internet of Things Journal, 2025",
        href: "https://doi.org/10.1109/JIOT.2025.3569618",
      },
    ],
    coverImage: "/images/gas-monitoring/figure-0-iot-ccs-monitoring.png",
    coverAlt: "IoT-based monitoring value-chain overview showing major measurement points and sensing locations",
    paperVisuals: [
      {
        label: "Figure 1 · IEEE Internet of Things Magazine",
        title: "IoT-based monitoring context for distributed pipeline sensing",
        src: "/images/gas-monitoring/figure-0-iot-ccs-monitoring.png",
        alt: "CCS value-chain illustration with major measuring points and sensor locations across the infrastructure",
        description:
          "This starting figure provides the broader monitoring context: distributed sensing across an energy-transport value chain, with measurement points placed at key operational locations. It helps frame why reliable pressure, temperature, flow and related measurements are central to large-scale infrastructure monitoring, and why sensor validation, data fusion and fault diagnosis become important in safety-critical pipeline systems.",
      },
      {
        label: "Figure 1 · IEEE Transactions on Signal and Information Processing over Networks",
        title: "Distributed data-fusion architecture for pipeline monitoring",
        src: "/images/gas-monitoring/figure-1-data-fusion.png",
        alt: "Data-fusion architecture showing distributed sensor groups, parallel local filters and an information mixture",
        description:
          "This architecture shows the core distributed monitoring idea used in the transient-flow study. Sensor measurements are divided into groups and processed by parallel local filters, while an information mixture combines the local estimates into a shared system-state estimate. The distributed structure supports multi-sensor monitoring while spreading computation across local processing units rather than relying on a single centralized estimator.",
      },
      {
        label: "Figure 1 · FUSION 2024",
        title: "Partial-distributed filtering for lower computational load",
        src: "/images/gas-monitoring/figure-1-partial-distributed.png",
        alt: "Partial-distributed filtering architecture with a nonlinear main filter and parallel linear local filters",
        description:
          "The partial-distributed design moves the shared nonlinear time update to a main filter while local filters perform measurement updates in parallel using different sensor groups. Fault detection and isolation operate on the local estimates before information fusion produces the final estimate. The design targets large nonlinear systems where repeating the same nonlinear computation at every local filter is costly.",
      },
      {
        label: "Figure 3 · IEEE Sensors Journal",
        title: "State estimation under simultaneous sensor faults",
        src: "/images/gas-monitoring/figure-3-multiple-faults.png",
        alt: "Pressure flow and temperature state-estimation comparison under simultaneous bias and drift sensor faults",
        description:
          "The evaluation injects simultaneous bias and drift faults into pressure, flow-rate and temperature measurements. The figure compares conventional filtering baselines with the proposed multi-sensor architecture and visualizes how fault-aware fusion supports stable state estimates even when multiple measurements become unreliable at the same time.",
      },
      {
        label: "Figure 2 + Table I · IEEE SENSORS 2025",
        title: "AI-based compressor anomaly monitoring",
        src: "/images/gas-monitoring/figure-2-compressor-fault-results.png",
        alt: "Natural-gas pipeline pressure flow and temperature data with a compressor fault and anomaly detection performance table",
        description:
          "The later work extends the monitoring program from sensor validation to system-level anomaly detection. The compressor study uses multivariate pressure, flow and temperature data under noisy conditions and compares an attention-based AI detector with several anomaly-detection baselines, illustrating the broader move toward intelligent monitoring of operational faults as well as faulty sensors.",
      },
    ],
  },
  {
    slug: "open-world-object-detection",
    eyebrow: "Computer Vision + Continual Learning",
    title: "Open-World Object Detection Research",
    shortTitle: "Open-World Object Detection",
    summary:
      "Research exploring a framework for open-world object detection, alongside broader work on continual learning for real-world autonomous systems.",
    tags: ["Computer Vision", "Open World", "Continual Learning", "Autonomous Systems", "Deep Learning"],
    challenge:
      "Investigate learning settings where intelligent systems must operate beyond fixed closed-world assumptions and adapt to evolving real-world conditions.",
    approach: [
      "Open-world object-detection research",
      "Continual-learning concepts and frameworks",
      "Algorithmic analysis",
      "Research validation and publication",
    ],
    contributions: [
      "Research and analysis",
      "Framework development",
      "Technical evaluation",
      "Scientific writing",
    ],
    outcome:
      "Research publications spanning open-world object detection and continual-learning algorithms, challenges and frameworks.",
    relatedPublication: "A Framework for Open World Object Detection",
    relatedPublicationLink: "https://doi.org/10.37256/aie.4220233058",
  }
];

export const experiences = [
  {
    period: "Feb 2026 — Present",
    role: "Postdoctoral Researcher — Research, AI, Software & Distributed Systems",
    organization: "NTNU: Norwegian University of Science and Technology",
    location: "Trondheim, Norway",
    text: "Design and develop reliable software and AI-enabled monitoring solutions for water distribution systems, integrating distributed sensor data, intelligent analytics, anomaly detection, predictive monitoring and decision support.",
    focus: ["AI Integration", "Predictive Monitoring", "Distributed Sensors", "Software Architecture", "System Validation"],
  },
  {
    period: "Dec 2021 — Dec 2025",
    role: "PhD Researcher — Research, Signal Processing, AI, Software & Distributed Systems",
    organization: "NTNU & SINTEF Energy",
    location: "Trondheim, Norway",
    text: "Designed and implemented distributed software and AI solutions for gas-pipeline monitoring, multi-sensor data processing, fault and anomaly detection, condition monitoring, diagnostics and intelligent decision support.",
    focus: ["Machine Learning", "Fault Detection", "Distributed Systems", "System Integration", "Performance Optimization"],
  },
];

export const highlights = [
  {
    date: "August 2026",
    title: "Published in IEEE Transactions on Knowledge and Data Engineering",
    description:
      "ReG-Net: Retrieval-Enhanced Graph Networks for Robust Multimodal Missing Data Recovery was published in IEEE Transactions on Knowledge and Data Engineering.",
    link: "https://doi.org/10.1109/TKDE.2026.3717320",
  },
  {
    date: "February 2026",
    title: "Joined NTNU as a Postdoctoral Researcher",
    description:
      "Started postdoctoral research on software, AI and distributed systems, with a focus on AI-enabled monitoring for water distribution systems.",
    link: "",
  },
  {
    date: "December 2025",
    title: "Completed PhD at NTNU",
    description:
      "Completed a PhD in Signal Processing and Machine Learning at the Norwegian University of Science and Technology.",
    link: "",
  },
];

export const researchAreas = [
  {
    number: "01",
    title: "Generative AI & LLM Systems",
    items: ["Large Language Models", "Retrieval-Augmented Generation", "Multimodal AI", "Knowledge Extraction"],
  },
  {
    number: "02",
    title: "Graph Machine Learning",
    items: ["Graph Neural Networks", "Multimodal Learning", "Missing-Data Recovery", "Graph-Based AI"],
  },
  {
    number: "03",
    title: "Intelligent Monitoring",
    items: ["Anomaly Detection", "Fault Detection", "Predictive Monitoring", "Condition Monitoring"],
  },
  {
    number: "04",
    title: "Distributed AI Systems",
    items: ["Multi-Sensor Systems", "Distributed Architectures", "Decision Support", "Reliable AI Integration"],
  },
];

export const publications = [
  {
    year: "2026",
    title: "ReG-Net: Retrieval-Enhanced Graph Networks for Robust Multimodal Missing Data Recovery",
    venue: "IEEE Transactions on Knowledge and Data Engineering",
    link: "https://doi.org/10.1109/TKDE.2026.3717320",
  },
  {
    year: "2025",
    title: "Trust-Enhanced Distributed Kalman Filtering for Sensor Fault Diagnosis in Sensor Networks",
    venue: "IEEE Transactions on Signal and Information Processing over Networks",
    link: "https://doi.org/10.1109/TSIPN.2025.3606167",
  },
  {
    year: "2025",
    title: "Partial-Distributed Particle Filter for Multisensor Fault Diagnosis in Carbon Dioxide Pipelines",
    venue: "IEEE Internet of Things Journal",
    link: "https://doi.org/10.1109/JIOT.2025.3569618",
  },
  {
    year: "2024",
    title: "Partial-Distributed Architecture for Multisensor Fault Detection, Isolation, and Accommodation in Hydrogen-Blended Natural Gas Pipelines",
    venue: "IEEE Internet of Things Journal",
    link: "https://doi.org/10.1109/JIOT.2024.3435413",
  },
  {
    year: "2024",
    title: "Hybrid Technique for Sensor Fault Diagnosis in Natural-Gas Pipelines",
    venue: "2024 IEEE SENSORS",
    link: "https://doi.org/10.1109/SENSORS60989.2024.10784789",
  },
  {
    year: "2024",
    title: "Partial-Distributed Filtering for Fault Detection, Isolation and Accommodation in Natural-Gas Pipelines",
    venue: "27th International Conference on Information Fusion (FUSION 2024)",
    link: "https://doi.org/10.23919/FUSION59988.2024.10706467",
  },
  {
    year: "2024",
    title: "Sensor-Fault Detection, Isolation and Accommodation for Natural-Gas Pipelines Under Transient Flow",
    venue: "IEEE Transactions on Signal and Information Processing over Networks",
    link: "https://doi.org/10.1109/TSIPN.2024.3377134",
  },
  {
    year: "2024",
    title: "Model-Based Architecture for Multisensor Fault Detection, Isolation, and Accommodation in Natural-Gas Pipelines",
    venue: "IEEE Sensors Journal",
    link: "https://doi.org/10.1109/JSEN.2023.3345004",
  },
  {
    year: "2023",
    title: "Model-based Sensor-Fault Detection and Isolation in Natural-Gas Pipelines for Transient Flow",
    venue: "2023 IEEE SENSORS",
    link: "https://doi.org/10.1109/SENSORS56945.2023.10325151",
  },
  {
    year: "2023",
    title: "A Framework for Open World Object Detection",
    venue: "Artificial Intelligence Evolution",
    link: "https://doi.org/10.37256/aie.4220233058",
  },
  {
    year: "2022",
    title: "Continual Learning for Real-World Autonomous Systems: Algorithms, Challenges and Frameworks",
    venue: "Journal of Intelligent & Robotic Systems",
    link: "https://doi.org/10.1007/s10846-022-01603-6",
  },
  {
    year: "2018",
    title: "Automatic Detection of Multi-Modality in Self-Mixing Interferometer",
    venue: "IEEE Sensors Journal",
    link: "https://doi.org/10.1109/JSEN.2018.2869771",
  },
]

export const presentations = [
  {
    year: "2025",
    type: "Webinar",
    audience: "Industry",
    title: "AI-Powered Data Recovery for Hydrogen Incident and Accident Database 2.1",
    venue: "HYDROGENi project · Hosted by SINTEF Energy",
    authors: "Khadija Shaheen",
    description:
      "Presented AI-powered methods for recovering missing numerical, categorical and descriptive information in hydrogen incident and accident records, improving data quality for risk assessment and safer hydrogen technologies.",
    link: "",
    tags: ["Hydrogen Safety", "AI", "Data Recovery"],
  },
  {
    year: "2025",
    type: "Conference presentation",
    audience: "Academic",
    title: "Sensitivity-Aware Transformer for Robust Compressor Fault Detection in Natural Gas Pipelines",
    venue: "IEEE Sensors Conference · Vancouver, BC, Canada",
    authors: "K. Shaheen · A. Chawla · F.E. Uilhoorn · P.S. Rossi",
    description:
      "Presented research on sensitivity-aware transformer models for robust compressor fault detection in natural-gas pipeline systems.",
    link: "https://salvoros.folk.ntnu.no/pub-pdf/conferences/2025%20IEEE%20sensors.pdf",
    tags: ["Transformers", "Fault Detection", "Natural Gas", "IEEE SENSORS"],
  },
  {
    year: "2024",
    type: "Conference presentation",
    audience: "Academic",
    title: "Partial-Distributed Filtering for Fault Detection, Isolation and Accommodation in Natural-Gas Pipelines",
    venue: "2024 27th International Conference on Information Fusion (FUSION) · pp. 1–8",
    authors: "K. Shaheen · A. Chawla · F.E. Uilhoorn · P.S. Rossi",
    description:
      "Presented a partial-distributed filtering framework for fault detection, isolation and accommodation in natural-gas pipeline monitoring.",
    link: "https://doi.org/10.23919/FUSION59988.2024.10706467",
    tags: ["Distributed Filtering", "Fault Diagnosis", "FUSION", "Signal Processing"],
  },
  {
    year: "2024",
    type: "Conference presentation",
    audience: "Academic",
    title: "Hybrid Technique for Sensor Fault Diagnosis in Natural-Gas Pipelines",
    venue: "2024 IEEE SENSORS",
    authors: "K. Shaheen · A. Chawla · F.E. Uilhoorn · P.S. Rossi",
    description:
      "Presented a hybrid sensor-fault diagnosis technique for natural-gas pipeline monitoring and reliability-oriented sensing.",
    link: "https://doi.org/10.1109/SENSORS60989.2024.10784789",
    tags: ["Sensor Faults", "Pipeline Monitoring", "IEEE SENSORS", "Diagnostics"],
  },
  {
    year: "2023",
    type: "Poster presentation",
    audience: "Academic",
    title: "Model-based Sensor-Fault Detection and Isolation in Natural-Gas Pipelines for Transient Flow",
    venue: "2023 IEEE SENSORS",
    authors: "K. Shaheen · A. Chawla · F.E. Uilhoorn · P.S. Rossi",
    description:
      "Presented a poster on model-based sensor-fault detection and isolation for natural-gas pipelines operating under transient-flow conditions.",
    link: "https://doi.org/10.1109/SENSORS56945.2023.10325151",
    tags: ["Poster", "Sensor Faults", "Transient Flow", "IEEE SENSORS"],
  },
]

export const collaborations = [
  {
    logo: "https://kommunikasjon.ntb.no/data/images/00560/52a83680-eb2a-4784-b330-05dbce25f769.jpg",
    logoAlt: "SINTEF logo",
    name: "SINTEF Energy",
    detail: "Industrial research collaboration · Trondheim, Norway",
  },
  {
    logo: "https://kommunikasjon.ntb.no/data/images/00560/52a83680-eb2a-4784-b330-05dbce25f769.jpg",
    logoAlt: "SINTEF logo",
    name: "SINTEF Digital",
    detail: "Research collaboration · Norway",
  },
  {
    logo: "https://upload.wikimedia.org/wikipedia/commons/7/75/NTNU-logo.svg",
    logoAlt: "NTNU logo",
    name: "NTNU",
    detail: "Academic research · Trondheim, Norway",
  },
  {
    logo: "https://promocja.strony.uw.edu.pl/wp-content/uploads/sites/339/2020/08/EN_zwykly.png",
    logoAlt: "University of Warsaw logo",
    name: "University of Warsaw",
    detail: "Academic research collaboration · Warsaw, Poland",
  },
  {
    logo: "https://nust.edu.pk/wp-content/uploads/2020/04/Typo.jpg",
    logoAlt: "NUST logo",
    name: "NUST",
    detail: "Graduate education & research · Islamabad, Pakistan",
  },
  {
    logo: "https://upload.wikimedia.org/wikipedia/commons/a/a1/TU_Wien-Logo.svg",
    logoAlt: "TU Wien logo",
    name: "TU Wien",
    detail: "Erasmus+ research collaboration · Vienna, Austria",
  },
  {
    logo: "https://upload.wikimedia.org/wikipedia/commons/f/f3/Carnegie_Mellon_University_wordmark.svg",
    logoAlt: "Carnegie Mellon University logo",
    name: "Carnegie Mellon University",
    detail: "Visiting PhD research · Pittsburgh, USA",
  },
];

export const skills = [
  {
    title: "AI & Machine Learning",
    items: ["Machine Learning", "Deep Learning", "Predictive Modeling", "Anomaly Detection", "Graph Neural Networks", "PyTorch", "TensorFlow", "Scikit-learn"],
  },
  {
    title: "Generative AI & LLMs",
    items: ["Large Language Models", "RAG", "Multimodal AI", "Knowledge Extraction", "AI-Enabled Applications"],
  },
  {
    title: "MLOps",
    items: ["ML Pipelines", "Model Deployment", "Model Monitoring", "Model Validation", "Reproducible ML Workflows"],
  },
  {
    title: "Programming",
    items: ["Python", "C++", "JavaScript", "SQL", "MATLAB", "Bash"],
  },
  {
    title: "Software Engineering",
    items: ["Software Architecture", "OOP", "SOLID", "Backend Development", "API Development", "Distributed Systems", "System Integration"],
  },
  {
    title: "Data Engineering",
    items: ["SQL", "ETL", "Data Pipelines", "Large-Scale Processing", "Data Validation", "Time-Series Processing"],
  },
  {
    title: "Cloud & DevOps",
    items: ["AWS", "Microsoft Azure", "Docker", "Kubernetes", "Git", "GitHub Actions", "CI/CD", "Linux"],
  },
];

export const education = [
  {
    period: "2021 — 2025",
    degree: "PhD, Signal Processing & Machine Learning",
    school: "Norwegian University of Science and Technology (NTNU)",
    location: "Trondheim, Norway",
  },
  {
    period: "2024",
    degree: "Visiting PhD — Graph Neural Networks & Large Language Models",
    school: "Carnegie Mellon University (CMU)",
    location: "Pittsburgh, USA",
  },
  {
    period: "2018 — 2021",
    degree: "Master of Science, Electrical Engineering",
    school: "National University of Sciences and Technology (NUST)",
    location: "Islamabad, Pakistan",
  },
  {
    period: "2013 — 2017",
    degree: "Bachelor of Science, Electronics Engineering",
    school: "Riphah International University",
    location: "Islamabad, Pakistan",
  },
];

export const recognition = [
  { title: "Research Grant", detail: "Norwegian Research Council" },
  { title: "Erasmus+ Scholarship", detail: "Research Student — Vienna" },
  { title: "Gold Medal / Scholarship", detail: "Academic excellence — Bachelor's degree" },
];

export const certifications = [
  "Google Data Analytics Professional Certificate (Coursera)",
  "Ultimate AWS Certified Solutions Architect Associate 2025 (Udemy)",
  "AWS Certified Data Engineer Associate 2025 — Hands On! (Udemy)",
];
