// script.js
const capstoneDisplay = document.getElementById("capstone-display");

const capstoneIdeas = [
  {
    title: "AI-Powered Plant Disease Detection System",
    description:
      "This project develops a mobile application that uses machine learning to identify plant diseases from images, providing farmers with early warnings and treatment recommendations.",
    stack: ["Python", "TensorFlow/Keras", "OpenCV", "Android/iOS"],
  },
  {
    title: "Smart Irrigation System using IoT",
    description:
      "An IoT-based system that monitors soil moisture levels and automatically adjusts irrigation schedules, optimizing water usage and promoting sustainable agriculture.",
    stack: ["Arduino/ESP32", "MQTT", "Node.js", "React"],
  },
  {
    title: "E-commerce Platform for Local Artisans",
    description:
      "A platform connecting local artisans directly with customers, providing them with a space to showcase and sell their handcrafted products.",
    stack: ["PHP", "MySQL", "HTML", "CSS", "JavaScript"],
  },
  {
    title: "Real-time Traffic Monitoring and Prediction System",
    description:
      "This project uses computer vision and machine learning to analyze traffic camera feeds, providing real-time traffic updates and predicting future congestion.",
    stack: ["Python", "OpenCV", "TensorFlow/PyTorch", "Flask/Django"],
  },
  {
    title: "Personalized Learning Platform for Students",
    description:
      "An online learning platform that adapts to individual student's learning styles and pace, providing customized learning materials and assessments.",
    stack: ["React", "Node.js", "MongoDB", "Machine Learning Algorithms"],
  },
  {
    title: "Automated Sign Language Recognition System",
    description:
      "Develop a system that can accurately recognize sign language gestures using computer vision and machine learning, facilitating communication for deaf and hard-of-hearing individuals.",
    stack: ["Python", "OpenCV", "TensorFlow/PyTorch", "MediaPipe"],
  },
  {
    title: "Fake News Detection System",
    description:
      "Build a system that can identify fake news articles using natural language processing and machine learning, helping to combat misinformation.",
    stack: ["Python", "NLTK/SpaCy", "Scikit-learn", "Flask/Django"],
  },
  {
    title: "Mental Health Chatbot",
    description:
      "Create a chatbot that can provide mental health support and resources to users, offering a safe and accessible way to discuss mental health concerns.",
    stack: ["Python", "NLTK/SpaCy", "Dialogflow/Rasa", "Flask/Django"],
  },
  {
    title: "Secure File Storage and Sharing System",
    description:
      "Develop a secure file storage and sharing system that uses encryption and access control mechanisms to protect user data.",
    stack: ["Python", "Flask/Django", "PostgreSQL", "Encryption Libraries"],
  },
  {
    title: "Smart Home Automation System",
    description:
      "Design a smart home automation system that allows users to control various appliances and devices remotely using a mobile app or voice commands.",
    stack: ["Arduino/ESP32", "MQTT", "Node.js", "React Native"],
  },
  {
    title: "AI-Powered Medical Image Analysis for Early Disease Detection",
    description:
      "Develop a system that uses deep learning to analyze medical images (X-rays, MRIs) for early detection of diseases like cancer or Alzheimer's.",
    stack: ["Python", "TensorFlow/PyTorch", "Medical Imaging Libraries"],
  },
  {
    title: "Personalized Music Recommendation System",
    description:
      "Create a music recommendation system that learns user preferences and suggests songs or artists they might enjoy.",
    stack: ["Python", "Machine Learning Libraries", "Music APIs"],
  },
  {
    title: "Real-Time Object Detection and Tracking for Surveillance",
    description:
      "Build a system that can detect and track objects in real-time from video feeds, suitable for surveillance or security applications.",
    stack: ["Python", "OpenCV", "Deep Learning Frameworks"],
  },
  {
    title: "Virtual Reality Training Simulator for Surgeons",
    description:
      "Develop a VR training simulator that allows surgeons to practice complex procedures in a realistic and safe environment.",
    stack: ["Unity/Unreal Engine", "VR SDKs", "3D Modeling Software"],
  },
  {
    title: "Blockchain-Based Supply Chain Management System",
    description:
      "Create a system that uses blockchain technology to track products throughout the supply chain, improving transparency and reducing fraud.",
    stack: ["Solidity/Vyper", "Ethereum/Hyperledger Fabric", "Web3.js"],
  },
  {
    title: "Mobile App for Language Translation",
    description:
      "Develop a mobile app that can translate spoken language or text in real-time.",
    stack: [
      "Swift/Kotlin",
      "Natural Language Processing APIs",
      "Speech Recognition APIs",
    ],
  },
  {
    title: "Accessible Web Design for People with Disabilities",
    description:
      "Design and develop a website that is fully accessible to people with various disabilities, following accessibility guidelines.",
    stack: ["HTML", "CSS", "JavaScript", "ARIA Attributes"],
  },
  {
    title: "Sentiment Analysis of Social Media Posts",
    description:
      "Build a system that can analyze social media posts to determine the overall sentiment (positive, negative, neutral) towards a particular topic or product.",
    stack: [
      "Python",
      "Natural Language Processing Libraries",
      "Social Media APIs",
    ],
  },
  {
    title: "Cross-Platform Mobile App for Local Businesses",
    description:
      "Create a cross-platform mobile application that helps local businesses connect with their customers, offering features like appointment booking, loyalty programs, and promotions.",
    stack: ["React Native", "Firebase", "Cloud Functions"],
  },
  {
    title: "Interactive Simulations for Online Learning",
    description:
      "Design and implement interactive simulations within an online learning platform to improve student engagement and understanding of complex concepts.",
    stack: [
      "JavaScript",
      "HTML5 Canvas/WebGL",
      "Learning Management System APIs",
    ],
  },
  {
    title: "AI-Powered Personalized Education Platform",
    description:
      "Develop an AI-driven platform that adapts learning content and pace to individual student needs and learning styles.",
    stack: ["Python", "Machine Learning", "Web Development Framework"],
  },
  {
    title: "Smart Home Energy Management System",
    description:
      "Create a system that monitors and optimizes energy usage in a smart home, reducing energy consumption and costs.",
    stack: ["IoT Devices", "Cloud Platform", "Mobile App Development"],
  },
  {
    title: "Cybersecurity Threat Detection System",
    description:
      "Build a system that can detect and prevent cybersecurity threats using machine learning and network analysis.",
    stack: ["Python", "Network Security Tools", "Machine Learning Libraries"],
  },
  {
    title: "Automated Drone Delivery System",
    description:
      "Develop a system for automated drone delivery, including path planning, obstacle avoidance, and package handling.",
    stack: ["Python", "Drone SDK", "Computer Vision"],
  },
  {
    title: "Assistive Technology for Visually Impaired Individuals",
    description:
      "Create a device or application that helps visually impaired individuals navigate their environment and access information.",
    stack: ["Embedded Systems", "Computer Vision", "Accessibility APIs"],
  },
  {
    title: "Real-time Disaster Relief Management System",
    description:
      "Develop a system that can help manage disaster relief efforts in real-time, including resource allocation, communication, and coordination.",
    stack: ["Web Development", "Database Management", "Mapping APIs"],
  },
  {
    title: "Gamified Fitness Tracking App",
    description:
      "Create a fitness tracking app that uses gamification techniques to motivate users to achieve their fitness goals.",
    stack: [
      "Mobile App Development",
      "Fitness APIs",
      "Game Development Libraries",
    ],
  },
  {
    title: "Personalized Travel Planning App",
    description:
      "Develop an app that helps users plan personalized travel itineraries, taking into account their preferences, budget, and interests.",
    stack: ["Mobile App Development", "Travel APIs", "Recommendation Systems"],
  },
  {
    title: "Social Media Analytics Dashboard",
    description:
      "Create a dashboard that provides insights into social media trends, user engagement, and sentiment analysis.",
    stack: [
      "Web Development",
      "Social Media APIs",
      "Data Visualization Libraries",
    ],
  },
  {
    title: "AI-Powered Chatbot for Customer Service",
    description:
      "Develop a chatbot that can handle customer service inquiries, providing quick and accurate responses.",
    stack: [
      "Natural Language Processing",
      "Chatbot Framework",
      "Web Integration",
    ],
  },
  {
    title: "Smart Agriculture Monitoring System",
    description:
      "Create a system that uses sensors and data analytics to monitor crop health, soil conditions, and weather patterns, optimizing agricultural practices.",
    stack: ["IoT Devices", "Data Analytics", "Cloud Platform"],
  },
  {
    title: "Predictive Maintenance System for Industrial Equipment",
    description:
      "Develop a system that uses machine learning to predict when industrial equipment needs maintenance, reducing downtime and costs.",
    stack: ["Industrial IoT", "Machine Learning", "Data Analytics"],
  },
  {
    title: "Virtual Classroom Platform",
    description:
      "Develop a platform for virtual classrooms, including features like video conferencing, screen sharing, and interactive whiteboards.",
    stack: [
      "Web Development",
      "Real-time Communication Technologies",
      "Learning Management System Integration",
    ],
  },
  {
    title: "E-learning platform for specialized skills",
    description:
      "Develop an e-learning platform that focuses on specialized skills and provides personalized learning paths and assessments.",
    stack: [
      "Web Development",
      "Database Management",
      "E-learning authoring tools",
    ],
  },
  {
    title: "Mobile app for local community engagement",
    description:
      "Create a mobile app that facilitates communication and collaboration within a local community, including features like event announcements, resource sharing, and volunteer opportunities.",
    stack: [
      "Mobile App Development",
      "Geolocation Services",
      "Social Media Integration",
    ],
  },
  {
    title: "Platform for connecting freelancers and clients",
    description:
      "Develop a platform that connects freelancers with clients, providing tools for project management, communication, and payment processing.",
    stack: [
      "Web Development",
      "Database Management",
      "Payment Gateway Integration",
    ],
  },
  {
    title: "System for managing and tracking personal finances",
    description:
      "Build a system that helps users manage and track their personal finances, including budgeting, expense tracking, and investment analysis.",
    stack: ["Web Development", "Database Management", "Financial APIs"],
  },
  {
    title: "Mobile app for ordering food from local restaurants",
    description:
      "Create a mobile app that allows users to order food from local restaurants, offering features like online menus, order tracking, and delivery options.",
    stack: [
      "Mobile App Development",
      "Restaurant APIs",
      "Payment Gateway Integration",
    ],
  },
  {
    title: "Platform for online auctions",
    description:
      "Develop a platform for online auctions, providing features like bidding, item listings, and secure payment processing.",
    stack: [
      "Web Development",
      "Database Management",
      "Payment Gateway Integration",
    ],
  },
  {
    title: "System for managing and tracking medical records",
    description:
      "Build a secure system for managing and tracking medical records, ensuring patient privacy and data integrity.",
    stack: ["Web Development", "Database Management", "HIPAA Compliance"],
  },
  {
    title: "Mobile app for booking appointments with doctors",
    description:
      "Create a mobile app that allows users to book appointments with doctors, offering features like doctor profiles, appointment scheduling, and reminders.",
    stack: [
      "Mobile App Development",
      "Healthcare APIs",
      "Appointment Scheduling Tools",
    ],
  },
  {
    title: "Platform for online therapy and counseling",
    description:
      "Develop a secure platform for online therapy and counseling, connecting patients with licensed therapists.",
    stack: ["Web Development", "Video Conferencing", "HIPAA Compliance"],
  },
  {
    title: "System for managing and tracking educational resources",
    description:
      "Build a system that helps educators manage and track educational resources, including lesson plans, assignments, and student progress.",
    stack: [
      "Web Development",
      "Database Management",
      "Learning Management System Integration",
    ],
  },
  {
    title: "Mobile app for language learning",
    description:
      "Create a mobile app that helps users learn new languages, offering features like vocabulary lessons, grammar exercises, and pronunciation practice.",
    stack: [
      "Mobile App Development",
      "Language Learning APIs",
      "Gamification Techniques",
    ],
  },
  {
    title: "Platform for online music collaboration",
    description:
      "Develop a platform that allows musicians to collaborate on music projects online, offering features like file sharing, audio editing tools, and communication tools.",
    stack: [
      "Web Development",
      "Audio Processing Libraries",
      "Real-time Communication Technologies",
    ],
  },
  {
    title: "AI-Powered Personalized Fitness App",
    description:
      "Develop a fitness app that uses AI to create personalized workout plans and nutrition recommendations based on user goals and preferences.",
    stack: ["Python", "Machine Learning", "Mobile App Development"],
  },
  {
    title: "Smart Traffic Management System",
    description:
      "Design a system that uses real-time data and AI to optimize traffic flow and reduce congestion in urban areas.",
    stack: ["Python", "Traffic Simulation Software", "Data Analytics"],
  },
  {
    title: "Early Wildfire Detection System using IoT Sensors",
    description:
      "Create a system that uses a network of IoT sensors to detect wildfires in their early stages, allowing for rapid response and minimizing damage.",
    stack: ["IoT Devices", "Cloud Platform", "Data Analytics"],
  },
  {
    title: "AI-Driven Personalized News Aggregator",
    description:
      "Develop a news aggregator that uses AI to personalize news feeds based on user interests and reading habits.",
    stack: ["Python", "Natural Language Processing", "Web Development"],
  },
  {
    title: "Mobile App for Identifying Plant Species",
    description:
      "Create a mobile app that uses image recognition to identify plant species and provide information about them.",
    stack: ["Mobile App Development", "Computer Vision", "Botany Databases"],
  },
  {
    title: "Virtual Reality Tour of Historical Sites",
    description:
      "Develop a VR experience that allows users to take virtual tours of historical sites and learn about their history.",
    stack: ["Unity/Unreal Engine", "VR Development", "3D Modeling"],
  },
  {
    title: "Blockchain-Based Voting System",
    description:
      "Create a secure and transparent voting system using blockchain technology.",
    stack: ["Solidity", "Ethereum", "Web3.js"],
  },
  {
    title: "AI-Powered Code Generation Tool",
    description:
      "Develop a tool that uses AI to generate code snippets or entire programs in various programming languages.",
    stack: ["Python", "Machine Learning", "Code Parsing Libraries"],
  },
  {
    title: "Smart Inventory Management System for Retail",
    description:
      "Create a system that uses IoT sensors and AI to optimize inventory levels in retail stores, reducing waste and improving efficiency.",
    stack: ["IoT Devices", "Cloud Platform", "Data Analytics"],
  },
  {
    title: "Mobile App for Learning Sign Language",
    description:
      "Develop a mobile app that teaches users sign language through interactive lessons and exercises.",
    stack: [
      "Mobile App Development",
      "Computer Vision",
      "Sign Language Databases",
    ],
  },
  {
    title: "AI-Powered Language Translation Chatbot",
    description:
      "Build a chatbot that can translate conversations between people speaking different languages in real-time.",
    stack: [
      "Natural Language Processing",
      "Chatbot Development",
      "Translation APIs",
    ],
  },
  {
    title: "Smart Parking System using IoT Sensors",
    description:
      "Create a system that uses IoT sensors to monitor parking availability in real-time and guide drivers to available parking spots.",
    stack: ["IoT Devices", "Cloud Platform", "Mobile App Development"],
  },
  {
    title: "Personalized Recipe Recommendation System",
    description:
      "Develop a system that recommends recipes to users based on their dietary restrictions, preferences, and available ingredients.",
    stack: ["Python", "Machine Learning", "Recipe APIs"],
  },
  {
    title: "Real-Time Air Quality Monitoring System",
    description:
      "Create a system that uses sensors to monitor air quality in real-time and provide data to the public.",
    stack: ["IoT Devices", "Cloud Platform", "Data Visualization"],
  },
  {
    title: "AI-Powered Music Composition Tool",
    description:
      "Develop a tool that uses AI to assist musicians in composing music.",
    stack: ["Python", "Machine Learning", "Music Libraries"],
  },
  {
    title: "Smart Greenhouse Management System",
    description:
      "Create a system that uses sensors and AI to automate the management of a greenhouse, optimizing growing conditions for plants.",
    stack: ["IoT Devices", "Cloud Platform", "Data Analytics"],
  },
  {
    title: "Mobile App for Local Event Discovery",
    description:
      "Develop a mobile app that helps users discover local events happening in their area.",
    stack: ["Mobile App Development", "Event APIs", "Geolocation Services"],
  },
  {
    title: "AI-Powered Personalized Book Recommendation System",
    description:
      "Build a system that recommends books to users based on their reading history and preferences.",
    stack: ["Python", "Machine Learning", "Book APIs"],
  },
  {
    title: "Smart Home Security System",
    description:
      "Create a smart home security system that uses sensors and AI to detect and prevent intrusions.",
    stack: ["IoT Devices", "Cloud Platform", "Mobile App Development"],
  },
  {
    title: "AI-Powered Personalized Fashion Recommendation System",
    description:
      "Develop a system that recommends clothing items to users based on their style preferences and body type.",
    stack: ["Python", "Machine Learning", "Fashion APIs"],
  },

  {
    title: "AI-Powered Personalized Learning Platform for K-12 Students",
    description:
      "Develop a personalized learning platform that adapts to individual student's learning styles and pace, providing customized learning materials and assessments for K-12 students.",
    stack: ["Python", "Machine Learning", "Web Development"],
  },
  {
    title: "Smart Waste Management System using IoT Sensors",
    description:
      "Create a system that uses IoT sensors to monitor waste levels in bins and optimize waste collection routes, improving efficiency and reducing costs.",
    stack: ["IoT Devices", "Cloud Platform", "Data Analytics"],
  },
  {
    title: "AI-Driven Crop Yield Prediction System",
    description:
      "Develop a system that uses machine learning to predict crop yields based on weather data, soil conditions, and other factors, helping farmers make informed decisions.",
    stack: ["Python", "Machine Learning", "Agricultural Data APIs"],
  },
  {
    title: "Mobile App for Wildlife Conservation",
    description:
      "Create a mobile app that allows users to report sightings of endangered species and provides information about conservation efforts.",
    stack: [
      "Mobile App Development",
      "Geolocation Services",
      "Wildlife Databases",
    ],
  },
  {
    title: "Virtual Reality Training Simulator for Pilots",
    description:
      "Develop a VR training simulator that allows pilots to practice various flight scenarios in a realistic and safe environment.",
    stack: [
      "Unity/Unreal Engine",
      "VR Development",
      "Flight Simulation Software",
    ],
  },
  {
    title: "Blockchain-Based Digital Identity Management System",
    description:
      "Create a secure and decentralized system for managing digital identities using blockchain technology.",
    stack: ["Solidity", "Ethereum", "Web3.js"],
  },
  {
    title: "AI-Powered Code Debugging Tool",
    description:
      "Develop a tool that uses AI to automatically identify and fix bugs in code.",
    stack: ["Python", "Machine Learning", "Code Analysis Libraries"],
  },
  {
    title: "Smart Supply Chain Management System using RFID and IoT",
    description:
      "Create a system that uses RFID tags and IoT sensors to track products throughout the supply chain, improving visibility and reducing losses.",
    stack: ["IoT Devices", "RFID Technology", "Cloud Platform"],
  },
  {
    title: "Mobile App for Learning a Musical Instrument",
    description:
      "Develop a mobile app that teaches users how to play a musical instrument through interactive lessons and exercises.",
    stack: [
      "Mobile App Development",
      "Audio Processing Libraries",
      "Music Education Content",
    ],
  },
  {
    title: "AI-Powered Personalized Travel Assistant",
    description:
      "Build a travel assistant that uses AI to personalize travel recommendations and itineraries based on user preferences and budget.",
    stack: [
      "Natural Language Processing",
      "Travel APIs",
      "Mobile App Development",
    ],
  },
  {
    title: "Smart Home Security System with Facial Recognition",
    description:
      "Create a smart home security system that uses facial recognition to identify residents and visitors, enhancing security and convenience.",
    stack: ["IoT Devices", "Computer Vision", "Cloud Platform"],
  },
  {
    title: "Personalized Nutrition Recommendation System",
    description:
      "Develop a system that recommends personalized nutrition plans based on user's dietary needs, health conditions, and fitness goals.",
    stack: ["Python", "Machine Learning", "Nutrition Databases"],
  },
  {
    title: "Real-Time Disaster Monitoring and Alert System",
    description:
      "Create a system that monitors various data sources (e.g., weather data, seismic activity) to detect and alert users about potential disasters.",
    stack: ["Data Analytics", "Mapping APIs", "Mobile App Development"],
  },
  {
    title: "AI-Powered Personalized Fashion Stylist",
    description:
      "Develop a system that recommends clothing items and outfits to users based on their style preferences and body type.",
    stack: ["Python", "Machine Learning", "Fashion APIs"],
  },
  {
    title: "Smart Irrigation System for Agriculture",
    description:
      "Create a system that uses sensors and AI to optimize irrigation schedules for crops, conserving water and improving yields.",
    stack: ["IoT Devices", "Agricultural Data", "Cloud Platform"],
  },
  {
    title: "Mobile App for Community-Based Healthcare",
    description:
      "Develop a mobile app that connects patients with healthcare providers in their community, facilitating access to care and promoting preventative health.",
    stack: [
      "Mobile App Development",
      "Healthcare APIs",
      "Geolocation Services",
    ],
  },
  {
    title: "AI-Powered Personalized Language Tutor",
    description:
      "Build a language tutor that uses AI to personalize language lessons and exercises based on user's progress and learning style.",
    stack: [
      "Natural Language Processing",
      "Language Learning APIs",
      "Web Development",
    ],
  },
  {
    title: "Smart Parking Management System for Cities",
    description:
      "Create a system that uses sensors and data analytics to optimize parking availability in cities, reducing congestion and improving parking efficiency.",
    stack: ["IoT Devices", "Data Analytics", "Cloud Platform"],
  },
  {
    title: "Personalized Fitness Tracker with AI Coaching",
    description:
      "Develop a fitness tracker that provides personalized workout plans and coaching based on user's fitness data and goals.",
    stack: [
      "Wearable Technology",
      "Machine Learning",
      "Mobile App Development",
    ],
  },
  {
    title: "AI-Powered Personalized Music Generation Tool",
    description:
      "Develop a tool that uses AI to generate original music in various styles based on user preferences.",
    stack: ["Python", "Machine Learning", "Music Libraries"],
  },
  {
    title: "Smart Home Energy Management System with Predictive Analytics",
    description:
      "Create a smart home energy management system that uses predictive analytics to anticipate energy usage and optimize energy consumption.",
    stack: ["IoT Devices", "Machine Learning", "Cloud Platform"],
  },
  {
    title: "Mobile App for Local Business Discovery and Promotion",
    description:
      "Develop a mobile app that helps users discover local businesses and provides businesses with tools to promote their products and services.",
    stack: ["Mobile App Development", "Geolocation Services", "Business APIs"],
  },
  {
    title:
      "AI-Powered Personalized Book Recommendation System with Sentiment Analysis",
    description:
      "Build a book recommendation system that uses sentiment analysis of book reviews to personalize book recommendations.",
    stack: ["Python", "Machine Learning", "Book APIs"],
  },
  {
    title: "Smart Greenhouse Management System with Remote Monitoring",
    description:
      "Create a smart greenhouse management system that allows users to remotely monitor and control greenhouse conditions.",
    stack: ["IoT Devices", "Cloud Platform", "Mobile App Development"],
  },
  {
    title: "Mobile App for Community Event Organization and Management",
    description:
      "Develop a mobile app that helps communities organize and manage local events.",
    stack: ["Mobile App Development", "Event APIs", "Social Media Integration"],
  },
  {
    title: "AI-Powered Personalized Fashion Stylist with Virtual Try-On",
    description:
      "Develop a fashion stylist that uses AI and virtual try-on technology to recommend clothing items and outfits.",
    stack: ["Python", "Machine Learning", "Fashion APIs", "Computer Vision"],
  },
  {
    title: "Smart Agriculture Monitoring System with Drone Imagery Analysis",
    description:
      "Create a smart agriculture monitoring system that uses drone imagery and AI to analyze crop health and soil conditions.",
    stack: ["Drone Technology", "Computer Vision", "Agricultural Data"],
  },
  {
    title: "Mobile App for Language Exchange and Cultural Exchange",
    description:
      "Develop a mobile app that connects people who want to learn different languages and exchange cultures.",
    stack: [
      "Mobile App Development",
      "Language Learning APIs",
      "Social Media Integration",
    ],
  },
  {
    title: "AI-Powered Personalized Fitness App with Virtual Reality Workouts",
    description:
      "Develop a fitness app that uses AI and virtual reality to provide personalized workout plans and immersive workout experiences.",
    stack: [
      "Python",
      "Machine Learning",
      "Mobile App Development",
      "VR Development",
    ],
  },
  {
    title: "Smart Traffic Management System with Real-Time Incident Detection",
    description:
      "Design a smart traffic management system that uses real-time data and AI to detect traffic incidents and automatically adjust traffic flow.",
    stack: ["Python", "Traffic Simulation Software", "Data Analytics"],
  },
  {
    title: "Early Wildfire Detection System using Satellite Imagery and AI",
    description:
      "Create a system that uses satellite imagery and AI to detect wildfires in their early stages, allowing for rapid response and minimizing damage.",
    stack: ["Satellite Data", "Computer Vision", "Cloud Platform"],
  },
  {
    title: "AI-Driven Personalized News Aggregator with Fake News Detection",
    description:
      "Develop a news aggregator that uses AI to personalize news feeds and detect fake news articles.",
    stack: ["Python", "Natural Language Processing", "Web Development"],
  },

  {
    title: "Serverless Microservices Architecture for E-commerce Platform",
    description:
      "Design and implement a serverless microservices architecture for an e-commerce platform, focusing on scalability, resilience, and cost-effectiveness.",
    stack: [
      "AWS Lambda/Azure Functions/Google Cloud Functions",
      "API Gateway",
      "NoSQL Database",
      "CI/CD",
    ],
  },
  {
    title: "Containerized Deployment and Orchestration for Web Application",
    description:
      "Implement a containerized deployment and orchestration strategy for a web application using Docker and Kubernetes, emphasizing automation and portability.",
    stack: ["Docker", "Kubernetes", "CI/CD", "Cloud Platform (AWS/Azure/GCP)"],
  },
  {
    title: "DevOps Pipeline Automation for Cloud-Native Application",
    description:
      "Automate the entire DevOps pipeline for a cloud-native application, including build, test, deploy, and monitor stages, using tools like Jenkins and GitLab CI.",
    stack: [
      "Jenkins/GitLab CI",
      "Docker",
      "Kubernetes",
      "Cloud Platform",
      "Monitoring Tools",
    ],
  },
  {
    title: "Infrastructure as Code (IaC) for Cloud Infrastructure Management",
    description:
      "Manage cloud infrastructure using Infrastructure as Code (IaC) principles and tools like Terraform or CloudFormation, ensuring consistency and repeatability.",
    stack: [
      "Terraform/CloudFormation",
      "AWS/Azure/GCP",
      "Configuration Management Tools",
    ],
  },
  {
    title: "API-First Design and Development for Mobile App Backend",
    description:
      "Design and develop an API-first backend for a mobile app using RESTful principles and API documentation tools like Swagger or OpenAPI.",
    stack: [
      "Node.js/Python (Flask/Django)",
      "API Gateway",
      "Database (SQL/NoSQL)",
      "Swagger/OpenAPI",
    ],
  },
  {
    title: "Real-time Data Streaming and Analytics Platform",
    description:
      "Build a platform for real-time data streaming and analytics using technologies like Apache Kafka, Spark Streaming, and Elasticsearch.",
    stack: [
      "Apache Kafka",
      "Spark Streaming",
      "Elasticsearch",
      "Data Visualization Tools",
    ],
  },
  {
    title: "Machine Learning Model Deployment and Monitoring",
    description:
      "Deploy and monitor machine learning models in a production environment using tools like TensorFlow Serving or SageMaker, focusing on performance and scalability.",
    stack: [
      "TensorFlow Serving/SageMaker",
      "Docker",
      "Kubernetes",
      "Monitoring Tools",
    ],
  },
  {
    title: "Cybersecurity Vulnerability Scanning and Penetration Testing",
    description:
      "Conduct vulnerability scanning and penetration testing on a web application or network infrastructure to identify and mitigate security risks.",
    stack: ["Nmap", "Metasploit", "Burp Suite", "OWASP ZAP"],
  },
  {
    title: "Secure Software Development Lifecycle (SSDLC) Implementation",
    description:
      "Implement a Secure Software Development Lifecycle (SSDLC) process for a software project, integrating security practices into every stage of development.",
    stack: [
      "SAST/DAST Tools",
      "Security Testing Frameworks",
      "Vulnerability Management Tools",
    ],
  },
  {
    title: "Blockchain-Based Supply Chain Tracking System with IoT Integration",
    description:
      "Develop a blockchain-based supply chain tracking system that integrates with IoT devices to provide real-time visibility and provenance tracking.",
    stack: [
      "Hyperledger Fabric/Ethereum",
      "IoT Devices",
      "Smart Contracts",
      "Data Analytics",
    ],
  },
  {
    title: "Decentralized Application (DApp) Development on Ethereum",
    description:
      "Develop a decentralized application (DApp) on the Ethereum blockchain using Solidity and Web3.js.",
    stack: ["Solidity", "Ethereum", "Web3.js", "Truffle/Hardhat"],
  },
  {
    title: "Cloud Security Posture Management (CSPM) Implementation",
    description:
      "Implement a Cloud Security Posture Management (CSPM) solution to monitor and improve the security posture of cloud infrastructure.",
    stack: [
      "Cloud Provider Security Tools (AWS Security Hub, Azure Security Center, GCP Security Command Center)",
      "CSPM Tools",
    ],
  },
  {
    title: "Zero Trust Security Architecture Implementation",
    description:
      "Implement a Zero Trust security architecture for a network or application, focusing on least privilege access and continuous authentication.",
    stack: [
      "Identity and Access Management (IAM) Tools",
      "Microsegmentation Tools",
      "Network Security Tools",
    ],
  },
  {
    title: "Automated Security Testing for Web Applications",
    description:
      "Automate security testing for web applications using tools like OWASP ZAP and Selenium, integrating security testing into the CI/CD pipeline.",
    stack: ["OWASP ZAP", "Selenium", "CI/CD Tools"],
  },
  {
    title: "Data Lake Implementation and Management on Cloud Platform",
    description:
      "Implement and manage a data lake on a cloud platform using services like AWS S3, Azure Blob Storage, or Google Cloud Storage.",
    stack: [
      "AWS S3/Azure Blob Storage/Google Cloud Storage",
      "Data Processing Tools (Spark, Hadoop)",
      "Data Governance Tools",
    ],
  },
  {
    title: "Big Data Analytics and Visualization for Business Insights",
    description:
      "Analyze and visualize large datasets using big data technologies like Hadoop, Spark, and Tableau to generate business insights.",
    stack: ["Hadoop/Spark", "Tableau/Power BI", "Data Visualization Libraries"],
  },
  {
    title: "Real-time IoT Data Processing and Analysis",
    description:
      "Process and analyze real-time data from IoT devices using technologies like Apache Kafka, Flink, and Timeseries Databases.",
    stack: [
      "Apache Kafka/Flink",
      "Timeseries Databases (InfluxDB, Cassandra)",
      "Data Visualization Tools",
    ],
  },
  {
    title: "AI-Powered Chatbot for IT Support",
    description:
      "Develop an AI-powered chatbot that can handle IT support inquiries, resolving common issues and escalating complex ones to human agents.",
    stack: [
      "Natural Language Processing",
      "Chatbot Framework",
      "IT Service Management Tools",
    ],
  },
  {
    title: "Automated Incident Response System",
    description:
      "Develop a system that automatically responds to security incidents, using tools and scripts to contain threats and minimize damage.",
    stack: [
      "Security Information and Event Management (SIEM) Tools",
      "SOAR (Security Orchestration, Automation, and Response) Tools",
      "Scripting Languages (Python, Bash)",
    ],
  },
  {
    title: "Mobile App for IT Service Request Management",
    description:
      "Develop a mobile app that allows users to submit IT service requests, track their status, and receive updates.",
    stack: [
      "Mobile App Development (React Native, Flutter)",
      "Backend API",
      "IT Service Management Integration",
    ],
  },
  {
    title: "Cloud-Native Application Development with Microservices",
    description:
      "Develop a cloud-native application using a microservices architecture, focusing on scalability, resilience, and independent deployments.",
    stack: [
      "Microservices Frameworks (Spring Boot, Node.js)",
      "Docker",
      "Kubernetes",
      "API Gateway",
    ],
  },
  {
    title:
      "Serverless Application Development with Functions as a Service (FaaS)",
    description:
      "Develop a serverless application using Functions as a Service (FaaS) platforms like AWS Lambda, Azure Functions, or Google Cloud Functions.",
    stack: [
      "AWS Lambda/Azure Functions/Google Cloud Functions",
      "API Gateway",
      "Serverless Framework",
    ],
  },
  {
    title: "AI-Powered Network Traffic Analysis for Anomaly Detection",
    description:
      "Develop a system that uses AI to analyze network traffic and detect anomalies that could indicate security threats.",
    stack: [
      "Network Traffic Analysis Tools",
      "Machine Learning Libraries",
      "Data Visualization Tools",
    ],
  },
  {
    title: "Data Governance and Metadata Management Platform",
    description:
      "Implement a platform for data governance and metadata management, ensuring data quality, compliance, and discoverability.",
    stack: [
      "Data Governance Tools",
      "Metadata Management Tools",
      "Data Catalog Tools",
    ],
  },
  {
    title: "API Security Testing and Implementation",
    description:
      "Conduct security testing on APIs and implement security measures to protect against common API vulnerabilities.",
    stack: ["API Security Testing Tools", "OAuth 2.0", "JWT"],
  },
  {
    title: "Cloud Cost Optimization and Management",
    description:
      "Analyze cloud spending and implement strategies to optimize cloud costs, using cloud cost management tools.",
    stack: ["Cloud Cost Management Tools", "Cloud Provider Cost Explorer"],
  },
  {
    title: "Multi-Cloud Management Platform",
    description:
      "Develop a platform for managing resources across multiple cloud providers (AWS, Azure, GCP) from a single interface.",
    stack: ["Cloud Management Platforms", "API Integrations"],
  },
  // Add as many more as you like!
];

function generateCapstone() {
  const randomIndex = Math.floor(Math.random() * capstoneIdeas.length);
  const selectedCapstone = capstoneIdeas[randomIndex];

  let displayHTML = `<h2>${selectedCapstone.title}</h2>`;
  displayHTML += `<p>${selectedCapstone.description}</p>`;
  displayHTML += "<h3>Technology Stack</h3><ul>";
  selectedCapstone.stack.forEach((tech) => {
    displayHTML += `<li>${tech}</li>`;
  });
  displayHTML += "</ul>";

  capstoneDisplay.innerHTML = displayHTML;
}
