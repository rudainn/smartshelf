import { useEffect, useState } from 'react'
import Breadcrumb from './components/Breadcrumb.jsx'
import CardGrid from './components/CardGrid.jsx'
import MaterialList from './components/MaterialList.jsx'
import { getCourses, getSemesters, getSubjects, getMaterials } from './api.js'

export default function App() {
  const [step, setStep] = useState('courses') // courses | semesters | subjects | materials
  const [courses, setCourses] = useState([])
  const [semesters, setSemesters] = useState([])
  const [subjects, setSubjects] = useState([])
  const [materials, setMaterials] = useState([])

  const [selectedCourse, setSelectedCourse] = useState(null)
  const [selectedSemester, setSelectedSemester] = useState(null)
  const [selectedSubject, setSelectedSubject] = useState(null)

  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    setLoading(true)
    getCourses()
      .then(setCourses)
      .catch(() => setError('Could not load courses.'))
      .finally(() => setLoading(false))
  }, [])

  const pickCourse = (course) => {
    setSelectedCourse(course)
    setLoading(true)
    getSemesters(course.course_id)
      .then((data) => {
        setSemesters(data)
        setStep('semesters')
      })
      .catch(() => setError('Could not load semesters.'))
      .finally(() => setLoading(false))
  }

  const pickSemester = (semester) => {
    setSelectedSemester(semester)
    setLoading(true)
    getSubjects(semester.semester_id)
      .then((data) => {
        setSubjects(data)
        setStep('subjects')
      })
      .catch(() => setError('Could not load subjects.'))
      .finally(() => setLoading(false))
  }

  const pickSubject = (subject) => {
    setSelectedSubject(subject)
    setLoading(true)
    getMaterials(subject.subject_id)
      .then((data) => {
        setMaterials(data)
        setStep('materials')
      })
      .catch(() => setError('Could not load materials.'))
      .finally(() => setLoading(false))
  }

  const goTo = (target) => {
    setError(null)
    if (target === 'courses') {
      setStep('courses')
      setSelectedCourse(null)
      setSelectedSemester(null)
      setSelectedSubject(null)
    } else if (target === 'semesters') {
      setStep('semesters')
      setSelectedSemester(null)
      setSelectedSubject(null)
    } else if (target === 'subjects') {
      setStep('subjects')
      setSelectedSubject(null)
    }
  }

  const trail = [{ label: 'Branches', onClick: step !== 'courses' ? () => goTo('courses') : null }]
  if (selectedCourse) {
    trail.push({
      label: selectedCourse.course_name,
      onClick: step !== 'semesters' ? () => goTo('semesters') : null,
    })
  }
  if (selectedSemester) {
    trail.push({
      label: `Semester ${selectedSemester.semester_no}`,
      onClick: step !== 'subjects' ? () => goTo('subjects') : null,
    })
  }
  if (selectedSubject) {
    trail.push({ label: selectedSubject.subject_name })
  }

  return (
    <div>
      <div className="masthead">
        <h1>Smart Shelf</h1>
        <p>A reference shelf for exam preparation, organised by branch, semester and subject.</p>
      </div>

      <Breadcrumb trail={trail} />

      {loading && <p className="state-message">Loading…</p>}
      {error && !loading && <p className="state-message error">{error}</p>}

      {!loading && !error && step === 'courses' && (
        <>
          <p className="section-label">Choose your branch</p>
          <CardGrid
            items={courses.map((c) => ({ id: c.course_id, ...c }))}
            onSelect={pickCourse}
            getLabel={(c) => c.course_name}
            getMeta={(c) => c.course_code}
          />
        </>
      )}

      {!loading && !error && step === 'semesters' && (
        <>
          <p className="section-label">Choose your semester</p>
          <CardGrid
            items={semesters.map((s) => ({ id: s.semester_id, ...s }))}
            onSelect={pickSemester}
            getLabel={(s) => `Semester ${s.semester_no}`}
          />
        </>
      )}

      {!loading && !error && step === 'subjects' && (
        <>
          <p className="section-label">Choose your subject</p>
          <CardGrid
            items={subjects.map((s) => ({ id: s.subject_id, ...s }))}
            onSelect={pickSubject}
            getLabel={(s) => s.subject_name}
            getMeta={(s) => s.subject_code}
          />
        </>
      )}

      {!loading && !error && step === 'materials' && (
        <>
          <p className="section-label">Study materials</p>
          <MaterialList materials={materials} />
        </>
      )}
    </div>
  )
}
