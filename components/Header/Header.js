import { CapsuleLink, CapsuleIcon } from '../Link/CapsuleLink'
import { Logo } from '../Logo/Logo'
import { Navigation } from '../Navigation/Navigation'
import styles from './Header.module.css'
import DiscordIcon from '../../assets/DiscordIcon.svg'
import { useState } from 'react'


export function Header({pages, activePath}) {
    const [open, setOpen] = useState(false)
    return (
        <div className={`${styles.header} ${open ? styles.open : ""}`}>
            <Logo className={styles.logo} showBeta link />
            <Navigation className={styles.navigation} pages={pages} activePath={activePath} open={open} setOpen={setOpen} />
            <CapsuleLink href="https://discord.testausserveri.fi" variant="small">
                <CapsuleIcon src={DiscordIcon} />
                Discord
            </CapsuleLink>
        </div>
    )
}
