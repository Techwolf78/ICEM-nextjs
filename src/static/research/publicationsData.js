// publications.js
// This array contains the detailed rows from your spreadsheet
const journals2024_25 = [
  {
    srNo: 1,
    author: "Dr. Nilesh Uke",
    designation: "Professor",
    department: "Computer Engineering",
    title: "A comprehensive review in affective computing: an exploration of artificial intelligence in unimodal and multimodal emotion recognition systems",
    publication: "International Journal of Speech Technology",
    type: "International Journal",
    date: "2025",
    link: "https://link.springer.com/article/10.1007/s10772-024-10115-3" // Inferred from Springer US context
  },
  {
    srNo: 2,
    author: "Dr. Nilesh Uke",
    designation: "Professor",
    department: "Computer Engineering",
    title: "Using 5G Standards for Smart Healthcare Applications and Designing an Artificial Intelligence Based Industry 4.0 Communication System",
    publication: "Internet Technology Letters",
    type: "International Journal",
    date: "2024",
    link: ""
  },
  {
    srNo: 3,
    author: "Dr. Nilesh Uke",
    designation: "Professor",
    department: "Computer Engineering",
    title: "Parallel Computing Frameworks for Real-Time Decision-Making in Complex Computational Systems",
    publication: "Advances in Nonlinear Variational Inequalities",
    type: "International Journal",
    date: "2025",
    link: ""
  },
  {
    srNo: 4,
    author: "Dr. Nilesh Uke",
    designation: "Professor",
    department: "Computer Engineering",
    title: "Toxic Comment Detector and Remover",
    publication: "JAAFR - JOURNAL OF ADVANCE AND FUTURE RESEARCH",
    type: "International Journal",
    date: "Apr-25",
    link: "http://www.jaafr.org"
  },
  {
    srNo: 5,
    author: "Dr. Nilesh Uke",
    designation: "Professor",
    department: "Computer Engineering",
    title: "A Review on Deep Learning-based Object Tracking Methods",
    publication: "Multiagent and Grid System",
    type: "International Journal",
    date: "Jun-24",
    link: ""
  },
  {
    srNo: 6,
    author: "Dr. Nilesh Uke",
    designation: "Professor",
    department: "Computer Engineering",
    title: "Artificial intelligence tools in teaching and learning process",
    publication: "ICT Connect",
    type: "International Journal",
    date: "Mar-24",
    link: ""
  },
  {
    srNo: 7,
    author: "Dr. Nilesh Uke",
    designation: "Professor",
    department: "Computer Engineering",
    title: "A Hybrid Machine learning Techniques for Detection of Chronic Kidney Disease",
    publication: "Panamerican Mathematical Journal",
    type: "International Journal",
    date: "2024",
    link: ""
  },
  {
    srNo: 8,
    author: "Dr. Nilesh Uke",
    designation: "Professor",
    department: "Computer Engineering",
    title: "Stress and Anxiety Detection: Deep Learning and Higher Order Statistic Approach",
    publication: "Indonesian Journal of Electrical Engineering and Computer Science",
    type: "International Journal",
    date: "Feb-24",
    link: ""
  },
  {
    srNo: 9,
    author: "Dr. Nilesh Uke",
    designation: "Professor",
    department: "Computer Engineering",
    title: "Distributed Privacy Preservation for Online Social Network using Flexible Clustering and Artificial Intelligence",
    publication: "Cluster Computing",
    type: "International Journal",
    date: "Feb-24",
    link: ""
  },
  {
    srNo: 10,
    author: "Dr. Nilesh Uke",
    designation: "Professor",
    department: "Computer Engineering",
    title: "Predicting Productivity and Surface Quality in EN19 Alloy Electrical Discharge Machining using Machine Learning Regression Models",
    publication: "Theoretical Computer Science, Elsevier",
    type: "International Journal",
    date: "Jan-24",
    link: ""
  },
  {
    srNo: 11,
    author: "Dr. Nilesh Uke",
    designation: "Professor",
    department: "Computer Engineering",
    title: "Comparative Study of Multilingual Intelligent Virtual Assistant",
    publication: "3rd International Conference on Advancement in Computation & Computer Technologies (InCACCT)",
    type: "International Conference",
    date: "2024",
    link: ""
  },
  {
    srNo: 12,
    author: "Dr. Nilesh Uke",
    designation: "Professor",
    department: "Computer Engineering",
    title: "Harnessing Open-World Machine Learning for Advanced Malware",
    publication: "Artificial Intelligence: Theory and Applications (Springer Nature)",
    type: "International Journal",
    date: "2024",
    link: ""
  },
  {
    srNo: 13,
    author: "Dr. Nilesh Uke",
    designation: "Professor",
    department: "Computer Engineering",
    title: "Integrated Method To Detect Object In Digital Image For Forensic Analysis",
    publication: "International Conference NTAI 2025",
    type: "International Conference",
    date: "Apr-25",
    link: ""
  },
  {
    srNo: 14,
    author: "Dr. Nilesh Uke",
    designation: "Professor",
    department: "Computer Engineering",
    title: "The Role of Transfer Learning and Pre-Trained Language Models in Multilingual Virtual Assistants",
    publication: "International Conference NTAI 2025",
    type: "International Conference",
    date: "Apr-25",
    link: ""
  },
  {
    srNo: 15,
    author: "Dr. Nilesh Uke",
    designation: "Professor",
    department: "Computer Engineering",
    title: "Machine Learning Algorithms Analysis for Breast Cancer Detection in terms of Accuracy A Survey Study",
    publication: "International Conference NTAI 2025",
    type: "International Conference",
    date: "Apr-25",
    link: ""
  },
  {
    srNo: 16,
    author: "Dr. Nilesh Uke",
    designation: "Professor",
    department: "Computer Engineering",
    title: "Systematic Review of Psychological Theories of Emotion and Recent Advances Artificial Emotional Intelligent Affective Systems",
    publication: "International Conference NTAI 2025",
    type: "International Conference",
    date: "Apr-25",
    link: ""
  },
  {
    srNo: 17,
    author: "Dr. Nilesh Uke",
    designation: "Professor",
    department: "Computer Engineering",
    title: "Context-Based Abnormal Event Detection in Video Surveillance",
    publication: "International Conference NTAI 2025",
    type: "International Conference",
    date: "Apr-25",
    link: ""
  },
  {
    srNo: 18,
    author: "Dr. Nilesh Uke",
    designation: "Professor",
    department: "Computer Engineering",
    title: "Challenges and Emerging Solutions for Multi Object Detection across Multiple Non-Overlapping Cameras in Real Time Environments",
    publication: "International Conference NTAI 2025",
    type: "International Conference",
    date: "Apr-25",
    link: ""
  },
  {
    srNo: 19,
    author: "Dr. Nilesh Uke",
    designation: "Professor",
    department: "Computer Engineering",
    title: "Fetal Movement Detection for Fetal Health analysis During the Prenatal Period",
    publication: "International Conference NTAI 2025",
    type: "International Conference",
    date: "Apr-25",
    link: ""
  },
  {
    srNo: 20,
    author: "Dr. Nilesh Uke",
    designation: "Professor",
    department: "Computer Engineering",
    title: "Toxic Comment Detector and Remover",
    publication: "International Conference NTAI 2025",
    type: "International Conference",
    date: "Apr-25",
    link: ""
  },
  {
    srNo: 21,
    author: "Dr. Nilesh Uke",
    designation: "Professor",
    department: "Computer Engineering",
    title: "Accident Emergency Service & Vehicle Verification System",
    publication: "International Conference NTAI 2025",
    type: "International Conference",
    date: "Apr-25",
    link: ""
  },
  {
    srNo: 22,
    author: "Dr. Nilesh Uke",
    designation: "Professor",
    department: "Computer Engineering",
    title: "Comparative Study and Analysis of Health Care System for Heart Patients: Formal Review",
    publication: "2025 1st International Conference on AIML-Applications for Engineering & Technology (ICAET)",
    type: "International Conference",
    date: "2025",
    link: "https://doi.org/10.1109/ICAET63349.2025.10932164"
  },
  {
    srNo: 23,
    author: "Dr. Nilesh Uke",
    designation: "Professor",
    department: "Computer Engineering",
    title: "An Affective Dataset Based on Plutchik’s Psychological Model for Text-Based Emotion Recognition and its Analysis Using ML Techniques",
    publication: "2024 8th International Conference on Computing, Communication, Control and Automation (ICCUBEA)",
    type: "International Conference",
    date: "2024",
    link: "https://doi.org/10.1109/ICCUBEA61740.2024.10775193"
  },
  {
    srNo: 24,
    author: "Dr. Nilesh Uke",
    designation: "Professor",
    department: "Computer Engineering",
    title: "Blockchain-Based Music Streaming Services: A Novel Approach to Transparent Artist Control",
    publication: "2024 IEEE International Conference on Blockchain and Distributed Systems Security (ICBDS)",
    type: "IEEE International Conference",
    date: "2024",
    link: "https://doi.org/10.1109/ICBDS61829.2024.10837486"
  },
  {
    srNo: 25,
    author: "Dr. Nilesh Uke",
    designation: "Professor",
    department: "Computer Engineering",
    title: "Recent Trends and Advancements in Hand Gesture Recognition from Real Time Video",
    publication: "2024 4th International Conference on Computer, Communication, Control & Information Technology (C3IT)",
    type: "International Conference",
    date: "2024",
    link: "https://doi.org/10.1109/C3IT60531.2024.10829432"
  },
  {
    srNo: 26,
    author: "Dr. Nilesh Uke",
    designation: "Professor",
    department: "Computer Engineering",
    title: "Blending Psychological Models with Modern HCI Techniques to Develop Artificial Emotional Intelligent “Affective” Systems",
    publication: "8th International Conference on Data Management, Analytics and Innovation (ICDMAI 2024)",
    type: "International Conference",
    date: "Jan-24",
    link: ""
  },
  {
    srNo: 27,
    author: "Shwetkranti Taware",
    designation: "Assistant Professor",
    department: "Computer Engg.",
    title: "Multimodal Emotion Recognition based on Face and Speech using Deep Convolution Neural Network and Long Short Term Memory",
    publication: "Circuits System Signal Processing",
    type: "International Journal",
    date: "Apr-25",
    link: "https://doi.org/10.1007/s00034-025-03080-2"
  },
  {
    srNo: 28,
    author: "Shwetkranti Taware",
    designation: "Assistant Professor",
    department: "Computer Engg.",
    title: "Multi-modal Emotion Recognition using Speech and Facial Expressions using novel PSO-AOA-MAUT and Deep Convolution Neural Network",
    publication: "Journal of Information Systems Engineering and Management",
    type: "International Journal",
    date: "May-25",
    link: "https://doi.org/10.52783/jisem.v10i23s.3681"
  },
  {
    srNo: 29,
    author: "Shwetkranti Taware",
    designation: "Assistant Professor",
    department: "Computer Engg.",
    title: "Deep learning Multimodal feature enhanced with cross-modal attention for emotion recognition",
    publication: "Journal of Neonatal Surgery",
    type: "International Journal",
    date: "Jun-25",
    link: "https://www.jneonatalsurg.com/index.php/jns/article/view/5519"
  },
  {
    srNo: 30,
    author: "Dr. Soumitra Das",
    designation: "Professor",
    department: "Computer",
    title: "A review of Industrial IoT security based on Quantum-Enhanced Cryptographic protocols",
    publication: "Industrial Engineering Journal",
    type: "National - UGC Care",
    date: "Sep-24",
    link: "http://www.journal-iiie-india.com/1_sep_24/62_online_sept.pdf"
  },
  {
    srNo: 31,
    author: "Dr. Soumitra Das",
    designation: "Professor",
    department: "Computer",
    title: "A machine learning based approach to predict customer churn in airline industry: The case of India",
    publication: "International Journal for Multidisciplinary Research",
    type: "International",
    date: "Apr-24",
    link: "https://www.ijfmr.com/research-paper.php?id=18026"
  },
  {
    srNo: 32,
    author: "Dr. Soumitra Das",
    designation: "Professor",
    department: "Computer",
    title: "Gesturenet: Real-time Sign Language Recognition using a Hybrid Neural Network",
    publication: "International Journal for Multidisciplinary Research",
    type: "International",
    date: "Apr-24",
    link: "https://www.ijfmr.com/research-paper.php?id=1829"
  },
  {
    srNo: 33,
    author: "Dr. Soumitra Das",
    designation: "Professor",
    department: "Computer",
    title: "Product review system",
    publication: "International Journal of Innovative Research in Technology",
    type: "International",
    date: "2024",
    link: "https://ijirt.org/publishedpaper/IJIRT164560_PAPER.pdf"
  },
  {
    srNo: 34,
    author: "Dr. Soumitra Das",
    designation: "Professor",
    department: "Computer",
    title: "A system for customer churn prediction using web log files",
    publication: "Shodhkosh: Journal of Visual and Performing Arts",
    type: "National - UGC Care",
    date: "2024",
    link: "https://www.granthaalayahpublication.org/Arts-Journal/ShodhKosh/article/view/5616/5079"
  },
  {
    srNo: 35,
    author: "Dr. Soumitra Das",
    designation: "Professor",
    department: "Computer",
    title: "Analysis of Political Leaders Speech Using NLP and AI: Techniques and Algorithms",
    publication: "International Journal of Advance Scientific Research and Engineering Trends",
    type: "International",
    date: "2024",
    link: ""
  },
  {
    srNo: 36,
    author: "Trupti Kathale",
    designation: "Assistant Professor",
    department: "First Year Engineering",
    title: "Application of Jacobian in Engineering Field",
    publication: "IRJMETS",
    type: "International",
    date: "Jan-25",
    link: "https://www.irjmets.com/uploadedfiles/paper//issue_2_february_2025/67469/final/fin_irjmets1739095276.pdf"
  },
  {
    srNo: 37,
    author: "Trupti Kathale",
    designation: "Assistant Professor",
    department: "First Year Engineering",
    title: "Application of Jacobian in Engineering Field",
    publication: "IJFMR",
    type: "International",
    date: "Dec-24",
    link: "https://www.ijfmr.com/research-paper.php?id=33279"
  },
  {
    srNo: 38,
    author: "Prof. Pratima Gaikwad",
    designation: "Assistant Professor",
    department: "First Year Engineering",
    title: "Performance and Analysis of PWM Strategy with PV-Based Multilevel Hybrid Inverter",
    publication: "Sustainable Computing and Integrated Communication in Changing Landscape of AI (ICSCAI)",
    type: "International",
    date: "Feb-25",
    link: "https://doi.org/10.1109/ICSCAI61790.2024.10867026"
  },
  {
    srNo: 39,
    author: "Dr. Avinash Bansode",
    designation: "Assistant Professor",
    department: "First Year Engineering",
    title: "Processing of Food Assisted by Solar Based Equipment",
    publication: "Sustainable Computing and Integrated Communication in Changing Landscape of AI (ICSCAI)",
    type: "International",
    date: "Feb-25",
    link: "https://doi.org/10.1109/ICSCAI61790.2024.10866810"
  },
  {
    srNo: 40,
    author: "Manjusha Tomar",
    designation: "Associate Professor",
    department: "Basic Engineering",
    title: "Adaptive and scalable cloud data sharing framework with quantum resistant security decentralized auditing and machine learning-based threat detection",
    publication: "IJACSA",
    type: "International",
    date: "2025",
    link: ""
  },
  {
    srNo: 41,
    author: "Manjusha Tomar",
    designation: "Associate Professor",
    department: "Basic Engineering",
    title: "Combining BERT and CNN for Sentiment Analysis A Case Study on COVID-19",
    publication: "IJACSA",
    type: "International",
    date: "2024",
    link: ""
  },
  {
    srNo: 42,
    author: "Suresh Renge",
    designation: "Assistant Professor",
    department: "First Year Engineering",
    title: "Application of Jacobian in Engineering Field",
    publication: "IRJMETS",
    type: "International",
    date: "Jan-25",
    link: "https://www.irjmets.com/uploadedfiles/paper//issue_2_february_2025/67469/final/fin_irjmets1739095276.pdf"
  },
  {
    srNo: 43,
    author: "Suresh Renge",
    designation: "Assistant Professor",
    department: "First Year Engineering",
    title: "Development is Evil",
    publication: "Digital Library IJISRT",
    type: "International",
    date: "Dec-24",
    link: ""
  },
  {
    srNo: 44,
    author: "Priyanka H. Mahajan",
    designation: "Assistant Professor",
    department: "First Year Engineering",
    title: "Light Weight Battery Tray Structure to Enhance Vehical Range",
    publication: "IRJMETS",
    type: "International",
    date: "Mar-25",
    link: ""
  },
  {
    srNo: 45,
    author: "Dr, Mandakini Dahiwade",
    designation: "Assistant Professor",
    department: "First Year Engineering",
    title: "Biological activity and biomolecule interaction of pyridyl thiazole derivative and its copper complex",
    publication: "Journal of Molecular Liquids",
    type: "International",
    date: "Jun-24",
    link: "https://doi.org/10.1016/j.molliq.2024.124936"
  },
  {
    srNo: 46,
    author: "PRIYANKA R PATIL",
    designation: "Assistant Professor",
    department: "ENTC",
    title: "Application of Jacobian in Engineering Field",
    publication: "IRJMETS",
    type: "International",
    date: "Jan-25",
    link: "https://www.irjmets.com/uploadedfiles/paper//issue_2_february_2025/67469/final/fin_irjmets1739095276.pdf"
  },
  {
    srNo: 47,
    author: "PRIYANKA R PATIL",
    designation: "Assistant Professor",
    department: "ENTC",
    title: "Light Weight Battery Tray Structure to Enhance Vehical Range",
    publication: "IRJMETS",
    type: "International",
    date: "Mar-25",
    link: ""
  },
  {
    srNo: 48,
    author: "Supriya D Kumbhar",
    designation: "Assistant Professor",
    department: "First Year Engineering",
    title: "Industrial Waste Water Treatment Facilities",
    publication: "International Journal For Multidisciplinary Research",
    type: "International",
    date: "Mar-25",
    link: "https://doi.org/10.36948/ijfmr.2025.v07i02.42014"
  },
  {
    srNo: 49,
    author: "Dr Priya Pise",
    designation: "Professor",
    department: "AI and DS",
    title: "Summarizing Business News: Evaluating BART, T5, and PEGASUS for Effective Information Extraction",
    publication: "Revue d'Intelligence Artificielle",
    type: "International",
    date: "Mar-24",
    link: "https://iieta.org/journals/ria/paper/10.18280/ria.380311"
  },
  {
    srNo: 50,
    author: "Dr Priya Pise",
    designation: "Professor",
    department: "AI and DS",
    title: "Object Detection and Classification in Human Rescue Operations: Deep Learning Strategies for Flooded Environments",
    publication: "International Journal of Safety & Security Engineering",
    type: "International",
    date: "Apr-24",
    link: "https://iieta.org/journals/ijsse/paper/10.18280/ijsse.140226"
  },
  {
    srNo: 51,
    author: "Dr Priya Pise",
    designation: "Professor",
    department: "AI and DS",
    title: "Deep learning-based blood cell classification from microscopic images for haematological disorder identification",
    publication: "Multimedia Tools and Applications",
    type: "International",
    date: "Aug-24",
    link: "https://link.springer.com/article/10.1007/s11042-024-19900-7"
  },
  {
    srNo: 52,
    author: "Dr Priya Pise",
    designation: "Professor",
    department: "AI and DS",
    title: "Brain Tumor Detection and Multi Classification Using GNB-Based Machine Learning Architecture",
    publication: "Internation Information and engineering technology Assication",
    type: "International",
    date: "Apr-24",
    link: "https://iieta.org/journals/ijsse/paper/10.18280/ijsse.140226"
  },
  {
    srNo: 53,
    author: "Dr.Manjusha Tatiya",
    designation: "Assistant Professor",
    department: "AI & DS",
    title: "Cybersecurity in IoT-Based Smart Grids: A Comprehensive Survey",
    publication: "Computer Fraud and Security",
    type: "International",
    date: "Dec-01",
    link: "https://computerfraudsecurity.com/index.php/journal/article/view/5154"
  },
  {
    srNo: 54,
    author: "Dr.Manjusha Tatiya",
    designation: "Assistant Professor",
    department: "AI & DS",
    title: "Technology and Innovation: Wireless Sensor Networks Integration with Cloud Computing The Review",
    publication: "International Journal of Novel Research and Development (IJNRD)",
    type: "International",
    date: "2024",
    link: "https://www.ijnrd.org/viewpaperforall.php?paper=IJNRD2411151"
  },
  {
    srNo: 55,
    author: "Dr.Manjusha Tatiya",
    designation: "Assistant Professor",
    department: "AI & DS",
    title: "Artificial Intelligence for Lung Cancer: A Review of Diagnostic and Therapeutic Applications",
    publication: "International Journal of Novel Research and Development (IJNRD)",
    type: "International",
    date: "2024",
    link: "https://ijnrd.org/papers/IJNRD2410273.pdf"
  },
  {
    srNo: 56,
    author: "Prof. Pallavi Chavan",
    designation: "Assistant Professor",
    department: "AI & DS",
    title: "ENHANCING ACCURACY, PRIVACY, ETHICS IN FACE RECOGNITION AND DETECTION SYSTEM",
    publication: "International Journal of Creative Research Thoughts (IJCRT)",
    type: "International",
    date: "2024",
    link: "http://www.ijcrt.org/papers/IJCRT2410489"
  },
  {
    srNo: 57,
    author: "Prof. Pallavi Chavan",
    designation: "Assistant Professor",
    department: "AI & DS",
    title: "SQL INJECTION ATTACKS AND PREVENTIONS TECHNIQUES",
    publication: "International Journal of Creative Research Thoughts (IJCRT)",
    type: "International",
    date: "2024",
    link: "https://www.ijcrt.org/papers/IJCRT2410496.pdf"
  },
  {
    srNo: 58,
    author: "Prof. Pallavi Chavan",
    designation: "Assistant Professor",
    department: "AI & DS",
    title: "Sport Science with AI",
    publication: "International Journal of Creative Research Thoughts (IJCRT)",
    type: "International",
    date: "2024",
    link: "https://www.ijcrt.org/papers/IJCRT2410607.pdf"
  },
  {
    srNo: 59,
    author: "Prof. Pallavi Chavan",
    designation: "Assistant Professor",
    department: "AI & DS",
    title: "Digital Marketing",
    publication: "International Journal of Creative Research Thoughts (IJCRT)",
    type: "International",
    date: "2024",
    link: "https://www.ijcrt.org/viewfull.php?p_id=IJCRT2411580"
  },
  {
    srNo: 60,
    author: "Prof. Pallavi Chavan",
    designation: "Assistant Professor",
    department: "AI & DS",
    title: "A Review of Data Privacy & Security in Business Organization",
    publication: "International Journal of Creative Research Thoughts (IJCRT)",
    type: "International",
    date: "2024",
    link: "https://ijcrt.org/viewfulltext.php?&p_id=IJCRT2411671"
  },
  {
    srNo: 61,
    author: "Prof. Deepa Padwal",
    designation: "Assistant Professor",
    department: "AI & DS",
    title: "Human Machine Interaction in Autonoumous Vehicles",
    publication: "International Journal of Creative Research Thoughts (IJCRT)",
    type: "International",
    date: "2024",
    link: "https://ijcrt.org/viewfull.php?&p_id=IJCRT2410564"
  },
  {
    srNo: 62,
    author: "Prof. Deepa Padwal",
    designation: "Assistant Professor",
    department: "AI & DS",
    title: "Superstore Sales and Customer Feedback Analysis",
    publication: "International Journal of Creative Research Thoughts (IJCRT)",
    type: "International",
    date: "2024",
    link: "https://lnkd.in/dhNVM4dg"
  },
  {
    srNo: 63,
    author: "Prof. Deepa Padwal",
    designation: "Assistant Professor",
    department: "AI & DS",
    title: "Prediction Modeling and Data Security in Election Polling System",
    publication: "International Journal of Creative Research Thoughts (IJCRT)",
    type: "International",
    date: "2024",
    link: "https://www.ijcrt.org/viewfull.php?p_id=IJCRT2410630"
  },
  {
    srNo: 64,
    author: "Prof. Deepa Padwal",
    designation: "Assistant Professor",
    department: "AI & DS",
    title: "Smart Greenhouse using AI and Renewable Resources",
    publication: "International Journal of Creative Research Thoughts (IJCRT)",
    type: "International",
    date: "2024",
    link: "https://ijcrt.org/viewfulltext.php?&p_id=IJCRT2411738"
  },
  {
    srNo: 65,
    author: "Dr.Manjusha Tatiya",
    designation: "Assistant Professor",
    department: "AI and DS",
    title: "Integrating IoT and AI for Adaptive Irrigation in Precision Agriculture",
    publication: "International Journal of International Water and Irrigation",
    type: "International",
    date: "2025",
    link: "https://intwater.com/index.php/journal/article/view/160/118"
  },
  {
    srNo: 66,
    author: "Dr.Manjusha Tatiya",
    designation: "Assistant Professor",
    department: "AI and DS",
    title: "AI-Driven Personality Development: Enhancing Emotional Intelligence and Social Skills through Machine Learning",
    publication: "Journal of Information System Engineering and Management",
    type: "International",
    date: "Jan-25",
    link: "https://www.jisem-journal.com/index.php/journal/article/view/1948"
  },
  {
    srNo: 67,
    author: "Dr.Manjusha Tatiya",
    designation: "Assistant Professor",
    department: "AI and DS",
    title: "Enhancing Road Safety: Real-Time Surface Anomaly Detection Using YOLOv8",
    publication: "Journal of Information System Engineering and Management",
    type: "International",
    date: "Mar-25",
    link: "https://www.jisem-journal.com/index.php/journal/article/view/3177"
  },
  {
    srNo: 68,
    author: "Dr.Manjusha Tatiya",
    designation: "Assistant Professor",
    department: "AI and DS",
    title: "The Role of AI in Reducing Environmental Impact in the Mining Sector",
    publication: "Journal of Mines, Metals and Fuels",
    type: "International",
    date: "May-25",
    link: "https://informaticsjournals.co.in/index.php/jmmf/article/view/48521"
  },
  {
    srNo: 69,
    author: "Dr.Manjusha Tatiya",
    designation: "Assistant Professor",
    department: "AI and DS",
    title: "Design of an Efficient Forensic Layer for IoT Network Traffic Analysis Engine Using Deep Packet Inspection via Recurrent Neural Networks",
    publication: "International Journal of Safety and Security Engineering",
    type: "International",
    date: "Jun-24",
    link: "https://iieta.org/journals/ijsse/paper/10.18280/ijsse.140317"
  },
  {
    srNo: 70,
    author: "Dr. Mahesh Bhong",
    designation: "Associate Professor",
    department: "Mechanical",
    title: "Unified Lifelong Technical Learning Integration with Structured Framework for The Technical Education System to Foster Expertise Using Academic Bank of Credit",
    publication: "Educational Administration: Theory and Practice",
    type: "International Journal",
    date: "Jun-24",
    link: "https://kuey.net/index.php/kuey/article/view/1552/734"
  },
  {
    srNo: 71,
    author: "Dr. Kiran Devade",
    designation: "Professor",
    department: "Mechanical",
    title: "Unified Lifelong Technical Learning Integration with Structured Framework for The Technical Education System to Foster Expertise Using Academic Bank of Credit",
    publication: "Educational Administration: Theory and Practice",
    type: "International Journal",
    date: "Jun-24",
    link: "https://kuey.net/index.php/kuey/article/view/1552/734"
  },
  {
    srNo: 72,
    author: "Dr. Mahesh Bhong",
    designation: "Associate Professor",
    department: "Mechanical",
    title: "Model for facilitative practical learning in engineering education under India’s New Education policy (NEP): a stepwise framework",
    publication: "Educational Administration: Theory and Practice",
    type: "International Journal",
    date: "Jun-24",
    link: ""
  },
  {
    srNo: 73,
    author: "Dr. Kiran Devade",
    designation: "Professor",
    department: "Mechanical",
    title: "Model for facilitative practical learning in engineering education under India’s New Education policy (NEP): a stepwise framework",
    publication: "Educational Administration: Theory and Practice",
    type: "International Journal",
    date: "Jun-24",
    link: ""
  },
  {
    srNo: 74,
    author: "Ashwini Admane",
    designation: "Assistant Professor",
    department: "Mechanical",
    title: "Industrial Waste Water Treatment Facilities",
    publication: "International Journal for Multidisciplinary Research",
    type: "International Journal",
    date: "Mar-25",
    link: ""
  },
  {
    srNo: 75,
    author: "Pranali Khatake",
    designation: "Assistant Professor",
    department: "Mechanical",
    title: "Industrial Waste Water Treatment Facilities",
    publication: "International Journal for Multidisciplinary Research",
    type: "International Journal",
    date: "Mar-25",
    link: ""
  },
  {
    srNo: 76,
    author: "Pranali Khatake",
    designation: "Assistant Professor",
    department: "Mechanical",
    title: "Enhancement in Surface finish for boring operation by minimizing vibration.",
    publication: "International Journal of Creative Research Thoughts",
    type: "International Journal",
    date: "Feb-25",
    link: ""
  },
  {
    srNo: 77,
    author: "Ashwini Admane",
    designation: "Assistant Professor",
    department: "Mechanical",
    title: "Enhancement in Surface finish for boring operation by minimizing vibration.",
    publication: "International Journal of Creative Research Thoughts",
    type: "International Journal",
    date: "Feb-25",
    link: ""
  },
  {
    srNo: 78,
    author: "Dr Saurabh Gupta",
    designation: "Dean Academics",
    department: "Mechanical",
    title: "The Green Revolution: How Environmental Science is Shaping a Sustainable Future",
    publication: "Journal of Advanced Zoology",
    type: "International",
    date: "Dec-23",
    link: ""
  },
  {
    srNo: 79,
    author: "Dr.Kiran Devade",
    designation: "Professor",
    department: "Mechanical",
    title: "Green Nanotechnology Based Sustainable Energy Solutions and Environmental Impacts",
    publication: "E3S Web Conf.",
    type: "International",
    date: "Apr-24",
    link: "https://www.e3s-conferences.org/articles/e3sconf/abs/2024/41/e3sconf_amgse2024_01031/e3sconf_amgse2024_01031.html"
  },
  {
    srNo: 80,
    author: "Vishal Meshram",
    designation: "Assistant Professor",
    department: "Mechanical",
    title: "Investigation of Sequential Port Fuel Injection over Manifold Fuel Injection to Evaluate Combustion and Emission Parameters in Spark Ignition Engine Using Hydrogen Enriched CNG Blends",
    publication: "International Journal of Mechanical Engineering",
    type: "International",
    date: "Feb-25",
    link: "https://www.internationaljournalssrg.org/IJME/paper-details?Id=572"
  },
  {
    srNo: 81,
    author: "Prof. Shreyas Satpute",
    designation: "Assistant Professor",
    department: "Civil Engg.",
    title: "Feasibility Study of Aquawall - An Alternative for Conventional Rain Water Harvesting System",
    publication: "International Journal of Advanced Research in Science, Communication and Technology",
    type: "International Journal",
    date: "Jul-24",
    link: "https://ijarsct.co.in/Jul4i1.html"
  },
  {
    srNo: 82,
    author: "Prof. Shreyas Satpute",
    designation: "Assistant Professor",
    department: "Civil Engg.",
    title: "Modification in Automated Aeroponic Indoor Air Purifier (Pavana) and its Feasibility Analysis",
    publication: "International Journal of Advanced Research in Science, Communication and Technology",
    type: "International Journal",
    date: "Jul-24",
    link: "https://ijarsct.co.in/Jul4i1.html"
  },
  {
    srNo: 83,
    author: "Savita Jangale",
    designation: "Assistant Professor",
    department: "Civil",
    title: "Evaluation of Concrete Strength with Enhanced Permeability Using Polystyrene Beads",
    publication: "International Journal of Scientific Research in Engineering and Management",
    type: "International Journal",
    date: "Jan-25",
    link: "https://ijsrem.com/download/evaluation-of-concrete-strength-with-enhanced-permeability-using-polystyrene-beads/"
  },
  {
    srNo: 84,
    author: "Savita Jangale",
    designation: "Assistant Professor",
    department: "Civil Engg.",
    title: "Review Paper on Properties of Concrete using Grind Fish Scale in Different forms Replacing Fine Aggregate and Cement",
    publication: "IJARSCT",
    type: "International",
    date: "Jul-24",
    link: ""
  },
  {
    srNo: 85,
    author: "Dr Archana Salve",
    designation: "Professor",
    department: "MBA",
    title: "Optimisation of Dynamic Request Scheduling in Mobile Edge Computing",
    publication: "Library Progress International",
    type: "International",
    date: "Jul-Dec 2024",
    link: "https://bpasjournals.com/library-science/index.php/journal/article/view/2073/1943"
  },
  {
    srNo: 86,
    author: "Dr Archana Salve",
    designation: "Professor",
    department: "MBA",
    title: "Time Constrained Task Scheduling in Collaborative Edge Computing for IoT Applications",
    publication: "Library Progress International",
    type: "International",
    date: "Jul-Dec 2024",
    link: "https://bpasjournals.com/library-science/index.php/journal/article/view/2050/1949"
  },
  {
    srNo: 87,
    author: "Dr Archana Salve",
    designation: "Professor",
    department: "MBA",
    title: "QoE-based Resource Allocation Framework in the Heterogeneous Edge Internet of Things Environment",
    publication: "Library Progress International",
    type: "International",
    date: "Jul-Dec 2024",
    link: "https://bpasjournals.com/library-science/index.php/journal/article/view/2050/1949"
  },
  {
    srNo: 88,
    author: "Dr Archana Salve",
    designation: "Professor",
    department: "MBA",
    title: "innovative for siustainable future : Entreprenerual approached to global challenges",
    publication: "Proceedings of Annual International Conference on Multidisciplinary Research ( ICMR-2024 )",
    type: "International",
    date: "2024",
    link: ""
  },
  {
    srNo: 89,
    author: "Dr Archana Salve",
    designation: "Professor",
    department: "MBA",
    title: "impact of government agricultural on small scale farmers in India ral schemes",
    publication: "Madhya Pradesh Journal of Social Sciences",
    type: "National",
    date: "Dec-23",
    link: "https://mpissr.org/?page_id=1122"
  },
  {
    srNo: 90,
    author: "Prof. Aditee Huparikar",
    designation: "Assistant Professor",
    department: "MBA",
    title: "THE IMPACT OF ARTIFICIAL INTELLIGENCE ON ORGANIZATIONAL CULTURE: A PATHWAY TO DIGITAL TRANSFORMATION",
    publication: "ShodhKosh: Journal of Visual and Performing Arts",
    type: "International",
    date: "Jan-24",
    link: ""
  },
  {
    srNo: 91,
    author: "Dr Archana Salve",
    designation: "Professor",
    department: "MBA",
    title: "The Impact Of Gender Inclusion In Human Resource Management And Organizational Development",
    publication: "Journal of Information Systems Engineering and Management",
    type: "National",
    date: "Jan-25",
    link: "http://www.jisem-journal.com"
  },
  {
    srNo: 92,
    author: "Dr Archana Salve",
    designation: "Professor",
    department: "MBA",
    title: "Work life balance and employee welbeing : Exploring the role of flexible work arrangments in enhancing job satisfaction and retention rates",
    publication: "Pacific Business Review International",
    type: "International",
    date: "Dec-25",
    link: "https://www.pbr.co.in/"
  },
  {
    srNo: 93,
    author: "Aditee Huparikar Shah",
    designation: "Assistant Professor",
    department: "MBA",
    title: "TECH ENTREPRENEURS AND DISRUPTIVE INNOVATION: TRANSFORMING TRADITIONAL INDUSTRIES",
    publication: "ShodhKosh: Journal of Visual and Performing Arts",
    type: "International",
    date: "Jun-24",
    link: ""
  },
  {
    srNo: 94,
    author: "Dr. Darshana Desai",
    designation: "Professor",
    department: "MCA",
    title: "Sentiment Analysis and Offensive Language Identification in Code-Mixed Tamil-English Languages Using Transformer-Based Models",
    publication: "Springer",
    type: "International",
    date: "Aug-24",
    link: "https://link.springer.com/chapter/10.1007/978-3-031-64070-4_9"
  },
  {
    srNo: 95,
    author: "Dr. Poorna Shankar",
    designation: "Professor",
    department: "MCA",
    title: "Automated Traffic Management System Using Deep Learning Based Object Detection",
    publication: "1st International Conference on Sustainable Computing and Integrated Communication in Changing Landscape of AI (ICSCAI)",
    type: "International",
    date: "Jul-24",
    link: "https://doi.org/10.1109/ICSCAI61790.2024"
  },
  {
    srNo: 96,
    author: "Dr. Poorna Shankar",
    designation: "Professor",
    department: "MCA",
    title: "A review of harnessing the edge computing for healthcare transformation",
    publication: "International conference on Data Analytics and Insights (ICDAI 2024)",
    type: "International",
    date: "Jul-24",
    link: ""
  }
];

