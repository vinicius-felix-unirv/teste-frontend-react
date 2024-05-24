import Image from "next/image";
import styles from "@/components/logo/logo.module.css";
export default function Logo() {


    return (
        <div className = {styles.logoContainer}>
            <Image
                src="/logo.jpeg"
                width={400}
                height={400}
                alt="logo UniRV"
                className="logoFormat"
            />
            
           
        </div>

    )
}