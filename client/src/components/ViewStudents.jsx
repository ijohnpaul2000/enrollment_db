import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
const ViewStudents = () => {
  const [studentList, setStudentList] = useState([]);
  useEffect(() => {
    var axios = require("axios").default;

    var options = { method: "GET", url: "http://localhost:3001/student" };

    axios
      .request(options)
      .then(function (response) {
        setStudentList(response.data);
        console.log(response.data);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, []);

  return (
    <div className="h-screen w-screen">
      <div className="max-w-[1400px] mx-auto">
        <Link
          to="/"
          className="text-lg text-blue-400 hover:text-blue-500 underline"
        >
          Home
        </Link>
        <h1 className="text-center text-xl">Currently Enrolled Students</h1>
        <React.Fragment>
          <div className="grid grid-cols-5 border-b-2 border-gray-400">
            <div className="">Student ID</div>
            <div className="col-span-2">Full Name</div>
            <div className="">Section</div>
            <div className="">Year Level</div>
          </div>
        </React.Fragment>
        {studentList.map((student) => {
          return (
            <div
              className="grid grid-cols-5 pb-2 border-b-2 border-gray-300"
              key={student.id}
            >
              <div className="">{student.id}</div>
              <div className="col-span-2">
                {student.firstName} {student.middleName} {student.lastName}
              </div>
              <div className="">{student.section}</div>
              <div className="">{student.yearLevel}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ViewStudents;
