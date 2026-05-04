const stats = [
  { value: "3", label: "Focused diagnostic services" },
  { value: "24h", label: "Reflux monitoring option" },
  { value: "1:1", label: "Patient guidance and preparation" },
  { value: "608", label: "PMC 6th floor suite" }
];

export default function Stats() {
  return (
    <section className="stats-band">
      {stats.map((item) => (
        <div key={item.label}>
          <strong>{item.value}</strong>
          <span>{item.label}</span>
        </div>
      ))}
    </section>
  );
}
