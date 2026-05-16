import { timeline } from "@/lib/portfolio-data";

export function Timeline() {
  return (
    <ol className="timeline">
      {timeline.map((item) => (
        <li key={`${item.period}-${item.title}`}>
          <time>{item.period}</time>
          <div>
            <h3>{item.title}</h3>
            <p className="timeline-place">{item.place}</p>
            <p>{item.detail}</p>
          </div>
        </li>
      ))}
    </ol>
  );
}
