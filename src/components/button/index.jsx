import styles from './button.module.css'

function Button (props) {

    return (
        <button data-variant={props.variant} className={styles.btn} onClick={props.btnFunction}>
            {props.text}            
        </button>
    )
}

export default Button;