const journals2023_24 = [
  {
    srNo: 1,
    author: "Dr. Kiran Devade",
    designation: "First Year Engineering",
    department: "First Year Engineering",
    title: "Advance biomedical engineering – A fundamental review of composite materials and its applications",
    publication: "Materials Today Proceedings",
    date: "Aug-23",
    link: ""
  },
  {
    srNo: 2,
    author: "Ashwin Dharme",
    designation: "First Year Engineering",
    department: "First Year Engineering",
    title: "Sustainability by Design: Innovative Ways of Revolutionizing Production Practices for a Better Tomorrow",
    publication: "E3S Web of Conferences",
    date: "30-Nov-23",
    link: ""
  },
  {
    srNo: 3,
    author: "Dr. Kiran Devade",
    designation: "First Year Engineering",
    department: "First Year Engineering",
    title: "Green Nanotechnology Based Sustainable Energy Solutions and Environmental Impacts",
    publication: "Materials Today Proceedings",
    date: "10-Apr-24",
    link: ""
  },
  {
    srNo: 4,
    author: "Dr. Mahesh G. Bhong",
    designation: "Faculty",
    department: "Mechanical",
    title: "Review of composite materials and applications",
    publication: "Materials Today Proceedings",
    date: "6-Oct-23",
    link: ""
  },
  {
    srNo: 5,
    author: "Ashwini Gaikwad",
    designation: "Faculty",
    department: "Mechanical",
    title: "A review of armour's use of composite materials",
    publication: "Materials Today Proceedings",
    date: "26-Sep-23",
    link: ""
  },
  {
    srNo: 6,
    author: "Pranali Khatake",
    designation: "Faculty",
    department: "Mechanical",
    title: "Cold spray coating: A review of material systems and future perspectives",
    publication: "Materials Today Proceedings",
    date: "7-Nov-23",
    link: ""
  },
  {
    srNo: 7,
    author: "Sushil Chopade",
    designation: "Faculty",
    department: "Mechanical",
    title: "Physical and mechanical properties of foamed concrete, a literature review",
    publication: "Materials Today Proceedings",
    date: "3-Nov-23",
    link: ""
  },
  {
    srNo: 8,
    author: "Vishal A. Meshram",
    designation: "Faculty",
    department: "Mechanical",
    title: "Blueprints for Green Horizons: Sustainable Strategies in Design and Production",
    publication: "E3S Web of Conferences",
    date: "30-Nov-23",
    link: ""
  },
  {
    srNo: 9,
    author: "Dr. Mahesh G. Bhong",
    designation: "Faculty",
    department: "Mechanical",
    title: "Key Enabler on Efficient Resource Utilization: Technical and Managerial Investigations for Sustainable Materials and Energy Management",
    publication: "E3S Web of Conferences",
    date: "30-Nov-23",
    link: ""
  },
  {
    srNo: 10,
    author: "Dr. Mahesh G. Bhong",
    designation: "Faculty",
    department: "Mechanical",
    title: "Reinventing Production: A Case Study on implementing the strategic Innovations in Sustainable Remanufacturing",
    publication: "E3S Web of Conferences",
    date: "30-Nov-23",
    link: ""
  },
  {
    srNo: 11,
    author: "Sushil Chopade",
    designation: "Faculty",
    department: "Mechanical",
    title: "Closing the Loop: Advances in Materials, Energy, and Waste Management",
    publication: "E3S Web of Conferences",
    date: "30-Nov-23",
    link: ""
  },
  {
    srNo: 12,
    author: "Sagar Chirade",
    designation: "Faculty",
    department: "Mechanical",
    title: "Digital Dimensions: Unveiling the Potential of E-Design and Virtual Prototyping",
    publication: "E3S Web of Conferences",
    date: "30-Nov-23",
    link: ""
  },
  {
    srNo: 13,
    author: "Ashwini Gaikwad",
    designation: "Faculty",
    department: "Mechanical",
    title: "Reshaping Industry: Adoption of Sustainable Techniques providing Remanufacturing Solutions in High-Tech industries",
    publication: "E3S Web of Conferences",
    date: "30-Nov-23",
    link: ""
  },
  {
    srNo: 14,
    author: "Dr. Sunil B. Ingole",
    designation: "Faculty",
    department: "Mechanical",
    title: "Eco-Revolution: Exploration on Advancing Remanufacturing for a Greener Future",
    publication: "E3S Web of Conferences",
    date: "30-Nov-23",
    link: ""
  },
  {
    srNo: 15,
    author: "Hemant V. Darokar",
    designation: "Faculty",
    department: "Mechanical",
    title: "Regenerative Manufacturing: Crafting a Sustainable Future through Design and Production",
    publication: "E3S Web of Conferences",
    date: "30-Nov-23",
    link: ""
  },
  {
    srNo: 16,
    author: "Pranali Khatake",
    designation: "Faculty",
    department: "Mechanical",
    title: "Harmonizing Innovation: The Path to Sustainable Design and Production",
    publication: "E3S Web of Conferences",
    date: "30-Nov-23",
    link: ""
  },
  {
    srNo: 17,
    author: "Dr. Sunil B. Ingole",
    designation: "Faculty",
    department: "Mechanical",
    title: "From Waste to Worth Management: A Comprehensive Intelligent Approach to Resource Utilization and Waste Minimization",
    publication: "E3S Web of Conferences",
    date: "30-Nov-23",
    link: ""
  },
  {
    srNo: 18,
    author: "Hemant V. Darokar",
    designation: "Faculty",
    department: "Mechanical",
    title: "Maximizing towards the Sustainability: Integrating Materials, Energy, and Resource Efficiency in revolutionizing Manufacturing Industry",
    publication: "E3S Web of Conferences",
    date: "30-Nov-23",
    link: ""
  },
  {
    srNo: 19,
    author: "Sagar Chirade",
    designation: "Faculty",
    department: "Mechanical",
    title: "Eco-Conscious Creation: Navigating the Nexus of Sustainability and Production Design",
    publication: "E3S Web of Conferences",
    date: "30-Nov-23",
    link: ""
  },
  {
    srNo: 20,
    author: "Dr. Mahesh G. Bhong",
    designation: "Faculty",
    department: "Mechanical",
    title: "Deep Learning Analytics and Operations Research: Models, Applications and Managerial Implications",
    publication: "IEEE Xplore",
    date: "26-Jan-24",
    link: ""
  },
  {
    srNo: 21,
    author: "Sagar Chirade",
    designation: "Faculty",
    department: "Mechanical",
    title: "Enhancement Of Fault Diagnosis In Mechanical Systems Using Deep Learning Techniques",
    publication: "IEEE Xplore",
    date: "26-Jan-24",
    link: ""
  },
  {
    srNo: 22,
    author: "Dr. Mahesh G. Bhong",
    designation: "Faculty",
    department: "Mechanical",
    title: "Investigating the Synergistic Effects of Hybrid Nanofillers in Polymer Matrix Nanocomposites for Superior Mechanical and Electrical Performance",
    publication: "E3S Web of Conferences",
    date: "10-Apr-24",
    link: ""
  },
  {
    srNo: 23,
    author: "Dr. Mahesh G. Bhong",
    designation: "Faculty",
    department: "Mechanical",
    title: "Renewable Energy Integration for Urban Sustainability A Nanomaterial Perspective",
    publication: "E3S Web of Conferences",
    date: "10-Apr-24",
    link: ""
  },
  {
    srNo: 24,
    author: "Dr. Sunil B. Ingole",
    designation: "Faculty",
    department: "Mechanical",
    title: "Advanced Materials for High-Efficiency Solar Cells: A Comprehensive Exploration in Material Science",
    publication: "E3S Web of Conferences",
    date: "10-Apr-24",
    link: ""
  },
  {
    srNo: 25,
    author: "Dr. Sunil B. Ingole",
    designation: "Faculty",
    department: "Mechanical",
    title: "Enhancing Mechanical and Thermal Properties of Polymer Matrix Nanocomposites through Tailored Nanomaterial Architectures",
    publication: "E3S Web of Conferences",
    date: "10-Apr-24",
    link: ""
  },
  {
    srNo: 26,
    author: "Dr. Vikas Nandgaonkar",
    designation: "Faculty",
    department: "Computer Engineering",
    title: "Efficient Microarray Gene Expression Data Sample Classification using Statistical Class Prediction Method",
    publication: "International Journal of Intelligent Systems and applications in Engineering",
    date: "16-Aug-23",
    link: ""
  },
  {
    srNo: 27,
    author: "Dr. Vikas Nandgaonkar",
    designation: "Faculty",
    department: "Computer Engineering",
    title: "Quality, Quantity and Type detection of Fruits inside Refrigerator through Smart Vision in IoT",
    publication: "2023 International Conference on Sustainable Emerging Innovations in Engineering and Technology (ICSEIET)",
    date: "7-Nov-23",
    link: "https://ieeexplore.ieee.org/"
  },
  {
    srNo: 28,
    author: "Prof.Deepali Dhadwad",
    designation: "Faculty",
    department: "Computer Engineering",
    title: "A SYSTEMATIC LITERATURE SURVEY: Student Identification, Authentication and Information Display using RFID Technology",
    publication: "Compliance Engineering Journal",
    date: "Dec-23",
    link: ""
  },
  {
    srNo: 29,
    author: "Dr.Nilesh Mali",
    designation: "Faculty",
    department: "Computer Engineering",
    title: "MRI Segmentation Using Deep Neural Network-based Unet Architecture for Brain Tumor",
    publication: "IEEE, 3rd International Conference on Intelligent Technologies (CONIT 2023)",
    date: "7-Aug-23",
    link: "https://ieeexplore.ieee.org/"
  },
  {
    srNo: 30,
    author: "Prof. Deepali Dhadawad",
    designation: "Faculty",
    department: "Computer Engineering",
    title: "Implementation of Student Identification, Authentication and Information Display using RFID Technology",
    publication: "International Journal on Innovative Research in Computer and Communication Engineering(IJIRCCE)",
    date: "Apr-24",
    link: ""
  },
  {
    srNo: 31,
    author: "Prof. Pragati Malusare",
    designation: "Faculty",
    department: "Computer Engineering",
    title: "H.O.P.E Food Donation System",
    publication: "International Journal of Creative Research Thoughts(IJCRT)",
    date: "Apr-24",
    link: ""
  },
  {
    srNo: 32,
    author: "Shwetkranti Taware",
    designation: "Faculty",
    department: "Computer Engineering",
    title: "Link Prediction for social media using machine learning",
    publication: "Compilence Engg.",
    date: "2024",
    link: ""
  },
  {
    srNo: 33,
    author: "Shwetkranti Taware",
    designation: "Faculty",
    department: "Computer Engineering",
    title: "Vehicle driver Drowsiness Detection using Haar classifier",
    publication: "Compilence Engg",
    date: "2024",
    link: ""
  },
  {
    srNo: 34,
    author: "Prof.Reshma kohad",
    designation: "Faculty",
    department: "Computer Engineering",
    title: "Stock Market Prediction and Analysis using Supervised Learning",
    publication: "International Journal for Multidisciplinary Resesrch",
    date: "March-April 2024",
    link: ""
  },
  {
    srNo: 35,
    author: "Dr Priya Pise",
    designation: "Faculty",
    department: "AI and DS",
    title: "Brain Tumor Detection and Multi Classification Using GNB-Based Machine Learning Approach",
    publication: "International Journal on Recent and Innovation Trends in Computing and Communication",
    date: "Nov-23",
    link: ""
  },
  {
    srNo: 36,
    author: "Dr.Manjusha Tatiya",
    designation: "Faculty",
    department: "AI & DS",
    title: "Optimizing Communication Systems with Applied Nonlinear Analysis Techniques",
    publication: "Communications on Applied Nonlinear Analysis",
    date: "Dec-23",
    link: ""
  },
  {
    srNo: 37,
    author: "Dr Priya Pise",
    designation: "Faculty",
    department: "AI and DS",
    title: "FEATURE EXTRACTION USING AT-CONVLSTM BASED CULTURAL ALGORITHM FOR IMAGE UNDERSTANDING",
    publication: "ICTACT Journal on Image and Video Processing",
    date: "Aug-23",
    link: ""
  },
  {
    srNo: 38,
    author: "Dr.Manjusha Tatiya",
    designation: "Faculty",
    department: "AI & DS",
    title: "Enhancing MQTT Security in the Internet of Things with an Enhanced Symmetric Algorithm",
    publication: "Journal of Electrical Systems",
    date: "Mar-24",
    link: ""
  },
  {
    srNo: 39,
    author: "Dr.Manjusha Tatiya",
    designation: "Faculty",
    department: "AI & DS",
    title: "Empowering IoT Healthcare Systems with Deep Learning: From Sensor Data Fusion to Predictive Modeling and Intervention",
    publication: "Journal of Electrical Systems",
    date: "Apr-24",
    link: ""
  },
  {
    srNo: 40,
    author: "Dr.Manjusha Tatiya",
    designation: "Faculty",
    department: "AI & DS",
    title: "Security-aware analytical framework : A mathematical model and machine learning for dynamical system control in secure environments",
    publication: "Journal of Discrete Mathematical Sciences and Cryptography",
    date: "Apr-24",
    link: ""
  },
  {
    srNo: 41,
    author: "Dr. Poorna Shankar",
    designation: "Faculty",
    department: "MCA",
    title: "Analysis of Factors that Improve Reliability and Effectiveness of DevOps Culture in Developing Connected Devices",
    publication: "SSRN (Elsevier)",
    date: "21-Jul-23",
    link: ""
  },
  {
    srNo: 42,
    author: "Dr. Poorna Shankar",
    designation: "Faculty",
    department: "MCA",
    title: "Impact of digital pedagogy on student satisfaction during pandemic",
    publication: "AIMS journal of Managmenet",
    date: "Jul-23",
    link: ""
  },
  {
    srNo: 43,
    author: "Dr. Poorna Shankar",
    designation: "Faculty",
    department: "MCA",
    title: "Role Of Artificial Intelligence In Modern Education System",
    publication: "Journal of Namibian Studies",
    date: "Aug-23",
    link: ""
  },
  {
    srNo: 44,
    author: "Dr. Darshana Desai",
    designation: "Faculty",
    department: "MCA",
    title: "Predictive Model of Personalized Recommender System of Users Purchase",
    publication: "Springer",
    date: "23-Aug",
    link: ""
  },
  {
    srNo: 45,
    author: "Dr. Poorna Shankar",
    designation: "Faculty",
    department: "MCA",
    title: "Exploring the Complexities of GPS Navigation: Addressing Challenges and Solutions in the Functionality of Google Maps",
    publication: "IEEE, Explore",
    date: "22-Jan-24",
    link: "https://doi.org/10.1109/ICCUBEA58933.2023.10392261"
  },
  {
    srNo: 46,
    author: "Dr. Poorna Shankar",
    designation: "Faculty",
    department: "MCA",
    title: "Secure Authentication Protocols For Internet Of Things (Iot) Devices",
    publication: "IEEE, Explore",
    date: "14-Sep-23",
    link: "https://doi.org/10.1109/IC3I59117.2023.10397626"
  },
  {
    srNo: 47,
    author: "Dr Archana Salve",
    designation: "Faculty",
    department: "MBA",
    title: "Enhancing Employability in India: Unraveling the Transformative Potential of Vocational Education for Students' Career Success",
    publication: "Madhya Pradesh Journal Of Social Sciences",
    date: "01-Jul-23",
    link: ""
  },
  {
    srNo: 48,
    author: "Dr Archana Salve",
    designation: "Faculty",
    department: "MBA",
    title: "Impact of Employee Training Programs on Job Performance and Job Satisfaction in a Medium-Sized Company",
    publication: "Madhya Pradesh Journal Of Social Sciences",
    date: "01-Jul-23",
    link: ""
  },
  {
    srNo: 49,
    author: "Dr Archana Salve",
    designation: "Faculty",
    department: "MBA",
    title: "A Study to Analyze the Impact of COVID-19 Pandemic on Work from Home Employees in HR Department of Power Grid Corporation of India Limited",
    publication: "Madhya Pradesh Journal Of Social Sciences",
    date: "01-Jul-23",
    link: ""
  },
  {
    srNo: 50,
    author: "Dr Archana Salve",
    designation: "Faculty",
    department: "MBA",
    title: "A Critical Study on Empowering Women in the Organization through Hybrid Work Culture",
    publication: "Madhya Pradesh Journal Of Social Sciences",
    date: "01-Jul-23",
    link: ""
  },
  {
    srNo: 51,
    author: "Prof Pravin Thorat",
    designation: "Faculty",
    department: "MBA",
    title: "Students Psychology towards Bridging the Gap between Academia and Corporate",
    publication: "Journal for Re Attach Therapy and Developmental Diversities",
    date: "23-Aug",
    link: ""
  },
  {
    srNo: 52,
    author: "Mrs.Sonali Pradhan",
    designation: "Faculty",
    department: "MBA",
    title: "Millets Cultivation in India: its resurgence and sustainability millets in agro business",
    publication: "Madhya Pradesh Journal Of Social Sciences",
    date: "Dec-23",
    link: ""
  },
  {
    srNo: 53,
    author: "Prof Pravin Thorat",
    designation: "Faculty",
    department: "MBA",
    title: "Assessing Millets Consumption Behavior of Youths in Urban India",
    publication: "Madhya Pradesh Journal Of Social Sciences",
    date: "Dec-23",
    link: ""
  },
  {
    srNo: 54,
    author: "Prof Pravin Thorat",
    designation: "Faculty",
    department: "MBA",
    title: "The Year of Millets A Global Movement for Food and Nutrition Security",
    publication: "Madhya Pradesh Journal Of Social Sciences",
    date: "Dec-23",
    link: ""
  },
  {
    srNo: 55,
    author: "Prof Pravin Thorat",
    designation: "Faculty",
    department: "MBA",
    title: "The Production of Indian Super Crop “Millets” And Its Impact on Economy of Indian Farmers",
    publication: "Madhya Pradesh Journal Of Social Sciences",
    date: "Dec-23",
    link: ""
  },
  {
    srNo: 56,
    author: "Mrs. Anita Surve",
    designation: "Faculty",
    department: "MBA",
    title: "Talent Managment Practices in the IT SEctor, Pune Based Analytical Study UNVEILING THE NUTRITIONAL PROFILE OF MILLETS: A POTENTIAL",
    publication: "Naturalista Campano",
    date: "Mar-24",
    link: ""
  },
  {
    srNo: 57,
    author: "Dr. Priyanka Pawar",
    designation: "Faculty",
    department: "MBA",
    title: "SOLUTION TO GLOBAL MALNUTRITION",
    publication: "Madhya Pradesh Journal Of Social Sciences",
    date: "Dec-23",
    link: ""
  },
  {
    srNo: 58,
    author: "Prof. Aditee Huparikar",
    designation: "Faculty",
    department: "MBA",
    title: "IMPACT OF MILLET- BASED DIETS ON FOOD SECURITY AND NUTRITION IN DEVELOPING COUNTRIES",
    publication: "Madhya Pradesh Journal Of Social Sciences",
    date: "Dec-23",
    link: ""
  },
  {
    srNo: 59,
    author: "Prof. Narayani Panchal",
    designation: "Faculty",
    department: "MBA",
    title: "A study on awareness and consumption of millets by women",
    publication: "Madhya Pradesh Journal Of Social Sciences",
    date: "Dec-23",
    link: ""
  },
  {
    srNo: 60,
    author: "Dr. Priyanka Pawar",
    designation: "Faculty",
    department: "MBA",
    title: "Impact of Musical Appeal in Advertisement on consumer mindset",
    publication: "Shodhkosh: Journal of visual & Performance Arts",
    date: "Mar-24",
    link: ""
  },
  {
    srNo: 61,
    author: "Prof. Priyanka Shinde",
    designation: "Faculty",
    department: "MBA",
    title: "Internet of Things and Machine Learning for Smart-Agriculture: Technologies, Practices, and Future Direction",
    publication: "International Journal of Intelligent Systems and Applications in Engineering",
    date: "11-Oct-23",
    link: ""
  }
];

