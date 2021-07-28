import axios from "axios";
import { createMessage } from "./messages";

import { GET_LEADS, DELETE_LEAD, ADD_LEAD, GET_ERRORS } from "./types";

// GET leads
export const getLeads = () => (dispatch) => {
  axios
    .get("/api/leads/")
    .then((res) => {
      dispatch({
        type: GET_LEADS,
        payload: res.data,
      });
    })
    .catch((err) => console.log(err));
};

// DELETE Lead
export const deleteLead = (id) => {
  return (dispatch) => {
    axios
      .delete(`/api/leads/${id}/`)
      .then((res) => {
        dispatch(createMessage({ deleteLead: "Lead Deleted" }));
        dispatch({
          type: DELETE_LEAD,
          payload: id,
        });
      })
      .catch((err) => console.log(err));
  };
};

// ADD LEAD
export const addLead = (lead) => (dispatch) => {
  axios
    .post("/api/leads/", lead)
    .then((res) => {
      dispatch(createMessage({ addLead: "Lead Added" }));
      dispatch({
        type: ADD_LEAD,
        payload: res.data,
      });
    })
    .catch((err) => {
      const error = {
        msg: err.response.data,
        status: err.response.status,
      };
      dispatch({
        type: GET_ERRORS,
        payload: error,
      });
    });
};
