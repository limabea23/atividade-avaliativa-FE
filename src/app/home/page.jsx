"use client";

import styles from "./Profile.module.css";
import { Button, Card, Flex, Typography } from "antd";
import Image from "next/image";
import Link from "next/link";

export default function Profile() {
    return (
    <Card hoverable className={styles.card}>
        <Flex>
            <div className={styles.imageContainer}>
            <Image className={styles.image}
                src="/images/profile.jpg" 
                alt="Foto de perfil"
                width={120}
                height={120} 
                />
            </div>

            <Flex vertical align="flex-end" justify="space-around">
                <div>
                    <Typography.Title level={3}>BEATRIZ LIMA</Typography.Title>
                    <Typography.Title level={5}>
                        2TDS1 - Docentes: Marcello Carboni e Thiago Ferreira
                    </Typography.Title>
                    <Typography.Paragraph>
                        Prova Prática - Next.js Front End 1
                    </Typography.Paragraph>
                    <ul className={styles.list}>
                        <h3>Explicação:</h3>
                            <li>Entidades</li>
                            <li>Relação:</li>
                            <li>Propósito:</li>
                    </ul>            
                </div>

                <Link href="/contas" prefetch>
                <Button type="primary">Acessar minha API GET via Axios</Button>
                </Link>
            </Flex>
        </Flex>
    </Card>
);
}