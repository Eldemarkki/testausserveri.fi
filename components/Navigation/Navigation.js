import styles from './Navigation.module.css'

const pages = [
    { label: "Etusivu", path: "/" },
    { label: "Jäsenet", path: "/members" },
    { label: "Projektit", path: "/projects" },
    { label: "Mediassa", path: "/in-media" }
]
export function Navigation({className}) {
    const activePath = "/"

    return (
        <div className={className}>
            <ul>
                {pages.map(page => (
                    <li key={page.label} className={activePath == page.path ? styles.active : null}>{page.label}</li>
                ))}  
            </ul>
        </div>
    )
}
