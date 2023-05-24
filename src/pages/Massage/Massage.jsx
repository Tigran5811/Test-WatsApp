import styles from './Massage.module.css'
import { ConversationHeader } from "../../components/ConversationHeader/ConversationHeader";
import { MassageContainer } from "../../components/MassageContainer/MassageContainer";
import { SendMassage } from "../../components/SendMassage/SendMassage";
import { ChatListHeader } from '../../components/ChatListHeader/ChatListHeader';
import { Contact } from '../../components/Contact/Contact';




export const Massage = () => {
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
                        <MassageContainer />
                        <SendMassage />
                    </div>
                </div>
            </div>
        </div>
    )
}

