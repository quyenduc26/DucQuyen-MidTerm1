export default function Place({ key, title, image }) {
  return (
    <li key={key} className="place-item">
      <button>
        <img src={image.src} alt={image.alt} />
        <h3>{title}</h3>
      </button>
    </li>
  );
}
