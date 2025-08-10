const data = [
  {
    studentId: "S1001",
    name: {
      first: "Alice",
      last: "Johnson",
    },
    age: 20,
    address: {
      street: "123 Maple St",
      city: "Springfield",
      state: "IL",
      postalCode: "62704",
    },
    courses: [
      {
        courseId: "CIS101",
        title: "Introduction to Computer Science",
        instructor: {
          name: "Dr. Emily Carter",
          email: "ecarter@university.edu",
        },
        grades: [88, 92, 79],
      },
      {
        courseId: "MATH201",
        title: "Calculus II",
        instructor: {
          name: "Prof. Raj Singh",
          email: "rsingh@university.edu",
        },
        grades: [95, 87, 90],
      },
    ],
    extracurricular: [
      {
        activity: "Chess Club",
        role: "Vice President",
        meetings: ["Monday 5pm", "Thursday 5pm"],
      },
      {
        activity: "Volunteer Tutoring",
        subjects: ["Math", "Physics"],
      },
    ],
  },
  {
    studentId: "S1002",
    name: {
      first: "Brian",
      last: "Lee",
    },
    age: 22,
    address: {
      street: "456 Oak Ave",
      city: "Riverton",
      state: "CA",
      postalCode: "94501",
    },
    courses: [
      {
        courseId: "ENG210",
        title: "Creative Writing",
        instructor: {
          name: "Dr. Sarah Nguyen",
          email: "snguyen@university.edu",
        },
        grades: [82, 78, 88],
      },
      {
        courseId: "HIST330",
        title: "Modern World History",
        instructor: {
          name: "Prof. David Kim",
          email: "dkim@university.edu",
        },
        grades: [91, 94, 89],
      },
      {
        courseId: "CS202",
        title: "Data Structures",
        instructor: {
          name: "Dr. Laura Martinez",
          email: "lmartinez@university.edu",
        },
        grades: [85, 88, 92],
      },
    ],
    extracurricular: [],
  },
  {
    studentId: "S1003",
    name: {
      first: "Carla",
      last: "Garcia",
    },
    age: 19,
    address: {
      street: "789 Pine Rd",
      city: "Lakeside",
      state: "TX",
      postalCode: "75001",
    },
    courses: [
      {
        courseId: "BIO150",
        title: "General Biology",
        instructor: {
          name: "Dr. Michael Thompson",
          email: "mthompson@university.edu",
        },
        grades: [93, 97, 91],
      },
      {
        courseId: "CHEM110",
        title: "Chemistry Fundamentals",
        instructor: {
          name: "Prof. Angela Perez",
          email: "aperez@university.edu",
        },
        grades: [89, 90, 86],
      },
    ],
    extracurricular: [
      {
        activity: "Soccer Team",
        position: "Midfielder",
        seasons: [
          {
            year: 2023,
            record: "10-2-1",
          },
          {
            year: 2024,
            record: "12-1-0",
          },
        ],
      },
    ],
  },
];

export default data;
