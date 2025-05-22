"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import { Pagination, Modal, Card, Skeleton } from "antd";
import Image from "next/image";
import { ToastContainer, toast } from "react-toastify";

const HEADERS = { "x-api-key": process.env.NEXT_PUBLIC_API_KEY };

export default function Contas() {
    
}