const journals2022_23 = [
  {
    srNo: 1,
    author: "Dr Priya Pise",
    designation: "Faculty",
    department: "Computer Engineering",
    title: "Automatic robot Manoeuvres detection using computer vision and deep learning techniques: a perspective of internet of robotics things (IoRT)",
    publication: "Springer US-Multimedia Tools and Applications",
    date: "Nov-22",
    link: "https://link.springer.com/article/10.1007/s11042-022-14253-5"
  },
  {
    srNo: 2,
    author: "Dr. Sachin Kumar",
    designation: "Faculty",
    department: "Computer Engineering",
    title: "Technology for Better Business in Society",
    publication: "International Journal of Philosophy and Languages (IJPL)",
    date: "Nov-22",
    link: "https://srinivaspublication.com/journal/index.php/ijpl"
  },
  {
    srNo: 3,
    author: "Pragati Choudhari",
    designation: "Faculty",
    department: "Computer Engineering",
    title: "Food Recommender: Deep Learning Approach for Predicting Daily Diet Based on Body Prakriti",
    publication: "International Journal of Health Sciences",
    date: "2022",
    link: "https://www.semanticscholar.org/paper/Food-Recommender%3A-Deep-Learning-Approach-for-Daily-Choudhari/eaface4c9a58732c8b318d5c800c27c4c6d5a31b"
  },
  {
    srNo: 4,
    author: "Nilesh Mali",
    designation: "Faculty",
    department: "Computer Engineering",
    title: "A Survey of Classification and Detection of Fake and Real News using Machine Learning Algorithms and Techniques",
    publication: "Grenze International Journal of Engineering and Technology",
    date: "Jan-23",
    link: "https://thegrenze.com/index.php?display=page&view=journaldetails&id=85"
  },
  {
    srNo: 5,
    author: "Manjusha Tatiya",
    designation: "Faculty",
    department: "Computer Engineering",
    title: "Biometric Based Metro Ticketing System Using Image Processing",
    publication: "International Journal of Innovative Research in Computer & Communication Engineering",
    date: "Dec-22",
    link: "http://ijircce.com/admin/main/storage/app/pdf/TKbGWfLYlR9FWYwefaGOPoMoq3jBPfxkiKgoBzer.pdf"
  },
  {
    srNo: 6,
    author: "Manjusha Tatiya",
    designation: "Faculty",
    department: "Computer Engineering",
    title: "Prarambh-A platform that helps Connect Startups and Investors",
    publication: "Compliance Engineering Journal",
    date: "Mar-23",
    link: "https://drive.google.com/file/d/1elMGEFYNKg9X2xZHiu-K4AJQiTWhT4tJ/view"
  },
  {
    srNo: 7,
    author: "Manjusha Tatiya",
    designation: "Faculty",
    department: "Computer Engineering",
    title: "Block Chain Technology in Cloud storage",
    publication: "Novyi Mir Research Journal",
    date: "May-23",
    link: "https://novyimir.net/volume-8-issue-5-2023/"
  },
  {
    srNo: 8,
    author: "Manjusha Tatiya",
    designation: "Faculty",
    department: "Computer Engineering",
    title: "Block Chain Based Cloud Storage System",
    publication: "MANTECH Publications, Journal of Cloud Computing & Internet of Things",
    date: "May-23",
    link: "https://mantechpublications.com/admin/index.php/JoCCIT/issue/archive"
  },
  {
    srNo: 9,
    author: "Manjusha Tatiya",
    designation: "Faculty",
    department: "Computer Engineering",
    title: "Prescription Reader using Machine Learning: An Analysis",
    publication: "MANTECH Publications, Journal of Artificial Intelligence, Machine learning and soft computing",
    date: "May-23",
    link: "https://mantechpublications.com/admin/index.php/JoAIMLSC/issue/view/5319"
  },
  {
    srNo: 10,
    author: "Sunil Rathod",
    designation: "Faculty",
    department: "Computer Engineering",
    title: "A DISCUSSION OF KEY AGGREGATE CRYPTOSYSTEMS AND DECOY TECHNOLOGY USED FOR SECURE DATA SHARING IN THE CLOUD",
    publication: "Anveshana’s International Journal of Research in Engineering and Applied Sciences",
    date: "Jan-23",
    link: "http://publications.anveshanaindia.com/aijreas/aijreas-volume-8-issue-1-2023-january/"
  },
  {
    srNo: 11,
    author: "Sunil Rathod",
    designation: "Faculty",
    department: "Computer Engineering",
    title: "AN ANALYSIS OF ASSEMBLE PREDICTION MODELS FOR ENERGY USE IN BUILDINGS USING ARTIFICIAL INTELLIGENCE",
    publication: "Anveshana’s International Journal of Research in Engineering and Applied Sciences",
    date: "Jan-23",
    link: "http://publications.anveshanaindia.com/aijreas/aijreas-volume-8-issue-1-2023-january/"
  },
  {
    srNo: 12,
    author: "Sunil Rathod",
    designation: "Faculty",
    department: "Computer Engineering",
    title: "A REVIEW OF ARTIFICIAL INTELLIGENCE TECHNIQUES USED WITH RENEWABLE ENERGY SYSTEMS",
    publication: "Anveshana’s International Journal of Research in Engineering and Applied Sciences",
    date: "Apr-23",
    link: "http://publications.anveshanaindia.com/aijreas/aijreas-volume-8-issue-04-2023-april/"
  },
  {
    srNo: 13,
    author: "Sunil Rathod",
    designation: "Faculty",
    department: "Computer Engineering",
    title: "AN ANALYSIS OF KEY AGGREGATE CRYPTOSYSTEMS FOR SCALABLE CLOUD DATA SHARING",
    publication: "Anveshana’s International Journal of Research in Engineering and Applied Sciences",
    date: "Apr-23",
    link: "http://publications.anveshanaindia.com/aijreas/aijreas-volume-8-issue-04-2023-april/"
  },
  {
    srNo: 14,
    author: "Nilesh Mali",
    designation: "Faculty",
    department: "Computer Engineering",
    title: "AN ANALYSIS OF KEY AGGREGATE CRYPTOSYSTEMS FOR SCALABLE CLOUD DATA SHARING",
    publication: "Anveshana’s International Journal of Research in Engineering and Applied Sciences",
    date: "Apr-23",
    link: "http://publications.anveshanaindia.com/aijreas/aijreas-volume-8-issue-04-2023-april/"
  },
  {
    srNo: 15,
    author: "Dr. Kiran Devade",
    designation: "Faculty",
    department: "First Year Engineering",
    title: "Sewage Treatment Plant (STP) : Industry 4.0 Case Study switch from Breakdown to Predictive Maintenance",
    publication: "GIS Journal of Science",
    date: "07-Sep-22",
    link: "http://www.gisscience.net/VOLUME-9-ISSUE-8-2022/"
  },
  {
    srNo: 16,
    author: "Mandakini Dahiwade",
    designation: "Faculty",
    department: "First Year Engineering",
    title: "Influence of beta cyclodextrin on amlodipine-BSA interaction: A spectroscopic and molecular docking study",
    publication: "Chemical Data Collections",
    date: "Dec-22",
    link: "https://doi.org/10.1016/j.cdc.2022.100945"
  },
  {
    srNo: 17,
    author: "Ashwin Dharme",
    designation: "Faculty",
    department: "Mechanical Engineering",
    title: "Role of CNT in influencing the mechanical properties of the Mg-based composites: An overview",
    publication: "Materials Today Proceedings",
    date: "09-Mar-23",
    link: "https://doi.org/10.1016/j.matpr.2023.02.385"
  },
  {
    srNo: 18,
    author: "Dr. Kiran Devade",
    designation: "Faculty",
    department: "First Year Engineering",
    title: "Severe plastic deformation: A state of art",
    publication: "Materials Today Proceedings",
    date: "01-Mar-23",
    link: "https://doi.org/10.1016/j.matpr.2023.02.194"
  },
  {
    srNo: 19,
    author: "Ashwin Dharme",
    designation: "Faculty",
    department: "Mechanical Engineering",
    title: "A critical review on different aspects of electric discharge machining",
    publication: "Materials Today Proceedings",
    date: "17-Apr-23",
    link: "https://doi.org/10.1016/j.matpr.2023.03.748"
  },
  {
    srNo: 20,
    author: "Aditee Huparikar",
    designation: "Faculty",
    department: "MBA",
    title: "A literature review study on Analysing role of fintech in sustainable banking.",
    publication: "TOJDEL",
    date: "May-23",
    link: "https://tojdel.net/journals/tojdel/volumes/tojdel-volume11-i02.pdf"
  },
  {
    srNo: 21,
    author: "Dr Archana Salve",
    designation: "Faculty",
    department: "MBA",
    title: "FACTORS INFLUENCING CUSTOMER EXPERIENCE VALUE IN SHOPPING MALLS",
    publication: "WORLD JOURNAL OF MANAGEMENT AND ECONOMICS",
    date: "06-Mar-23",
    link: "https://wesro.org/"
  },
  {
    srNo: 22,
    author: "Dr Archana Salve",
    designation: "Faculty",
    department: "MBA",
    title: "Artificial intellegence based risk management of credit sales in E commerece",
    publication: "WORLD JOURNAL OF MANAGEMENT AND ECONOMICS",
    date: "06-Mar-23",
    link: "https://wesro.org/"
  },
  {
    srNo: 23,
    author: "Dr Archana Salve",
    designation: "Faculty",
    department: "MBA",
    title: "Effect of Leveraging the right Technology for global customer relationship Management",
    publication: "WORLD JOURNAL OF MANAGEMENT AND ECONOMICS",
    date: "06-Mar-23",
    link: "https://wesro.org/"
  },
  {
    srNo: 24,
    author: "Dr Archana Salve",
    designation: "Faculty",
    department: "MBA",
    title: "An evaluation of the effect of economic development on crypto currency",
    publication: "WORLD JOURNAL OF MANAGEMENT AND ECONOMICS",
    date: "06-Mar-23",
    link: "https://wesro.org/"
  },
  {
    srNo: 25,
    author: "Dr Archana Salve",
    designation: "Faculty",
    department: "MBA",
    title: "Effect of Work-Life Balance Practices and Working Culture on Hybrid Employee Job Satisfaction: Study on IT Industry",
    publication: "WORLD JOURNAL OF MANAGEMENT AND ECONOMICS",
    date: "01-Jan-23",
    link: "https://wesro.org/"
  },
  {
    srNo: 26,
    author: "Dr. Priyanka Pawar",
    designation: "Faculty",
    department: "MBA",
    title: "A study of Corporate Social Responsibility as an Effective tool of Corporate Marketing",
    publication: "NeuroQuantology",
    date: "2022",
    link: "https://neuroquantology.com/article.php?id=11396"
  },
  {
    srNo: 27,
    author: "Dr. Priyanka Pawar",
    designation: "Faculty",
    department: "MBA",
    title: "A study of effectiveness of Big Data Analystics on organisational growth with refernce to manufactuiring sector",
    publication: "NeuroQuantology",
    date: "2022",
    link: "https://neuroquantology.com/issue=141&page=12"
  },
  {
    srNo: 28,
    author: "Dr. Priyanka Pawar",
    designation: "Faculty",
    department: "MBA",
    title: "The Study Of Awareness & Analysis Of Stem Cell Technology Business In The Maharashtra State Of India",
    publication: "IJFANS International Journal of Food and Nutritional Sciences",
    date: "2022",
    link: "https://www.ijfans.org/uploads/paper/7ad46108f8a304f7348c30475505d9c8.pdf"
  },
  {
    srNo: 29,
    author: "Dr Archana Salve",
    designation: "Faculty",
    department: "MBA",
    title: "Role of Artificial Intelligence in Healthcare centre: A review",
    publication: "UGC listed care JOURNAL",
    date: "2022",
    link: "https://drive.google.com/file/d/1VDYD3HjB0_Xnf9j2exT9KIDzbA-ptZLq/view"
  },
  {
    srNo: 30,
    author: "Dr Archana Salve",
    designation: "Faculty",
    department: "MBA",
    title: "Use of ICT in Developing Effectiveness of teaching Skills for teachers in Higher Education",
    publication: "ABDC Journal",
    date: "2022",
    link: "https://kristudies.org/volume-15-issue-39-october-2022/"
  },
  {
    srNo: 31,
    author: "Dr. Priyanka Pawar",
    designation: "Faculty",
    department: "MBA",
    title: "Era Of Influencer Marketing: A Review Report",
    publication: "IJFANS International Journal of Food and Nutritional Sciences",
    date: "2022",
    link: "https://www.ijfans.org/uploads/paper/0e7fe0820229560eff5b77ac27c5f336.pdf"
  },
  {
    srNo: 32,
    author: "Dr. Priyanka Pawar",
    designation: "Faculty",
    department: "MBA",
    title: "A STUDY ON CUSTOMERS PERCEPTION ABOUT SIGNIFICANCE OF DIGITAL SECURITY",
    publication: "TOJDEL",
    date: "2022",
    link: "https://tojdel.net/journals/tojdel/volumes/tojdel-volume11-i01-c01.pdf"
  },
  {
    srNo: 33,
    author: "Aditee Huparikar",
    designation: "Faculty",
    department: "MBA",
    title: "A study of Corporate Social Responsibility as an Effective tool of Corporate Marketing",
    publication: "NeuroQuantology- Scopus Indexed Journal",
    date: "2022",
    link: "https://neuroquantology.com/article.php?id=11396"
  },
  {
    srNo: 34,
    author: "Priyanka Shinde",
    designation: "Faculty",
    department: "MBA",
    title: "Application of artificial intelligence and IOt for increasing productivity of agriculture sector",
    publication: "Internation Journal of applied engineering and technology",
    date: "2022",
    link: "https://romanpub.com/resources/ijaet%20v4-3-2022-07_pagenumber.pdf"
  },
  {
    srNo: 35,
    author: "Dr Archana Salve",
    designation: "Faculty",
    department: "MBA",
    title: "FACTORS INFLUENCING CUSTOMER EXPERIENCE VALUE IN SHOPPING MALLS",
    publication: "ABDC Journal",
    date: "2022",
    link: "https://wesro.org/volume-16-issue-02/"
  },
  {
    srNo: 36,
    author: "Prof Pravin Thorat",
    designation: "Faculty",
    department: "MBA",
    title: "Industrial Sector's Critical Risk Factors: An Analysis",
    publication: "UGC listed care JOURNAL",
    date: "2022",
    link: "https://www.ijfans.org/"
  },
  {
    srNo: 37,
    author: "Dr. Darshana Desai",
    designation: "Faculty",
    department: "MCA",
    title: "An empirical study of Privacy concern and trust in the decision to revisit Personalization of social networking websites",
    publication: "Advances in Data Science and Management. Lecture Notes on Data Engineering and Communications Technologies",
    date: "2022",
    link: "https://link.springer.com/chapter/10.1007/978-981-16-5685-9_20"
  },
  {
    srNo: 38,
    author: "Dr. Poorna Shankar",
    designation: "Faculty",
    department: "MCA",
    title: "UNDERSTANDING EFFECTIVENESS OF DEVOPS FOR DEVELOPING CONNECTED DEVICES",
    publication: "Journal of the Maharaja Sayajirao University of Baroda",
    date: "Jun-22",
    link: "https://msubaroda.ac.in/MSUB_Journal"
  },
  {
    srNo: 39,
    author: "Dr. Poorna Shankar",
    designation: "Faculty",
    department: "MCA",
    title: "Challenges of Adopting DevOps Culture on the Internet of Things Applications - A Solution Model",
    publication: "2nd International Conference on Technological Advancements in Computational Sciences (ICTACS)",
    date: "Oct-22",
    link: "https://ieeexplore.ieee.org/document/9988182"
  },
  {
    srNo: 40,
    author: "Dr. Darshana Desai",
    designation: "Faculty",
    department: "MCA",
    title: "Hyper-personalization An AI-enabled personalization for customer-centric marketing",
    publication: "Adoption and Implementation of AI in Customer Relationship Management",
    date: "2022",
    link: "https://www.igi-global.com/gateway/chapter/289446"
  },
  {
    srNo: 41,
    author: "Dr. Darshana Desai",
    designation: "Faculty",
    department: "MCA",
    title: "Case Study on Selection of Digital Learning Platform and Communication Tools for Future Education 4.0 in India",
    publication: "IEEE, Explore",
    date: "Dec-22",
    link: "https://ieeexplore.ieee.org/document/10014956"
  },
  {
    srNo: 42,
    author: "Dr. Darshana Desai",
    designation: "Faculty",
    department: "MCA",
    title: "Selection of Digital Learning Platform for Future Education 4.0 in India",
    publication: "IEEE, Explore",
    date: "Dec-22",
    link: "https://ieeexplore.ieee.org/document/10014894"
  },
  {
    srNo: 43,
    author: "Dr. Darshana Desai",
    designation: "Faculty",
    department: "MCA",
    title: "A Case Study on Use of Blockchain Technology as a Dominant Feature to Issue and Verify Documents Required for Admission to UG/PG Technical Programs in Maharashtra (India)",
    publication: "IEEE, Explore",
    date: "Dec-22",
    link: "https://ieeexplore.ieee.org/document/10014917"
  },
  {
    srNo: 44,
    author: "Dr. Poorna Shankar",
    designation: "Faculty",
    department: "MCA",
    title: "E-mail Spam Detection Using Machine Learning – KNN",
    publication: "5th International Conference on Contemporary Computing and Informatics (IC3I)",
    date: "22-Mar-23",
    link: "https://ieeexplore.ieee.org/"
  },
  {
    srNo: 45,
    author: "Dr. Poorna Shankar",
    designation: "Faculty",
    department: "MCA",
    title: "Devops culture and practices for IoT applications",
    publication: "BioGecko",
    date: "Apr-23",
    link: "#"
  },
  {
    srNo: 46,
    author: "Dr. Darshana Desai",
    designation: "Faculty",
    department: "MCA",
    title: "AI Enabled Blockchain solution for the Indian Judicial System",
    publication: "IEEE, Explore",
    date: "Apr-23",
    link: "https://ieeexplore.ieee.org/abstract/document/10100151"
  },
  {
    srNo: 47,
    author: "Dr. Sunil B. Ingole",
    designation: "Faculty",
    department: "Mechanical",
    title: "Aluminum-foam by powder metallurgy: A review",
    publication: "Materials Today Proceedings",
    date: "07-Apr-23",
    link: "https://doi.org/10.1016/j.matpr.2023.03.344"
  },
  {
    srNo: 48,
    author: "Dr. Sunil B. Ingole",
    designation: "Faculty",
    department: "Mechanical",
    title: "TEMPERATURE ANALYSIS FOR THE HORIZONTAL TARGET COOLING WITH NONCONFINED AND INCLINED AIR JET",
    publication: "Journal of Thermal Engineering",
    date: "Mar-23",
    link: "https://eds.yildiz.edu.tr/AjaxTool/GetArticleByPublishedArticleId?PublishedArticleId=6695"
  },
  {
    srNo: 49,
    author: "Dr. Vinayak M. Kale",
    designation: "Faculty",
    department: "Mechanical",
    title: "Effects of alloying element on the mechanical behavior of Mg-MMCs: A review",
    publication: "Materials Today Proceedings",
    date: "28-Feb-23",
    link: "https://doi.org/10.1016/j.matpr.2023.02.211"
  },
  {
    srNo: 50,
    author: "Siddheshwar Shirbhate",
    designation: "Faculty",
    department: "Mechanical",
    title: "Significance of reinforcement in Mg-based MMCs for various applications: A review",
    publication: "Materials Today Proceedings",
    date: "28-Feb-23",
    link: "https://doi.org/10.1016/j.matpr.2023.02.161"
  },
  {
    srNo: 51,
    author: "Mahesh G. Bhong",
    designation: "Faculty",
    department: "Mechanical",
    title: "Mg-based metal matrix composite in biomedical applications: A review",
    publication: "Materials Today Proceedings",
    date: "24-Mar-23",
    link: "https://doi.org/10.1016/j.matpr.2023.03.043"
  },
  {
    srNo: 52,
    author: "Sushil Chopade",
    designation: "Faculty",
    department: "Mechanical",
    title: "Role of processing techniques related to Mg-MMCs for biomedical implantation: An overview",
    publication: "Materials Today Proceedings",
    date: "08-Mar-23",
    link: "https://doi.org/10.1016/j.matpr.2023.02.195"
  },
  {
    srNo: 53,
    author: "Siddheshwar Shirbhate",
    designation: "Faculty",
    department: "Mechanical",
    title: "A brief overview of the equal channel angular processing approach",
    publication: "Materials Today Proceedings",
    date: "06-Mar-23",
    link: "https://doi.org/10.1016/j.matpr.2023.02.356"
  }
];

