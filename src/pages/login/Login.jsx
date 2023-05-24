import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from './Login.module.css'
import { createUrl } from "../../constant";
import { useDispatch } from "react-redux";
import { getSettings } from "../../redux/actions/myAccount";


export const Login = () => {
    const [{ IdInstance, ApiTokenInstance }, setState] = useState({
        IdInstance: '',
        ApiTokenInstance: '',
    });
    const navigate = useNavigate()
    const dispatch = useDispatch()
    useEffect(() => {
        if (ApiTokenInstance) {
            navigate('/');
        }
    }, []);

    const onChange = ({ currentTarget: { value, name } }) => {
        setState((prev) => ({ ...prev, [name]: value }));
    };

    const onSubmit = async (e) => {
        e.preventDefault();
        if (ApiTokenInstance) {
            localStorage.setItem('idInstance', IdInstance)
            localStorage.setItem('apiTokenInstance', ApiTokenInstance)
            createUrl(IdInstance, ApiTokenInstance)
            dispatch(getSettings())

            return navigate('/');
        }
        return navigate('/login');
    };

    return (

        <form className={styles.container} onSubmit={(event) => {
            onSubmit(event);
        }}>
            <input className={styles.login_input} value={IdInstance} onChange={onChange} placeholder="Id Instance" type="text" name="IdInstance" />
            <input className={styles.login_input} value={ApiTokenInstance} onChange={onChange} placeholder="Api Token Instance" type="text" name="ApiTokenInstance" />
            <button disabled={!IdInstance || !ApiTokenInstance} type="submit">Login</button>
        </form>
    )
}