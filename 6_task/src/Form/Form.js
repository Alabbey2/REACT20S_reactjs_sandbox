import React from "react";
import "./Form.css";

const Form = (props) => {
  return (
    <div className="form">
      <form onSubmit={props.submit}>
        <div>
          <label htmlFor="firstname">First name</label>
          <input
            type="text"
            name="firstname"
            id="firstname"
            onChange={props.onChange}
            required
          />
        </div>
        <div>
          <label htmlFor="lastname">Last name</label>
          <input
            type="text"
            name="lastname"
            id="lastname"
            onChange={props.onChange}
            required
          />
        </div>
        <div>
          <label htmlFor="phonenumber">Phone number</label>
          <input
            type="phone"
            name="phonenumber"
            id="phonenumber"
            onChange={props.onChange}
            required
          />
        </div>
        <div>
          <label htmlFor="message">Message</label>
          <textarea
            name="message"
            id="message"
            onChange={props.onChange}
            required
          ></textarea>
        </div>
        <div>
          <label htmlFor="role">Role</label>
          <select name="role" value={props.role} onChange={props.onChange}>
            <option value="student">Student</option>
            <option value="teacher">Teacher</option>
            <option value="other">Other</option>
          </select>
        </div>
        <input type="submit" value="Send" />
      </form>
    </div>
  );
};

export default Form;
