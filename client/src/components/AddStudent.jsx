import React, { useEffect, useState } from "react";
import axios from "axios";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
const AddStudent = () => {
  //   //*States for Personal Information
  //   const [firstName, setFirstName] = useState("");
  //   const [middleName, setMiddleName] = useState("");
  //   const [lastName, setLastName] = useState("");

  //   //*States for Scholastic Information
  //   const [section, setSection] = useState("");
  //   const [yearLevel, setYearLevel] = useState("");
  //   const [birthdate, setBirthdate] = useState("");
  //   const [address, setAddress] = useState("");
  //   const [contact, setContact] = useState("");

  //   //*States for Guardian Information
  //   const [guardianName, setGuardianName] = useState("");
  //   const [guardianContact, setGuardianContact] = useState("");

  const [successMessage, setSuccessMesage] = useState("");

  const onSubmit = (data) => {
    axios.post("http://localhost:3001/student", data).then((response) => {
      console.log("this is the data", data);
      setSuccessMesage("Student enrolled.");
    });
  };
  const initialValue = {
    firstName: "",
    middleName: "",
    lastName: "",
    section: "",
    yearLevel: "",
    birthdate: "",
    address: "",
    contact: "",
    guardianName: "",
    guardianContact: "",
  };
  const validationSchema = Yup.object().shape({
    firstName: Yup.string().required("Input value here"),
    middleName: Yup.string().required("Input value here"),
    lastName: Yup.string().required("Input value here"),
    section: Yup.number().required("Input value here"),
    yearLevel: Yup.number().required("Input value here"),
    birthdate: Yup.date().required("Input value here"),
    address: Yup.string().required("Input value here"),
    contact: Yup.string().required("Input value here"),
    guardianName: Yup.string().required("Input value here"),
    guardianContact: Yup.string().required("Input value here"),
  });
  return (
    <>
      <div className="min-h-screen w-screen font-roboto">
        <div className="max-w-[1500px] mx-auto px-4">
          <div className="flex gap-x-4">
            <h1 className="text-2xl font-semibold underline">
              Enrollment System
            </h1>
            <div className="flex">
              <h2 className="text-xl">Members: </h2>
              <div className="pl-2 text-lg">
                <p>Bautista, Anthony</p>
                <p>Consuelo, Mark Vhengie</p>
                <p>Pineda, John Paul</p>
              </div>
            </div>
          </div>

          <Formik
            onSubmit={onSubmit}
            initialValues={initialValue}
            validationSchema={validationSchema}
          >
            <Form>
              <h1 className="text-2xl py-4 text-gray-700">
                Personal Information
              </h1>
              <Link
                to="/viewStudents"
                className="text-blue-400 hover:text-blue-500 underline"
              >
                View Students
              </Link>
              {/* UPPER PART */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-x-5 mb-4 pb-10 border-b-2 border-gray-200">
                <div className="grid  gap-y-1">
                  <label htmlFor="fname">
                    <div className="asterisk">*</div>First Name:
                  </label>
                  <ErrorMessage name="firstName" component="span" />
                  <Field
                    autoComplete="off"
                    id="fname"
                    name="firstName"
                    placeholder="(Ex. John...)"
                  />{" "}
                </div>

                <div className="grid  gap-y-1">
                  <label htmlFor="mname">
                    <div className="asterisk">*</div>Middle Name:
                  </label>
                  <ErrorMessage name="middleName" component="span" />
                  <Field
                    autoComplete="off"
                    id="mname"
                    name="middleName"
                    placeholder="(Ex. John...)"
                  />{" "}
                </div>
                <div className="grid  gap-y-1">
                  <label htmlFor="lname">
                    <div className="asterisk">*</div>Last Name:
                  </label>
                  <ErrorMessage name="lastName" component="span" />
                  <Field
                    autoComplete="off"
                    id="lname"
                    name="lastName"
                    placeholder="(Ex. John...)"
                  />{" "}
                </div>
              </div>
              {/* MIDDLE PART */}
              <h1 className="text-2xl py-4 text-gray-700">
                Scholastic Information
              </h1>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-4 pb-10 border-b-2 border-gray-200">
                <div className="grid  gap-y-1">
                  <label htmlFor="section">
                    <div className="asterisk">*</div>Section:
                  </label>{" "}
                  <ErrorMessage name="section" component="span" />
                  <Field name="section" id="section" placeholder="Section" />
                </div>
                <div className="grid  gap-y-1">
                  <label htmlFor="yearLevel">
                    <div className="asterisk">*</div>Year Level:
                  </label>{" "}
                  <ErrorMessage name="yearLevel" component="span" />
                  <Field name="yearLevel" id="yrLvl" placeholder="Year Level" />
                </div>
                <div className="grid  gap-y-1">
                  <label htmlFor="bday">
                    <div className="asterisk">*</div>Birthday:
                  </label>
                  <ErrorMessage name="birthdate" component="span" />
                  <Field id="bday" name="birthdate" type="date" />
                </div>{" "}
                <div className="grid  gap-y-1">
                  <label htmlFor="address">
                    <div className="asterisk">*</div>Address:
                  </label>
                  <ErrorMessage name="address" component="span" />
                  <Field
                    autoComplete="off"
                    id="address"
                    name="address"
                    placeholder="(Ex. John...)"
                  />{" "}
                </div>{" "}
                <div className="grid  gap-y-1">
                  <label htmlFor="contact">
                    <div className="asterisk">*</div>Contact:
                  </label>
                  <ErrorMessage name="contact" component="span" />
                  <Field
                    autoComplete="off"
                    id="contact"
                    name="contact"
                    placeholder="(Ex. John...)"
                  />{" "}
                </div>
              </div>
              {/* BOTTOM PART */}
              <h1 className="text-2xl text-gray-700 py-4">
                Guardian Information
              </h1>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-4 pb-10 border-b-2 border-gray-200">
                <div className="grid  gap-y-1">
                  <label htmlFor="Guardian Name">
                    <div className="asterisk">*</div>Guardian Name:
                  </label>
                  <ErrorMessage name="guardianName" component="span" />
                  <Field
                    autoComplete="off"
                    id="guardianName"
                    name="guardianName"
                    placeholder="(Ex. John...)"
                  />{" "}
                </div>{" "}
                <div className="grid  gap-y-1">
                  <label htmlFor="guardianContact">
                    <div className="asterisk">*</div>Guardian Contact:
                  </label>
                  <ErrorMessage name="guardianContact" component="span" />
                  <Field
                    autoComplete="off"
                    id="Contact"
                    name="guardianContact"
                    placeholder="(Ex. John...)"
                  />{" "}
                </div>
              </div>

              <div className="flex gap-x-10">
                <button
                  type="submit"
                  className="hover:shadow-md px-16 py-2 rounded-md text-white font-medium hover:bg-red-500 bg-red-400 "
                >
                  Submit
                </button>
                {successMessage && (
                  <div className="py-2  text-green-400 font-medium rounded-md">
                    {successMessage}
                  </div>
                )}{" "}
              </div>
            </Form>
          </Formik>
        </div>
      </div>
    </>
  );
};

export default AddStudent;