const journals2021_22 = [
  {
    srNo: 1,
    author: "Dr. Sunil B. Ingole",
    designation: "Faculty",
    department: "Mechanical",
    title: "Method of a Quality Management at Production Company",
    publication: "Journal of Harbin Institute of Technology",
    date: "2021-22",
    link: "http://periodicales.com"
  },
  {
    srNo: 2,
    author: "Mahesh G. Bhong, Vinayak M. Kale",
    designation: "Faculty",
    department: "Mechanical",
    title: "Profile drying: A novel multistage convection drying method for indian dark red onion slices",
    publication: "Journal of Thermal Engineering",
    date: "2021-22",
    link: "https://yildiz.edu.tr"
  },
  {
    srNo: 3,
    author: "Kiran D. Devade, Mahesh G. Bhong, Vinayak M. Kale, Sunil B. Ingole",
    designation: "Faculty",
    department: "Basic Engineering",
    title: "Sewage Treatment Plant (STP) : Industry 4.0 Case Study switch from Breakdown to Predictive Maintenance",
    publication: "GIS SCIENCE JOURNAL",
    date: "2021-22",
    link: "http://gisscience.net"
  },
  {
    srNo: 4,
    author: "Prof. Aditee Huparikar",
    designation: "Faculty",
    department: "MBA",
    title: "A Study on Influence of FinTech on Customer Satisfaction of Banks in Pune",
    publication: "Journal of Positive School Psychology",
    date: "2022",
    link: "https://journalppw.com"
  },
  {
    srNo: 5,
    author: "Dr. Soumitra Das",
    designation: "Faculty",
    department: "Computer Engineering",
    title: "Digitization of handwritten Devanagari text using CNN transfer learning – A better customer service support",
    publication: "Elsevier-Neuroscience Informatics",
    date: "2021-22",
    link: "https://www.sciencedirect.com"
  },
  {
    srNo: 6,
    author: "Pragati Choudhari",
    designation: "Faculty",
    department: "Computer Engineering",
    title: "Food Recommender: Deep Learning Approach for Predicting Daily Diet Based on Body Prakriti",
    publication: "International Journal of Health Sciences",
    date: "2021-22",
    link: "https://sciencescholar.us"
  },
  {
    srNo: 7,
    author: "Dr. Darshana Desai",
    designation: "Faculty",
    department: "MCA",
    title: "An empirical study of Privacy concern and trust in the decision to revisit Personalization of social networking websites",
    publication: "Springer Nature Series Lecture notes on Data Engineering and Communication Technologies",
    date: "2021-22",
    link: "https://link.springer.com"
  },
  {
    srNo: 8,
    author: "Dr. Darshana Desai",
    designation: "Faculty",
    department: "MCA",
    title: "Role of Privacy Concern and Control to Build Trust in Personalized Social Networking Sites",
    publication: "Algorithms for Intelligent Systems",
    date: "2021-22",
    link: "https://link.springer.com"
  },
  {
    srNo: 9,
    author: "Dr. Poorna Shankar",
    designation: "Faculty",
    department: "MCA",
    title: "Performance Tuning of Apache Hadoop Framework In Big Data Processing with respect to Block Size Operating System Clusters and Map Reduce Techniques",
    publication: "Design Engineering Journal",
    date: "2021-22",
    link: "http://www.thedesignengineering.com/index.php/DE/article/view/3074"
  },
  {
    srNo: 10,
    author: "Dr. Poorna Shankar",
    designation: "Faculty",
    department: "MCA",
    title: "Performance Tuning Of Apache Spark Framework In Big Data Processing with Respect To Block Size And Replication Factor",
    publication: "SAMRIDDHI: Journal of Physical Science Engineering and Technology",
    date: "2021-22",
    link: "https://smsjournals.com"
  },
  {
    srNo: 11,
    author: "Dr. Poorna Shankar",
    designation: "Faculty",
    department: "MCA",
    title: "Performance evaluation of apache spark framework in big Data processing with respect to scheduling",
    publication: "Journal of the Maharaja Sayajirao University of Baroda",
    date: "2021-22",
    link: "https://www.researchgate.net/publication/361366863_PERFORMANCE_EVALUATION_OF_APACHE_SPARK_FRAMEWORK_IN_BIG_DATA_PROCESSING_WITH_RESPECT_TO_SCHEDULING_ALGORITHMS_IN_MULTIUSER_ENVIRONMENT"
  },
  {
    srNo: 12,
    author: "Dr. Poorna Shankar",
    designation: "Faculty",
    department: "MCA",
    title: "A TAM Based Empirical Study of Acceptance of SNS by Academicians of Professional Colleges in and around Pune",
    publication: "NOVIY MIR Research Journal",
    date: "2021-22",
    link: "http://novyimir.net"
  },
  {
    srNo: 13,
    author: "Dr. Poorna Shankar",
    designation: "Faculty",
    department: "MCA",
    title: "Marching Ahead in Difficult Times: The Changing Face of Academia",
    publication: "ECS Transactions 2022",
    date: "2022",
    link: "https://ui.adsabs.harvard.edu/abs/2022ECSTr.107.7017K/abstract"
  },
  {
    srNo: 14,
    author: "Dr Archana Salve",
    designation: "Faculty",
    department: "MBA",
    title: "A Comparative Study of Developing Managerial skills through Management Education among Management Graduates at selected Institutes in Pune and Mumbai",
    publication: "The Electrochemical society ECS Transanctions",
    date: "2022",
    link: "https://ui.adsabs.harvard.edu/abs/2022ECSTr.107.3027S/abstract"
  }
];

