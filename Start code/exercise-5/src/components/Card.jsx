export default function Card({ cardData }) {
  return (
    <div className="card" key={cardData.id}>
      <h4>{cardData.title}</h4>
      <p> Gender: {cardData.gender}</p>
      <img src={cardData.image} alt={cardData.alt} />
    </div>
  );
}
