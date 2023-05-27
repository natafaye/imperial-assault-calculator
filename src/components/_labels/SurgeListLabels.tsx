import SurgeLabel from './SurgeLabel';

type SurgeListLabelsProps = {
  abilities: SurgeAbility[],
  className?: string,
  showHRBelow?: boolean
}

export default function SurgeListLabels({ abilities, className = "", showHRBelow = true }: SurgeListLabelsProps) {
  return (
    <>
      {abilities.map((ability, index) => (
        <span className={className} key={index}>
          <SurgeLabel ability={ability}/>
          {showHRBelow && <hr />}
        </span>
      ))}
    </>
  )
}
