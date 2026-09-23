type Props = {
  eyebrow: string;
  title: string;
  copy?: string;
};

export function SectionHeading({ eyebrow, title, copy }: Props) {
  return (
    <div className="sectionHeading">
      <p className="eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      {copy ? <p className="sectionCopy">{copy}</p> : null}
    </div>
  );
}
