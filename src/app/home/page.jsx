"use client";

import styles from "./Profile.module.css";
import Image from 'next/image';
import { Button } from "antd";
import Link from "next/link";

export default function Profile() {
    return (
        <div className={styles.container}>
            <div className={styles.card}>
                <Image className={styles.image}
                src="/images/profile.jpg" 
                alt="Foto de perfil"
                width={120}
                height={120} 
                />

                <h1>Beatriz Lima - 2TDS1</h1>
                <p>Marcello Carboni e Thiago Ferreira</p>
                <p>Prova Prática - Next.js Front End 1</p>
                <p>Explicação da API</p>
                
                <Link href="/contas" prefetch>
                        <Button type="primary">Acessar minha API GET via Axios</Button>
                </Link>
            </div>
        </div>
    );
}