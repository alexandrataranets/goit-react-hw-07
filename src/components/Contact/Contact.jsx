import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsOps";
import css from "./Contact.module.css";
import { IoCall } from "react-icons/io5";
import { IoPerson } from "react-icons/io5";

export default function Contact({ data: { id, name, number } }) {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteContact(id));
  };

  return (
    <div className={css.container}>
      <div className={css.contact}>
        <p className={css.text}>
          <IoPerson />
          {name}
        </p>
        <p className={css.text}>
          <IoCall />
          {number}
        </p>
      </div>
      <button className={css.btn} onClick={handleDelete}>
        Delete
      </button>
    </div>
  );
}