const conferences2023_24 = [
  {
    srNo: 1,
    author: "Dr. Poorna Shankar",
    title: "DEVOPS CULTURE AND PRACTICES FOR IOT APPLICATIONS",
    proceedings: "BioGecko",
    conferenceName: "9th National conference on Emerging Trends in Computer Science & its applications",
    type: "International",
    date: "2023-24",
    isbn: "ISSN NO: 2230-5807",
    institute: "Indira College of Engineering and Management",
    publisher: "WOS",
    link: "https://biogecko.co.nz/admin/uploads/NC-SCO-117.pdf"
  },
  {
    srNo: 2,
    author: "Prof. Ashwin Dharme",
    title: "Sustainability by Design: Innovative Ways of Revolutionizing Production Practices for a Better Tomorrow",
    proceedings: "International Conference on Sustainable Development Goals (ICSDG 2023)",
    conferenceName: "International Conference on Sustainable Development Goals (ICSDG 2023)",
    type: "International",
    date: "2023-24",
    isbn: "eISSN: 2267-1242",
    institute: "Indira College of Engineering and Management",
    publisher: "E3S Web of Conferences",
    link: "https://doi.org/10.1051/e3sconf/202345301026"
  },
  {
    srNo: 3,
    author: "Prof. Vishal Meshram",
    title: "Blueprints for Green Horizons: Sustainable Strategies in Design and Production",
    proceedings: "International Conference on Sustainable Development Goals (ICSDG 2023)",
    conferenceName: "International Conference on Sustainable Development Goals (ICSDG 2023)",
    type: "International",
    date: "2023-24",
    isbn: "eISSN: 2267-1242",
    institute: "Indira College of Engineering and Management",
    publisher: "E3S Web of Conferences",
    link: "https://doi.org/10.1051/e3sconf/202345301030"
  },
  {
    srNo: 4,
    author: "Mahesh Bhong",
    title: "Key Enabler on Efficient Resource Utilization: Technical and Managerial Investigations for Sustainable Materials and Energy Management",
    proceedings: "International Conference on Sustainable Development Goals (ICSDG 2023)",
    conferenceName: "International Conference on Sustainable Development Goals (ICSDG 2023)",
    type: "International",
    date: "2023-24",
    isbn: "eISSN: 2267-1242",
    institute: "Indira College of Engineering and Management",
    publisher: "E3S Web of Conferences",
    link: "https://doi.org/10.1051/e3sconf/202345301023"
  },
  {
    srNo: 5,
    author: "Mahesh Bhong",
    title: "Reinventing Production: A Case Study on implementing the strategic Innovations in Sustainable Remanufacturing",
    proceedings: "International Conference on Sustainable Development Goals (ICSDG 2023)",
    conferenceName: "International Conference on Sustainable Development Goals (ICSDG 2023)",
    type: "International",
    date: "2023-24",
    isbn: "eISSN: 2267-1242",
    institute: "Indira College of Engineering and Management",
    publisher: "E3S Web of Conferences",
    link: "https://doi.org/10.1051/e3sconf/202345301022"
  },
  {
    srNo: 6,
    author: "Sushil Chopade",
    title: "Closing the Loop: Advances in Materials, Energy, and Waste Management",
    proceedings: "International Conference on Sustainable Development Goals (ICSDG 2023)",
    conferenceName: "International Conference on Sustainable Development Goals (ICSDG 2023)",
    type: "International",
    date: "2023-24",
    isbn: "eISSN: 2267-1242",
    institute: "Indira College of Engineering and Management",
    publisher: "E3S Web of Conferences",
    link: "https://doi.org/10.1051/e3sconf/202345301024"
  },
  {
    srNo: 7,
    author: "Sagar Chirade",
    title: "Digital Dimensions: Unveiling the Potential of E-Design and Virtual Prototyping",
    proceedings: "International Conference on Sustainable Development Goals (ICSDG 2023)",
    conferenceName: "International Conference on Sustainable Development Goals (ICSDG 2023)",
    type: "International",
    date: "2023-24",
    isbn: "eISSN: 2267-1242",
    institute: "Indira College of Engineering and Management",
    publisher: "E3S Web of Conferences",
    link: "https://doi.org/10.1051/e3sconf/202345301031"
  },
  {
    srNo: 8,
    author: "Ashwini Gaikwad",
    title: "Reshaping Industry: Adoption of Sustainable Techniques providing Remanufacturing Solutions in High-Tech industries",
    proceedings: "International Conference on Sustainable Development Goals (ICSDG 2023)",
    conferenceName: "International Conference on Sustainable Development Goals (ICSDG 2023)",
    type: "International",
    date: "2023-24",
    isbn: "eISSN: 2267-1242",
    institute: "Indira College of Engineering and Management",
    publisher: "E3S Web of Conferences",
    link: "https://doi.org/10.1051/e3sconf/202345301028"
  },
  {
    srNo: 9,
    author: "Dr. Sunil B. Ingole",
    title: "Eco-Revolution: Exploration on Advancing Remanufacturing for a Greener Future",
    proceedings: "International Conference on Sustainable Development Goals (ICSDG 2023)",
    conferenceName: "International Conference on Sustainable Development Goals (ICSDG 2023)",
    type: "International",
    date: "2023-24",
    isbn: "eISSN: 2267-1242",
    institute: "Indira College of Engineering and Management",
    publisher: "E3S Web of Conferences",
    link: "https://doi.org/10.1051/e3sconf/202345301027"
  },
  {
    srNo: 10,
    author: "Hemant V. Darokar",
    title: "Regenerative Manufacturing: Crafting a Sustainable Future through Design and Production",
    proceedings: "International Conference on Sustainable Development Goals (ICSDG 2023)",
    conferenceName: "International Conference on Sustainable Development Goals (ICSDG 2023)",
    type: "International",
    date: "2023-24",
    isbn: "eISSN: 2267-1242",
    institute: "Indira College of Engineering and Management",
    publisher: "E3S Web of Conferences",
    link: "https://doi.org/10.1051/e3sconf/202345301038"
  },
  {
    srNo: 11,
    author: "Pranali Khatake",
    title: "Harmonizing Innovation: The Path to Sustainable Design and Production",
    proceedings: "International Conference on Sustainable Development Goals (ICSDG 2023)",
    conferenceName: "International Conference on Sustainable Development Goals (ICSDG 2023)",
    type: "International",
    date: "2023-24",
    isbn: "eISSN: 2267-1242",
    institute: "Indira College of Engineering and Management",
    publisher: "E3S Web of Conferences",
    link: "https://doi.org/10.1051/e3sconf/202345301025"
  },
  {
    srNo: 12,
    author: "Dr. Sunil B. Ingole",
    title: "From Waste to Worth Management: A Comprehensive Intelligent Approach to Resource Utilization and Waste Minimization",
    proceedings: "International Conference on Sustainable Development Goals (ICSDG 2023)",
    conferenceName: "International Conference on Sustainable Development Goals (ICSDG 2023)",
    type: "International",
    date: "2023-24",
    isbn: "eISSN: 2267-1242",
    institute: "Indira College of Engineering and Management",
    publisher: "E3S Web of Conferences",
    link: "https://doi.org/10.1051/e3sconf/202345301029"
  },
  {
    srNo: 13,
    author: "Hemant V. Darokar",
    title: "Maximizing towards the Sustainability: Integrating Materials, Energy, and Resource Efficiency in revolutionizing Manufacturing Industry",
    proceedings: "International Conference on Sustainable Development Goals (ICSDG 2023)",
    conferenceName: "International Conference on Sustainable Development Goals (ICSDG 2023)",
    type: "International",
    date: "2023-24",
    isbn: "eISSN: 2267-1242",
    institute: "Indira College of Engineering and Management",
    publisher: "E3S Web of Conferences",
    link: "https://doi.org/10.1051/e3sconf/202345301036"
  },
  {
    srNo: 14,
    author: "Prof. Sagar Chirade",
    title: "Eco-Conscious Creation: Navigating the Nexus of Sustainability and Production Design",
    proceedings: "International Conference on Sustainable Development Goals (ICSDG 2023)",
    conferenceName: "International Conference on Sustainable Development Goals (ICSDG 2023)",
    type: "International",
    date: "2023-24",
    isbn: "eISSN: 2267-1242",
    institute: "Indira College of Engineering and Management",
    publisher: "E3S Web of Conferences",
    link: "https://doi.org/10.1051/e3sconf/202345301034"
  },
  {
    srNo: 15,
    author: "Ms. Pragati Malusare",
    title: "Grading of Fruit Ripeness Using Arduino in IoT",
    proceedings: "International Conference on Sustainable Emerging Innovations in Engineering and Technology (ICSEIET)",
    conferenceName: "International Conference on Sustainable Emerging Innovations in Engineering and Technology (ICSEIET)",
    type: "International",
    date: "2023-24",
    isbn: "eISBN:979-8-3503-2919-3, pISBN:979-8-3503-2918-6",
    institute: "Indira College of Engineering and Management",
    publisher: "IEEE Xplore",
    link: "https://ieeexplore.ieee.org/document/10303541"
  },
  {
    srNo: 16,
    author: "Dr. Vikas Nandgaonkar",
    title: "Quality, Quantity and Type detection of Fruits inside Refrigerator through Smart Vision in IoT",
    proceedings: "International Conference on Sustainable Emerging Innovations in Engineering and Technology (ICSEIET)",
    conferenceName: "International Conference on Sustainable Emerging Innovations in Engineering and Technology (ICSEIET)",
    type: "International",
    date: "2023-24",
    isbn: "eISBN:979-8-3503-2919-3, pISBN:979-8-3503-2918-6",
    institute: "Indira College of Engineering and Management",
    publisher: "IEEE Xplore",
    link: "https://ieeexplore.ieee.org/document/10303307"
  },
  {
    srNo: 17,
    author: "Dr. Soumitra Das",
    title: "Quality, Quantity and Type detection of Fruits inside Refrigerator through Smart Vision in IoT",
    proceedings: "International Conference on Sustainable Emerging Innovations in Engineering and Technology (ICSEIET)",
    conferenceName: "International Conference on Sustainable Emerging Innovations in Engineering and Technology (ICSEIET)",
    type: "International",
    date: "2023-24",
    isbn: "eISBN:979-8-3503-2919-3, pISBN:979-8-3503-2918-6",
    institute: "Indira College of Engineering and Management",
    publisher: "IEEE Xplore",
    link: "https://ieeexplore.ieee.org/document/10303307"
  },
  {
    srNo: 18,
    author: "Prof Pravin Thorat",
    title: "Assessing Millets Consumption Behavior of Youths in Urban India",
    proceedings: "National Conference on 'Transdisciplinary approach to its resurgence and Sustainability of Millets-Agro Business'",
    conferenceName: "National Conference on 'Transdisciplinary approach to its resurgence and Sustainability of Millets-Agro Business'",
    type: "National",
    date: "2023-24",
    isbn: "ISSN: 0973-855X",
    institute: "Indira College of Engineering and Management",
    publisher: "Madhya Pradesh Journal of Social Sciences",
    link: "#" // Link not explicitly provided, using placeholder
  },
  {
    srNo: 19,
    author: "Prof Pravin Thorat",
    title: "The Year of Millets A Global Movement for Food and Nutrition Security",
    proceedings: "National Conference on 'Transdisciplinary approach to its resurgence and Sustainability of Millets-Agro Business'",
    conferenceName: "National Conference on 'Transdisciplinary approach to its resurgence and Sustainability of Millets-Agro Business'",
    type: "National",
    date: "2023-24",
    isbn: "ISSN: 0973-855X",
    institute: "Indira College of Engineering and Management",
    publisher: "Madhya Pradesh Journal of Social Sciences",
    link: "#"
  },
  {
    srNo: 20,
    author: "Prof Pravin Thorat",
    title: "The Production of Indian Super Crop 'Millets' And Its Impact on Economy of Indian Farmers",
    proceedings: "National Conference on 'Transdisciplinary approach to its resurgence and Sustainability of Millets-Agro Business'",
    conferenceName: "National Conference on 'Transdisciplinary approach to its resurgence and Sustainability of Millets-Agro Business'",
    type: "National",
    date: "2023-24",
    isbn: "ISSN: 0973-855X",
    institute: "Indira College of Engineering and Management",
    publisher: "Madhya Pradesh Journal of Social Sciences",
    link: "#"
  },
  {
    srNo: 21,
    author: "Prof. Aditee Huparikar",
    title: "IMPACT OF MILLET- BASED DIETS ON FOOD SECURITY AND NUTRITION IN DEVELOPING COUNTRIES.",
    proceedings: "National Conference on 'Transdisciplinary approach to its resurgence and Sustainability of Millets-Agro Business'",
    conferenceName: "National Conference on 'Transdisciplinary approach to its resurgence and Sustainability of Millets-Agro Business'",
    type: "National",
    date: "2023-24",
    isbn: "ISSN: 0973-855X",
    institute: "Indira College of Engineering and Management",
    publisher: "Madhya Pradesh Journal of Social Sciences",
    link: "#"
  },
  {
    srNo: 22,
    author: "Prof. Narayani Panchal",
    title: "A study on awareness and consumption of millets by women",
    proceedings: "National Conference on 'Transdisciplinary approach to its resurgence and Sustainability of Millets-Agro Business'",
    conferenceName: "National Conference on 'Transdisciplinary approach to its resurgence and Sustainability of Millets-Agro Business'",
    type: "National",
    date: "2023-24",
    isbn: "ISSN: 0973-855X",
    institute: "Indira College of Engineering and Management",
    publisher: "Madhya Pradesh Journal of Social Sciences",
    link: "#"
  },
  {
    srNo: 23,
    author: "Dr. Priyanka Pawar",
    title: "UNVEILING THE NUTRITIONAL PROFILE OF MILLETS: A POTENTIAL SOLUTION TO GLOBAL MALNUTRITION",
    proceedings: "National Conference on 'Transdisciplinary approach to its resurgence and Sustainability of Millets-Agro Business'",
    conferenceName: "National Conference on 'Transdisciplinary approach to its resurgence and Sustainability of Millets-Agro Business'",
    type: "National",
    date: "2023-24",
    isbn: "ISSN: 0973-855X",
    institute: "Indira College of Engineering and Management",
    publisher: "Madhya Pradesh Journal of Social Sciences",
    link: "#"
  },
  {
    srNo: 24,
    author: "Dr. Archana Salve",
    title: "ANALYSING THE CONSUMER PERCEPTIONS AND INVESTIGATING THE DEVELOPMENT OF MILLET-BASED FOOD PRODUCTS",
    proceedings: "National Conference on 'Transdisciplinary approach to its resurgence and Sustainability of Millets-Agro Business'",
    conferenceName: "National Conference on 'Transdisciplinary approach to its resurgence and Sustainability of Millets-Agro Business'",
    type: "National",
    date: "2023-24",
    isbn: "ISSN: 0973-855X",
    institute: "Indira College of Engineering and Management",
    publisher: "Madhya Pradesh Journal of Social Sciences",
    link: "#"
  },
  {
    srNo: 25,
    author: "Dr. Archana Salve",
    title: "A STUDY ON AWARENESS OF MILLET PRODUCTS THROUGH HYBRID MODE EDUCATION",
    proceedings: "National Conference on 'Transdisciplinary approach to its resurgence and Sustainability of Millets-Agro Business'",
    conferenceName: "National Conference on 'Transdisciplinary approach to its resurgence and Sustainability of Millets-Agro Business'",
    type: "National",
    date: "2023-24",
    isbn: "ISSN: 0973-855X",
    institute: "Indira College of Engineering and Management",
    publisher: "Madhya Pradesh Journal of Social Sciences",
    link: "#"
  },
  {
    srNo: 26,
    author: "Dr. Archana Salve",
    title: "ECONOMIC VIABILITY OF MILLET CULTIVATION FOR SMALL-SCALE FARMERS: A REVIEW",
    proceedings: "National Conference on 'Transdisciplinary approach to its resurgence and Sustainability of Millets-Agro Business'",
    conferenceName: "National Conference on 'Transdisciplinary approach to its resurgence and Sustainability of Millets-Agro Business'",
    type: "National",
    date: "2023-24",
    isbn: "ISSN: 0973-855X",
    institute: "Indira College of Engineering and Management",
    publisher: "Madhya Pradesh Journal of Social Sciences",
    link: "#"
  },
  {
    srNo: 27,
    author: "Dr. Archana Salve",
    title: "COMPARATIVE STUDY OF JUNK FOOD AND MILLET FOOD: A CRITICAL STUDY",
    proceedings: "National Conference on 'Transdisciplinary approach to its resurgence and Sustainability of Millets-Agro Business'",
    conferenceName: "National Conference on 'Transdisciplinary approach to its resurgence and Sustainability of Millets-Agro Business'",
    type: "National",
    date: "2023-24",
    isbn: "ISSN: 0973-855X",
    institute: "Indira College of Engineering and Management",
    publisher: "Madhya Pradesh Journal of Social Sciences",
    link: "#"
  },
  {
    srNo: 28,
    author: "Dr. Archana Salve",
    title: "NUTRITIONAL RESURGENCE: REDISCOVERING THE FORGOTTEN POTENTIAL OF MILLETS IN CONTEMPORARY DIETS",
    proceedings: "National Conference on 'Transdisciplinary approach to its resurgence and Sustainability of Millets-Agro Business'",
    conferenceName: "National Conference on 'Transdisciplinary approach to its resurgence and Sustainability of Millets-Agro Business'",
    type: "National",
    date: "2023-24",
    isbn: "ISSN: 0973-855X",
    institute: "Indira College of Engineering and Management",
    publisher: "Madhya Pradesh Journal of Social Sciences",
    link: "#"
  },
  {
    srNo: 29,
    author: "Dr. Archana Salve",
    title: "IMPACT OF MILLET EXPORT ON INDIAN ECONOMY AND COUNTRYMAN",
    proceedings: "National Conference on 'Transdisciplinary approach to its resurgence and Sustainability of Millets-Agro Business'",
    conferenceName: "National Conference on 'Transdisciplinary approach to its resurgence and Sustainability of Millets-Agro Business'",
    type: "National",
    date: "2023-24",
    isbn: "ISSN: 0973-855X",
    institute: "Indira College of Engineering and Management",
    publisher: "Madhya Pradesh Journal of Social Sciences",
    link: "#"
  },
  {
    srNo: 30,
    author: "Prof. Narayani Panchal",
    title: "THE NUTRITIONAL SIGNIFICANCE AND HEALTH BENEFITS OF MILLETS: A COMPREHENSIVE REVIEW",
    proceedings: "National Conference on 'Transdisciplinary approach to its resurgence and Sustainability of Millets-Agro Business'",
    conferenceName: "National Conference on 'Transdisciplinary approach to its resurgence and Sustainability of Millets-Agro Business'",
    type: "National",
    date: "2023-24",
    isbn: "ISSN: 0973-855X",
    institute: "Indira College of Engineering and Management",
    publisher: "Madhya Pradesh Journal of Social Sciences",
    link: "#"
  },
  {
    srNo: 31,
    author: "Prof. Narayani Panchal",
    title: "PROMOTING MILLET CONSUMPTION: STRATEGIES FOR OVERCOMING BARRIERS AND ENHANCING PUBLIC AWARENESS",
    proceedings: "National Conference on 'Transdisciplinary approach to its resurgence and Sustainability of Millets-Agro Business'",
    conferenceName: "National Conference on 'Transdisciplinary approach to its resurgence and Sustainability of Millets-Agro Business'",
    type: "National",
    date: "2023-24",
    isbn: "ISSN: 0973-855X",
    institute: "Indira College of Engineering and Management",
    publisher: "Madhya Pradesh Journal of Social Sciences",
    link: "#"
  },
  {
    srNo: 32,
    author: "Prof. Rupali Salunke",
    title: "Simulation and Digital Twin: Modern Technology and Approach",
    proceedings: "International Conference on Computing Communication Control and Automation (ICCUBEA)",
    conferenceName: "International Conference on Computing Communication Control and Automation (ICCUBEA)",
    type: "International",
    date: "2023-24",
    isbn: "e-ISSN: 2771-1358, p-ISSN: 2771-134X, e-ISBN:979-8-3503-0426-8, p-ISBN:979-8-3503-0427-5",
    institute: "Indira College of Engineering and Management",
    publisher: "IEEE Xplore",
    link: "https://ieeexplore.ieee.org/document/10392106"
  },
  {
    srNo: 33,
    author: "Prof. Meenakshi Patil",
    title: "Simulation and Digital Twin: Modern Technology and Approach",
    proceedings: "International Conference on Computing Communication Control and Automation (ICCUBEA)",
    conferenceName: "International Conference on Computing Communication Control and Automation (ICCUBEA)",
    type: "International",
    date: "2023-24",
    isbn: "e-ISSN: 2771-1358, p-ISSN: 2771-134X, e-ISBN:979-8-3503-0426-8, p-ISBN:979-8-3503-0427-5",
    institute: "Indira College of Engineering and Management",
    publisher: "IEEE Xplore",
    link: "https://ieeexplore.ieee.org/document/10392106"
  },
  {
    srNo: 34,
    author: "Mr. Nikhil Mulik",
    title: "Prediction Of Structural Health Of Civil Engineering Infrastructure Using AI",
    proceedings: "6th International Conference on Contemporary Computing and Informatics (IC3I)",
    conferenceName: "6th International Conference on Contemporary Computing and Informatics (IC3I)",
    type: "International",
    date: "2023-24",
    isbn: "eISBN: 979-8-3503-0448-0, pISBN: 979-8-3503-0449-7",
    institute: "Indira College of Engineering and Management",
    publisher: "IEEE Xplore",
    link: "https://doi.org/10.1109/IC3I59117.2023.10397638"
  },
  {
    srNo: 35,
    author: "Ms. Madhuri Bore",
    title: "AI-Driven Traffic Control Systems For Smart Cities In Civil Engineering",
    proceedings: "6th International Conference on Contemporary Computing and Informatics (IC3I)",
    conferenceName: "6th International Conference on Contemporary Computing and Informatics (IC3I)",
    type: "International",
    date: "2023-24",
    isbn: "eISBN: 979-8-3503-0448-0, pISBN: 979-8-3503-0449-7",
    institute: "Indira College of Engineering and Management",
    publisher: "IEEE Xplore",
    link: "https://doi.org/10.1109/IC3I59117.2023.10397650"
  },
  {
    srNo: 36,
    author: "Ms. Madhuri Bore",
    title: "Implementation of Machine Learning Techniques for Predicting Traffic Flow in Smart Cities",
    proceedings: "6th International Conference on Contemporary Computing and Informatics (IC3I)",
    conferenceName: "6th International Conference on Contemporary Computing and Informatics (IC3I)",
    type: "International",
    date: "2023-24",
    isbn: "eISBN: 979-8-3503-0448-0, pISBN: 979-8-3503-0449-7",
    institute: "Indira College of Engineering and Management",
    publisher: "IEEE Xplore",
    link: "https://doi.org/10.1109/IC3I59117.2023.10397998"
  },
  {
    srNo: 37,
    author: "Dr. Mahesh G. Bhong",
    title: "Deep Learning Analytics and Operations Research: Models, Applications and Managerial Implications",
    proceedings: "International Conference on Contemporary Computing and Informatics (IC3I)",
    conferenceName: "International Conference on Contemporary Computing and Informatics (IC3I)",
    type: "International",
    date: "2023-24",
    isbn: "eISBN: 979-8-3503-0448-0, pISBN: 979-8-3503-0449-7",
    institute: "Indira College of Engineering and Management",
    publisher: "IEEE Xplore",
    link: "10.1109/IC3I59117.2023.10397672"
  },
  {
    srNo: 38,
    author: "Prof. Sagar Chirade",
    title: "Enhancement Of Fault Diagnosis In Mechanical Systems Using Deep Learning Techniques",
    proceedings: "International Conference on Contemporary Computing and Informatics (IC3I)",
    conferenceName: "International Conference on Contemporary Computing and Informatics (IC3I)",
    type: "International",
    date: "2023-24",
    isbn: "eISBN: 979-8-3503-0448-0, pISBN: 979-8-3503-0449-7",
    institute: "Indira College of Engineering and Management",
    publisher: "IEEE Xplore",
    link: "10.1109/IC3I59117.2023.10397765"
  },
  {
    srNo: 39,
    author: "Dr. Soumitra Das",
    title: "Syllabic Speech Synthesis for Marathi Language",
    proceedings: "International Conference on Cognitive Computing and Engineering Education (ICCCEE)",
    conferenceName: "International Conference on Cognitive Computing and Engineering Education (ICCCEE)",
    type: "International",
    date: "2023-24",
    isbn: "eISBN:979-8-3503-3280-3, pISBN:979-8-3503-3281-0",
    institute: "Indira College of Engineering and Management",
    publisher: "IEEE Xplore",
    link: "https://ieeexplore.ieee.org/document/10424461"
  },
  {
    srNo: 40,
    author: "Prof. Rupali Salunke",
    title: "Image processing and machine learning techniques in concrete crack detection",
    proceedings: "International Conference on New Frontiers in Communication, Automation, Management and Security (ICCAMS)",
    conferenceName: "International Conference on New Frontiers in Communication, Automation, Management and Security (ICCAMS)",
    type: "International",
    date: "2023-24",
    isbn: "eISBN: 979-8-3503-1706-0, pISBN: 979-8-3503-1707-7",
    institute: "Indira College of Engineering and Management",
    publisher: "IEEE Xplore",
    link: "https://ieeexplore.ieee.org/document/10526115"
  },
  {
    srNo: 41,
    author: "Prof. Meenakshi Patil",
    title: "Image processing and machine learning techniques in concrete crack detection",
    proceedings: "International Conference on New Frontiers in Communication, Automation, Management and Security (ICCAMS)",
    conferenceName: "International Conference on New Frontiers in Communication, Automation, Management and Security (ICCAMS)",
    type: "International",
    date: "2023-24",
    isbn: "eISBN: 979-8-3503-1706-0, pISBN: 979-8-3503-1707-7",
    institute: "Indira College of Engineering and Management",
    publisher: "IEEE Xplore",
    link: "https://ieeexplore.ieee.org/document/10526115"
  },
  {
    srNo: 42,
    author: "Dr. Poorna Shankar",
    title: "Automatic Stability Alert System for Pharmaceutical formulations",
    proceedings: "Lecture Notes in Networks and Systems, Springer",
    conferenceName: "4th International Conference on Emergent converging Technologies and Biomedical Systems, ETBS-2024",
    type: "International",
    date: "2023-24",
    isbn: "In process",
    institute: "Indira College of Engineering and Management",
    publisher: "Springer",
    link: "#"
  },
  {
    srNo: 43,
    author: "Dr. Poorna Shankar",
    title: "Realtime Detection of Cotton Plant Diseases using YOLO Deep Learning Model for Precision Agriculture",
    proceedings: "Advanced Communication and Intelligent Systems, Springer",
    conferenceName: "Third International Conference on Advanced communication and intelligent systems, ICACIS-2024",
    type: "International",
    date: "2023-24",
    isbn: "In process",
    institute: "Indira College of Engineering and Management",
    publisher: "Springer",
    link: "#"
  },
  {
    srNo: 44,
    author: "Dr. Poorna Shankar",
    title: "Satellite Image Analysis and Classification using Random Forest, Gradient Boosting Machine and YOLO Deep Learning Model",
    proceedings: "Advanced Communication and Intelligent Systems, Springer",
    conferenceName: "Third International Conference on Advanced communication and intelligent systems, ICACIS-2024, May",
    type: "International",
    date: "2023-24",
    isbn: "In process",
    institute: "Indira College of Engineering and Management",
    publisher: "Springer",
    link: "#"
  },
  {
    srNo: 45,
    author: "Dr. Poorna Shankar",
    title: "Real Time Detection and Classification of Strawberry Developmental Stages Using Deep Learning: A Technological Approach for Precision Agriculture",
    proceedings: "Springer Nature Computer Science",
    conferenceName: "Second International Conference on Agriculture Centric Computation, ICA24",
    type: "International",
    date: "2023-24",
    isbn: "In process",
    institute: "Indira College of Engineering and Management",
    publisher: "Springer",
    link: "#"
  }
];

