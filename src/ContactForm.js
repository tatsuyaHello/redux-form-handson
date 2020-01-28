import React from 'react'
import { Field, reduxForm } from 'redux-form'
import validate from './validate'

const renderField = ({ input, label, type, meta: { touched, error, warning } }) => (
  <div>
    <label className="control-label">{label}</label>
    <div>
      <input {...input} placeholder={label} type={type} className="form-control" />
      {touched && ((error && <span className="text-danger">{error}</span>) || (warning && <span>{warning}</span>))}
    </div>
  </div>
)

let ContactForm = props => {
  const { error, handleSubmit } = props
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="firstName">First Name</label>
        <Field
          name="firstName"
          component="input"
          type="text"
          onChange={(event, field) => {
            props.change('check', false);
          }}
        />
      </div>
      <div>
        <label htmlFor="lastName">Last Name</label>
        <Field
          name="lastName"
          component="input"
          type="text"
          onChange={(event, field) => {
            props.change('check', false);
          }}
        />
      </div>
      <div>
        <label htmlFor="email">Email</label>
        <Field
          name="email"
          component="input"
          type="text"
          onChange={(event, field) => {
            props.change('check', false);
          }}
        />
      </div>
      <div>
        <label htmlFor="check">check box</label>
        <Field name="check" component={renderField} type="checkbox"/>
      </div>
      {error && <strong>{error}</strong>}
      <button type="submit">Submit</button>
    </form>
  )
}

export default reduxForm({
  form: 'contact',
  validate,
})(ContactForm)
