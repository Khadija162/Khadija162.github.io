export function SystemDiagram() {
  const nodes = ["Sensor Data", "Processing", "AI / ML", "Services", "Decision Support"];
  return (
    <div className="systemDiagram" role="img" aria-label="Example engineering workflow from sensor data through processing and AI to decision support">
      {nodes.map((node, index) => (
        <div className="diagramStep" key={node}>
          <span className="diagramIndex">0{index + 1}</span>
          <strong>{node}</strong>
          {index < nodes.length - 1 ? <span className="diagramArrow" aria-hidden="true">→</span> : null}
        </div>
      ))}
    </div>
  );
}
