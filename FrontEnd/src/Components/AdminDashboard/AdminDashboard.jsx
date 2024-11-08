import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

// Sample Data
const departments = [
    {
        name: "ELECTRICAL ENGINEERING",
        trainers: ["NYAKAKO ELAINE",
                    "NALWENGE EMMANUEL", 
                    "LENOX BARAKA",
                    "KELVIN WANJALA",
                   "JOSHUA NZIOKA",
                    "ROPHUS MWAKIO", 
                    "DZOMBO",
                    "ABIGAEL LEWA",
                    "NOAH KIPLAGAT", 
                    "VICTOR KIPKIRUI",
                    "MWEMA"],
        courses: [
            {
                name: "ELECTRICAL INSTALLATION",
                units: ["DIGITAL LITERACY",
                        "WORKPLACE ESSENTIAL SKILLS",
                        "ENGINEERING MATHEMATICS",
                        "WORKSHOP TECHNOLOGY",
                        "ELECTRICAL PRINCIPLES",
                        "TECHNICAL DRAWING",
                        "PERFORM ELECTRICAL INSTALLATION",
                        "TESTING OF ELECTICAL INSTALLATION",
                        "ELECTRICAL INSTALLATION BREAKDOWN MAINTENANCE",
                    ],
                levels: [4],
            },
        
            {
                name: "ELECTRICAL OPERATION",
                units: ["WORK ETHICS AND PRACTICES",
                        "DIGITAL LITERACY",
                        "ENGINEERING MATHEMATICS",
                        "ELECTRICAL PRINCIPLES",
                        "TECHNICAL DRAWING",
                        "PERFORM ELECTRICAL INSTALLATION",
                        "ELECTRICAL TRANSMISSION POWER LINES",
                        "ELECTRICAL MACHINE INSTALLATION",
                        "COMMUNICATION SKILLS",
                        "ENTREPRENEURAL SKILLS",
                        "WORKSHOP TECHNOLOGY",
                        "ELECTRONICS",
                        "SECURITY SYSTEM INSTALLATION",
                        "SOLAR SYSTEM INSTALLATION",
                        "ELECTRICAL BREAKDOWN MAINTENANCE",
                    ],
                levels: [5],
            },
            
            {
                name: "ELECTRICAL ENGINEERING",
                units: ["WORK ETHICS AND PRACTICES",
                        "DIGITAL LITERACY",
                        "ENGINEERING MATHEMATICS",
                        "ELECTRIAL PRINCIPLES",
                        "ELECTRICAL INSTALLATION",
                        "ELECTRICAL TRANSMISION POWER LINES",
                        "POWER GENERATION",
                        "ELECTRICAL MACHINE INSTALLATION",
                        "COMMUNICATION SKILLS",
                        "ENTREPRENEURAL SKILLS",
                        "ENGINEERING MATHEMATICS",
                        "TECHNICAL DRAWING",
                        "WORKSHP TECHNOLOGY",
                        "ELECTRONICS",
                        "ELECTRICAL MACHINE AUTOMATION",
                        "ELECTRICAL PROJECT MANAGEMENT",
                        "SECURITY SYSTEMS INSTALLATION",
                        "SOLAR INSTALLATION",
                        "ELECTRICAL EQUIPMENT AND SYSTEM MAINTENANCE",

],
                levels: [6],
            },
            {
                name: "ELECTRONICS TECHNOLOGY",
                units: ["WORK ETHICS AND PRACTICES",
                        "DIGITAL LITERACY",
                        "ENGINEERING MATHEMATICS",
                        "ELECTRONICS",
                        "ELECTRICAL PRINCIPLES",
                        "TECHNICAL DRAWING",
                        "ELECTRICAL INSTALLATION",
                        "POWER SUPPLY SYSTEMS",
                        "COMMUNICATION SKILLS",
                        "ENTREPRENEURAL SKILLS",
                        "WORKSHOP TECHNOLOGY",
                        "ELECTRICAL MACHINE CONTROL",
                        "INDUSTRIAL AUTOMATION",
                        "AUTOMATION AND RADIO FREQUENCY SYSTEM MAINTENANCE",
                        "ELECTRICAL INSTRUMENTATION",
                        "PERFORM ELECTRICAL INSTALLATION",
                        "POWER SUPPLY SYSTEM",
                        "RADIO FREQUENCY SYSTEM MAINTENANCE",
                       ],
                levels: [5,6],
            },
           
        ],
    },
     {
        name: "AUTOMOTIVE ENGINEERING",
        trainers: ["DAVID OMONDI ONDITI",
                    "OMONDI JAMES", 
                    "EVANS KIPLANGAT",
                    "VICTORINE CHERONO"],
        courses: [
            {
                name: "AUTOMOTIVE ENGINEERING",
                 units: ["ENTREPRENEURSHIP EDUCATION",
                        "TECHNICAL DRAWING",
                        "APPLIED SCIENCE",
                        "WORKSHOP TECHNOLOGY",
                        "ELECTRICAL PRINCIPLES",
                        "VEHICLE TECHNOLOGY",
                        "VEHICLE BODY WORK",
                        "LIFE SKILLS",
                        "TECHNICAL DRAWING II",
                        "MATHEMATICS II",
                        "VEHICLE ELECTRICAL AND ELECTRONIC SYSTEMS",
                        "VEHICLE ENGINES TECHNOLOGY",
                        "DRIVING SKILLS",
                        "WORKSHOP ORGANISATION AND MANAGEMENT",
                        "BUSINESS PLAN",
                        "TRADE PROJECT",
                        "MATHEMATICS ",
                        "SCIENCE",
                        "GENERAL STUDIES" ,
                        "APPLIED GEOMETRY" ,
                        "MOTOR VEHICLE MECHANICS TRADE THEORY",
                        "TRADE PRACTICE",
                        "DEMONSTRATE OCCUPATIONAL SAFETY AND HEALTH PRACTICES",
                        "PREPARE AND INTERPRET TECHNICAL DRAWINGS",
                        "APPLY ENGINEERING MATHEMATICS",
                        "SERVICE VEHICLE AND REPAIR VEHICLE ENGINE COMPONENTS",
                        "SERVICE VEHICLE FUEL SYSTEM",
                        "SERVICE VEHICLE TRANSMISSION SYSTEMS",
                        "SERVICE VEHICLE STEERING SYSTEM",
                        "SERVICE VEHICLE SUSPENSION SYSTEM",
                        "SERVICE VEHICLE ELECTRICAL SYSTEMS",
                        "DEMONSTRATE OCCUPATIONAL SAFETY & HEALTH PRACTICES",
                        "PREPARE & INTERPRET TECHNICAL DRAWINGS",
                        "APPLY AUTOMOTIVE ENGINEERING SCIENCE PRINCIPLES",
                        "APPLY WORKSHOP TECHNOLOGY PRINCIPLES",
                        "PERFORM VEHICLE BASIC MAINTENANCE",
                        "SERVICE AND REPAIR VEHICLE ENGINE COMPONENTS",
                        "SERVICE VEHICLE TRANSMISSION SYSTEM",
                        "SERVICE VEHICLE BRAKING SYSTEM",
                        "PERFORM VEHICLE BODY WORKS",
                        "INDUSTRIAL ATTACHMENT",
                        "DEMONSTRATE COMMUNICATION SKILLS" ,
                        "DEMONSTRATE DIGITAL LITERACY",
                        "DEMONSTRATE ENTREPRENEURIAL SKILLS" ,
                        "DEMONSTRATE EMPLOYABILITY SKILLS" ,
                        "DEMONSTRATE ENVIRONMENTAL LITERACY" ,
                        "PREPARE AND INTERPRET GEOMETRY DRAWING",
                        "APPLY BASIC MATHEMATICS",
                        "APPLY BASIC SCIENCE PRINCIPLES",
                        "PERFORM & WORKSHOP TECHNOLOGY APPLICATIONS",
                        "MAINTAIN WORKSHOP TOOLS, EQUIPMENT AND MEASURING DEVICES",
                        "SERVICE AND REPAIR VEHICLE ENGINE",
                        "SERVICE AND REPAIR VEHICLE FUEL SYSTEMS",
                        "SERVICE AND REPAIR VEHICLE STEERING AND SUSPENSION SYSTEMS",
                        "SERVICE VEHICLE BRAKING SYSTEMS", ],
                       
                       
                levels: [4, 5, 6,"Module 1","Module 2","Module 3" ],
            },
        ],
    },
    {
        name: "ICT",
        trainers: ["Mr Kungu","Mr Mwasya", "Mr Duke", "Mr Mugo", "Mr Bungei", "Mr Mwasi"],
        courses: [
            {
                name: "ICT TECHNICIAN",
                units: ["DEMONSTRATE COMMUNICATION SKILLS",
                        "DEMONSTRATE NUMERACY SKILLS",
                        "DEMONSTRATE DIGITAL LITERACY",
                        "DEMONSTRATE ENTREPRENEURIAL SKILLS",
                        "DEMONSTRATE EMPLOYABILITY SKILLS",
                        "DEMONSTRATE ENVIRONMENTAL LITERACY",
                        "DEMONSTRATE OCCUPATIONAL SAFETY AND HEALTH PRACTICES",
                        "USE ICT DEVICES",
                        "INSTALL COMPUTER SOFTWARE",
                        "REPAIR AND MAINTAIN A COMPUTER",
                        "APPLY MICROSOFT OFFICE TOOLS",
                        "USE THE INTERNET",                       
                        "PERFORM COMPUTER NETWORKING",
                        "PERFORM COMPUTER REPAIR AND MAINTENANCE",
                        "MANAGE DATABASE SYSTEM",
                        "DEVELOP COMPUTER PROGRAM",
                        "MANAGE OPERATING SYSTEM",
                        "DEMONSTRATE OCCUPATIONAL SAFETY AND HEALTH PRACTICES",
                        "APPLY BASIC ELECTRONICS",
                        "CONTROL ICT SECURITY THREATS",
                        "PERFORM ICT SYSTEM SUPPORT",
                        "PERFORM WEBSITE DESIGN",
                        "PERFORM MANAGEMENT INFORMATION SYSTEM",
                        "PERFORM GRAPHIC DESIGN",
                        "DEVELOP MOBILE APPLICATION",
                        "PERFORM SYSTEM ANALYSIS AND DESIGN",
],
                levels: [ 5, 6 ],
            },
              {
                name: "ICT ASSISTANCE",
                units: ["DEMONSTRATE COMMUNICATION SKILLS",
                        "DEMONSTRATE NUMERACY SKILLS",
                        "DEMONSTRATE DIGITAL LITERACY",
                        "DEMONSTRATE ENTREPRENEURIAL SKILLS",
                        "DEMONSTRATE EMPLOYABILITY SKILLS",
                        "DEMONSTRATE ENVIRONMENTAL LITERACY",
                        "DEMONSTRATE OCCUPATIONAL SAFETY AND HEALTH PRACTICES",
                        "USE ICT DEVICES",
                        "INSTALL COMPUTER SOFTWARE",
                        "APPLY MICROSOFT OFFICE TOOLS",
                        "USE THE INTERNET",                                          
                        "PERFORM COMPUTER REPAIR AND MAINTENANCE",
                       ],                    
                levels: [4 ],
            },
        ],
    },
    {
        name: "FASHON & DESIGN ",
        trainers: ["NICHOLAS MATHERU",
                    "EXPANILLAR CHITSAKA", 
                    "CAROLINE WAWUDA",
                    "CAROLINE WANJAA"],
        courses: [
            {
                name: "FASHON & DESIGN",
                units: ["INDUSTRIAL ORGANIZATION MANAGEMENT I",
                        "QUALITY CONTROL I",
                        "TEXTILE SCIENCE II THEORY",
                        "CLOTHING CONSTRUCTION II THEORY",
                        "FASHION DESIGN & SKETCHING II",
                        "CUTTING TECHNOLOGY II THEORY",
                        "PATTERN CONSTRUCTION II PRACTICAL",
                        "GRADING TECHNIQUES I",
                        "CLOTHING CONSTRUCTION II PRACTICAL",
                        "CLOTHING CONSTRUCTION III PRACTICAL",
                        "CLOTHING CONSTRUCTION III THEORY",
                        "FASHION MARKETING",
                        "INDUSTRIAL ORGANIZATION MANAGEMENT II",
                        "QUALITY CONTROL II",
                        "PATTERN CONSTRUCTION III AND GRADING TECHNIQUES II PRACTICAL",
                        "BATIK PRACTICAL",
                        "EMBROIDERY PRACTICAL",
                        "GARMENT MAKING PRACTICAL FOR MEN",
                        "GARMENT MAKING PRACTICAL FOR WOMEN",
                        "GARMENT CUTTING THEORY",
                        "GARMENT MAKING THEORY",
                        "PATTERN DRAFTING II AND GRADING I",
                        "COMMUNICATION SKILLS",
                        "OCCUPATIONAL SAFETY AND HEALTH PRACTICES",
                        "SEWING MACHINE OPERATIONS",
                        "GARMENT CONSTRUCTION",
                        "FABRIC AND GARMENTS DECORATION",
                        "DEMONSTRATE NUMERACY SKILLS",
                        "DEMONSTRATE DIGITAL LITERACY",
                        "DEMONSTRATE ENTREPRENEURIAL SKILLS",
                        "DEMONSTRATE EMPLOYABILITY SKILLS",
                        "DEMONSTRATE OCCUPATIONAL SAFETY & HEALTH PRACTICE",
                        "PERFORM SEWING MACHINE OPERATION",
                        "DESIGN AND CONSTRUCT GARMENTS",
                        "DESIGN AND CONSTRUCT ACCESSORIES",
                        "DESIGN AND DECORATE FABRICS",
                        "ENVIRONMENTAL LITERACY",
                        "NUMERACY SKILLS",
                        "DIGITAL LITERACY",
                        "EP",
                        "EMPLOYABILITY SKILLS",
                        "DESIGN AND CONSTRUCT FASHION ACCESSORIES",
                        "MANAGE FASHION STUDIO",
                        "DESIGN AND CONSTRUCT LADIES WEAR",
                        "DESIGN AND CONSTRUCT GENTS WEAR",
                        "DESIGN AND CONSTRUCT CHILDREN WEAR",
                        "DESIGN AND CONSTRUCT UNIFORMS",
                        "DESIGN AND CONSTRUCT SPORTS WEAR",
                        "DESIGN AND CONSTRUCT BRIDAL WEAR",
                        "DESIGN AND CONSTRUCT LINGERIE WEAR",
                        "DESIGN AND CONSTRUCT BAGS",
                        "DESIGN AND CONSTRUCT MILLINERY",
                        "DESIGN AND CONSTRUCT SHOES",],
                levels: [4, 5, 6,"Module 1","Module 2","Module 3" ],
            },
        ],
    },
    {
        name: "BUSINESS STUDIES",
        trainers: ["RIZIKI LUVUNO",
                    "NATHANIEL WANDISHA",
                    "HANNAH MUTEGI",
                    "PETER MWAURA",
                    "SULEIMAN NGEDZO",
                    "FAITH KIOKO",
                    "THOMAS MAUNDA",
                    "MARIAM MWATELA",
                    "ROBERT CHITI"],
        courses: [
            {
                name: "BUSINESS MANAGEMENT",
                units: ["COST ACCOUNTING",
                        "QUANTITATIVE TECHNIQUES",
                        "OFFICE ADMINISTRATION AND MANAGEMENT",
                        "SUPPLY AND TRANSPORT MANAGEMENT",
                        "COMMERCIAL AND ADMINISTRATIVE LAW",
                        "PRINCIPLES AND PRACTICE OF PLANNING",
                        "MANAGERIAL ACCOUNTING",
                        "ORGANIZATION THEORY AND BEHAVIOR",
                        "PRINCIPLES AND PRACTICE MANAGEMENT",
                        "HUMAN RESOURCE MANAGEMENT",
                        "LABOUR AND INDUSTRIAL LAW",
                        "TRADE PROJECT",
                        "FINANCIAL MANAGEMENT",
],
                levels: [4, 5, 6,"Module 1","Module 2","Module 3"],
            },
            {
                name: "HUMAN RESOURSE",
                units: ["DEMONSTRATE COMMUNICATION SKILLS",
                         "DEMONSTRATE NUMERACY SKILLS",
                        "DEMONSTRATE DIGITAL LITERACY",
                        "DEMONSTRATE ENTREPRENEURIAL SKILLS",
                        "DEMONSTRATE EMPLOYABILITY SKILLS",
                       "DEMONSTRATE ENVIRONMENTAL LITERACY",
                       "DEMONSTRATE OCCUPATIONAL SAFETY AND HEALTH PRACTICES ",  
                       "MANAGE ORGANIZATIONAL BEHAVIOUR",
                       "MANAGE HUMAN RESOURCES",
                       "INITIATE EMPLOYEE RESOURCING",
                        "COORDINATE PERFORMANCE MANAGEMENT",
                        "PREPARE HUMAN RESOURCE BUDGETS",
                        "COORDINATE LEARNING AND DEVELOPMENT",
                        "UNDERTAKE BUSINESS COMMUNICATION",
                        "MANAGE EMPLOYEE RELATIONS",
                        "COORDINATE ORGANIZATIONAL DEVELOPMENT",
                        "ENFORCE COMPLIANCE WITH LEGISLATIONS",
                        "MANAGE HUMAN RESOURCE INFORMATION SYSTEM (HRIS)",
                        "UNDERTAKE EMPLOYEE SEPARATION"],
                levels: [4, 5, 6,"Module 1","Module 2","Module 3"],
            },
            {
                name: "SUPPLY CHAIN MANAGEMENT",
                units: ["105 COMMUNICATION SKILLS",
                        "LIFE SKILLS",
                        "INFORMATION COMMUNICATION TECHNOLOGY",
                        "ENTREPRENEURSHIP",
                        "WAREHOUSING OPERATIONS AND STOCK CONTROL",
                        "BUSINESS CALCULATIONS AND STATISTICS",
                        "COMMERCE",
                        "FINANCIAL ACCOUNTING",              
                        "OFFICE ORGANIZATION",
                        "SALES AND MARKETING",
                        "ECONOMICS",
                        "BUSINESS FINANCE",
                        "BUSINESS LAW",
                        "HUMAN & PUBLIC RELATIONS",
                        "RESEARCH METHODS",
                    ],
                levels: [4, 5, 6,"Module 1","Module 2","Module 3"],
            },
            {
                name: "TOURISM",
                units: ["PRINCIPLES AND PRACTICES OF MANAGEMENT",
                        "TOURISM POLICY & PLANNING",
                        "TOURISM PRODUCT DEVELOPMENT",
                        "ECOTOURISM",
                        "TOURISM MARKETING",
                        "FOREIGN LANGUAGE",
                        "PUBLIC RELATIONS",
                        "RESEARCH PROJECT"],
                levels: [4, 5, 6,"Module 1","Module 2","Module 3"],
            },
            {
                name: "SOCIAL WORK & COMMUNITY DEVELOPMENT",
                units: ["INTRODUCTION TO COMMUNITY DEVELOPMENT",
                        "COMMUNITY HEALTH",
                        "HUMAN GROWTH AND DEVELOPMENT",
                        "ADMINISTRATION AND MANAGEMENT",
                        "HISTORY AND GOVERNMENT",
                        "BUSINESS PLAN",
                        "RESOURCE MOBILIZATION AND FUNDRAISING",
                        "PROJECT MANAGEMENT",
                        "HIV AND AIDS AND OTHER PANDEMICS",
                        "STATISTICS",
                        "LEGAL ASPECTS OF SOCIAL DEVELOPMENT WORK",
                        "RESOURCE MANAGEMENT",
                        "TRANSFORMATION AND SOCIAL MOVEMENTS",
                        "COMMUNITY DEVELOPMENT METHODOLOGIES",
                        "MANAGEMENT OF COMMUNITY CONCERNS",
                        "COMMUNITY LEADERSHIP",
                        "GENDER AND DEVELOPMENT",
                        "COMMUNICATION SKILLS",
                        "NUMERACY SKILLS",
                        "DIGITAL LITERACY",
                        "ENTREPRENEURSHIP SKILLS",
                        "EMPLOYABILITY SKILLS",
                        "ENVIRONMENTAL LITERACY",
                        "OCCUPATIONAL SAFETY & HEALTH PRACTICES",
                        "SOCIAL RESEARCH WORKS",
                        "PSYCHO-SOCIAL SUPPORT",
                        "SOCIAL POLICY IMPLEMENTATION",
                        "PROJECT RESOURCES MANAGEMENT",
                        "COMMUNITY AWARENESS ACTIVITIES",
                        "PERFORMANCE OF HOME-BASED CARE AND SUPPORT",
                        "CHILD WELFARE PROGRAMMES",
                        "COMMUNITY CRISIS AND DISASTER SENSITIZATION PROGRAM",
                        "MANAGEMENT OF COMMUNITY RESOURCES",
                        "COMMUNITY EMPOWERMENT",
                        "COORDINATION OF COMMUNITY PROJECTS",
                        "COMMUNITY AWARENESS, TRAINING, SENSITIZATION",
                        "ADVOCACY AND LOBBYING ACTIVITIES",
                        "CRISIS AND DISASTER MANAGEMENT",
                        "CONFLICT RESOLUTION AND MANAGEMENT",
                        "HOME BASED CARE AND SUPPORT",
                        "COORDINATION OF REHABILITATION PROGRAMMES",
                        "CASE MANAGEMENT",
                        "MANAGEMENT OF COMMUNITY-BASED GROUPS",
                        ],
                levels: [4, 5, 6],
            },
        ],
    },
   
];

