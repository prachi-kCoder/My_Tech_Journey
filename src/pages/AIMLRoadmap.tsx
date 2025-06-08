
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';
import Navigation from '../components/Navigation';

const AIMLRoadmap = () => {
  const learningPath = [
    {
      phase: "Mathematical Foundations",
      duration: "6-8 weeks",
      topics: [
        "Linear Algebra (Vectors, Matrices, Eigenvalues)",
        "Calculus (Derivatives, Gradients, Chain Rule)",
        "Statistics & Probability Theory",
        "Discrete Mathematics"
      ],
      resources: [
        "Khan Academy Linear Algebra",
        "3Blue1Brown Essence of Linear Algebra",
        "MIT 18.06 Linear Algebra"
      ]
    },
    {
      phase: "Programming for AI/ML",
      duration: "4-6 weeks",
      topics: [
        "Python for Data Science",
        "NumPy & Pandas",
        "Matplotlib & Seaborn",
        "Jupyter Notebooks"
      ],
      resources: [
        "Python Data Science Handbook",
        "Kaggle Learn Python",
        "DataCamp Python Track"
      ]
    },
    {
      phase: "Machine Learning Fundamentals",
      duration: "8-10 weeks",
      topics: [
        "Supervised Learning (Regression, Classification)",
        "Unsupervised Learning (Clustering, Dimensionality Reduction)",
        "Model Evaluation & Validation",
        "Feature Engineering"
      ],
      resources: [
        "Andrew Ng ML Course (Coursera)",
        "Hands-On ML by Aurélien Géron",
        "Scikit-learn Documentation"
      ]
    },
    {
      phase: "Deep Learning",
      duration: "10-12 weeks",
      topics: [
        "Neural Networks Fundamentals",
        "Convolutional Neural Networks (CNNs)",
        "Recurrent Neural Networks (RNNs)",
        "Transformers & Attention Mechanisms"
      ],
      resources: [
        "Deep Learning by Ian Goodfellow",
        "Fast.ai Practical Deep Learning",
        "CS231n Stanford Course"
      ]
    },
    {
      phase: "Specialized AI Domains",
      duration: "12-16 weeks",
      topics: [
        "Natural Language Processing",
        "Computer Vision",
        "Reinforcement Learning",
        "Generative AI & LLMs"
      ],
      resources: [
        "Hugging Face Transformers",
        "OpenAI GPT Documentation",
        "CS224n NLP Course"
      ]
    }
  ];

  const practicalProjects = [
    {
      name: "House Price Prediction",
      difficulty: "Beginner",
      domain: "Regression",
      skills: ["Data preprocessing", "Linear regression", "Model evaluation"],
      dataset: "Boston Housing Dataset"
    },
    {
      name: "Image Classification",
      difficulty: "Intermediate",
      domain: "Computer Vision",
      skills: ["CNNs", "Transfer learning", "Data augmentation"],
      dataset: "CIFAR-10"
    },
    {
      name: "Sentiment Analysis",
      difficulty: "Intermediate",
      domain: "NLP",
      skills: ["Text preprocessing", "RNNs", "Word embeddings"],
      dataset: "IMDB Movie Reviews"
    },
    {
      name: "Recommendation System",
      difficulty: "Advanced",
      domain: "ML Systems",
      skills: ["Collaborative filtering", "Matrix factorization", "Deep learning"],
      dataset: "MovieLens Dataset"
    },
    {
      name: "Chatbot Development",
      difficulty: "Advanced",
      domain: "NLP/AI",
      skills: ["Transformers", "Fine-tuning", "API integration"],
      dataset: "Custom conversational data"
    },
    {
      name: "Object Detection",
      difficulty: "Expert",
      domain: "Computer Vision",
      skills: ["YOLO", "R-CNN", "Real-time processing"],
      dataset: "COCO Dataset"
    }
  ];

  const toolsFrameworks = {
    python: ["Python", "Jupyter", "Google Colab"],
    ml: ["Scikit-learn", "XGBoost", "LightGBM"],
    dl: ["TensorFlow", "PyTorch", "Keras"],
    nlp: ["NLTK", "spaCy", "Transformers"],
    cv: ["OpenCV", "PIL", "Albumentations"],
    deployment: ["Docker", "FastAPI", "AWS SageMaker", "MLflow"]
  };

  const careerPaths = [
    {
      title: "Machine Learning Engineer",
      focus: "Production ML systems, MLOps, scalable algorithms",
      skills: ["Python", "TensorFlow/PyTorch", "Cloud platforms", "Docker"]
    },
    {
      title: "Data Scientist",
      focus: "Data analysis, statistical modeling, business insights",
      skills: ["Python/R", "SQL", "Tableau", "Statistical analysis"]
    },
    {
      title: "AI Research Scientist",
      focus: "Novel algorithms, research papers, cutting-edge AI",
      skills: ["Deep learning", "Mathematics", "Research methodology", "Academic writing"]
    },
    {
      title: "Computer Vision Engineer",
      focus: "Image processing, visual recognition, autonomous systems",
      skills: ["OpenCV", "CNNs", "Image processing", "Real-time systems"]
    }
  ];

  return (
    <div className="min-h-screen bg-slate-900 text-foreground">
      <Navigation />
      
      <div className="pt-24 pb-16">
        <div className="container mx-auto px-4 sm:px-6">
          {/* Header */}
          <div className="mb-12">
            <Link to="/mentorship" className="violet-accent hover:underline mb-4 inline-block">
              ← Back to Mentorship Hub
            </Link>
            <h1 className="text-4xl sm:text-5xl font-poppins font-bold mb-4">
              <span className="bg-gradient-to-r from-violet-400 to-purple-500 bg-clip-text text-transparent">
                AI & Machine Learning Roadmap
              </span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl">
              Comprehensive guide to master Artificial Intelligence and Machine Learning, 
              from mathematical foundations to building production-ready AI systems.
            </p>
          </div>

          {/* Learning Path */}
          <div className="mb-16">
            <h2 className="text-2xl sm:text-3xl font-poppins font-bold mb-8">Learning Path</h2>
            <div className="space-y-6">
              {learningPath.map((phase, index) => (
                <div key={index} className="neo-card p-6">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                    <h3 className="text-xl font-poppins font-semibold text-violet-400">
                      {index + 1}. {phase.phase}
                    </h3>
                    <span className="text-sm text-sky-400 font-medium">
                      {phase.duration}
                    </span>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-emerald-500 mb-3">Core Topics</h4>
                      <ul className="space-y-2">
                        {phase.topics.map((topic, idx) => (
                          <li key={idx} className="text-sm text-muted-foreground flex items-start">
                            <span className="text-violet-400 mr-2">•</span>
                            {topic}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-semibold text-yellow-400 mb-3">Recommended Resources</h4>
                      <ul className="space-y-2">
                        {phase.resources.map((resource, idx) => (
                          <li key={idx} className="text-sm text-muted-foreground flex items-start">
                            <span className="text-violet-400 mr-2">📚</span>
                            {resource}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Practical Projects */}
          <div className="mb-16">
            <h2 className="text-2xl sm:text-3xl font-poppins font-bold mb-8">Hands-On Projects</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {practicalProjects.map((project, index) => (
                <div key={index} className="glass-card p-6 hover:scale-105 transition-transform duration-300">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-lg font-poppins font-semibold text-foreground">
                      {project.name}
                    </h3>
                    <div className={`px-2 py-1 rounded text-xs font-medium ${
                      project.difficulty === 'Beginner' ? 'bg-emerald-500/20 text-emerald-400' :
                      project.difficulty === 'Intermediate' ? 'bg-yellow-500/20 text-yellow-400' :
                      project.difficulty === 'Advanced' ? 'bg-orange-500/20 text-orange-400' :
                      'bg-red-500/20 text-red-400'
                    }`}>
                      {project.difficulty}
                    </div>
                  </div>
                  
                  <div className="mb-3">
                    <span className="bg-violet-500/20 text-violet-400 px-2 py-1 rounded text-xs">
                      {project.domain}
                    </span>
                  </div>
                  
                  <div className="mb-4">
                    <p className="text-xs text-muted-foreground mb-2">Skills:</p>
                    <div className="flex flex-wrap gap-1">
                      {project.skills.map((skill, idx) => (
                        <span key={idx} className="bg-sky-500/20 text-sky-400 px-2 py-1 rounded text-xs">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <p className="text-xs text-muted-foreground">
                    <span className="text-emerald-500">Dataset:</span> {project.dataset}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Tools & Frameworks */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <div className="glass-card p-6">
              <h3 className="text-lg font-poppins font-semibold mb-4 text-violet-400">
                Core Tools
              </h3>
              <div className="space-y-3">
                <div>
                  <p className="text-sm text-muted-foreground mb-2">Environment:</p>
                  <div className="flex flex-wrap gap-2">
                    {toolsFrameworks.python.map((tool, idx) => (
                      <span key={idx} className="bg-violet-500/20 text-violet-400 px-2 py-1 rounded text-xs">
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-2">Machine Learning:</p>
                  <div className="flex flex-wrap gap-2">
                    {toolsFrameworks.ml.map((tool, idx) => (
                      <span key={idx} className="bg-emerald-500/20 text-emerald-400 px-2 py-1 rounded text-xs">
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="glass-card p-6">
              <h3 className="text-lg font-poppins font-semibold mb-4 text-sky-400">
                Deep Learning & NLP
              </h3>
              <div className="space-y-3">
                <div>
                  <p className="text-sm text-muted-foreground mb-2">Deep Learning:</p>
                  <div className="flex flex-wrap gap-2">
                    {toolsFrameworks.dl.map((tool, idx) => (
                      <span key={idx} className="bg-sky-500/20 text-sky-400 px-2 py-1 rounded text-xs">
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-2">NLP:</p>
                  <div className="flex flex-wrap gap-2">
                    {toolsFrameworks.nlp.map((tool, idx) => (
                      <span key={idx} className="bg-yellow-500/20 text-yellow-400 px-2 py-1 rounded text-xs">
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="glass-card p-6">
              <h3 className="text-lg font-poppins font-semibold mb-4 text-emerald-400">
                CV & Deployment
              </h3>
              <div className="space-y-3">
                <div>
                  <p className="text-sm text-muted-foreground mb-2">Computer Vision:</p>
                  <div className="flex flex-wrap gap-2">
                    {toolsFrameworks.cv.map((tool, idx) => (
                      <span key={idx} className="bg-emerald-500/20 text-emerald-400 px-2 py-1 rounded text-xs">
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-2">Deployment:</p>
                  <div className="flex flex-wrap gap-2">
                    {toolsFrameworks.deployment.map((tool, idx) => (
                      <span key={idx} className="bg-orange-500/20 text-orange-400 px-2 py-1 rounded text-xs">
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Career Paths */}
          <div className="mb-16">
            <h2 className="text-2xl sm:text-3xl font-poppins font-bold mb-8">Career Paths</h2>
            <div className="grid sm:grid-cols-2 gap-6">
              {careerPaths.map((career, index) => (
                <div key={index} className="neo-card p-6">
                  <h3 className="text-xl font-poppins font-semibold mb-2 text-violet-400">
                    {career.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                    {career.focus}
                  </p>
                  <div>
                    <p className="text-sm text-emerald-500 mb-2">Key Skills:</p>
                    <div className="flex flex-wrap gap-2">
                      {career.skills.map((skill, idx) => (
                        <span key={idx} className="bg-sky-500/20 text-sky-400 px-2 py-1 rounded text-xs">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="text-center">
            <div className="glass-card p-8 max-w-2xl mx-auto">
              <h3 className="text-2xl font-poppins font-semibold mb-4 violet-accent">
                Ready to Dive into AI & ML?
              </h3>
              <p className="text-muted-foreground mb-6">
                Get expert guidance on mathematics, programming, and building real AI projects.
              </p>
              <Button size="lg" className="bg-gradient-to-r from-violet-400 to-purple-500 hover:from-violet-500 hover:to-purple-600 text-slate-900 font-medium">
                Start AI/ML Mentorship
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIMLRoadmap;