const conferences2022_23 = [
  {
    srNo: 1,
    author: "Vijay Kumar Saini",
    title: "Analysis of traffic congestion at “Y” junction near Bhumkar Chowk",
    proceedings: "Technological Innovations in Civil Engineering",
    conferenceName: "4th National Conference on Technological Innovations in Civil Engineering",
    type: "National",
    date: "24-May-23",
    isbn: "ISSN: 23486953",
    institute: "Indira College of Engineering and Management",
    publisher: "MJRET",
    link: "http://www.mjret.in/Publications.html"
  },
  {
    srNo: 2,
    author: "Sachin Ingle",
    title: "Economical Use of Waste Material by Partial Replacement in Concrete",
    proceedings: "Technological Innovations in Civil Engineering",
    conferenceName: "4th National Conference on Technological Innovations in Civil Engineering",
    type: "National",
    date: "24-May-23",
    isbn: "ISSN: 23486953",
    institute: "Indira College of Engineering and Management",
    publisher: "MJRET",
    link: "http://www.mjret.in/Publications.html"
  },
  {
    srNo: 3,
    author: "Ashwini Joshi",
    title: "Significance of Fly ash on concrete with partially replaced Recycled aggregate",
    proceedings: "Technological Innovations in Civil Engineering",
    conferenceName: "4th National Conference on Technological Innovations in Civil Engineering",
    type: "National",
    date: "24-May-23",
    isbn: "ISSN: 23486953",
    institute: "Indira College of Engineering and Management",
    publisher: "MJRET",
    link: "http://www.mjret.in/Publications.html"
  },
  {
    srNo: 4,
    author: "Vijay Kumar Saini",
    title: "Analysing traffic and designing rigid pavement at Somatane Phata",
    proceedings: "Technological Innovations in Civil Engineering",
    conferenceName: "4th National Conference on Technological Innovations in Civil Engineering",
    type: "National",
    date: "24-May-23",
    isbn: "ISSN: 23486953",
    institute: "Indira College of Engineering and Management",
    publisher: "MJRET",
    link: "http://www.mjret.in/Publications.html"
  },
  {
    srNo: 5,
    author: "Sachin Ingle",
    title: "Partial Replacement of Cement with Eggshell &Aggregate with Plastic",
    proceedings: "Technological Innovations in Civil Engineering",
    conferenceName: "4th National Conference on Technological Innovations in Civil Engineering",
    type: "National",
    date: "24-May-23",
    isbn: "ISSN: 23486953",
    institute: "Indira College of Engineering and Management",
    publisher: "MJRET",
    link: "http://www.mjret.in/Publications.html"
  },
  {
    srNo: 6,
    author: "Vishal Chaugule",
    title: "Partial Replacement of Cement with Rice Hush Ash & Fine Aggregate with Coconut shell",
    proceedings: "Technological Innovations in Civil Engineering",
    conferenceName: "4th National Conference on Technological Innovations in Civil Engineering",
    type: "National",
    date: "24-May-23",
    isbn: "ISSN: 23486953",
    institute: "Indira College of Engineering and Management",
    publisher: "MJRET",
    link: "http://www.mjret.in/Publications.html"
  },
  {
    srNo: 7,
    author: "Nikhil Mulik",
    title: "Assessment of mechanical properties of concrete made by using industrial waste (GGBS & Granite)",
    proceedings: "Technological Innovations in Civil Engineering",
    conferenceName: "4th National Conference on Technological Innovations in Civil Engineering",
    type: "National",
    date: "24-May-23",
    isbn: "ISSN: 23486953",
    institute: "Indira College of Engineering and Management",
    publisher: "MJRET",
    link: "http://www.mjret.in/Publications.html"
  },
  {
    srNo: 8,
    author: "Madhuri Bore",
    title: "Utilization of Waste Material by Partial Replacement of Cement and Course Aggregate (SCBA& Kota stone chips)",
    proceedings: "Technological Innovations in Civil Engineering",
    conferenceName: "4th National Conference on Technological Innovations in Civil Engineering",
    type: "National",
    date: "24-May-23",
    isbn: "ISSN: 23486953",
    institute: "Indira College of Engineering and Management",
    publisher: "MJRET",
    link: "http://www.mjret.in/Publications.html"
  },
  {
    srNo: 9,
    author: "Vishal Chaugule",
    title: "Partial Replacement of Conventional Material with Economical Filler",
    proceedings: "Technological Innovations in Civil Engineering",
    conferenceName: "4th National Conference on Technological Innovations in Civil Engineering",
    type: "National",
    date: "24-May-23",
    isbn: "ISSN: 23486953",
    institute: "Indira College of Engineering and Management",
    publisher: "MJRET",
    link: "http://www.mjret.in/Publications.html"
  },
  {
    srNo: 10,
    author: "Vrushali Patil",
    title: "Carbon Reduction Technique in Construction Industry",
    proceedings: "Technological Innovations in Civil Engineering",
    conferenceName: "4th National Conference on Technological Innovations in Civil Engineering",
    type: "National",
    date: "24-May-23",
    isbn: "ISSN: 23486953",
    institute: "Indira College of Engineering and Management",
    publisher: "MJRET",
    link: "http://www.mjret.in/Publications.html"
  },
  {
    srNo: 11,
    author: "Savita Jangle",
    title: "Experimental studies of Flexural Behavior of Ferrocement panels with White Silica Powder and Glass Fiber",
    proceedings: "Technological Innovations in Civil Engineering",
    conferenceName: "4th National Conference on Technological Innovations in Civil Engineering",
    type: "National",
    date: "24-May-23",
    isbn: "ISSN: 23486953",
    institute: "Indira College of Engineering and Management",
    publisher: "MJRET",
    link: "http://www.mjret.in/Publications.html"
  },
  {
    srNo: 12,
    author: "Shreyas Satpute",
    title: "Automated Aeroponic Indoor Eco-Air Purifier (Pavana)",
    proceedings: "Technological Innovations in Civil Engineering",
    conferenceName: "4th National Conference on Technological Innovations in Civil Engineering",
    type: "National",
    date: "24-May-23",
    isbn: "ISSN: 23486953",
    institute: "Indira College of Engineering and Management",
    publisher: "MJRET",
    link: "http://www.mjret.in/Publications.html"
  },
  {
    srNo: 13,
    author: "Poorna Shankar",
    title: "Challenges of Adopting DevOps Culture on the Internet of Things Applications - A Solution Model",
    proceedings: "2nd International Conference on Technological Advancements in Computational Sciences (ICTACS)",
    conferenceName: "2nd International Conference on Technological Advancements in Computational Sciences (ICTACS)",
    type: "International",
    date: "10-12 Oct 2022",
    isbn: "ISBN: 978-1-6654-7657-7",
    institute: "Indira College of Engineering and Management",
    publisher: "IEEE Xplore",
    link: "https://ieeexplore.ieee.org/document/9988182"
  },
  {
    srNo: 14,
    author: "Poorna Shankar",
    title: "E-mail Spam Detection Using Machine Learning – KNN",
    proceedings: "5th International Conference on Contemporary Computing and Informatics (IC3I)",
    conferenceName: "5th International Conference on Contemporary Computing and Informatics (IC3I)",
    type: "International",
    date: "14-16 Dec 2022",
    isbn: "ISBN:979-8-3503-9826-7",
    institute: "Indira College of Engineering and Management",
    publisher: "IEEE Xplore",
    link: "https://ieeexplore.ieee.org/document/10072628"
  },
  {
    srNo: 15,
    author: "Archana Salve",
    title: "Artificial Intelligence Based Rural E-Commerce Boosting Using Big Data",
    proceedings: "5th International Conference on Contemporary Computing and Informatics (IC3I)",
    conferenceName: "5th International Conference on Contemporary Computing and Informatics (IC3I)",
    type: "International",
    date: "14-16 Dec 2022",
    isbn: "ISBN: 9798350398267",
    institute: "Indira College of Engineering and Management",
    publisher: "IEEE Xplore",
    link: "https://ieeexplore.ieee.org/document/10073248"
  },
  {
    srNo: 16,
    author: "Archana Salve",
    title: "Artificial Intelligence and Machine Learning-Based Systems for Controlling Medical Robot Beds for Preventing Bedsores",
    proceedings: "5th International Conference on Contemporary Computing and Informatics (IC3I)",
    conferenceName: "5th International Conference on Contemporary Computing and Informatics (IC3I)",
    type: "International",
    date: "14-16 Dec 2022",
    isbn: "ISBN: 9798350398267",
    institute: "Indira College of Engineering and Management",
    publisher: "IEEE Xplore",
    link: "https://ieeexplore.ieee.org/document/10073403"
  },
  {
    srNo: 17,
    author: "Darshana Desai",
    title: "Education 4.0: Case Study on Selection of Digital Learning Platform and Communication Tools for Future Education 4.0 in India",
    proceedings: "IEEE Pune Section International Conference (PuneCon)",
    conferenceName: "IEEE Pune Section International Conference (PuneCon)",
    type: "International",
    date: "19-Jan-23",
    isbn: "ISBN: 9781665498975",
    institute: "Indira College of Engineering and Management",
    publisher: "IEEE Xplore",
    link: "https://doi.org/10.1109/PuneCon55413.2022.10014956"
  },
  {
    srNo: 18,
    author: "Darshana Desai",
    title: "Selection of Digital Learning Platforms for Future Education 4.0 in India",
    proceedings: "IEEE Pune Section International Conference (PuneCon)",
    conferenceName: "IEEE Pune Section International Conference (PuneCon)",
    type: "International",
    date: "19-Jan-23",
    isbn: "ISBN: 9781665498975",
    institute: "Indira College of Engineering and Management",
    publisher: "IEEE Xplore",
    link: "https://doi.org/10.1109/PuneCon55413.2022.10014894"
  },
  {
    srNo: 19,
    author: "Darshana Desai",
    title: "A Case Study on Use of Blockchain Technology as a Dominant Feature to Issue and Verify Documents Required for Admission to UG/PG Technical Programs in Maharashtra (India)",
    proceedings: "IEEE Pune Section International Conference (PuneCon)",
    conferenceName: "IEEE Pune Section International Conference (PuneCon)",
    type: "International",
    date: "19-Jan-23",
    isbn: "ISBN: 9781665498975",
    institute: "Indira College of Engineering and Management",
    publisher: "IEEE Xplore",
    link: "https://doi.org/10.1109/PuneCon55413.2022.10014917"
  },
  {
    srNo: 20,
    author: "Poorna Shankar",
    title: "Facial Analysis and AI based Personalized Recommendation of Cosmetics using Deep Learning Algorithm",
    proceedings: "Proceeding of the 9th International conference on Business Analytics and Intelligence",
    conferenceName: "9th International conference on Business Analytics and Intelligence",
    type: "International",
    date: "15-Dec-22",
    isbn: "",
    institute: "Indira College of Engineering and Management",
    publisher: "Data Centre and Analytics Lab (DCAL), IIM Bangalore",
    link: "https://dcal.iimb.ac.in/baiconf2022/downloads.php"
  },
  {
    srNo: 21,
    author: "Shwetkranti Taware",
    title: "Customer – Churn Prediction Using Machine Learning",
    proceedings: "2nd International Conference on Technological Advancements in Computational Sciences (ICTACS)",
    conferenceName: "2nd International Conference on Technological Advancements in Computational Sciences (ICTACS)",
    type: "International",
    date: "2022-23",
    isbn: "ISBN: 9781665476577",
    institute: "Indira College of Engineering and Management",
    publisher: "IEEE Xplore",
    link: "https://doi.org/10.1109/ICTACS56270.2022.9988187"
  },
  {
    srNo: 22,
    author: "Pragati Choudhari",
    title: "Covid-19 Disease Detection using Chest X-Ray Images by Means of CNN",
    proceedings: "2nd International Conference on Technological Advancements in Computational Sciences (ICTACS)",
    conferenceName: "2nd International Conference on Technological Advancements in Computational Sciences (ICTACS)",
    type: "International",
    date: "2022-23",
    isbn: "ISBN: 9781665476577",
    institute: "Indira College of Engineering and Management",
    publisher: "IEEE Xplore",
    link: "https://doi.org/10.1109/ICTACS56270.2022.9988148"
  },
  {
    srNo: 23,
    author: "Manjusha Tatiya",
    title: "Detection of Alzheimer's Disease Using Deep Learning, Blockchain, and IoT Cognitive Data",
    proceedings: "2nd International Conference on Technological Advancements in Computational Sciences (ICTACS)",
    conferenceName: "2nd International Conference on Technological Advancements in Computational Sciences (ICTACS)",
    type: "International",
    date: "2022-23",
    isbn: "ISBN: 9781665476577",
    institute: "Indira College of Engineering and Management",
    publisher: "IEEE Xplore",
    link: "https://doi.org/10.1109/ICTACS56270.2022.9988058"
  },
  {
    srNo: 24,
    author: "Meenakshi Patil",
    title: "Tracking Human Movements in Large View Cases Through Gbln Bco and Model Based Particles",
    proceedings: "Proceedings of International Conference on Management and Data Analytics",
    conferenceName: "International Conference on Management and Data Analytics",
    type: "International",
    date: "2022-23",
    isbn: "ISBN: 9789394757028",
    institute: "Indira College of Engineering and Management",
    publisher: "CMR University Press",
    link: "http://dx.doi.org/10.2139/ssrn.4189460"
  },
  {
    srNo: 25,
    author: "Rupali Salunke",
    title: "Tracking Human Movements in Large View Cases Through Gbln Bco and Model Based Particles",
    proceedings: "Proceedings of International Conference on Management and Data Analytics",
    conferenceName: "International Conference on Management and Data Analytics",
    type: "International",
    date: "2022-23",
    isbn: "ISBN: 9789394757028",
    institute: "Indira College of Engineering and Management",
    publisher: "CMR University Press",
    link: "http://dx.doi.org/10.2139/ssrn.4189460"
  },
  {
    srNo: 26,
    author: "Soumitra Das",
    title: "Comparative Analysis of Skin Cancer Prediction using Neural Networks and Transfer Learning",
    proceedings: "5th International Conference on Contemporary Computing and Informatics (IC3I)",
    conferenceName: "5th International Conference on Contemporary Computing and Informatics (IC3I)",
    type: "International",
    date: "2022-23",
    isbn: "ISBN: 9798350398267",
    institute: "Indira College of Engineering and Management",
    publisher: "IEEE Xplore",
    link: "https://doi.org/10.1109/IC3I56241.2022.10073139"
  }
];

const books2023_24 = [
  {
    srNo: 1,
    author: "Dr. Archana Salve",
    title: "Strategies for Emotional Intelligence",
    publication: "Himalaya Publication",
    type: "National",
    date: "Aug-23",
    isbn: "978-93-58-40-026-7",
    institute: "Indira College of Engineering and Management",
    link: "https://himpub.com/product/strategies-for-effective-emotional-intelligence/"
  },
  {
    srNo: 2,
    author: "Prof. Pravin Thorat",
    title: "Operations and Supply Chain Management",
    publication: "San International Scientific Publications",
    type: "National",
    date: "Jan-24",
    isbn: "978-81-969431-1-0",
    institute: "Indira College of Engineering and Management",
    link: ""
  },
  {
    srNo: 3,
    author: "Dr Archana Salve",
    title: "Sustainable Business Management: Strategies for Tomorrow",
    publication: "Parab Publications (ISO Certified)",
    type: "International",
    date: "Mar-24",
    isbn: "978-81-19585-46-5",
    institute: "Indira College of Engineering and Management",
    link: ""
  },
  {
    srNo: 4,
    author: "Prof. Priyanka Shinde",
    title: "Leading the Future: Progressive Approaches to Modern Management",
    publication: "Empyreal Publishing House [EPH]",
    type: "International",
    date: "Aug-23",
    isbn: "978-93-93810-89-2",
    institute: "Indira College of Engineering and Management",
    link: "https://iaraedu.com/about-journal/scopus-book.php"
  },
  {
    srNo: 5,
    author: "Dr. Poorna Shankar",
    title: "Chapter: Design and Development of an Ensemble Model for Stock Market Prediction | Book: Deep Learning Tools for Predicting Stock Market Movements",
    publication: "Scrivener Publishing LLC",
    type: "International",
    date: "Apr-24",
    isbn: "Print: 9781394214303, Online: 9781394214334",
    institute: "Indira College of Engineering and Management",
    link: "https://onlinelibrary.wiley.com/doi/epdf/10.1002/9781394214334.ch1"
  },
  {
    srNo: 6,
    author: "Prof. Aditee Huparikar",
    title: "Advanced Financial Management",
    publication: "San International Scientific Publications",
    type: "International",
    date: "Apr-24",
    isbn: "978-81-971828",
    institute: "Indira College of Engineering and Management",
    link: "https://doi.org/10.59646/afm/166"
  },
  {
    srNo: 7,
    author: "Dr. Priyanka Pawar",
    title: "Marketing 4.0",
    publication: "San International Scientific Publications",
    type: "International",
    date: "Apr-24",
    isbn: "978-81-972500-3-3",
    institute: "Indira College of Engineering and Management",
    link: "https://doi.org/10.59646/m4/174"
  }
];

const books2022_23 = [
  {
    srNo: 1,
    author: "Dr. Darshana Desai",
    title: "Chapter 3: Hyper-Personalization: An AI-Enabled Personalization for Customer-Centric Marketing | Book: Adoption and Implementation of AI in Customer Relationship Management",
    publication: "IGI Global",
    type: "International",
    date: "Oct-21",
    isbn: "9781799879596",
    institute: "Indira College of Engineering and Management",
    link: "https://doi.org/10.4018/978-1-7998-7959-6"
  },
  {
    srNo: 2,
    author: "Dr. Darshana Desai",
    title: "Chapter 12: Prediction of Selection of Communication Tools and Platforms to Support Education 4.0 in India | Book: Methods and Applications with Large-Scale Data",
    publication: "CRC Press",
    type: "International",
    date: "10-Feb-23",
    isbn: "9781003272823",
    institute: "Indira College of Engineering and Management",
    link: "https://doi.org/10.1201/9781003272823"
  },
  {
    srNo: 3,
    author: "Dr. Poorna Shankar",
    title: "Business Analytics: The Science of Data Driven Decision Making",
    publication: "Alpha International Publications",
    type: "National",
    date: "2023",
    isbn: "978-93-5762-068-0",
    institute: "Indira College of Engineering and Management",
    link: ""
  },
  {
    srNo: 4,
    author: "Dr. Soumitra Das, Dr. Vikas Nandgaonkar",
    title: "IOT WITH APPLICATIONS",
    publication: "DECCAN INTERNATIONAL",
    type: "National",
    date: "2022",
    isbn: "978-93-95191-19-7",
    institute: "Indira College of Engineering and Management",
    link: ""
  },
  {
    srNo: 5,
    author: "Manjusha Tatiya",
    title: "Software Engineering & Testing",
    publication: "Scientific International Publishing House (SIPH)",
    type: "International",
    date: "2023",
    isbn: "978-93-5757-088-6",
    institute: "Indira College of Engineering and Management",
    link: ""
  },
  {
    srNo: 6,
    author: "Nilesh Mali",
    title: "Business Analytics and Intelligence",
    publication: "TECH NEO PUBLICATIONS LLP",
    type: "National",
    date: "2023",
    isbn: "978-93-5583-386-0",
    institute: "Indira College of Engineering and Management",
    link: ""
  },
  {
    srNo: 7,
    author: "Dr. Kiran Devade",
    title: "Chapter: Use of MADM Techniques for Optimization of Thermal Performance of Ranque Hilsch Vortex Tube | Book: Research and Developments in Engineering Research Vol. 3",
    publication: "B P International",
    type: "International",
    date: "05-May-23",
    isbn: "Print: 9788119217458, eBook: 9788119217472",
    institute: "Indira College of Engineering and Management",
    link: "https://doi.org/10.9734/bpi/rader/v3/5099C"
  }
];

