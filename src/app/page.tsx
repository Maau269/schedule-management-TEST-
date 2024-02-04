"use client"

import { useState, useEffect } from "react";
import Image from 'next/image';
import { SampleBarChart, SampleBarChart2, SampleBarChart3, SampleBarChart4, BarChart4Props} from '../components/charts/SampleChart';
import { SampleCalender4 } from '../components/calender/SampleCalender';
import { Header } from '../components/header/header';

export default function Home() {
  const [userName, setUserName] = useState('ゲスト');

  const fetchData = async () => {
    try {
      const response = await fetch('/api/user?firebaseId=abcd1234', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      if (response.ok) {
        const responseData = await response.json();
        const userName = responseData.name; // name要素を取り出す
        setUserName(userName);
        console.log('受け取った値:', responseData);
      } else {
        console.error('送信エラー:', response.statusText);
      }
    } catch (error) {
      console.error('通信エラー:', error);
    }
  };

  useEffect(()=>{
    fetchData();
  },[])

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Header/>
      {`こんにちは ${userName} さん`}
      <SampleBarChart />
      <SampleBarChart2 />
      <SampleBarChart3 />
      <SampleBarChart4 plan={[1,2,3,4,5,6,7]} result={[2,3,4,2,3,4,2]}/>
      <SampleCalender4 />
    </main>
  )
}