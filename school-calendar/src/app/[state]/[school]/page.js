'use client';

import { use } from 'react';
import { useState ,useEffect } from 'react';
import { useRouter } from 'next/navigation';
import ShareButtons from '@/components/ShareButtons';
import Head from 'next/head';


const schoolDataMap = {
  'artesia-public-schools': {
    name: 'Artesia Public Schools',
    state: 'New Mexico',
    holidays: [
      { title: 'First Day of School', start: '13 August 2025', end: '' },
      { title: 'Thanksgiving Break', start: '27 November 2025', end: '29 November 2025' },
      { title: 'Christmas Break', start: '23 December 2025', end: '6 January 2026' },
      { title: 'Spring Break', start: '23 March 2026', end: '27 March 2026' },
      { title: 'Last Day of School', start: '22 May 2026', end: '' },
    ],
  },
  'aberdeen-school-district': {
    name: 'Aberdeen Public Schools',
    state: 'New Mexico',
    holidays: [
      { title: 'First Day of School', start: '13 August 2025', end: '' },
      { title: 'Thanksgiving Break', start: '27 November 2025', end: '29 November 2025' },
      { title: 'Christmas Break', start: '23 December 2025', end: '6 January 2026' },
      { title: 'Spring Break', start: '23 March 2026', end: '27 March 2026' },
      { title: 'Last Day of School', start: '22 May 2026', end: '' },
    ],
  },
};

export default function SchoolPage({ params }) {
  const router = useRouter();
  const { state, school } = use(params);
  const schoolInfo = schoolDataMap[school];
  const [open, setOpen] = useState(true);

  useEffect(() => {
    if (!schoolInfo) {
      router.push('/404');
    }
  }, [school]);

  if (!schoolInfo) return null;

  const readableSchool = school
    .split('-')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');

  return (
    <main className="font-sans bg-gray-50 text-gray-800">
      <Head>
        <title>{readableSchool} School Calendar 2025-2026</title>
        <meta name="description" content={`View ${readableSchool}'s official holiday schedule for 2025-2026.`} />
        <meta name="keywords" content={`school calendar, ${readableSchool}, ${state} schools, holidays`} />
      </Head>

      <section className="relative h-[30vh] flex items-center justify-center overflow-hidden">
        <img
          src="/images/districtSchool.webp"
          alt="School Calendar Background"
          className=" absolute inset-0 w-full h-full lg:h-auto object-cover"
          loading="lazy"
        />
       
        <div className="absolute inset-0 bg-transparent bg-opacity-40 z-10" />
        <div className="relative z-20 text-white px-4 text-center animate-slideIn">
          <h2 className="text-4xl md:text-5xl font-extrabold drop-shadow-lg">
            {readableSchool} Calendar 2025-2026
          </h2>
        </div>
      </section>

      <div className="container mx-auto flex-col gap-8 py-12 px-4">
        {/* Table of Contents */}
        {/* <aside className="hidden md:w-1/4 space-y-4 sticky top-20 self-start animate-fadeIn">
          <h3 className="text-xl font-semibold border-b pb-2">On this page</h3>
          <ul className="space-y-2 list-disc list-inside text-sm">
            <li><a href="#overview" className="text-blue-700 hover:underline">Overview</a></li>
            <li><a href="#calendar-table" className="text-blue-700 hover:underline">Holiday Schedule</a></li>
            <li><a href="#disclaimer" className="text-blue-700 hover:underline">Disclaimer</a></li>
          </ul>
        </aside> */}
        <div className="relative w-full max-w-xs mx-auto lg:mx-0 lg:max-w-full mb-6">
      <div
        className="cursor-pointer bg-blue-100 hover:bg-blue-200 px-4 py-3 rounded-md shadow-md text-blue-800 font-semibold text-center transition duration-200"
        onClick={() => setOpen(!open)}
      >
        {open ? 'Hide Page Contents ▲' : 'Show Page Contents ▼'}
      </div>

      {open && (
        <div className="mt-2 animate-fadeIn bg-white border rounded-md shadow-md p-4 text-sm  lg:text-lg">
          <h3 className="text-base font-semibold border-b pb-2 mb-2">On this page</h3>
          <ul className="space-y-2 list-disc list-inside">
            <li><a href="#overview" className="text-blue-700 hover:underline">Overview</a></li>
            <li><a href="#calendar-table" className="text-blue-700 hover:underline">Holiday Schedule</a></li>
            <li><a href="#disclaimer" className="text-blue-700 hover:underline">Disclaimer</a></li>
          </ul>
        </div>
      )}
    </div>

        {/* Main Content */}
        <article className="w-full space-y-8 animate-fadeIn">
          <section id="overview">
            <h1 className="text-2xl font-bold mb-4">{readableSchool} Calendar 2025 - 2026 [Schedule]</h1>
            <div className="mb-6">
              <ShareButtons />
            </div>
            <p><strong>{readableSchool}</strong>'s official calendar is published below for students and parents to plan ahead for holidays and academic events.</p>
            <p>This calendar includes public holidays, federal events, and cultural breaks officially recognized by the state of {state}.</p>
          </section>

          <section id="calendar-table" className="bg-white p-4 rounded-lg shadow">
            <h2 className="text-xl font-semibold mb-4">Holiday Schedule</h2>
            <table className="w-full border text-center text-sm">
              <thead>
                <tr className="bg-blue-800 text-white">
                  <th className="p-2">Holiday</th>
                  <th className="p-2">Start Date</th>
                  <th className="p-2">End Date</th>
                </tr>
              </thead>
              <tbody>
                {schoolInfo.holidays.map((holiday, i) => (
                  <tr key={i} className="border-t hover:bg-blue-50">
                    <td className="p-2 font-medium">{holiday.title}</td>
                    <td className="p-2">{holiday.start}</td>
                    <td className="p-2">{holiday.end || '-'}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </section>

          <section id="disclaimer" className="text-sm text-gray-600 mt-12">
            <p><strong>Disclaimer:</strong> The holidays listed above for <strong>{readableSchool}</strong> may be updated by the state education board. For the most accurate details, refer to the official {state} government education website.</p>
          </section>
        </article>
      </div>
    </main>
  );
}
