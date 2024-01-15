export default function Person({ name, photo, age, job }) {
  return (
    <div>
      <img src={photo} alt={name} />
      <h2>Nome: {name}</h2>
      <p>Idade: {age}</p>
      <p>Profissão: {job}</p>
    </div>
  );
}
