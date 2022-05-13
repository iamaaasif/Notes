import axios from "axios";
import { toast } from "react-toastify";
import { setHeaders, url } from "../../api";

export const getNotes = () => {
  return (dispatch) => {
    axios
      .get(`${url}/notes`, setHeaders())
      .then((notes) => {
        dispatch({
          type: "GET_NOTES",
          notes,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };
};

export const addNote = (newNote) => {
  return (dispatch, getState) => {
    const author = getState().auth.name;
    const uid = getState().auth._id;
    axios
      .post(`${url}/notes`, { ...newNote, author, uid }, setHeaders())
      .then((note) => {
        dispatch({
          type: "ADD_NOTE",
          note,
        });
      })
      .catch((error) => {
        console.log(error.response);

        toast.error(error.response?.data, {
          position: toast.POSITION.BOTTOM_RIGHT,
        });
      });
  };
};

export const updateNote = (updatedNote, id) => {
  return (dispatch) => {
    axios
      .put(`${url}/notes/${id}`, updatedNote, setHeaders())
      .then((note) => {
        dispatch({
          type: "UPDATE_NOTE",
          note,
        });
      })
      .catch((error) => {
        console.log(error);
        toast.error(error.response?.data, {
          position: toast.POSITION.BOTTOM_RIGHT,
        });
      });
  };
};

export const deleteNote = (id) => {
  return (dispatch) => {
    axios
      .delete(`${url}/notes/${id}`, setHeaders())
      .then(() => {
        dispatch({
          type: "DELETE_NOTE",
          id,
        });
      })
      .catch((error) => {
        console.log(error);
        toast.error(error.response?.data, {
          position: toast.POSITION.BOTTOM_RIGHT,
        });
      });
  };
};

export const checkNote = (id) => {
  return (dispatch) => {
    axios
      .patch(`${url}/notes/${id}`, {}, setHeaders())
      .then((note) => {
        dispatch({
          type: "CHECK_NOTE",
          note,
        });
      })
      .catch((error) => {
        console.log(error);
        toast.error(error.response?.data, {
          position: toast.POSITION.BOTTOM_RIGHT,
        });
      });
  };
};
