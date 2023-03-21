import { useState, useEffect } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";
import classes from "./Form.module.css";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import { add } from "../Store/add";

const validationSchema = yup.object().shape({
  todo: yup.string().required("Required").min(3),
});

const TodoForm = () => {
  const defaultValues = { todo: "" };
  const [initialValues, setInitialValues] = useState({});
  const id = useParams().id;

  console.log(typeof id);

  const navigate = useNavigate();
  const addStatus = useSelector((state) => state.add.addStatus);
  const updateStatus = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    if (addStatus == 201) {
    
      navigate("/");
    }
  }, [addStatus]);

  useEffect(() => {
    if (id) {
      fetch(`https://64141ce1ebce1f9d8c5f81ffgfg79.mockapi.io/todos/${id}`)
        .then((res) => res.json())
        .then((data) => setInitialValues(data));
    }
  }, []);

  return (
    <div className={classes.wrapper}>
      <div className={classes.header}>
        <h1 className={classes.heading}>Todo Form</h1>
      </div>

      <Formik
        initialValues={initialValues || defaultValues}
        enableReinitialize
        validationSchema={validationSchema}
        onSubmit={async (values, { isSubmitting }) => {
          if (id === undefined) {
            dispatch(add(values));
          }

          if (typeof id === "string") {
          }
        }}
      >
        <div className={classes.formWrapper}>
          <Form className={classes.form}>
            <Field
              type="text"
              name="todo"
              placeholder="Write Task"
              autoFocus="true"
            />
            <ErrorMessage name="todo" component="div" />

            <div className={classes.actions}>
              <button type="submit">Submit</button>
            </div>
          </Form>
        </div>
      </Formik>
    </div>
  );
};
export default TodoForm;
