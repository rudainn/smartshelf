const TAB_COLORS = ['#3e5c50', '#93583a', '#b9862f']

export default function CardGrid({ items, onSelect, getLabel, getMeta }) {
  if (items.length === 0) {
    return <p className="state-message">Nothing here yet.</p>
  }

  return (
    <div className="grid">
      {items.map((item, i) => (
        <div
          key={item.id}
          className="card"
          style={{ '--tab-color': TAB_COLORS[i % TAB_COLORS.length] }}
          onClick={() => onSelect(item)}
        >
          <h3>{getLabel(item)}</h3>
          {getMeta && <p className="meta">{getMeta(item)}</p>}
        </div>
      ))}
    </div>
  )
}
