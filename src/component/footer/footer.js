import "assets/css/layout.scss"
import "assets/css/footer.scss"

const Footer = () => { 
    const currentYear = () => {
        return new Date().getFullYear()
    }
    return (
        <div className="footer-layout">
            <footer className="footer-char">
                Copyright {currentYear()}. Created by tykim
            </footer>
        </div>
    )
}

export default Footer