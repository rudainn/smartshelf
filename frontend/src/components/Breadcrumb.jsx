export default function Breadcrumb({ trail }) {
  return (
    <div className="breadcrumb">
      {trail.map((item, i) => (
        <span key={i} style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
          {i > 0 && <span className="sep">/</span>}
          {item.onClick ? (
            <button onClick={item.onClick}>{item.label}</button>
          ) : (
            <span className="current">{item.label}</span>
          )}
        </span>
      ))}
    </div>
  )
}
