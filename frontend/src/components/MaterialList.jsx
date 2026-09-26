const TAG_CLASS = {
  Textbook: 'textbook',
  Reference: 'reference',
  PYQ: 'pyq',
  Notes: 'notes',
}

export default function MaterialList({ materials }) {
  if (materials.length === 0) {
    return (
      <p className="state-message">
        No materials uploaded for this subject yet. Use "Request Upload" to add one.
      </p>
    )
  }

  return (
    <div className="material-list">
      {materials.map((m) => (
        <div className="material-row" key={m.material_id}>
          <span className={`tag ${TAG_CLASS[m.material_type] || 'notes'}`}>
            {m.material_type}
          </span>
          <div className="material-info">
            <span className="title">{m.title}</span>
            <span className="author">{m.author}</span>
          </div>
          <a className="btn" href={m.resource_url} target="_blank" rel="noreferrer">
            Open
          </a>
        </div>
      ))}
    </div>
  )
}
