import React from 'react';
import { Formik, Form, Field, FieldArray } from 'formik';


  const AddSkill = () => (
  <div>
    <h1>Add Skill</h1>
    <Formik
      initialValues={{ skills: [''] }}
      onSubmit={values =>
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
        }, 500)
      }
      render={({ values }) => (
        <Form>
          <FieldArray
            name="skills"
            render={arrayHelpers => (
              <div>
                {values.skills && values.skills.length > 0 ? (
                  values.skills.map((skills, index) => (
                    <div key={index}>
                      <Field name={`skills.${index}`} />
                      <button
                        type="button"
                        onClick={() => arrayHelpers.remove(index)} 
                      >
                        -
                      </button>
                      <button
                        type="button"
                        onClick={() => arrayHelpers.insert(index, '')} 
                      >
                        +
                      </button>
                    </div>
                  ))
                ) : (
                  <button type="button" onClick={() => arrayHelpers.push('')}>
                 
                   Add Skill
                  </button>
                )}
                <div>
                  <button type="submit">Submit</button>
                </div>
              </div>
            )}
          />
        </Form>
      )}
    />
  </div>
);
 export default AddSkill