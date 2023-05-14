import ButtonToggle from './ButtonToggle'

export default function ButtonBooleanToggle({ trueLabel, falseLabel, ...props }) {
    return (
        <ButtonToggle options={[true, false]} labels={[trueLabel, falseLabel]} {...props}/>
    )
}
