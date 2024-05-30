"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { DataTableDemo } from "@/components/DataTableDemo";

import attendanceData from "@/data/attendance.json";
// Define the type for the data
type AttendanceData = {
  sNo: string;
  divisionSeatNo: string;
  name: string;
  lokSabha: string;
  session: string;
  state: string;
  constituency: string;
  totalSittings: string;
  signedDays: string;
};
export default function Home() {
  const [data, setData] = useState<AttendanceData[]>([]);

  useEffect(() => {
    // Transforming the data into a more suitable format for the table
    const transformedData: AttendanceData[] = attendanceData.data.map(
      (row: any[]) => ({
        sNo: row[0],
        divisionSeatNo: row[1],
        name: row[2].trim(),
        lokSabha: row[3],
        session: row[4],
        state: row[5].trim(),
        constituency: row[6].trim(),
        totalSittings: row[7],
        signedDays: row[8],
      })
    );

    setData(transformedData);
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="App">
        <div>
          <div className="mb-32 grid text-center lg:mb-0 lg:w-full   lg:text-left">
            <h2 className="mb-3 text-2xl font-semibold">
              Attendance of the Members of Lok Sabha 15 for Budget Session 2
            </h2>
            <p className="w-full text-sm opacity-50">
              Find in-depth information about Attendance made using{" "}
              <a
                href="https://ui.shadcn.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="underline"
              >
                ui.shadcn.com
              </a>{" "}
              and{" "}
              <a
                href="https://data.gov.in/"
                target="_blank"
                rel="noopener noreferrer"
                className="underline"
              >
                data.gov.in
              </a>
              .
            </p>
          </div>
          <hr className="mt-4" />
        </div>

        <DataTableDemo data={data} />
      </div>
    </main>
  );
}