// Guidelines for moderation
const guidelines = [
    "Is the time allocated adequate/appropriate for the tasks given?",
    "Has the course outline been made available to the moderating team?",
    "Are the exam items aligned to the learning outcomes listed in the course outline?",
    "Are the question statements clear? Do they provide adequate guidance to the examinee?",
    "Is the examination comprehensive and appropriate, given the course content, learning outcomes, and class schedule?",
    "Is the examination appropriate for the level it is set?",
    "Do the exam items test various levels of knowledge, comprehension, analysis, synthesis, application, and evaluation?",
    "Has a marking scheme covering all the exam items been provided?",
    "Does the marking scheme provide adequate detail and direction for another examiner to assess the responses?",
    "Are the marks allocated commensurate with the expected responses?"
];


const classes = ["JAN 21",
                 "MAY 21", 
                 "SEPT 21",
                 "JAN 22",
                 "MAY 22", 
                 "SEPT 22",
                 "JAN 23",
                 "MAY 23", 
                 "SEPT 23",
                 "JAN 24",
                 "MAY 24", 
                 "SEPT 24",
                 "JAN 25", 
                 "MAY 25", 
                 "SEPT 25",
                 "JAN 26", 
                 "MAY 26", 
                 "SEPT 26",
                 "JAN 27", 
                 "MAY 27", 
                 "SEPT 27",
                 "JAN 28", 
                 "MAY 28", 
                 "SEPT 28",
                 "JAN 29", 
                 "MAY 29", 
                 "SEPT 29",
                 "JAN 30", 
                 "MAY 30", 
                 "SEPT 30"];


