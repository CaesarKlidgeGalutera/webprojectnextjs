"use client";
import { useSession } from "next-auth/react";
import React from "react";
import useSWR from 'swr'

const Dashboard = () => {

  const session = useSession()
const fetcher = (...args) => fetch(...args).then((res) => res.json())

 const { data, error, isLoading } = useSWR('https://jsonplaceholder.typicode.com/posts', fetcher)


  return <div>Dashboard</div>;
};

export default Dashboard;
