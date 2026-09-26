import { mockCourses, mockSemesters, mockSubjects, mockMaterials } from './mockData.js'

const API_BASE = 'http://localhost:5000/api'

// Every function tries the real backend first. If the request fails
// (backend not running yet, or the route doesn't exist yet), it falls
// back to mock data so the UI stays demoable. Once the real routes are
// filled in on the backend, delete the catch-block fallbacks.

export async function getCourses() {
  try {
    const res = await fetch(`${API_BASE}/courses`)
    if (!res.ok) throw new Error('bad response')
    return await res.json()
  } catch (err) {
    console.warn('[api] /courses not available yet, using mock data')
    return mockCourses
  }
}

export async function getSemesters(courseId) {
  try {
    const res = await fetch(`${API_BASE}/courses/${courseId}/semesters`)
    if (!res.ok) throw new Error('bad response')
    return await res.json()
  } catch (err) {
    console.warn('[api] semesters route not available yet, using mock data')
    return mockSemesters.filter((s) => s.course_id === courseId)
  }
}

export async function getSubjects(semesterId) {
  try {
    const res = await fetch(`${API_BASE}/semesters/${semesterId}/subjects`)
    if (!res.ok) throw new Error('bad response')
    return await res.json()
  } catch (err) {
    console.warn('[api] subjects route not available yet, using mock data')
    return mockSubjects.filter((s) => s.semester_id === semesterId)
  }
}

export async function getMaterials(subjectId) {
  try {
    const res = await fetch(`${API_BASE}/subjects/${subjectId}/materials`)
    if (!res.ok) throw new Error('bad response')
    return await res.json()
  } catch (err) {
    console.warn('[api] materials route not available yet, using mock data')
    return mockMaterials.filter((m) => m.subject_id === subjectId)
  }
}
