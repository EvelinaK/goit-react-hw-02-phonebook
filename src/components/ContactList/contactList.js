import React from "react";
import PropTypes from "prop-types";
import "./contactList.scss";
import "font-awesome/css/font-awesome.min.css";

const ContactList = ({ contacts, onDeleteContact }) => (
  <div className="contacts-info-table">
    <ul className="list">
      {contacts.map(({ id, name, number }) => (
        <li className="actions" key={id}>
          <span className="listItemText">{name}:</span>
          <span className="listItemText">{number}</span>
          <button
            className="button"
            type="button"
            onClick={() => onDeleteContact(id)}
          >
            <i className="fa fa-trash" aria-hidden="true"></i>
          </button>
        </li>
      ))}
    </ul>
  </div>
);

ContactList.propTypes = {
  contacts: PropTypes.array,
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};

export default ContactList;