const patents2024_25 = [
  {
    srNo: 1,
    author: "Dr Saurabh Gupta",
    title: "AI based walking stick",
    publication: "UK Design Patent No. 6319022",
    date: "Granted: 12-07-2023",
    link: "https://drive.google.com/file/d/1u8IFN4E24VJo-9Hbg95dHuqSHU8z8r4C/view?usp=drive_link"
  },
  {
    srNo: 2,
    author: "Dr Saurabh Gupta",
    title: "Graph theory and machine learning in adaptive traffic light control for smart cities",
    publication: "Indian Patent No. 202441068095",
    date: "Published: 13/09/2024",
    link: "https://drive.google.com/file/d/1tI-ppHdFR4YdpHEvJ0fhUlTmattrDpLa/view?usp=drive_link"
  },
  {
    srNo: 3,
    author: "Dr Saurabh Gupta",
    title: "Automatic Wheelchair cum Stretcher with Ergonomics",
    publication: "Indian Patent",
    date: "Status: Filed",
    link: ""
  },
  {
    srNo: 4,
    author: "Dr Saurabh Gupta",
    title: "Assembly Mechanism for Oil Filter Casting Using Pneumatic Press",
    publication: "Indian Patent No. 202521022062",
    date: "Status: Filed",
    link: ""
  },
  {
    srNo: 5,
    author: "Dr Saurabh Gupta",
    title: "Modified Belt Conveyor System for Material Handling",
    publication: "Indian Patent",
    date: "Status: Filed",
    link: ""
  },
  {
    srNo: 6,
    author: "Dr Saurabh Gupta",
    title: "DESIGN IMPROVEMENT OF A DIRECT ACTING DIFFERENTIAL AREA RELIEF VALVE TO IMPROVE THE STABILITY CHARACTERISTICS",
    publication: "Indian Patent",
    date: "Status: Filed",
    link: ""
  },
  {
    srNo: 7,
    author: "Dr Saurabh Gupta",
    title: "PNEUMATIC GEAR SHIFTER",
    publication: "Indian Patent",
    date: "Status: Filed",
    link: ""
  },
  {
    srNo: 8,
    author: "Prof. Shreyas R. Satpute",
    title: "IOT BASED WASTEWATER TREATMENT SYSTEM",
    publication: "Indian Patent No. 416988-001",
    date: "Status: Published",
    link: ""
  },
  {
    srNo: 9,
    author: "Prof. Savita Jangale",
    title: "IOT BASED WASTEWATER TREATMENT SYSTEM",
    publication: "Indian Patent No. 416988-002",
    date: "Status: Published",
    link: ""
  },
  {
    srNo: 10,
    author: "Prof. Vijay Kumar Saini",
    title: "IOT BASED WASTEWATER TREATMENT SYSTEM",
    publication: "Indian Patent No. 416988-001",
    date: "Status: Published",
    link: ""
  },
  {
    srNo: 11,
    author: "Supriya Kumbhar",
    title: "SPUR GEAR WITH GEAR BLANK COVERING PLATE AND SCREW",
    publication: "UK Patent No. 6420657",
    date: "Published: 30/01/2025",
    link: ""
  },
  {
    srNo: 12,
    author: "Prof. Dhanashree Pisal",
    title: "Sound Wave Vibration Exercise Machine",
    publication: "Indian Patent No. 416806-001",
    date: "Published: 14/05/2025",
    link: ""
  },
  {
    srNo: 13,
    author: "Prof. Dhanashree Pisal",
    title: "AI based device to identify functioning of Blood circulation",
    publication: "Indian Patent No. 419442-001",
    date: "Published: 06-09-2024",
    link: ""
  },
  {
    srNo: 14,
    author: "Dr Priya Pise",
    title: "Artificial Intelligence-based medical testing equipement for cancer classification using genes profiles",
    publication: "UK Design Patent No. 6391398",
    date: "Status: Published",
    link: ""
  },
  {
    srNo: 15,
    author: "Dr Priya Pise",
    title: "Medical fluid infusion monitring devices",
    publication: "Indian Design Patent No. 428730-001",
    date: "Status: Published",
    link: ""
  },
  {
    srNo: 16,
    author: "Dr.Manjusha Tatiya",
    title: "Microsensor Industrial Quality Control Coordinate Measurement Device",
    publication: "Indian Patent No. 457388-001",
    date: "Published: 05-02-2025",
    link: ""
  }
];

const patents2023_24 = [
  {
    srNo: 1,
    author: "Mr. Sachin Ingle, Mr. Vishal Chaugule",
    title: "ECONOMICAL USE OF WASTE MATERIAL BY PARTIAL REPLACEMENT IN CONCRETE",
    publication: "Indian Patent No. 202321032142",
    date: "Published: 16-Jun-23",
    link: ""
  },
  {
    srNo: 2,
    author: "Mr. Vishal Chaugule, Mr. Sachin Ingle",
    title: "ECONOMICAL FILLER PROPORTIONATING PARTIAL CEMENT REPLACEMENT TO INCREASE MECHANICAL PROPERTIES OF CONCRETE",
    publication: "Indian Patent No. 202321032566",
    date: "Published: 24-Nov-23",
    link: ""
  },
  {
    srNo: 3,
    author: "Ms. Meenakshi Patil",
    title: "PEN PLOTTER DESIGN",
    publication: "Indian Design No. 395001-001",
    date: "Filed: 13-Sep-23",
    link: ""
  },
  {
    srNo: 4,
    author: "Dr Priya Pise",
    title: "SMART CONTRACT AUTOMATION IN IOT",
    publication: "Indian Patent No. 6027/2023-CO-L",
    date: "Published: 23-Nov-24",
    link: ""
  },
  {
    srNo: 5,
    author: "Dr Priya Pise",
    title: "MACHINE LEARNING BASED SYSTEM FOR FRAUD DETECTION AND PREVENTION IN FINANCIAL TRANSACTION",
    publication: "Indian Patent No. 202000000000",
    date: "Published: 23-Dec-23",
    link: ""
  },
  {
    srNo: 6,
    author: "Dr. Poorna Shankar",
    title: "AI POWERD SMART MEDICINE DISPENSER",
    publication: "Indian Design No. 400425-001",
    date: "Filed: 22-Nov-23",
    link: ""
  },
  {
    srNo: 7,
    author: "Prof. Shreyas Satpute",
    title: "AN AEROPONIC SYSTEM FOR THE CULTIVATION OF PLANTS",
    publication: "Indian Patent No. 202421001265",
    date: "Published: 9-Feb-24",
    link: ""
  },
  {
    srNo: 8,
    author: "Dr. Mahesh Bhong, Dr. Kiran Devde, Mr. Vishal Meshram, Mr. Ashwin Dharme, Ms. Pranali Khatake, Mr. Sagar Chirade, Mr. Hemant Darokar",
    title: "Iot Based Neonantal Radiant Warmer",
    publication: "Indian Design No. 420206-004",
    date: "Filed: 15-Jun-24",
    link: ""
  },
  {
    srNo: 9,
    author: "Mrs. Meenakshi Patil, Mr. Dhiraj Bhagawat, Mrs. Rupali Salunke, Dr Avinash Bansode, Mrs. Deepali Dagale, Mrs. Pratima Gaikwad, Mrs. Dhanashree Pisal",
    title: "Sound Wave Vibration Exercise Medical Machine",
    publication: "Indian Design No. 416806-001",
    date: "Filed: 14-May-24",
    link: ""
  },
  {
    srNo: 10,
    author: "Dr. Soumitra Das, Dr. Mrs. Poorna Shankar, Dr. Darshana Desai, Dr. Vikas Nandgaonkar, Dr. Saurabh Gupta, Dr. Archana Salve, Dr. Manjusha Tatiya",
    title: "Artificial intelligence-based enterprise resourcenplanning device",
    publication: "Indian Design No. 416805-001",
    date: "Filed: 14-May-24",
    link: ""
  },
  {
    srNo: 11,
    author: "Dr. Manjusha Tomar, Mr. Tejas Pawar, Dr. Sunil Rathod, Dr. Nilesh Mali, Ms. Shwetkranti Taware, Mr. Milind Deshpande",
    title: "Artificial intelligence based Heart Disease Monitoring",
    publication: "Indian Design No. 416804-001",
    date: "Filed: 14-May-24",
    link: ""
  },
  {
    srNo: 12,
    author: "Ms. Savita Jangale, Mr. Nikhil Mulik, Mr. Shreyas Satpute, Mr. Vijaykumar Saini, Mrs. Madhuri Bore, Mrs. Vrushali Patil",
    title: "Iot Based Wastewater management system",
    publication: "Indian Design No. 416988-001",
    date: "Filed: 14-May-24",
    link: ""
  },
  {
    srNo: 13,
    author: "Ms. Pratima Gaikwad, Dr. Manjusha Tomar, Dr. Mandakini Dahiwade, Ms. Pallavi Javalekar, Mr. Sahin Gaikwad",
    title: "AI BASED WIRELESS ELECTRICITY CONSUMPTION MONITORING DEVICE",
    publication: "Indian Design No. 419441-001",
    date: "Filed: 8-Jun-24",
    link: ""
  },
  {
    srNo: 14,
    author: "Dr. Manjusha Tatiya, Ms. Deepa Padwal, Ms. Pallavi Chavan, Mr. Mayur Napte",
    title: "ML BASED DRIVER DROWSINESS DETECTING DEVICE",
    publication: "Indian Design No. 419405-001",
    date: "Filed: 8-Jun-24",
    link: ""
  },
  {
    srNo: 15,
    author: "Dr. Darshana Desai, Mr. Milind Deshpande, Mr. Tejas Pawar, Ms. Shreya Shenai, Ms. Dhanashree Pisal, Mr. Satyam Kalyane",
    title: "AI Based Device to Identify Functioning of Blood Circulation",
    publication: "Indian Design No. 419442-001",
    date: "Filed: 8-Jun-24",
    link: ""
  },
  {
    srNo: 16,
    author: "Ms. Savita Jangale, Ms. Vrushali Patil, Mr. Vijay kumar Saini, Mr. Rahul Sawant, Mr. Nikhil Mulik, Mr. Shreyas Satpute",
    title: "AI BASED SMART GOGGLES FOR CONSTRUCTION LABOURS",
    publication: "Indian Design No. 419404-001",
    date: "Filed: 8-Jun-24",
    link: ""
  },
  {
    srNo: 17,
    author: "Ms. Meenakshi Patil, Mr. Dheeraj Bhagwat, Ms. Rupali Salunke, Dr. Avinash Bansode",
    title: "WIRELESS CHARGING STATION INTEGRATED WITH SENSOR",
    publication: "Indian Design No. 419403-001",
    date: "Filed: 8-Jun-24",
    link: ""
  },
  {
    srNo: 18,
    author: "Dr. Archana Salve, Dr. Priyanka Pawar, Ms. Aditi Huprikar, Mr. Praveen Thorat, Ms. Priyanka Shinde, Ms. Narayani Panchal",
    title: "DEVICE FOR TRACKING CONFIDENCE OF THE EMPLOYEE",
    publication: "Indian Design No. 419402-001",
    date: "Filed: 8-Jun-24",
    link: ""
  },
  {
    srNo: 19,
    author: "Dr. Mahesh Bhong, Ms. Supriya Kumbhar, Mr. Vishal Meshram, Ms. Ashwini Admane, Ms. Ashwini Gaikwad, Ms. Shubhangi Manwatkar",
    title: "SOLAR POWERED ELECTRIC VEHICLES CHARGING STATION",
    publication: "Indian Design No. 419586-001",
    date: "Filed: 8-Jun-24",
    link: ""
  },
  {
    srNo: 20,
    author: "Dr. Vikas Nandgaonkar, Ms. Pragati Malusare, Ms. Anita Patil, Ms. Pranjali Manmode, Ms. Rupali Adhau, Mr. Harshal Mahajan",
    title: "ML BASED ROBOT FOR DETERMINING CROP YIELD",
    publication: "Indian Design No. 419582-001",
    date: "Filed: 8-Jun-24",
    link: ""
  },
  {
    srNo: 21,
    author: "Dr. Soumitra Das, Dr. Poorna Shankar, Dr. Saurabh Gupta, Mr. Nilesh Mali, Ms. Shraddha Suryawanshi, Ms. Savitri Pawar",
    title: "ARTIFICIAL INTELLIGENCE BASED SKIN CANCER DETECTION DEVICE",
    publication: "Indian Design No. 419583-001",
    date: "Filed: 8-Jun-24",
    link: ""
  }
];
const patents2022_23 = [
  {
    srNo: 1,
    author: "Mr. Nikhil Mulik",
    title: "INVERTED CHAMFER CAP: RETROFIT FOR COASTAL RETAINING WALL STRUCTURES",
    publication: "Indian Patent No. 202221033732",
    date: "Published: 1-Jul-22",
    link: ""
  },
  {
    srNo: 2,
    author: "Mr. Sachin Ingle",
    title: "ECONOMICAL FILLER PROPORTIONATING PARTIAL CEMENT REPLACEMENT TO INCREASE MECHANICAL PROPERTIES OF CONCRETE",
    publication: "Indian Patent No. 202221052547",
    date: "Published: 14-Oct-22",
    link: ""
  },
  {
    srNo: 3,
    author: "Dr. Archana Salve",
    title: "AN INTELLIGENT IoT-AUGMENTED REALITY-BASED FRAMEWORK FOR HEALTH MONITORING SYSTEM",
    publication: "Indian Patent No. 202241057347",
    date: "Published: 14-Oct-22",
    link: ""
  },
  {
    srNo: 4,
    author: "Dr. Soumitra Das",
    title: "A DEEP LEARNING BASED IMAGE PROCESSING IN COMPUTED TOMOGRAPHY ANGIOGRAPHY WITH MACHINE LEARNING INTERFACES AND METHOD THEREOF",
    publication: "Indian Patent No. 202241054752",
    date: "Published: 14-Oct-22",
    link: ""
  },
  {
    srNo: 5,
    author: "Aditee Huparikar",
    title: "DESIGNING FRAMEWORK FOR PERFORMING PORTFOLIO RISK ANALYSIS: FIELD MANAGEMENT",
    publication: "Indian Patent No. 202241054240",
    date: "Published: 30-Sep-22",
    link: ""
  },
  {
    srNo: 6,
    author: "Mr. Vishal Chaugule",
    title: "SUSTAINABLE REPLACEMENT OF CEMENT AND SAND WITH COMMERCIAL WASTE TO ATTER THE MECHANICAL PROPORTIES OF CONCRETE",
    publication: "Indian Patent No. 202221059493",
    date: "Published: 25-Nov-22",
    link: ""
  },
  {
    srNo: 7,
    author: "Meenakshi Patil",
    title: "MACHINE LEARNING AND IOT BASED INTELLIGENT WIRELESS COMMUNICATION SYSTEM FOR SOLVING REAL WORLD SECURITY ISSUES",
    publication: "Indian Patent No. 202221075232",
    date: "Published: 13-Jan-23",
    link: ""
  },
  {
    srNo: 8,
    author: "Mr. Nilesh Mali",
    title: "BCHMS-System And Method For A BLOCK CHAIN Based Health Monitoring System",
    publication: "Indian Patent No. 202321012914",
    date: "Published: 17-Mar-23",
    link: ""
  },
  {
    srNo: 9,
    author: "Dr. Archana Salve",
    title: "PRINCIPLES OF GREEN SUSTAINABILITY AND PHYSICS AS A BASIS FOR THE LOW-CARBON ENERGY TRANSITION",
    publication: "Indian Patent No. 202211061047",
    date: "Published: 04-Nov-22",
    link: ""
  }
];
const copyrights2024_25= [
  {
    srNo: 1,
    author: "Supriya Kumbhar",
    title: "IN CAMPUS SOLAR ENERGY-BASED CHARGING STATION FOR ELECTRIC VEHICLE BATTERY",
    publication: "Copyright No. 12854/2024-CO/L",
    date: "25-06-2024",
    link: ""
  },
  {
    srNo: 2,
    author: "Prof. Pratima Gikwad",
    title: "BATTERY BALANCING FOR A MULTILEVEL INVERTER",
    publication: "Copyright No. L-150391/2024",
    date: "26-04-2024",
    link: ""
  },
  {
    srNo: 3,
    author: "Mrs. Anita Patil",
    title: "TempFlow Insight: AI-Powered Thermal Analysis of Horizontal Jet Cooling System on Vertical Target",
    publication: "Copyright No. 13756/2024-CO/L",
    date: "07-08-2024",
    link: "https://copyright.gov.in/SearchRoc.aspx"
  },
  {
    srNo: 4,
    author: "Ms. Shwetkranti Taware",
    title: "Women Security Android Application",
    publication: "Copyright No. L-150822/2024",
    date: "07-09-2024",
    link: "https://copyright.gov.in/UserRegistration/frmHome.aspx"
  },
  {
    srNo: 5,
    author: "Dr Priya Pise",
    title: "drone assisted smart watering sysytem",
    publication: "Copyright No. L-151556/2024",
    date: "22-07-2024",
    link: ""
  },
  {
    srNo: 6,
    author: "Prof. Shreyas Satpute",
    title: "Automated Aeroponic indoor Eco air purifier PAVANA",
    publication: "Copyright No. 13017/2024-CO/L",
    date: "05-Jul-24",
    link: ""
  },
  {
    srNo: 7,
    author: "Savita Jangale",
    title: "Effect of partial replacement of cement and fine aggregate with varius form of fish scale on the properties of concrete.",
    publication: "Copyright No. L-150200/2024",
    date: "2024",
    link: ""
  },
  {
    srNo: 8,
    author: "Vijay Kumar Saini",
    title: "LITERARY/ DRAMATIC WORK EVALUATION OF PARKING CHARACTERISTICS CASE STUDY OF SOMATANE PHATA",
    publication: "Copyright No. L-160660/2025",
    date: "13/02/2025",
    link: ""
  },
  {
    srNo: 9,
    author: "Prof. Nikhil Mulik",
    title: "Analysis of RCC framed 45 storey building using different combinations of outtriggers",
    publication: "ROC No : L-150695/2024",
    date: "07-08-2024",
    link: ""
  },
  {
    srNo: 10,
    author: "Prof. Rahul Sawant",
    title: "Effect of Soil Structure Interaction on foundation of RC building",
    publication: "ROC No : L-150714/2024",
    date: "07-08-2024",
    link: ""
  },
  {
    srNo: 11,
    author: "Dr Saurabh Gupta",
    title: "Solar Cooking",
    publication: "Copyright No. L-150215/2024",
    date: "01-07-2024",
    link: ""
  },
  {
    srNo: 12,
    author: "Siddheshwar Shirbhate",
    title: "Thermal analysis of horizontal jet cooling system on vertical target",
    publication: "Copyright No. 14078/2024-CO/L",
    date: "07-08-2024",
    link: ""
  },
  {
    srNo: 13,
    author: "Vishal A. Meshram",
    title: "In-campus Solar based charging station",
    publication: "Copyright No. 12854/2024-CO/L",
    date: "25/06/2024",
    link: ""
  },
  {
    srNo: 14,
    author: "Dr. Mahesh Bhong",
    title: "Microwave convection drying of green leafy vegetables",
    publication: "Copyright No. 13088/2024-CO/L",
    date: "07-08-2024",
    link: ""
  },
  {
    srNo: 15,
    author: "Dr Archana Salve",
    title: "Enhancing employibility in india unravelling the trasformative potentional of vocational education for students carerrer successs",
    publication: "Copyright No. L -150185/2024",
    date: "07-01-2024",
    link: ""
  },
  {
    srNo: 16,
    author: "Pravin Thorat",
    title: "VALUE ADDED SERVICES BY THIRD PARTY LOGISTICS PROVIDERS : A LITERATURE REVIEW",
    publication: "Copyright No. L-150190/2024",
    date: "07-01-2024",
    link: ""
  },
  {
    srNo: 17,
    author: "Prof. Hetal Thaker",
    title: "Healthcare Chatbot For Symptoms Prediction Project",
    publication: "Copyright No. SW/2025020460",
    date: "2025",
    link: ""
  },
  {
    srNo: 18,
    author: "Prof. Dhanashree Pisal",
    title: "Face Recognition Attendance System using Python",
    publication: "Copyright No. L-150409/2024",
    date: "02-07-2024",
    link: ""
  },
  {
    srNo: 19,
    author: "Prof. Dhanashree Pisal",
    title: "Continuous Internal Staff Leave Management System",
    publication: "Copyright No. L-150784/2024",
    date: "09-07-2024",
    link: ""
  }
];
const copyrights2023_24 = [
  {
    srNo: 1,
    author: "Shwetkranti B. Taware, Yash Rane, Tejas Patil, Rahul Ugale, Saurabh Kamble",
    title: "Women Security Android Application",
    publication: "Diary No. 14768/2024-CO/L",
    date: "2024",
    link: ""
  },
  {
    srNo: 2,
    author: "Dipali Junankar, Joel Bijoy Thomas, Abhijay Kshirsagar, Prathmesh Sharma",
    title: "Indian Food Image Classification Using Transfer Learning",
    publication: "Diary No. 13388/2024-CO/L",
    date: "2024",
    link: ""
  },
  {
    srNo: 3,
    author: "Dipali Junankar, Amit Khan, Shraddha Kale, Tushar Mohanty, Mudit Agarwal",
    title: "AI Based Personal Trainer",
    publication: "Diary No. 13396/2024-CO/L",
    date: "2024",
    link: ""
  },
  {
    srNo: 4,
    author: "Deepali Dhadwad, Janhavi Kaimal, Payal Dnyandeo Taskar, Pallavi Sachin Patil, Pranita Visnupanth Mane",
    title: "Real Time Emotion Based Music Player Using CNN Architecture",
    publication: "Diary No. 13375/2024-CO/L",
    date: "2024",
    link: ""
  },
  {
    srNo: 5,
    author: "Deepali Dhadwad, Parag Panzade, Kiran Prakash Kinge, Omkar Kshirsagar, Mrudul Sanjay Narkhede",
    title: "Automated Student Identification, Authentication and Information Display Using RFID Technology",
    publication: "Diary No. 13373/2024-CO/L",
    date: "2024",
    link: ""
  },
  {
    srNo: 6,
    author: "Deepali Dhadwad, Pradnya Wathore, Shrutika Rajendra Sonawane, Sakshi Vidyesh Rane, Neha Nitin Kharkande",
    title: "Lock Security Using Fingerprint Authentication",
    publication: "Diary No. 13376/2024-CO/L",
    date: "2024",
    link: ""
  },
  {
    srNo: 7,
    author: "Deepali Dhadwad, Kale Kalyani Umakant, Parihar Shalu Nihalsingh, Jagadale Rupesh Dilip",
    title: "Rainfall Prediction Using Regression Model",
    publication: "Diary No. 13399/2024-CO/L",
    date: "2024",
    link: ""
  },
  {
    srNo: 8,
    author: "Anita Patil, Jayesh Deshmukh, Shreeyashi Surwase, Shubhankar Barhate",
    title: "TempFlow Insight AI Powered Thermal Analysis of Horizontal Jet Cooling System on Vertical Target",
    publication: "Diary No. 13756/2024-CO/L",
    date: "2024",
    link: ""
  },
  {
    srNo: 9,
    author: "Pragati Malusare, Shweta Mane, Harshada Khadilkar, Dhanashri Hingade, Vaishnavi Jadhav",
    title: "H.O.P.E. Food Donation App",
    publication: "Diary No. 13791/2024-CO/L",
    date: "2024",
    link: ""
  },
  {
    srNo: 10,
    author: "Nilesh D Mali, Atharva Misal, Anniruddha Bhaskarwar, Zubair Mohammad, Diksha Pandita",
    title: "NFT’s with ICP Blockchain",
    publication: "Diary No. 13627/2024-CO/L",
    date: "2024",
    link: ""
  },
  {
    srNo: 11,
    author: "Nilesh Mali, Gauri Narendra Bhandari, Chaitrali Vishnu Rokade, Gaurav Ramesh Kolekar",
    title: "E Bliss Deep Learning for Emotional Well Being",
    publication: "Diary No. 13611/2024-CO/L",
    date: "2024",
    link: ""
  },
  {
    srNo: 12,
    author: "Nilesh D Mali, Mrunal Ghare, Kedar Mule, Anuja Newaskar, Yash More",
    title: "Brain Tumor Detection Using Deep Learning or Machine Learning",
    publication: "Diary No. 13621/2024-CO/L",
    date: "2024",
    link: ""
  },
  {
    srNo: 13,
    author: "Nilesh Mali, Mangesh Lawande, Utkarsh Kulthe, Omkar Gurav, Shantik Bhalerao",
    title: "Yoga Pose Detection and Correction Using OpenPose",
    publication: "Diary No. 13629/2024-CO/L",
    date: "2024",
    link: ""
  },
  {
    srNo: 14,
    author: "Asutosh Talekar, Lokesh Dhake, Shambhooraje Jadhav, Anirudha Landage, Reshma Kohad",
    title: "Stock Market Price Reduction Using Supervised Learning",
    publication: "Diary No. 13566/2024-CO/L",
    date: "2024",
    link: ""
  },
  {
    srNo: 15,
    author: "Madhuri Bore, Kishor Dhawade, Yash Dhamale, Mahima Kumari, Pranav Wankhade",
    title: "Exploring the use of Iron ore trailings by partial replacement of fine aggregate",
    publication: "Diary No. 14064/2024-CO/L",
    date: "2024",
    link: ""
  },
  {
    srNo: 16,
    author: "Savita Jangale, Harshal Khakre, Ishwari Patil, Arjun Biradar",
    title: "Effects of partial replacement of cement and fine aggregate with various forms of fish scales on the properties of concrete",
    publication: "Diary No. 14575/2024-CO/L",
    date: "2024",
    link: ""
  },
  {
    srNo: 17,
    author: "Vaibhav Kulkarni, Prathmesh Godambe, Shraddha Bagul, Rohan Dhoka, Pritee Thodsare",
    title: "Evaluation of Mechanical properties of mortar using LUNAR soil simulant",
    publication: "Diary No. 14056/2024-CO/L",
    date: "2024",
    link: ""
  },
  {
    srNo: 18,
    author: "Nikhil Mulik, Ankit Mali, Trupti Gavit, Smruti Patankar, Digvijay Ghotkule",
    title: "Analysis of RCC framed 45 storey building using different combinations of outriggers",
    publication: "Diary No. 14069/2024-CO/L",
    date: "2024",
    link: ""
  },
  {
    srNo: 19,
    author: "Vijaykumar Saini, Kishor Shingade, Atharv Dugam, Kedar Bhosale, Rushikesh Mali",
    title: "Evaluation of Parking Characteristics of Somatane Phata",
    publication: "Diary No. 14103/2024-CO/L",
    date: "2024",
    link: ""
  },
  {
    srNo: 20,
    author: "Rahul Sawant, Neel Bodade, Dhanaraj Raut, Rohit Awaghade, Yash Mhatre, Siddhi Borhade",
    title: "Effect of Soil Structure Interaction on Foundation of RC Building",
    publication: "Diary No. 14212/2024-CO/L",
    date: "2024",
    link: ""
  },
  {
    srNo: 21,
    author: "Vrushali Patil, Chetan Waghmare, Vijay Udmale, Prashant Mane, Suyash Ghodake",
    title: "Wood ash based geopolymer to remove fluorides and nitrates from domestic water",
    publication: "Diary No. 14115/2024-CO/L",
    date: "2024",
    link: ""
  },
  {
    srNo: 22,
    author: "Shubhangi Ashish Manwatkar, Jairumi Arkan Ravish, Patel Nayyum Gani, Jamadar Laden Rafique Bibi, Dave Saurabh Kalpesh",
    title: "Design and Fabrication of Blade less Wind Turbine",
    publication: "Diary No. 13395/2024-CO/L",
    date: "2024",
    link: ""
  },
  {
    srNo: 24,
    author: "Dhanshree Vishal Pisal, Chetan Nerkar",
    title: "Continious Internal Staff Leave Management System",
    publication: "Diary No. 14484/2024-CO/L",
    date: "2024",
    link: ""
  },
  {
    srNo: 25,
    author: "Dhanshree Pisal, Hemant Kamdi",
    title: "Face recognition attendance system using Python",
    publication: "Diary No. 12836/2024-CO/L",
    date: "2024",
    link: ""
  },
  {
    srNo: 26,
    author: "Shreya Sohan Shenai, Himanshu Meshram, Dhanshree Darekar",
    title: "Cycle buddy – Cycle rental system",
    publication: "Diary No. 12841/2024-CO/L",
    date: "2024",
    link: ""
  },
  {
    srNo: 27,
    author: "Dr Darshana Desai, Patil Aniket Narsu, Kamble Prathamesh Mahendra",
    title: "Smart Canteen",
    publication: "Diary No. 14489/2024-CO/L",
    date: "2024",
    link: ""
  },
  {
    srNo: 28,
    author: "Dr Darshana Desai, Shelar Aditya, Patil Kedar, Salvi Aniket",
    title: "Students Placement Grading System",
    publication: "Diary No. 13060/2024-CO/L",
    date: "2024",
    link: ""
  },
  {
    srNo: 29,
    author: "Tejas Pawar, Rugved Sunil Ghirnikar, Om Nilesh Vakhariya",
    title: "Student Grievance Redressal System",
    publication: "Diary No. 12869/2024-CO/L",
    date: "2024",
    link: ""
  },
  {
    srNo: 30,
    author: "Tejas Pawar, Ishita Gupta, Shivam Giri",
    title: "Corporate Internal Hiring System",
    publication: "Diary No. 12845/2024-CO/L",
    date: "2024",
    link: ""
  },
  {
    srNo: 31,
    author: "Deepa Padwal, Dr Manjusha Tatiya, Pallavi Chavan, Kunal Kene, Shivam Yadav, Akshay Jalnil, Harshda Wagh",
    title: "Sign Language Recognition Model",
    publication: "Diary No. 15500/2024-CO/L",
    date: "2024",
    link: ""
  },
  {
    srNo: 32,
    author: "Pallavi Chavan, Deepa Padwal, Dr Manjusha Tatiya, Rutuja Bhavsar, Pranali More, Roshani Nagare, Nikita Patil",
    title: "Alumni Tracking System",
    publication: "Diary No. 15511/2024-CO/L",
    date: "2024",
    link: ""
  },
  {
    srNo: 33,
    author: "Dr Manjusha Tatiya, Pallavi Chavan, Deepa Padwal, Aryan Borse, Vaishnavi Katikar, Priya Adsul, Shruti Ghadge, Yash Pathak",
    title: "Wednesday – a voice robot",
    publication: "Diary No. 15507/2024-CO/L",
    date: "2024",
    link: ""
  },
  {
    srNo: 34,
    author: "Deepa Padwal, Dr Manjusha Tatiya, Pallavi Chavan, Adityabodhi Gaikwad, Maharudra Ganjure, Gajendra Thakur, Vishal Sarode",
    title: "Crop recommendation System",
    publication: "Diary No. 12813/2024-CO/L",
    date: "2024",
    link: ""
  },
  {
    srNo: 35,
    author: "Dr Priya Pise",
    title: "Drone assisted smart watering revolutionizing plant care",
    publication: "Diary No. 15544/2024-CO/L",
    date: "2024",
    link: ""
  },
  {
    srNo: 36,
    author: "Deepa Padwal",
    title: "GPU accelerated smoothed particle hydrodynamics simulation",
    publication: "Diary No. 15513/2024-CO/L",
    date: "2024",
    link: ""
  },
  {
    srNo: 37,
    author: "Siddheshwar Shirbhate, Dr Sunil B. Ingole",
    title: "Thermal analysis of horizontal jet cooling system on vertical target",
    publication: "Diary No. 14078/2024-CO/L",
    date: "2024",
    link: ""
  },
  {
    srNo: 38,
    author: "Dr Poornashankar",
    title: "AI Controlled drone with confined GPS for security surveillence",
    publication: "Diary No. 15047/2024-CO/L",
    date: "2024",
    link: ""
  },
  {
    srNo: 39,
    author: "Vishal Meshram, Hemant Darokar, Supriya Kumbhar",
    title: "In campus Solar Energy based charging station for Electric Vehicle Battery",
    publication: "Diary No. 12854/2024-CO/L",
    date: "2024",
    link: ""
  },
  {
    srNo: 40,
    author: "Pratima Gaikwad, Dr Manjusha Tomar, Dr Kiran Devade",
    title: "Battery balancing for a multilevel invertor",
    publication: "Diary No. 13255/2024-CO/L",
    date: "2024",
    link: ""
  },
  {
    srNo: 41,
    author: "Meenakshi Patil, D S Bhagwat, Rupali Salunke",
    title: "Li Fi based voice controlled robot",
    publication: "Diary No. 13067/2024-CO/L",
    date: "2024",
    link: ""
  },
  {
    srNo: 42,
    author: "Ashwin Dharme, Dr Mahesh Bhong",
    title: "Profile drying of Agricultural Produce to increase life span",
    publication: "Diary No. 13245/2024-CO/L",
    date: "2024",
    link: ""
  },
  {
    srNo: 43,
    author: "Shreyas Satpute, Vijaykumar Saini, Dr Poornashankar",
    title: "Automated aeroplane indoor eco air purifier PAVANA",
    publication: "Diary No. 13017/2024-CO/L",
    date: "2024",
    link: ""
  },
  {
    srNo: 44,
    author: "Supriya Kumbhar, Dinesh Kadam, Mayur Sonawane, Vishal Meshram",
    title: "Design and Fabrication of contactless energy generation by using flywheel",
    publication: "Diary No. 13233/2024-CO/L",
    date: "2024",
    link: ""
  },
  {
    srNo: 45,
    author: "Dr Saurabh Gupta",
    title: "Solar Cooking",
    publication: "Diary No. 16152/2024-CO/L",
    date: "2024",
    link: ""
  },
  {
    srNo: 46,
    author: "Dr Poornashankar, Aditya Sunil Jadhav, Bhushan Jitendra Joshi, Rushikesh Baban Namde",
    title: "Ensemble Modeling of Satellite Image Analysis for lake boundary extraction",
    publication: "Diary No. 14107/2024-CO/L",
    date: "2024",
    link: ""
  },
  {
    srNo: 47,
    author: "Milind Deshpande, Pushpak Ganesh Sakharkar, Sakshi Prashant Pawar",
    title: "Location Based Garbage Management System",
    publication: "Diary No. 12829/2024-CO/L",
    date: "2024",
    link: ""
  },
  {
    srNo: 48,
    author: "Milind Deshpande, Desale Rushikesh Ramesh, Patil Saurav Vinayak",
    title: "Budget Monitoring System",
    publication: "Diary No. 12825/2024-CO/L",
    date: "2024",
    link: ""
  },
  {
    srNo: 49,
    author: "Dr Mahesh Bhong",
    title: "Microwave convective drying of green leafy vegetables",
    publication: "Diary No. 13088/2024-CO/L",
    date: "2024",
    link: ""
  },
  {
    srNo: 50,
    author: "Pranali Khatake, Abhishek Garad, Aditya Gaikwad, Satish Sathe, Hrushikesh Sutar",
    title: "Metallic Burr Collector",
    publication: "Diary No. 15116/2024-CO/L",
    date: "2024",
    link: ""
  },
  {
    srNo: 51,
    author: "Priyanka Shirish Shinde, CA Ajinkya Rajiv Pilankar",
    title: "Awareness of Girl’s Educational Schemes of Mulshi taluka, Pune",
    publication: "Diary No. 15520/2024-CO/L",
    date: "2024",
    link: ""
  },
  {
    srNo: 52,
    author: "Dr Priyanka Pawar, Dr Sameer Nrkhede",
    title: "A Survey of MBBS Doctors Awareness and Knowledge about Stem Cell Technology in Selected Area of Pune",
    publication: "Diary No. 13089/2024-CO/L",
    date: "2024",
    link: ""
  },
  {
    srNo: 53,
    author: "Pravin Thorat",
    title: "Value added services by third party logistics providers: A literature review",
    publication: "Diary No. 14412/2024-CO/L",
    date: "2024",
    link: ""
  },
  {
    srNo: 54,
    author: "Dr Archana Salve, Pradip Sandbhor",
    title: "Enhancing employability in India Unraveling the transformative potential of vocational education for students career success",
    publication: "Diary No. 13057/2024-CO/L",
    date: "2024",
    link: ""
  },
  {
    srNo: 55,
    author: "Dr Archana Salve",
    title: "Comparative Research on Developing Managerial Skills Through Management Education Among Management Graduates at Selected Institutes in Pune & Mumbai",
    publication: "Diary No. 12699/2024-CO/L",
    date: "2024",
    link: ""
  },
  {
    srNo: 56,
    author: "Narayani Panchal, Aditya Pawar, Vedika Patre, Manoj Pokale",
    title: "A study on Awareness and Consumption of Millets by Women",
    publication: "Diary No. 13026/2024-CO/L",
    date: "2024",
    link: ""
  },
  {
    srNo: 57,
    author: "Aditee Huparikar Shah",
    title: "A literature review study: Analyzing role of FinTech in Sustainable Banking in Pune Region in India",
    publication: "Diary No. 13022/2024-CO/L",
    date: "2024",
    link: ""
  }
];

