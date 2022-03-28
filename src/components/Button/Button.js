import './Button.styles.scss';

export const Button = ({ id, label, color, onClick }) => {

  const handleClick = () => {
    if (!onClick) {
      return;
    }

    onClick(label);
  }

  return (
    <div
      className='button' 
      role='button' 
      onClick={handleClick}
      style={{
        background: color ? color : 'crimson'
      }}
      data-testid='button'
    >
      <p>{ label }</p>
    </div>
  )
}
