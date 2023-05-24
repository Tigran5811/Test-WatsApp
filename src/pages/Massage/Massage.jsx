import styles from './Massage.module.css'
import { ConversationHeader } from "../../components/ConversationHeader/ConversationHeader";
import { MassageContainer } from "../../components/MassageContainer/MassageContainer";
import { SendMassage } from "../../components/SendMassage/SendMassage";
import { ChatListHeader } from '../../components/ChatListHeader/ChatListHeader';
import { Contact } from '../../components/Contact/Contact';
import { getMassageSelector } from '../../redux/selectors/massage';
import { useSelector } from 'react-redux';
import { NotFound } from '../../components/NotFound/NotFound';

export const Massage = () => {
    const allMassage = useSelector(getMassageSelector)
    return (
        <div className={styles.container}>
            <div className={styles.box}>
                <div className={styles.box1} >
                    <div className={styles.friends} >
                        <ChatListHeader />
                        <Contact />
                    </div>
                    <div className={styles.chat}>
                        <ConversationHeader />
                        {!allMassage ? <NotFound /> : <>
                            <MassageContainer />
                            <SendMassage />
                        </>
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