const copyrights2022_23 = [
  {
    srNo: 1,
    author: "Prof. Shwetkranti Taware",
    title: "Optimization of Features in Facial Emotion Recognition",
    publication: "Copyright No. 14793/2023-CO/L",
    date: "04-06-2023",
    link: "https://copyright.gov.in/SearchRoc.aspx"
  },
  {
    srNo: 2,
    author: "Dr. Soumitra Das",
    title: "DigiScript Android - Your Paperless Prescription Solution",
    publication: "Copyright No. 14792/2023-CO/L",
    date: "04-06-2023",
    link: "https://copyright.gov.in/SearchRoc.aspx"
  },
  {
    srNo: 3,
    author: "Prof. Pragati Malusare",
    title: "Local Service Providing Application: Locals for Locals",
    publication: "Copyright No. 14790/2023-CO/L",
    date: "04-06-2023",
    link: "https://copyright.gov.in/SearchRoc.aspx"
  },
  {
    srNo: 4,
    author: "Prof. Pragati Kinage",
    title: "Web Based Banking Module for Query Submission",
    publication: "Copyright No. 14789/2023-CO/L",
    date: "04-06-2023",
    link: "https://copyright.gov.in/SearchRoc.aspx"
  },
  {
    srNo: 5,
    author: "Prof. Deepali Dagale",
    title: "Suspicious Activity Detection in Hospital",
    publication: "Copyright No. 14788/2023-CO/L",
    date: "04-06-2023",
    link: "https://copyright.gov.in/SearchRoc.aspx"
  },
  {
    srNo: 6,
    author: "Prof. Vikas Nandgaonkar",
    title: "Text Scrutiny and Visualization using NLP",
    publication: "Copyright No. 14787/2023-CO/L",
    date: "04-06-2023",
    link: "https://copyright.gov.in/SearchRoc.aspx"
  },
  {
    srNo: 7,
    author: "Mr. Sunil Rathod",
    title: "Emotions Detection using Tweeter Sentiment Analysis",
    publication: "Copyright No. 14786/2023-CO/L",
    date: "04-06-2023",
    link: "https://copyright.gov.in/SearchRoc.aspx"
  },
  {
    srNo: 8,
    author: "Prof. Deepali Dagale",
    title: "E-Commerce website using image segmentation",
    publication: "Copyright No. 14779/2023-CO/L",
    date: "04-06-2023",
    link: "https://copyright.gov.in/SearchRoc.aspx"
  },
  {
    srNo: 9,
    author: "Ms. Pragati Choudhari",
    title: "Network Attack Detection using Hybrid Algorithm",
    publication: "Copyright No. 14778/2023-CO/L",
    date: "04-06-2023",
    link: "https://copyright.gov.in/SearchRoc.aspx"
  },
  {
    srNo: 10,
    author: "Ms. Pragati Malusare",
    title: "Drug Recommendation System",
    publication: "Copyright No. 14777/2023-CO/L",
    date: "04-06-2023",
    link: "https://copyright.gov.in/SearchRoc.aspx"
  },
  {
    srNo: 11,
    author: "Mrs. Deepali Dhawad",
    title: "Email System for Visual Impaired",
    publication: "Copyright No. 4775/2023-CO/L",
    date: "04-06-2023",
    link: "https://copyright.gov.in/SearchRoc.aspx"
  },
  {
    srNo: 12,
    author: "Dr. Soumitra Das",
    title: "Fire Evacuation System",
    publication: "Copyright No. 14774/2023-CO/L",
    date: "04-06-2023",
    link: "https://copyright.gov.in/SearchRoc.aspx"
  },
  {
    srNo: 13,
    author: "Prof. Pragati Chaudhari",
    title: "Image Forgery Detection using Deep Learning",
    publication: "Copyright No. 14773/2023-CO/L",
    date: "04-06-2023",
    link: "https://copyright.gov.in/SearchRoc.aspx"
  },
  {
    srNo: 14,
    author: "Prof. Vikas Nandgaonkar",
    title: "Digital Card Using Augmented Reality",
    publication: "Copyright No. 14772/2023-CO/L",
    date: "03-06-2023",
    link: "https://copyright.gov.in/SearchRoc.aspx"
  },
  {
    srNo: 15,
    author: "Mr. Sunil D. Rathod",
    title: "Happy Deal Services",
    publication: "Copyright No. 14771/2023-CO/L",
    date: "03-06-2023",
    link: "https://copyright.gov.in/SearchRoc.aspx"
  },
  {
    srNo: 16,
    author: "Shubhangi Manwatkar",
    title: "Providing efficient Medical facilities for the Pregnant womens in rural areas using Convolutional Neural Network (CNN)",
    publication: "Copyright No. 7686/2023-CO/L",
    date: "22-03-2023",
    link: "https://www.copyright.gov.in/CopyrightROC_Details.aspx?DiaryNo=7686/2023-CO/L&RocNo=L-126929/2023"
  }
];

export const iprData = [
  {
    title: "1. Patents",
    items: [
      {
        label: "Patents Filed/Published in the AY-[2024-25]",
        href: "#",
        data:patents2024_25
        // data: patents2023_24 (We will add this next)
      },
      {
        label: "Patents Filed/Published in the AY-[2023-24]",
        href: "#",
        data:patents2023_24
      },
      {
        label: "Patents Filed/Published in the AY-[2022-23]",
        href: "#",
        data:patents2022_23
      },
    ],
  },
  {
    title: "2. Copyrights",
    items: [
      {
        label: "Copyrights Filed in the academic year 2024-25",
        href: "#",
        data:copyrights2024_25
      },
      {
        label: "Copyrights Filed in the academic year 2023-24",
        href: "#",
        data:copyrights2023_24
      },
       {
        label: "Copyrights Filed in the academic year 2022-23",
        href: "#",
        data:copyrights2022_23
      },
    ],
  },
 
];
// Step 2: The Navigation Object
// Notice how I added the 'data' key to the first item referencing the variable above.
export const publicationsData = [
  {
    title: "Journals",
    items: [
      {
        label: "Key Publications in the Indexed Journals by Faculty Members AY-[2024-2025]",
        href: "#",
        data: journals2024_25
      },
      {
        label: "Key Publications in the Indexed Journals by Faculty Members AY-[2023-2024]",
        href: "#",
        data:journals2023_24
      },
      {
        label: "Key Publications in the Indexed Journals by Faculty Members AY-[2022-23]",
        href: "#",
        data:journals2022_23
      },
      {
        label: "Key Publications in the Indexed Journals by Faculty Members AY-[2021-22]",
        href: "#",
        data:journals2021_22
      },
    ],
  },

  {
    title: "Conferences",
    items: [
      {
        label: "Conference 2023-24",
        href: "#",
        data:conferences2023_24
      },
      {
        label: "Conference 2022-23",
        href: "#",
        data:conferences2022_23
      },
    ],
  },

  {
    title: "Books",
    items: [
      {
        label: "Books AY- 2023-2024",
        href: "#",
        data:books2023_24
      },
      {
        label: "Books AY- 2022-2023",
        href: "#",
        data:books2022_23
      },
    ],
  }
];
