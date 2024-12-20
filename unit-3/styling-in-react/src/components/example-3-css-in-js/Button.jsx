import { createUseStyles } from "react-jss";

const Button = ({ buttonText }) => {
  const styles = createUseStyles({
    btn: {
      backgroundColor: '#24292e',
      borderRadius: '8px',
      color: '#f7df1c',
      fontSize: '24pt',
      padding: '15px 50px',
      width: '300px',
    }
  })

  const classes = styles()

  return <button className={classes.btn}>{buttonText}</button>
}
  
  export default Button;
  