// Main Admin Dashboard Component
const AdminDashboard = () => {
    const [selectedDepartment, setSelectedDepartment] = useState('');
    const [selectedTrainer, setSelectedTrainer] = useState('');
    const [selectedCourse, setSelectedCourse] = useState('');
    const [selectedUnit, setSelectedUnit] = useState('');
    const [selectedLevel, setSelectedLevel] = useState('');
    const [moderationResults, setModerationResults] = useState({});
    const [status, setStatus] = useState('');
    const [selectedYear, setSelectedYear] = useState('');

    const handleDepartmentChange = (e) => {
        setSelectedDepartment(e.target.value);
        setSelectedTrainer(''); // Reset trainer when department changes
        resetSelections();
    };

    // Define handleCommentChange to set comments for each guideline
        const handleCommentChange = (index, comment) => {
            setModerationResults(prevResults => ({
                ...prevResults,
                [index]: {
                    ...prevResults[index],
                    comment: comment
                }
            }));
        };

        // Define handleGuidelineChange to set answers for each guideline
        const handleGuidelineChange = (index, answer) => {
            setModerationResults(prevResults => ({
                ...prevResults,
                [index]: {
                    ...prevResults[index],
                    answer: answer
                }
            }));
        };

    const handleTrainerChange = (e) => {
        setSelectedTrainer(e.target.value);
    };

    const handleCourseChange = (e) => {
        setSelectedCourse(e.target.value);
        setSelectedUnit(''); // Clear the selected unit when a new course is selected
        setSelectedLevel(''); // Clear the selected level when a new course is selected
    };

    const handleUnitChange = (e) => {
        setSelectedUnit(e.target.value);
        const courseData = getCourseData(selectedDepartment, selectedCourse);
        if (courseData) {
            setSelectedLevel(courseData.levels[0]); // Default to first level
        }
    };

    const handleLevelChange = (e) => {
        setSelectedLevel(e.target.value);
    };

    const getCourseData = (departmentName, courseName) => {
        const department = departments.find(dep => dep.name === departmentName);
        return department ? department.courses.find(course => course.name === courseName) : null;
    };

    const resetSelections = () => {
        setSelectedUnit(''); // Reset only unit and level
        setSelectedLevel('');
        setModerationResults({});
    };


    const handleSubmitExam = async () => {
        const payload = {
            department: selectedDepartment,
            trainer: selectedTrainer,
            course: selectedCourse,
            unit: selectedUnit,
            level: selectedLevel,
            year: selectedYear,
            answers: guidelines.map((guideline, index) => ({
                guideline,
                answer: moderationResults[index]?.answer || '',
                comment: moderationResults[index]?.comment || ''
            }))
        };
    
        try {
            const response = await fetch('https://moderatorsystembabackend.onrender.com/api/moderation/submit', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload)
            });
    
            if (response.ok) {
                const data = await response.json();
                setStatus(data.message);
                const pdfResponse = await fetch(`https://moderatorsystembabackend.onrender.com/api/moderation/download/${data.id}`);
                const blob = await pdfResponse.blob();
                const url = window.URL.createObjectURL(blob);
                const a = document.createElement('a');
                a.href = url;
                a.download = `Moderation_${selectedUnit}.pdf`;
                document.body.appendChild(a);
                a.click();
                a.remove();
    
                resetSelections();
            } else {
                setStatus('Failed to submit data.');
            }
        } catch (error) {
            console.error('Error submitting exam:', error);
            setStatus('Error submitting data.');
        }
    };
    return (
        <div className="container">
            <h1>Exam Moderation System</h1>
            
            <div className="form-group">
                <label>Department:</label>
                <select className="form-control" value={selectedDepartment} onChange={handleDepartmentChange}>
                    <option value="">Select Department</option>
                    {departments.map(department => (
                        <option key={department.name} value={department.name}>{department.name}</option>
                    ))}
                </select>
            </div>
            {selectedDepartment && (
                <div className="form-group">
                    <label>Trainer:</label>
                    <select className="form-control" value={selectedTrainer} onChange={handleTrainerChange}>
                        <option value="">Select Trainer</option>
                        {departments.find(dep => dep.name === selectedDepartment).trainers.map(trainer => (
                            <option key={trainer} value={trainer}>{trainer}</option>
                        ))}
                    </select>
                </div>
            )}
            <div className="form-group">
                <label>Course:</label>
                <select className="form-control" value={selectedCourse} onChange={handleCourseChange} disabled={!selectedDepartment}>
                    <option value="">Select Course</option>
                    {selectedDepartment && departments.find(dep => dep.name === selectedDepartment).courses.map(course => (
                        <option key={course.name} value={course.name}>{course.name}</option>
                    ))}
                </select>
            </div>

            <div className="form-group">
                <label>Unit:</label>
                <select className="form-control" value={selectedUnit} onChange={handleUnitChange} disabled={!selectedCourse}>
                    <option value="">Select Unit</option>
                    {selectedCourse && getCourseData(selectedDepartment, selectedCourse)?.units.map(unit => (
                        <option key={unit} value={unit}>{unit}</option>
                    ))}
                </select>
            </div>

            <div className="form-group">
            <label>Level / Module:</label>
            <select className="form-control" value={selectedLevel} onChange={handleLevelChange} disabled={!selectedUnit}>
                <option value="">Select Level or Module</option>
                {selectedUnit && getCourseData(selectedDepartment, selectedCourse)?.levels.map((levelOrModule, index) => (
                    <option key={index} value={levelOrModule}>
                        {typeof levelOrModule === "number" ? `Level ${levelOrModule}` : levelOrModule}
                    </option>
                ))}
            </select>
           </div>

           <div className="form-group">
            <label>Class:</label>
            <select
                className="form-control"
                value={selectedYear}
                onChange={(e) => setSelectedYear(e.target.value)}
                disabled={!selectedLevel} // Enable only if a level is selected
            >
                <option value="">Select Class</option>
                {classes.map((classOption, index) => (
                    <option key={index} value={classOption}>{classOption}</option>
                ))}
            </select>
           </div>


            {/* Guidelines Evaluation */}
            <h3>Guidelines Evaluation</h3>
            {guidelines.map((guideline, index) => (
                <div key={index} className="mb-3">
                    <p>{guideline}</p>
                    <div className="form-group">
                        <label>Answer:</label>
                        <select 
                            className="form-control" 
                            onChange={(e) => handleGuidelineChange(index, e.target.value)}
                        >
                            <option value="">Select...</option>
                            <option value="yes">Yes</option>
                            <option value="no">No</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label>Moderation Comments:</label>
                        <textarea 
                            className="form-control" 
                            rows="2" 
                            onChange={(e) => handleCommentChange(index, e.target.value)}
                        ></textarea>
                    </div>
                </div>
            ))}

            <button className="btn btn-primary" onClick={handleSubmitExam} disabled={!selectedLevel || !selectedUnit}>Submit Form</button>

            {status && <div className="alert alert-info mt-3">{status}</div>}
            
            {/* Exam List and Moderation Form could be added here */}
            
        </div>
    );
};

// Export the main component
export default AdminDashboard;
