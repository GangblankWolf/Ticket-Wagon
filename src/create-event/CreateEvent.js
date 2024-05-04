import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { object, string, number, date } from "yup";
import "./CreateEvent.css";

function CreateEvent() {
   const eventValues = {
      title: "",
      description: "",
      date: "",
      startTime: "",
      endTime: "",
      price: "",
      location: "",
      ticketLink: "",
      venueInfo: "",
      ageLimit: "",
   };

   const eventSchema = object({
      title: string()
         .required("This field is required")
         .max(150, "Please choose a shorter title."),
      description: string().max(1000, "Description is too long"),
      date: date().required("This field is required"),
      startTime: string()
         .required("This field is required")
         .max(5, "Time needs to be in 'HH:mm' format "),
      endTime: string().max(5, "Time needs to be in 'HH:mm' format "),
      price: number(),
      location: string()
         .required("This field is required")
         .max(256, "Please the address"),
      ticketLink: string(),
      venueInfo: string().max(1000, "Info is too long"),
   });

   return (
      <div>
         <Formik
            initialValues={eventValues}
            validationSchema={eventSchema}
            onSubmit={(values, { setSubmitting }) => {
               setTimeout(() => {
                  alert(JSON.stringify(values, null, 2));
                  setSubmitting(false);
               }, 400);
            }}
         >
            {({ isSubmitting }) => (
               <Form>
                  <div>
                     <div className="row mb-3">
                        <label className="col-3 col-form-label-sm">
                           Event Title:{" "}
                        </label>
                        <div className="col-9">
                           <Field type="text" name="title" />
                           <ErrorMessage name="title" component="div" />
                        </div>
                     </div>
                     <div className="row mb-3">
                        <label className="col-3 col-form-label-sm">
                           Date:{" "}
                        </label>
                        <div className="col-9">
                           <Field type="date" name="date" />
                           <ErrorMessage name="date" component="div" />
                        </div>
                     </div>
                     <div className="row mb-3">
                        <label className="col-3 col-form-label-sm">
                           Start Time:{" "}
                        </label>
                        <div className="col-9">
                           <Field type="time" name="startTime" />
                           <ErrorMessage name="startTime" component="div" />
                        </div>
                     </div>
                     <div className="row mb-3">
                        <label className="col-3 col-form-label-sm">
                           End Time:{" "}
                        </label>
                        <div className="col-9">
                           <Field type="time" name="endTime" />
                        </div>
                     </div>
                     <div className="row mb-3">
                        <label className="col-3 col-form-label-sm">
                           Price:{" "}
                        </label>
                        <div className="col-9">
                           <Field type="number" name="price" />
                        </div>
                     </div>
                     <div className="row mb-3">
                        <label className="col-3 col-form-label-sm">
                           Location:{" "}
                        </label>
                        <div className="col-9">
                           <Field type="text" name="location" />
                           <ErrorMessage name="location" component="div" />
                        </div>
                     </div>
                     <div className="row mb-3">
                        <label className="col-3 col-form-label-sm">
                           Event Description:{" "}
                        </label>
                        <div className="col-9">
                           <Field type="text" name="description" />
                        </div>
                     </div>
                     <div className="row mb-3">
                        <label className="col-3 col-form-label-sm">
                           Ticket Purchasing Link:{" "}
                        </label>
                        <div className="col-9">
                           <Field type="url" name="ticketLink" />
                        </div>
                     </div>
                     <div className="row mb-3">
                        <label className="col-3 col-form-label-sm">
                           Addition Venue Information:{" "}
                        </label>
                        <div className="col-9">
                           <Field type="text" name="venueInfo" />
                        </div>
                     </div>
                     <div className="row mb-3">
                        <label className="col-3 col-form-label-sm">
                           Does the event/venue have a 21+ age limit?
                        </label>
                        <div className="col-9">
                           <Field type="checkbox" name="ageLimit" />
                           <label className="col-3 col-form-label-sm">
                              Yes
                           </label>
                        </div>
                     </div>
                     <div className="row mb-3">
                        <div className="col-9">
                           <input
                              className="btn btn-secondary"
                              name="submit"
                              type="submit"
                              id="submit-button"
                              value="Submit"
                              disabled={isSubmitting}
                           />
                        </div>
                     </div>
                  </div>
               </Form>
            )}
         </Formik>
      </div>
   );
}

export default CreateEvent;
