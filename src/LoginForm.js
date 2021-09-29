import styles from "./components/LoginForm.module.css"

function LoginForm() {
    return (
        
        <form className={styles.form} onSubmit={() => {console.log(styles, "dsdsds")}}>
            <label className={styles.label} for="name">Name</label>
            <input className={styles.input} type="text" name="name"></input>
            <label className={styles.label} for="password">Password</label>
            <input className={styles.input} type="text" name="password"></input>
            <button className={styles.submit} type="submit">Submit</button>
        </form>
    );
}

export default LoginForm;