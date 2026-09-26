// Temporary placeholder data.
// Delete this file once /api/courses, /api/.../semesters, etc. are live
// and the real syllabus has been loaded into MySQL.

export const mockCourses = [
  { course_id: 1, course_name: 'Computer Science', course_code: 'CS' },
  { course_id: 2, course_name: 'Electrical & Computer Engineering', course_code: 'ECE' },
  { course_id: 3, course_name: 'Mechanical Engineering', course_code: 'ME' },
]

export const mockSemesters = [
  { semester_id: 1, course_id: 1, semester_no: 1 },
  { semester_id: 2, course_id: 1, semester_no: 2 },
  { semester_id: 3, course_id: 2, semester_no: 1 },
  { semester_id: 4, course_id: 2, semester_no: 2 },
  { semester_id: 5, course_id: 3, semester_no: 1 },
  { semester_id: 6, course_id: 3, semester_no: 2 },
]

export const mockSubjects = [
  { subject_id: 1, semester_id: 1, subject_name: 'Engineering Mathematics I', subject_code: 'MA101' },
  { subject_id: 2, semester_id: 1, subject_name: 'Engineering Physics', subject_code: 'PH101' },
  { subject_id: 3, semester_id: 2, subject_name: 'Data Structures', subject_code: 'CS201' },
  { subject_id: 4, semester_id: 2, subject_name: 'Discrete Mathematics', subject_code: 'CS202' },
  { subject_id: 5, semester_id: 3, subject_name: 'Basic Electrical Engineering', subject_code: 'EE101' },
  { subject_id: 6, semester_id: 5, subject_name: 'Engineering Mechanics', subject_code: 'ME101' },
]

export const mockMaterials = [
  {
    material_id: 1,
    subject_id: 1,
    title: 'Higher Engineering Mathematics',
    material_type: 'Textbook',
    author: 'B.S. Grewal',
    resource_url: 'https://example.com/placeholder.pdf',
  },
  {
    material_id: 2,
    subject_id: 1,
    title: 'S3 2023 Previous Year Question Paper',
    material_type: 'PYQ',
    author: 'KTU',
    resource_url: 'https://example.com/placeholder.pdf',
  },
  {
    material_id: 3,
    subject_id: 3,
    title: 'Introduction to Algorithms',
    material_type: 'Reference',
    author: 'Cormen, Leiserson, Rivest, Stein',
    resource_url: 'https://example.com/placeholder.pdf',
  },
  {
    material_id: 4,
    subject_id: 3,
    title: 'Unit 2 Lecture Notes',
    material_type: 'Notes',
    author: 'Dept. of CSE',
    resource_url: 'https://example.com/placeholder.pdf',
  },
]
