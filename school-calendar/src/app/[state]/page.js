// src/app/[state]/page.js

import { fetchCalendarData } from '@/app/utils/fetchCalendarData';
import Calendar from '@/components/Calendar';
import StateCalendarPage from '@/components/StateCalenderPage';

export async function generateStaticParams() {
   const states = ['alabama', 'alaska', 'arizona', 'mississippi'];
  return states.map((state) => ({ state }));
}

export async function generateMetadata(props) {
  const { params } = await props;
  const { state } =await params;
  return {
    title: `${state.toUpperCase()} School Calendar 2025-2026`,
    description: `Official calendar and holidays for ${state}`,
  };
}

export default async function StatePage({ params }) {
  
  const { state } =await params;
  const data = await fetchCalendarData(state);
  return (
    // <div>
    //   <h1>{state.toUpperCase()} School Calendar 2025-2026</h1>
    //   <Calendar data={data} />
    // </div>
    <StateCalendarPage state={state} data={data} />
  );
}
